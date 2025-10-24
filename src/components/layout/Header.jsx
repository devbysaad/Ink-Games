import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { motion } from 'framer-motion'
import { Menu, X, Gamepad2, Coins, User, Trophy, UserPlus, UserMinus } from 'lucide-react'
import AuthModal from '../forms/AuthModal'
import './Header.css'

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isAuthOpen, setIsAuthOpen] = useState(false)
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const [user, setUser] = useState(null)
  const location = useLocation()

  const navItems = [
    { path: '/', label: 'Home', icon: Gamepad2 },
    { path: '/games', label: 'Games', icon: Gamepad2 },
    { path: '/prize-kingdoms', label: 'Prize Kingdoms', icon: Trophy },
    { path: '/inkpay', label: 'INKPay', icon: Coins },
    { path: '/prize-vault', label: 'Prize Vault', icon: Trophy },
    { path: '/profile', label: 'Profile', icon: User },
  ]

  const handleLogin = (formData) => {
    // Simulate login
    setUser({ username: formData.username, email: formData.email })
    setIsLoggedIn(true)
    setIsAuthOpen(false)
  }

  const handleRegister = (formData) => {
    // Simulate registration
    setUser({ username: formData.username, email: formData.email })
    setIsLoggedIn(true)
    setIsAuthOpen(false)
  }

  const handleLogout = () => {
    setUser(null)
    setIsLoggedIn(false)
  }

  return (
    <header className="header">
      <div className="header-container">
        <Link to="/" className="logo">
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="logo-content"
          >
            <Gamepad2 size={32} />
            <span>INK Games</span>
          </motion.div>
        </Link>

        <nav className="nav-desktop">
          {navItems.map((item) => {
            const Icon = item.icon
            const isActive = location.pathname === item.path
            return (
              <Link
                key={item.path}
                to={item.path}
                className={`nav-link ${isActive ? 'active' : ''}`}
              >
                <Icon size={18} />
                <span>{item.label}</span>
              </Link>
            )
          })}
        </nav>

        <div className="header-actions">
          {isLoggedIn ? (
            <div className="user-menu">
              <span className="user-name">Welcome, {user?.username}</span>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={handleLogout}
                className="logout-button"
              >
                <UserMinus size={18} />
                Logout
              </motion.button>
            </div>
          ) : (
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setIsAuthOpen(true)}
              className="login-button"
            >
              <UserPlus size={18} />
              Login
            </motion.button>
          )}
          
          <button
            className="menu-toggle"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <motion.nav
        className={`nav-mobile ${isMenuOpen ? 'open' : ''}`}
        initial={false}
        animate={{ height: isMenuOpen ? 'auto' : 0 }}
        transition={{ duration: 0.3 }}
      >
        {navItems.map((item) => {
          const Icon = item.icon
          const isActive = location.pathname === item.path
          return (
            <Link
              key={item.path}
              to={item.path}
              className={`nav-link-mobile ${isActive ? 'active' : ''}`}
              onClick={() => setIsMenuOpen(false)}
            >
              <Icon size={20} />
              <span>{item.label}</span>
            </Link>
          )
        })}
      </motion.nav>

      {/* Auth Modal */}
      <AuthModal
        isOpen={isAuthOpen}
        onClose={() => setIsAuthOpen(false)}
        onLogin={handleLogin}
        onRegister={handleRegister}
      />
    </header>
  )
}

export default Header
