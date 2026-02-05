"use client"

import { AlertTriangle, CheckCircle2 } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

interface RedFlagsProps {
  redFlags: string[]
  positiveSignals: string[]
}

export function RedFlags({ redFlags, positiveSignals }: RedFlagsProps) {
  return (
    <div className="space-y-6">
      {redFlags.length > 0 && (
        <div className="space-y-3">
          <h3 className="flex items-center gap-2 font-display text-lg font-semibold text-foreground">
            <AlertTriangle className="h-5 w-5 text-red-500" />
            Red Flags Detected
          </h3>
          <div className="space-y-2">
            {redFlags.map((flag, index) => (
              <Card key={index} className="border-red-500/30 bg-red-500/10">
                <CardContent className="flex items-start gap-3 p-4">
                  <div className="mt-0.5 h-2 w-2 flex-shrink-0 rounded-full bg-red-500" />
                  <p className="text-sm text-foreground">{flag}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      )}

      {positiveSignals.length > 0 && (
        <div className="space-y-3">
          <h3 className="flex items-center gap-2 font-display text-lg font-semibold text-foreground">
            <CheckCircle2 className="h-5 w-5 text-green-500" />
            Positive Signals
          </h3>
          <div className="space-y-2">
            {positiveSignals.map((signal, index) => (
              <Card key={index} className="border-green-500/30 bg-green-500/10">
                <CardContent className="flex items-start gap-3 p-4">
                  <div className="mt-0.5 h-2 w-2 flex-shrink-0 rounded-full bg-green-500" />
                  <p className="text-sm text-foreground">{signal}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      )}

      {redFlags.length === 0 && positiveSignals.length === 0 && (
        <p className="text-sm text-muted-foreground">No specific flags or signals detected.</p>
      )}
    </div>
  )
}
