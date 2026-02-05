import { Brain, Search, BookOpen, Zap, Shield, BarChart3 } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

const features = [
  {
    icon: Brain,
    title: "Explainable AI",
    description: "No black box scores. See exactly why content is flagged with detailed red flags and positive signals.",
  },
  {
    icon: Search,
    title: "Multi-Source Verification",
    description: "Cross-references claims against Google Fact Check, domain reputation databases, and news APIs.",
  },
  {
    icon: BookOpen,
    title: "Media Literacy Tips",
    description: "Educational context based on specific issues detected, helping you become a better content evaluator.",
  },
  {
    icon: Zap,
    title: "Real-Time Analysis",
    description: "Get instant credibility scores with low latency, perfect for fact-checking on the go.",
  },
  {
    icon: Shield,
    title: "Privacy First",
    description: "No permanent storage of submitted content. Your data is analyzed and discarded.",
  },
  {
    icon: BarChart3,
    title: "Confidence Intervals",
    description: "Transparent AI uncertainty metrics so you understand the reliability of each assessment.",
  },
]

export function Features() {
  return (
    <section id="features" className="py-16 sm:py-24 bg-background">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="text-center">
          <h2 className="font-display text-2xl sm:text-3xl md:text-4xl font-bold text-foreground text-balance">
            Powered by Advanced AI
          </h2>
          <p className="mx-auto mt-3 sm:mt-4 max-w-2xl text-sm sm:text-base md:text-lg text-muted-foreground text-pretty">
            Our scoring engine combines machine learning with multiple trusted data sources for comprehensive analysis.
          </p>
        </div>

        <div className="mt-10 sm:mt-16 grid gap-4 sm:gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature) => (
            <Card key={feature.title} className="bg-card border-border transition-colors hover:border-primary/50">
              <CardContent className="p-4 sm:p-6">
                <div className="flex h-10 w-10 sm:h-12 sm:w-12 items-center justify-center rounded-lg bg-primary/10">
                  <feature.icon className="h-5 w-5 sm:h-6 sm:w-6 text-primary" />
                </div>
                <h3 className="mt-3 sm:mt-4 font-display text-base sm:text-lg font-semibold text-foreground">{feature.title}</h3>
                <p className="mt-1.5 sm:mt-2 text-xs sm:text-sm leading-relaxed text-muted-foreground">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
