import Link from "next/link"
import { Shield } from "lucide-react"

export function Footer() {
  return (
    <footer className="border-t border-border bg-background py-12">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          <div className="sm:col-span-2 lg:col-span-1">
            <Link href="/" className="flex items-center gap-2">
              <Shield className="h-6 w-6 text-primary" />
              <span className="font-display text-lg font-bold text-foreground">LenIQ</span>
            </Link>
            <p className="mt-3 text-sm text-muted-foreground max-w-xs">
              AI-powered misinformation detection for the digital age.
            </p>
          </div>
          
          <div>
            <h4 className="font-medium text-foreground mb-3">Product</h4>
            <nav className="flex flex-col gap-2 text-sm text-muted-foreground">
              <Link href="#features" className="transition-colors hover:text-foreground">Features</Link>
              <Link href="#how-it-works" className="transition-colors hover:text-foreground">How It Works</Link>
              <Link href="/analyze" className="transition-colors hover:text-foreground">Analyze Content</Link>
            </nav>
          </div>
          
          <div>
            <h4 className="font-medium text-foreground mb-3">Account</h4>
            <nav className="flex flex-col gap-2 text-sm text-muted-foreground">
              <Link href="/login" className="transition-colors hover:text-foreground">Log In</Link>
              <Link href="/signup" className="transition-colors hover:text-foreground">Sign Up</Link>
            </nav>
          </div>
          
          <div>
            <h4 className="font-medium text-foreground mb-3">Legal</h4>
            <nav className="flex flex-col gap-2 text-sm text-muted-foreground">
              <Link href="#" className="transition-colors hover:text-foreground">Privacy Policy</Link>
              <Link href="#" className="transition-colors hover:text-foreground">Terms of Service</Link>
            </nav>
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t border-border flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-muted-foreground">
            Built for truth in the digital age.
          </p>
          <p className="text-xs text-muted-foreground">
            2026 LenIQ. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
