"use client"

import { createContext, useContext, type ReactNode } from "react"

type AdminContextType = {}

const AdminContext = createContext<AdminContextType | undefined>(undefined)

export function AdminProvider({ children }: { children: ReactNode }) {
  return <AdminContext.Provider value={{}}>{children}</AdminContext.Provider>
}

export function useAdmin() {
  const context = useContext(AdminContext)
  if (context === undefined) {
    throw new Error("useAdmin must be used within AdminProvider")
  }
  return context
}
