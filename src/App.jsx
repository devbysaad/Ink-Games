import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { motion } from 'framer-motion'
import Header from './components/layout/Header'
import Footer from './components/layout/Footer'
import Home from './pages/Home'
import Games from './pages/games/Games'
import PrizeKingdoms from './pages/games/PrizeKingdoms'
import INKPay from './pages/payments/INKPay'
import Profile from './pages/Profile'
import PrizeVault from './pages/PrizeVault'
import './App.css'

function App() {
  return (
    <Router>
      <div className="app">
        <Header />
        <motion.main
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/games" element={<Games />} />
            <Route path="/prize-kingdoms" element={<PrizeKingdoms />} />
            <Route path="/inkpay" element={<INKPay />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/prize-vault" element={<PrizeVault />} />
          </Routes>
        </motion.main>
        <Footer />
      </div>
    </Router>
  )
}

export default App
