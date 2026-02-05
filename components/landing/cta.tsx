import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight, Shield } from "lucide-react"

export function CTA() {
  return (
    <section className="py-16 sm:py-24 bg-background">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="relative overflow-hidden rounded-xl sm:rounded-2xl bg-primary/10 border border-primary/20 px-4 py-12 sm:px-8 md:px-12 sm:py-16 md:py-20">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-primary/20 via-transparent to-transparent" />
          
          <div className="relative text-center">
            <div className="mx-auto flex h-12 w-12 sm:h-16 sm:w-16 items-center justify-center rounded-full bg-primary/20">
              <Shield className="h-6 w-6 sm:h-8 sm:w-8 text-primary" />
            </div>
            
            <h2 className="mt-4 sm:mt-6 font-display text-2xl sm:text-3xl md:text-4xl font-bold text-foreground text-balance">
              Ready to Fight Misinformation?
            </h2>
            
            <p className="mx-auto mt-3 sm:mt-4 max-w-xl text-sm sm:text-base md:text-lg text-muted-foreground text-pretty px-2">
              Start analyzing content for free. No signup required for basic analysis. 
              Join thousands of journalists, researchers, and concerned citizens.
            </p>
            
            <div className="mt-6 sm:mt-8 flex flex-col items-center justify-center gap-3 sm:gap-4 sm:flex-row">
              <Link href="/analyze" className="w-full sm:w-auto">
                <Button size="lg" className="gap-2 text-sm sm:text-base w-full sm:w-auto">
                  Start Analyzing
                  <ArrowRight className="h-4 w-4" />
                </Button>
              </Link>
              <Link href="#features" className="w-full sm:w-auto">
                <Button variant="outline" size="lg" className="text-sm sm:text-base bg-transparent w-full sm:w-auto">
                  View Features
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
