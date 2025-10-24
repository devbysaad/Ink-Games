// Utility Functions

// Format currency
export const formatCurrency = (amount) => {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD'
  }).format(amount)
}

// Format number with commas
export const formatNumber = (num) => {
  return new Intl.NumberFormat('en-US').format(num)
}

// Generate random dice roll
export const rollDice = (sides = 6) => {
  return Math.floor(Math.random() * sides) + 1
}

// Calculate dice total
export const calculateDiceTotal = (dice) => {
  return dice.reduce((sum, die) => sum + die, 0)
}

// Generate random ID
export const generateId = () => {
  return Math.random().toString(36).substr(2, 9)
}

// Debounce function
export const debounce = (func, wait) => {
  let timeout
  return function executedFunction(...args) {
    const later = () => {
      clearTimeout(timeout)
      func(...args)
    }
    clearTimeout(timeout)
    timeout = setTimeout(later, wait)
  }
}

// Local storage helpers
export const storage = {
  get: (key) => {
    try {
      return JSON.parse(localStorage.getItem(key))
    } catch {
      return null
    }
  },
  set: (key, value) => {
    localStorage.setItem(key, JSON.stringify(value))
  },
  remove: (key) => {
    localStorage.removeItem(key)
  }
}

// Validate email
export const isValidEmail = (email) => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  return emailRegex.test(email)
}

// Validate password strength
export const validatePassword = (password) => {
  const minLength = 8
  const hasUpperCase = /[A-Z]/.test(password)
  const hasLowerCase = /[a-z]/.test(password)
  const hasNumbers = /\d/.test(password)
  const hasSpecialChar = /[!@#$%^&*(),.?":{}|<>]/.test(password)
  
  return {
    isValid: password.length >= minLength && hasUpperCase && hasLowerCase && hasNumbers,
    hasUpperCase,
    hasLowerCase,
    hasNumbers,
    hasSpecialChar,
    minLength: password.length >= minLength
  }
}

// Get rarity color
export const getRarityColor = (rarity) => {
  const colors = {
    common: '#51cf66',
    rare: '#339af0',
    epic: '#9775fa',
    legendary: '#ffd43b'
  }
  return colors[rarity] || '#868e96'
}

// Get rarity icon
export const getRarityIcon = (rarity) => {
  const icons = {
    common: 'Star',
    rare: 'Award',
    epic: 'Crown',
    legendary: 'Zap'
  }
  return icons[rarity] || 'Star'
}


