"use client"

import React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Input } from "@/components/ui/input"
import { Search, Link as LinkIcon, Loader2 } from "lucide-react"

interface AnalysisFormProps {
  onSubmit: (content: string, type: "text" | "url") => void
  isLoading: boolean
}

export function AnalysisForm({ onSubmit, isLoading }: AnalysisFormProps) {
  const [textContent, setTextContent] = useState("")
  const [urlContent, setUrlContent] = useState("")
  const [activeTab, setActiveTab] = useState<"text" | "url">("text")

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    const content = activeTab === "text" ? textContent : urlContent
    if (content.trim()) {
      onSubmit(content.trim(), activeTab)
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <Tabs value={activeTab} onValueChange={(v) => setActiveTab(v as "text" | "url")}>
        <TabsList className="grid w-full grid-cols-2">
          <TabsTrigger value="text" className="gap-2">
            <Search className="h-4 w-4" />
            Text
          </TabsTrigger>
          <TabsTrigger value="url" className="gap-2">
            <LinkIcon className="h-4 w-4" />
            URL
          </TabsTrigger>
        </TabsList>

        <TabsContent value="text" className="mt-4">
          <Textarea
            placeholder="Paste the text content you want to analyze for credibility..."
            value={textContent}
            onChange={(e) => setTextContent(e.target.value)}
            className="min-h-[200px] resize-none bg-secondary/50"
            disabled={isLoading}
          />
        </TabsContent>

        <TabsContent value="url" className="mt-4">
          <Input
            type="url"
            placeholder="https://example.com/article"
            value={urlContent}
            onChange={(e) => setUrlContent(e.target.value)}
            className="bg-secondary/50"
            disabled={isLoading}
          />
          <p className="mt-2 text-xs text-muted-foreground">
            Enter the URL of an article or news story you want to verify.
          </p>
        </TabsContent>
      </Tabs>

      <Button 
        type="submit" 
        className="w-full gap-2" 
        size="lg"
        disabled={isLoading || (activeTab === "text" ? !textContent.trim() : !urlContent.trim())}
      >
        {isLoading ? (
          <>
            <Loader2 className="h-4 w-4 animate-spin" />
            Analyzing...
          </>
        ) : (
          <>
            <Search className="h-4 w-4" />
            Analyze Content
          </>
        )}
      </Button>
    </form>
  )
}
