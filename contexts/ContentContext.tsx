"use client"

import { createContext, useContext, type ReactNode } from "react"

type ContentContextType = {}

const ContentContext = createContext<ContentContextType | undefined>(undefined)

export function ContentProvider({ children }: { children: ReactNode }) {
  return <ContentContext.Provider value={{}}>{children}</ContentContext.Provider>
}

export function useContentContext() {
  const context = useContext(ContentContext)
  if (context === undefined) {
    throw new Error("useContentContext must be used within ContentProvider")
  }
  return context
}
