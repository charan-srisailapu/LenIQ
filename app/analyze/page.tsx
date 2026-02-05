"use client"

import { useState } from "react"
import Link from "next/link"
import { Shield, ArrowLeft } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { AnalysisForm } from "@/components/analyzer/analysis-form"
import { ScoreDisplay } from "@/components/analyzer/score-display"
import { ScoreBreakdown } from "@/components/analyzer/score-breakdown"
import { RedFlags } from "@/components/analyzer/red-flags"
import { LiteracyTips } from "@/components/analyzer/literacy-tips"

interface AnalysisResult {
  score: number
  confidence: number
  breakdown: {
    mlScore: number
    factCheckScore: number
    sourceScore: number
    freshnessScore: number
  }
  redFlags: string[]
  positiveSignals: string[]
  literacyTips: string[]
  explanation: string
}

export default function AnalyzePage() {
  const [isLoading, setIsLoading] = useState(false)
  const [result, setResult] = useState<AnalysisResult | null>(null)
  const [error, setError] = useState<string | null>(null)

  const handleAnalyze = async (content: string, type: "text" | "url") => {
    setIsLoading(true)
    setError(null)
    setResult(null)

    try {
      const response = await fetch("/api/analyze", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ content, type }),
      })

      if (!response.ok) {
        throw new Error("Analysis failed. Please try again.")
      }

      const data = await response.json()
      setResult(data)
    } catch (err) {
      setError(err instanceof Error ? err.message : "An error occurred")
    } finally {
      setIsLoading(false)
    }
  }

  const handleReset = () => {
    setResult(null)
    setError(null)
  }

  return (
    <div className="min-h-screen bg-background">
      <header className="border-b border-border bg-background/80 backdrop-blur-md">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 sm:px-6 py-4">
          <Link href="/" className="flex items-center gap-2">
            <Shield className="h-7 w-7 sm:h-8 sm:w-8 text-primary" />
            <span className="font-display text-lg sm:text-xl font-bold text-foreground">LenIQ</span>
          </Link>
          <Link href="/">
            <Button variant="ghost" className="gap-2" size="sm">
              <ArrowLeft className="h-4 w-4" />
              <span className="hidden sm:inline">Back to Home</span>
              <span className="sm:hidden">Back</span>
            </Button>
          </Link>
        </div>
      </header>

      <main className="mx-auto max-w-7xl px-4 sm:px-6 py-8 sm:py-12">
        {!result ? (
          <div className="mx-auto max-w-2xl">
            <div className="text-center mb-6 sm:mb-8">
              <h1 className="font-display text-2xl sm:text-3xl md:text-4xl font-bold text-foreground">
                Analyze Content
              </h1>
              <p className="mt-2 text-sm sm:text-base text-muted-foreground">
                Paste text or enter a URL to check its credibility
              </p>
            </div>

            <Card className="bg-card border-border">
              <CardContent className="p-6">
                <AnalysisForm onSubmit={handleAnalyze} isLoading={isLoading} />
                {error && (
                  <p className="mt-4 text-sm text-red-500">{error}</p>
                )}
              </CardContent>
            </Card>
          </div>
        ) : (
          <div className="space-y-6 sm:space-y-8">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <h1 className="font-display text-xl sm:text-2xl md:text-3xl font-bold text-foreground">
                Analysis Results
              </h1>
              <Button variant="outline" onClick={handleReset} size="sm" className="w-fit bg-transparent">
                Analyze Another
              </Button>
            </div>

            <div className="grid gap-6 sm:gap-8 lg:grid-cols-3">
              <div className="lg:col-span-1">
                <Card className="bg-card border-border">
                  <CardHeader className="pb-2 sm:pb-6">
                    <CardTitle className="font-display text-base sm:text-lg">Credibility Score</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ScoreDisplay score={result.score} confidence={result.confidence} />
                  </CardContent>
                </Card>
              </div>

              <div className="lg:col-span-2 space-y-4 sm:space-y-6">
                <Card className="bg-card border-border">
                  <CardHeader className="pb-2 sm:pb-6">
                    <CardTitle className="font-display text-base sm:text-lg">Analysis Summary</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm sm:text-base text-foreground leading-relaxed">{result.explanation}</p>
                  </CardContent>
                </Card>

                <Card className="bg-card border-border">
                  <CardContent className="p-4 sm:p-6">
                    <ScoreBreakdown {...result.breakdown} />
                  </CardContent>
                </Card>
              </div>
            </div>

            <div className="grid gap-6 sm:gap-8 md:grid-cols-2">
              <Card className="bg-card border-border">
                <CardContent className="p-4 sm:p-6">
                  <RedFlags 
                    redFlags={result.redFlags} 
                    positiveSignals={result.positiveSignals} 
                  />
                </CardContent>
              </Card>

              <Card className="bg-card border-border">
                <CardContent className="p-4 sm:p-6">
                  <LiteracyTips tips={result.literacyTips} />
                </CardContent>
              </Card>
            </div>
          </div>
        )}
      </main>
    </div>
  )
}
