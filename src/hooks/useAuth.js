import { useState, useEffect } from 'react'
import { storage } from '../utils'

export const useAuth = () => {
  const [user, setUser] = useState(null)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    // Check if user is logged in on app start
    const savedUser = storage.get('user')
    if (savedUser) {
      setUser(savedUser)
    }
    setIsLoading(false)
  }, [])

  const login = (userData) => {
    setUser(userData)
    storage.set('user', userData)
  }

  const logout = () => {
    setUser(null)
    storage.remove('user')
  }

  const isAuthenticated = !!user

  return {
    user,
    isAuthenticated,
    isLoading,
    login,
    logout
  }
}


