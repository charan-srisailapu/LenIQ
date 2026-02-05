import { generateText, Output } from "ai"
import { z } from "zod"

const analysisSchema = z.object({
  score: z.number().min(0).max(100).describe("Overall credibility score from 0-100"),
  confidence: z.number().min(0).max(100).describe("AI confidence in the analysis from 0-100"),
  breakdown: z.object({
    mlScore: z.number().min(0).max(100).describe("Linguistic pattern analysis score"),
    factCheckScore: z.number().min(0).max(100).describe("Fact-check alignment score"),
    sourceScore: z.number().min(0).max(100).describe("Source reputation score"),
    freshnessScore: z.number().min(0).max(100).describe("Temporal freshness score"),
  }),
  redFlags: z.array(z.string()).describe("List of concerning patterns or issues detected"),
  positiveSignals: z.array(z.string()).describe("List of positive credibility indicators"),
  literacyTips: z.array(z.string()).describe("Educational media literacy tips relevant to this content"),
  explanation: z.string().describe("A clear, 2-3 sentence explanation of the overall assessment"),
})

export async function POST(req: Request) {
  try {
    const { content, type } = await req.json()

    if (!content || typeof content !== "string") {
      return Response.json({ error: "Content is required" }, { status: 400 })
    }

    const systemPrompt = `You are LenIQ, an expert misinformation detection and media literacy AI. Your task is to analyze content for credibility and provide educational insights.

Scoring Guidelines:
- ML Confidence (40% weight): Analyze linguistic patterns, sensationalism, emotional manipulation, clickbait tactics, logical fallacies, and writing quality.
- Fact-Check Alignment (30% weight): Assess whether claims are verifiable, commonly fact-checked, or contradict known facts.
- Source Reputation (20% weight): Evaluate the apparent source credibility based on writing style, professionalism, and domain indicators.
- Temporal Freshness (10% weight): Consider if the content references current events appropriately and isn't recycled misinformation.

Score Interpretation:
- 80-100: Highly credible, well-sourced content
- 60-79: Mostly credible with minor concerns
- 40-59: Mixed credibility, several issues detected
- 20-39: Low credibility, significant red flags
- 0-19: Very low credibility, likely misinformation

Always provide:
1. Specific red flags with concrete examples from the text
2. Positive signals that support credibility
3. Educational media literacy tips tailored to the issues found
4. A balanced, fair assessment even for low-scoring content`

    const userPrompt = type === "url" 
      ? `Analyze this URL for credibility. Note: You cannot actually fetch the URL, so analyze the URL itself for credibility indicators (domain reputation, URL structure, etc.) and provide general guidance. URL: ${content}`
      : `Analyze this text content for credibility:\n\n${content}`

    const { output } = await generateText({
      model: "openai/gpt-4o-mini",
      output: Output.object({
        schema: analysisSchema,
      }),
      system: systemPrompt,
      messages: [
        {
          role: "user",
          content: userPrompt,
        },
      ],
    })

    return Response.json(output)
  } catch (error) {
    console.error("Analysis error:", error)
    return Response.json(
      { error: "Failed to analyze content. Please try again." },
      { status: 500 }
    )
  }
}
