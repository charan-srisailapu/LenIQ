"use client"

import Link from "next/link"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Menu, X, Shield } from "lucide-react"

export function Navigation() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-border bg-background/80 backdrop-blur-md">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <Link href="/" className="flex items-center gap-2">
          <Shield className="h-8 w-8 text-primary" />
          <span className="font-display text-xl font-bold text-foreground">LenIQ</span>
        </Link>

        <div className="hidden items-center gap-6 md:flex">
          <Link href="#features" className="text-sm text-muted-foreground transition-colors hover:text-foreground">
            Features
          </Link>
          <Link href="#how-it-works" className="text-sm text-muted-foreground transition-colors hover:text-foreground">
            How It Works
          </Link>
          <Link href="/login" className="text-sm text-muted-foreground transition-colors hover:text-foreground">
            Log In
          </Link>
          <Link href="/signup">
            <Button variant="outline" size="sm" className="bg-transparent">Sign Up</Button>
          </Link>
          <Link href="/analyze">
            <Button size="sm">Try Now</Button>
          </Link>
        </div>

        <button
          type="button"
          className="md:hidden text-foreground"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
        >
          {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </nav>

      {mobileMenuOpen && (
        <div className="border-t border-border bg-background md:hidden">
          <div className="flex flex-col gap-4 px-6 py-4">
            <Link
              href="#features"
              className="text-sm text-muted-foreground transition-colors hover:text-foreground"
              onClick={() => setMobileMenuOpen(false)}
            >
              Features
            </Link>
            <Link
              href="#how-it-works"
              className="text-sm text-muted-foreground transition-colors hover:text-foreground"
              onClick={() => setMobileMenuOpen(false)}
            >
              How It Works
            </Link>
            <div className="flex gap-3 pt-2">
              <Link href="/login" onClick={() => setMobileMenuOpen(false)} className="flex-1">
                <Button variant="outline" className="w-full bg-transparent">Log In</Button>
              </Link>
              <Link href="/signup" onClick={() => setMobileMenuOpen(false)} className="flex-1">
                <Button className="w-full">Sign Up</Button>
              </Link>
            </div>
            <Link href="/analyze" onClick={() => setMobileMenuOpen(false)}>
              <Button variant="secondary" className="w-full">Try Now</Button>
            </Link>
          </div>
        </div>
      )}
    </header>
  )
}
