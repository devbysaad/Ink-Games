import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import {
  Play,
  Trophy,
  Coins,
  Users,
  Star,
  ChevronRight,
  Gamepad2,
  ArrowRight, // ✅ added missing import
} from 'lucide-react'
import './Home.css'

const Home = () => {
  const features = [
    {
      icon: Trophy,
      title: 'Real Prizes',
      description: 'Win actual rewards and prizes through gameplay',
    },
    {
      icon: Gamepad2,
      title: 'Immersive Games',
      description: 'Experience engaging gameplay with stunning visuals',
    },
    {
      icon: Users,
      title: 'Community',
      description: 'Connect with players worldwide and compete',
    },
    {
      icon: Coins,
      title: 'INKPay',
      description: 'Secure peer-to-peer payments and transactions',
    },
  ]

  const stats = [
    { number: '50K+', label: 'Active Players' },
    { number: '$1M+', label: 'Prizes Won' },
    { number: '100+', label: 'Games Available' },
    { number: '24/7', label: 'Support' },
  ]

  return (
    <div className="home">
      {/* ---------------- Hero Section ---------------- */}
      <section className="hero">
        <div className="hero-background">
          <div className="hero-particles"></div>
        </div>

        <div className="hero-content">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="hero-text"
          >
            <h1 className="hero-title">
              Welcome to <span className="gradient-text">INK Games</span>
            </h1>
            <p className="hero-subtitle">
              Experience the ultimate gaming platform where every victory brings real prizes.
              Build kingdoms, battle rivals, and claim your rewards in our immersive universe.
            </p>

            <div className="hero-actions">
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Link to="/prize-kingdoms" className="cta-primary">
                  <Play size={20} />
                  Start Playing
                </Link>
              </motion.div>

              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Link to="/games" className="cta-secondary">
                  Explore Games
                  <ChevronRight size={20} />
                </Link>
              </motion.div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="hero-visual"
          >
            <div className="game-preview">
              <div className="dice-container">
                <div className="dice dice-1">6</div>
                <div className="dice dice-2">3</div>
                <div className="dice dice-3">1</div>
              </div>

              <div className="kingdom-preview">
                <div className="castle"></div>
                <div className="trees"></div>
                <div className="coins"></div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ---------------- Stats Section ---------------- */}
      <section className="stats">
        <div className="stats-container">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="stat-item"
            >
              <div className="stat-number">{stat.number}</div>
              <div className="stat-label">{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ---------------- Features Section ---------------- */}
      <section className="features">
        <div className="features-container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="features-header"
          >
            <h2>Why Choose INK Games?</h2>
            <p>Experience gaming like never before with our innovative features</p>
          </motion.div>

          <div className="features-grid">
            {features.map((feature, index) => {
              const Icon = feature.icon
              return (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  whileHover={{ y: -10 }}
                  className="feature-card"
                >
                  <div className="feature-icon">
                    <Icon size={32} />
                  </div>
                  <h3>{feature.title}</h3>
                  <p>{feature.description}</p>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      {/* ---------------- CTA Section ---------------- */}
      <section className="cta-section">
        <div className="cta-container">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="cta-content"
          >
            <h2>Ready to Start Your Journey?</h2>
            <p>Join thousands of players and start winning real prizes today</p>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Link to="/prize-kingdoms" className="cta-button">
                <Trophy size={20} />
                Play Prize Kingdoms
                <ArrowRight size={20} /> {/* ✅ fixed reference */}
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default Home
