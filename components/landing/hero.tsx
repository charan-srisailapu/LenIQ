import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight, CheckCircle } from "lucide-react"

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16 sm:pt-20">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary/10 via-background to-background" />
      
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 py-12 sm:py-24 text-center">
        <div className="mb-4 sm:mb-6 inline-flex items-center gap-2 rounded-full border border-border bg-secondary/50 px-3 sm:px-4 py-1.5 sm:py-2 text-xs sm:text-sm text-muted-foreground">
          <CheckCircle className="h-3.5 w-3.5 sm:h-4 sm:w-4 text-primary" />
          <span>Trusted by 10,000+ journalists and researchers</span>
        </div>

        <h1 className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight tracking-tight text-foreground text-balance">
          Detect Misinformation<br />
          <span className="text-primary">Before It Spreads</span>
        </h1>

        <p className="mx-auto mt-4 sm:mt-6 max-w-2xl text-base sm:text-lg md:text-xl leading-relaxed text-muted-foreground text-pretty px-2">
          LenIQ uses advanced AI to provide instant credibility scores, identify red flags, 
          and educate you on media literacy. Restore trust in digital information.
        </p>

        <div className="mt-8 sm:mt-10 flex flex-col items-center justify-center gap-3 sm:gap-4 sm:flex-row">
          <Link href="/analyze" className="w-full sm:w-auto">
            <Button size="lg" className="gap-2 text-sm sm:text-base w-full sm:w-auto">
              Analyze Content
              <ArrowRight className="h-4 w-4" />
            </Button>
          </Link>
          <Link href="#how-it-works" className="w-full sm:w-auto">
            <Button variant="outline" size="lg" className="text-sm sm:text-base bg-transparent w-full sm:w-auto">
              Learn How It Works
            </Button>
          </Link>
        </div>

        <div className="mt-12 sm:mt-16 grid grid-cols-2 gap-4 sm:gap-8 sm:grid-cols-4">
          {[
            { value: "0-100", label: "Credibility Score" },
            { value: "<2s", label: "Analysis Time" },
            { value: "4", label: "Data Sources" },
            { value: "Real-time", label: "Fact Checking" },
          ].map((stat) => (
            <div key={stat.label} className="flex flex-col items-center p-3 sm:p-0">
              <span className="font-display text-xl sm:text-2xl md:text-3xl font-bold text-primary">{stat.value}</span>
              <span className="mt-1 text-xs sm:text-sm text-muted-foreground">{stat.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
