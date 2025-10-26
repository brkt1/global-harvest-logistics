'use client'

import { createContext, ReactNode, useContext, useEffect, useState } from 'react'

interface AdminContextType {
  isAdmin: boolean
  isEditing: boolean
  login: (password: string) => Promise<boolean>
  logout: () => void
  toggleEditing: () => void
  isLoading: boolean
}

const AdminContext = createContext<AdminContextType | undefined>(undefined)

export function AdminProvider({ children }: { children: ReactNode }) {
  const [isAdmin, setIsAdmin] = useState(false)
  const [isEditing, setIsEditing] = useState(false)
  const [isLoading, setIsLoading] = useState(true)

  // Simple admin password (in production, use proper authentication)
  const ADMIN_PASSWORD = 'admin123'

  useEffect(() => {
    // Check if admin session exists in localStorage
    const adminSession = localStorage.getItem('adminSession')
    if (adminSession === 'true') {
      setIsAdmin(true)
    }
    setIsLoading(false)
  }, [])

  const login = async (password: string): Promise<boolean> => {
    if (password === ADMIN_PASSWORD) {
      setIsAdmin(true)
      localStorage.setItem('adminSession', 'true')
      return true
    }
    return false
  }

  const logout = () => {
    setIsAdmin(false)
    setIsEditing(false)
    localStorage.removeItem('adminSession')
  }

  const toggleEditing = () => {
    if (isAdmin) {
      setIsEditing(!isEditing)
    }
  }

  return (
    <AdminContext.Provider value={{
      isAdmin,
      isEditing,
      login,
      logout,
      toggleEditing,
      isLoading
    }}>
      {children}
    </AdminContext.Provider>
  )
}

export function useAdmin() {
  const context = useContext(AdminContext)
  if (context === undefined) {
    throw new Error('useAdmin must be used within an AdminProvider')
  }
  return context
}
