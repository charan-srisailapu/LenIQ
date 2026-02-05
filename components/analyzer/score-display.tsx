"use client"

import { cn } from "@/lib/utils"

interface ScoreDisplayProps {
  score: number
  confidence: number
}

export function ScoreDisplay({ score, confidence }: ScoreDisplayProps) {
  const getScoreColor = (score: number) => {
    if (score >= 70) return "text-green-500"
    if (score >= 40) return "text-yellow-500"
    return "text-red-500"
  }

  const getScoreLabel = (score: number) => {
    if (score >= 80) return "Highly Credible"
    if (score >= 60) return "Mostly Credible"
    if (score >= 40) return "Mixed Credibility"
    if (score >= 20) return "Low Credibility"
    return "Very Low Credibility"
  }

  const getScoreRingColor = (score: number) => {
    if (score >= 70) return "stroke-green-500"
    if (score >= 40) return "stroke-yellow-500"
    return "stroke-red-500"
  }

  const circumference = 2 * Math.PI * 70
  const strokeDashoffset = circumference - (score / 100) * circumference

  return (
    <div className="flex flex-col items-center">
      <div className="relative">
        <svg className="h-48 w-48 -rotate-90 transform" viewBox="0 0 160 160">
          <circle
            cx="80"
            cy="80"
            r="70"
            fill="none"
            className="stroke-secondary"
            strokeWidth="12"
          />
          <circle
            cx="80"
            cy="80"
            r="70"
            fill="none"
            className={cn("transition-all duration-1000 ease-out", getScoreRingColor(score))}
            strokeWidth="12"
            strokeLinecap="round"
            strokeDasharray={circumference}
            strokeDashoffset={strokeDashoffset}
          />
        </svg>
        <div className="absolute inset-0 flex flex-col items-center justify-center">
          <span className={cn("font-display text-5xl font-bold", getScoreColor(score))}>
            {score}
          </span>
          <span className="text-sm text-muted-foreground">out of 100</span>
        </div>
      </div>
      
      <div className="mt-4 text-center">
        <p className={cn("font-display text-xl font-semibold", getScoreColor(score))}>
          {getScoreLabel(score)}
        </p>
        <p className="mt-1 text-sm text-muted-foreground">
          Confidence: {confidence}%
        </p>
      </div>
    </div>
  )
}
