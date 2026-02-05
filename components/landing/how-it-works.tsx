import { ArrowRight } from "lucide-react"

const steps = [
  {
    number: "01",
    title: "Submit Content",
    description: "Paste a URL or text block you want to verify. Our system accepts articles, social posts, and news snippets.",
  },
  {
    number: "02", 
    title: "AI Analysis",
    description: "Our NLP engine analyzes linguistic patterns while parallel API calls verify facts and check domain reputation.",
  },
  {
    number: "03",
    title: "Score Aggregation",
    description: "Four weighted factors combine: ML confidence (40%), fact-check alignment (30%), source reputation (20%), and freshness (10%).",
  },
  {
    number: "04",
    title: "Get Results",
    description: "Receive a 0-100 credibility score with detailed explanations, red flags, and relevant media literacy tips.",
  },
]

export function HowItWorks() {
  return (
    <section id="how-it-works" className="py-16 sm:py-24 bg-secondary/30">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="text-center">
          <h2 className="font-display text-2xl sm:text-3xl md:text-4xl font-bold text-foreground text-balance">
            How LenIQ Works
          </h2>
          <p className="mx-auto mt-3 sm:mt-4 max-w-2xl text-sm sm:text-base md:text-lg text-muted-foreground text-pretty">
            A transparent, four-step process that combines AI analysis with verified data sources.
          </p>
        </div>

        <div className="mt-10 sm:mt-16 grid gap-6 sm:gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((step, index) => (
            <div key={step.number} className="relative">
              <div className="flex flex-col">
                <span className="font-display text-4xl sm:text-5xl font-bold text-primary/20">{step.number}</span>
                <h3 className="mt-3 sm:mt-4 font-display text-lg sm:text-xl font-semibold text-foreground">{step.title}</h3>
                <p className="mt-1.5 sm:mt-2 text-xs sm:text-sm leading-relaxed text-muted-foreground">{step.description}</p>
              </div>
              {index < steps.length - 1 && (
                <ArrowRight className="absolute right-0 top-8 hidden h-6 w-6 text-primary/30 lg:block" />
              )}
            </div>
          ))}
        </div>

        <div className="mt-12 sm:mt-16 rounded-xl border border-border bg-card p-4 sm:p-6 md:p-8">
          <h3 className="font-display text-lg sm:text-xl font-semibold text-foreground text-center mb-4 sm:mb-6">
            The Scoring Formula
          </h3>
          <div className="grid gap-3 sm:gap-4 grid-cols-2 lg:grid-cols-4">
            {[
              { weight: "40%", factor: "ML Confidence", desc: "Linguistic pattern analysis" },
              { weight: "30%", factor: "Fact-Check Alignment", desc: "Verified source confirmation" },
              { weight: "20%", factor: "Source Reputation", desc: "Domain history and safety" },
              { weight: "10%", factor: "Temporal Freshness", desc: "Recent coverage prevalence" },
            ].map((item) => (
              <div key={item.factor} className="text-center p-3 sm:p-4 rounded-lg bg-secondary/50">
                <span className="font-display text-xl sm:text-2xl font-bold text-primary">{item.weight}</span>
                <p className="mt-1.5 sm:mt-2 text-xs sm:text-sm font-medium text-foreground">{item.factor}</p>
                <p className="mt-0.5 sm:mt-1 text-[10px] sm:text-xs text-muted-foreground">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
