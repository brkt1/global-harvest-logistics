"use client"

import { createContext, useContext, type ReactNode } from "react"

interface ContentContextType {
  content: Record<string, unknown>
}

const ContentContext = createContext<ContentContextType | undefined>(undefined)

export function ContentProvider({ children }: { children: ReactNode }) {
  return <ContentContext.Provider value={{ content: {} }}>{children}</ContentContext.Provider>
}

export function useContentContext() {
  const context = useContext(ContentContext)
  if (!context) {
    throw new Error("useContentContext must be used within ContentProvider")
  }
  return context
}
