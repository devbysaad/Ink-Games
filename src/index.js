// Main entry point for the application
export { default as App } from './App'
export { default as Home } from './pages/Home'
export { default as Games } from './pages/games/Games'
export { default as PrizeKingdoms } from './pages/games/PrizeKingdoms'
export { default as INKPay } from './pages/payments/INKPay'
export { default as Profile } from './pages/Profile'
export { default as PrizeVault } from './pages/PrizeVault'

// Components
export { default as Header } from './components/layout/Header'
export { default as Footer } from './components/layout/Footer'
export { default as AuthModal } from './components/forms/AuthModal'

// Hooks
export { useAuth } from './hooks/useAuth'
export { useGame } from './hooks/useGame'

// Utils
export * from './utils'

// Constants
export * from './constants'


