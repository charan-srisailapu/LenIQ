"use client"

import { Lightbulb } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

interface LiteracyTipsProps {
  tips: string[]
}

export function LiteracyTips({ tips }: LiteracyTipsProps) {
  if (tips.length === 0) return null

  return (
    <div className="space-y-3">
      <h3 className="flex items-center gap-2 font-display text-lg font-semibold text-foreground">
        <Lightbulb className="h-5 w-5 text-primary" />
        Media Literacy Tips
      </h3>
      <div className="space-y-2">
        {tips.map((tip, index) => (
          <Card key={index} className="border-primary/30 bg-primary/5">
            <CardContent className="flex items-start gap-3 p-4">
              <span className="flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full bg-primary/20 text-xs font-semibold text-primary">
                {index + 1}
              </span>
              <p className="text-sm text-foreground">{tip}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}
