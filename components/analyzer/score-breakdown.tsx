"use client"

import { Progress } from "@/components/ui/progress"
import { Brain, CheckCircle, Globe, Clock } from "lucide-react"

interface ScoreBreakdownProps {
  mlScore: number
  factCheckScore: number
  sourceScore: number
  freshnessScore: number
}

const factors = [
  {
    key: "mlScore",
    icon: Brain,
    label: "ML Confidence",
    weight: "40%",
    description: "Linguistic pattern analysis",
  },
  {
    key: "factCheckScore",
    icon: CheckCircle,
    label: "Fact-Check Alignment",
    weight: "30%",
    description: "Verified source confirmation",
  },
  {
    key: "sourceScore",
    icon: Globe,
    label: "Source Reputation",
    weight: "20%",
    description: "Domain history and safety",
  },
  {
    key: "freshnessScore",
    icon: Clock,
    label: "Temporal Freshness",
    weight: "10%",
    description: "Recent coverage prevalence",
  },
]

export function ScoreBreakdown({ mlScore, factCheckScore, sourceScore, freshnessScore }: ScoreBreakdownProps) {
  const scores: Record<string, number> = {
    mlScore,
    factCheckScore,
    sourceScore,
    freshnessScore,
  }

  const getScoreColor = (score: number) => {
    if (score >= 70) return "bg-green-500"
    if (score >= 40) return "bg-yellow-500"
    return "bg-red-500"
  }

  return (
    <div className="space-y-6">
      <h3 className="font-display text-lg font-semibold text-foreground">Score Breakdown</h3>
      <div className="space-y-4">
        {factors.map((factor) => {
          const score = scores[factor.key]
          return (
            <div key={factor.key} className="space-y-2">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <factor.icon className="h-4 w-4 text-muted-foreground" />
                  <span className="text-sm font-medium text-foreground">{factor.label}</span>
                  <span className="text-xs text-muted-foreground">({factor.weight})</span>
                </div>
                <span className="text-sm font-semibold text-foreground">{score}/100</span>
              </div>
              <Progress value={score} className="h-2" indicatorClassName={getScoreColor(score)} />
              <p className="text-xs text-muted-foreground">{factor.description}</p>
            </div>
          )
        })}
      </div>
    </div>
  )
}
