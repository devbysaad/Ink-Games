import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { Gamepad2, Mail, MessageCircle, Camera, Users as UsersIcon, Shield, Award, Users } from 'lucide-react'
import './Footer.css'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  const footerLinks = {
    games: [
      { label: 'Prize Kingdoms', path: '/prize-kingdoms' },
      { label: 'All Games', path: '/games' },
      { label: 'Tournaments', path: '/tournaments' },
    ],
    services: [
      { label: 'INKPay', path: '/inkpay' },
      { label: 'Prize Vault', path: '/prize-vault' },
      { label: 'Rewards', path: '/rewards' },
    ],
    support: [
      { label: 'Help Center', path: '/help' },
      { label: 'Contact Us', path: '/contact' },
      { label: 'Terms of Service', path: '/terms' },
      { label: 'Privacy Policy', path: '/privacy' },
    ],
  }

  const socialLinks = [
    { icon: MessageCircle, url: '#', label: 'Twitter' },
    { icon: Camera, url: '#', label: 'Instagram' },
    { icon: UsersIcon, url: '#', label: 'Facebook' },
  ]

  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-content">
          <div className="footer-brand">
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="footer-logo"
            >
              <Gamepad2 size={32} />
              <span>INK Games</span>
            </motion.div>
            <p className="footer-description">
              Experience the thrill of gaming with real prizes. Build kingdoms, 
              battle rivals, and win amazing rewards in our immersive gaming universe.
            </p>
            <div className="footer-social">
              {socialLinks.map((social) => {
                const Icon = social.icon
                return (
                  <motion.a
                    key={social.label}
                    href={social.url}
                    whileHover={{ scale: 1.2, rotate: 5 }}
                    whileTap={{ scale: 0.9 }}
                    className="social-link"
                    aria-label={social.label}
                  >
                    <Icon size={20} />
                  </motion.a>
                )
              })}
            </div>
          </div>

          <div className="footer-links">
            <div className="footer-section">
              <h3>Games</h3>
              <ul>
                {footerLinks.games.map((link) => (
                  <li key={link.path}>
                    <Link to={link.path} className="footer-link">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div className="footer-section">
              <h3>Services</h3>
              <ul>
                {footerLinks.services.map((link) => (
                  <li key={link.path}>
                    <Link to={link.path} className="footer-link">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div className="footer-section">
              <h3>Support</h3>
              <ul>
                {footerLinks.support.map((link) => (
                  <li key={link.path}>
                    <Link to={link.path} className="footer-link">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <div className="footer-features">
          <div className="feature-item">
            <Shield size={20} />
            <span>Secure Gaming</span>
          </div>
          <div className="feature-item">
            <Award size={20} />
            <span>Real Prizes</span>
          </div>
          <div className="feature-item">
            <Users size={20} />
            <span>Community</span>
          </div>
        </div>

        <div className="footer-bottom">
          <p>&copy; {currentYear} INK Games. All rights reserved.</p>
          <div className="footer-bottom-links">
            <Link to="/terms" className="footer-bottom-link">Terms</Link>
            <Link to="/privacy" className="footer-bottom-link">Privacy</Link>
            <Link to="/cookies" className="footer-bottom-link">Cookies</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
