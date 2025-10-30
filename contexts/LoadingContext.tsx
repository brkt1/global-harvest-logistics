"use client"

import { createContext, useContext, type ReactNode } from "react"

type LoadingContextType = {}

const LoadingContext = createContext<LoadingContextType | undefined>(undefined)

export function LoadingProvider({ children }: { children: ReactNode }) {
  return <LoadingContext.Provider value={{}}>{children}</LoadingContext.Provider>
}

export function useLoading() {
  const context = useContext(LoadingContext)
  if (context === undefined) {
    throw new Error("useLoading must be used within LoadingProvider")
  }
  return context
}
