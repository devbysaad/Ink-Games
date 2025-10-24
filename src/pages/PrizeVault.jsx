import { useState } from 'react'
import { motion } from 'framer-motion'
import { Trophy, Gift, Star, Lock, CheckCircle, Coins, Award, Crown, Zap } from 'lucide-react'
import './PrizeVault.css'

const PrizeVault = () => {
  const [selectedCategory, setSelectedCategory] = useState('all')
  
  const categories = [
    { id: 'all', label: 'All Prizes', icon: Trophy },
    { id: 'unlocked', label: 'Unlocked', icon: CheckCircle },
    { id: 'locked', label: 'Locked', icon: Lock },
    { id: 'claimed', label: 'Claimed', icon: Gift },
  ]

  const prizes = [
    {
      id: 1,
      name: 'Gold Coin Collection',
      description: 'Exclusive set of 5 gold coins',
      value: 100,
      category: 'unlocked',
      rarity: 'common',
      image: '/api/placeholder/200/200',
      unlocked: true,
      claimed: false,
    },
    {
      id: 2,
      name: 'Silver Crown',
      description: 'Royal silver crown with gems',
      value: 250,
      category: 'unlocked',
      rarity: 'rare',
      image: '/api/placeholder/200/200',
      unlocked: true,
      claimed: false,
    },
    {
      id: 3,
      name: 'Diamond Ring',
      description: 'Precious diamond engagement ring',
      value: 500,
      category: 'locked',
      rarity: 'epic',
      image: '/api/placeholder/200/200',
      unlocked: false,
      claimed: false,
    },
    {
      id: 4,
      name: 'Royal Scepter',
      description: 'Ancient royal scepter of power',
      value: 1000,
      category: 'locked',
      rarity: 'legendary',
      image: '/api/placeholder/200/200',
      unlocked: false,
      claimed: false,
    },
    {
      id: 5,
      name: 'Gaming Headset',
      description: 'Professional gaming headset',
      value: 150,
      category: 'claimed',
      rarity: 'rare',
      image: '/api/placeholder/200/200',
      unlocked: true,
      claimed: true,
    },
    {
      id: 6,
      name: 'Gift Card $50',
      description: 'Digital gift card worth $50',
      value: 50,
      category: 'unlocked',
      rarity: 'common',
      image: '/api/placeholder/200/200',
      unlocked: true,
      claimed: false,
    },
  ]

  const stats = {
    totalPrizes: prizes.length,
    unlockedPrizes: prizes.filter(p => p.unlocked).length,
    claimedPrizes: prizes.filter(p => p.claimed).length,
    totalValue: prizes.filter(p => p.unlocked).reduce((sum, p) => sum + p.value, 0),
  }

  const getRarityColor = (rarity) => {
    switch (rarity) {
      case 'common': return '#51cf66'
      case 'rare': return '#339af0'
      case 'epic': return '#9775fa'
      case 'legendary': return '#ffd43b'
      default: return '#868e96'
    }
  }

  const getRarityIcon = (rarity) => {
    switch (rarity) {
      case 'common': return Star
      case 'rare': return Award
      case 'epic': return Crown
      case 'legendary': return Zap
      default: return Star
    }
  }

  const filteredPrizes = selectedCategory === 'all' 
    ? prizes 
    : prizes.filter(prize => prize.category === selectedCategory)

  return (
    <div className="prize-vault">
      <div className="vault-container">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="vault-header"
        >
          <div className="header-content">
            <div className="header-text">
              <h1>Prize Vault</h1>
              <p>Your collection of unlocked prizes and rewards</p>
            </div>
            <div className="header-stats">
              <div className="stat">
                <Trophy size={20} />
                <span>{stats.unlockedPrizes}/{stats.totalPrizes} Unlocked</span>
              </div>
              <div className="stat">
                <Coins size={20} />
                <span>${stats.totalValue} Value</span>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Categories */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="category-filters"
        >
          {categories.map((category) => {
            const Icon = category.icon
            return (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`category-btn ${selectedCategory === category.id ? 'active' : ''}`}
              >
                <Icon size={18} />
                <span>{category.label}</span>
              </button>
            )
          })}
        </motion.div>

        {/* Prizes Grid */}
        <div className="prizes-grid">
          {filteredPrizes.map((prize, index) => {
            const RarityIcon = getRarityIcon(prize.rarity)
            return (
              <motion.div
                key={prize.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -10 }}
                className={`prize-card ${prize.unlocked ? 'unlocked' : 'locked'} ${prize.claimed ? 'claimed' : ''}`}
              >
                <div className="prize-image">
                  <div className="prize-placeholder">
                    <Trophy size={48} />
                  </div>
                  <div className="prize-overlay">
                    {prize.claimed ? (
                      <div className="claimed-badge">
                        <Gift size={20} />
                        Claimed
                      </div>
                    ) : prize.unlocked ? (
                      <button className="claim-button">
                        <Gift size={16} />
                        Claim Prize
                      </button>
                    ) : (
                      <div className="locked-badge">
                        <Lock size={20} />
                        Locked
                      </div>
                    )}
                  </div>
                </div>

                <div className="prize-content">
                  <div className="prize-header">
                    <h3>{prize.name}</h3>
                    <div className="rarity-badge" style={{ backgroundColor: getRarityColor(prize.rarity) }}>
                      <RarityIcon size={14} />
                      <span>{prize.rarity}</span>
                    </div>
                  </div>
                  
                  <p className="prize-description">{prize.description}</p>
                  
                  <div className="prize-value">
                    <Coins size={16} />
                    <span>${prize.value}</span>
                  </div>
                  
                  {!prize.unlocked && (
                    <div className="unlock-requirements">
                      <p>Complete 5 more games to unlock</p>
                    </div>
                  )}
                </div>
              </motion.div>
            )
          })}
        </div>

        {/* Empty State */}
        {filteredPrizes.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="empty-state"
          >
            <Trophy size={64} />
            <h3>No prizes found</h3>
            <p>Try selecting a different category or play more games to unlock prizes</p>
          </motion.div>
        )}

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="vault-cta"
        >
          <h2>Want More Prizes?</h2>
          <p>Keep playing to unlock more amazing rewards and build your collection</p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="play-button"
          >
            <Trophy size={20} />
            Play Games
          </motion.button>
        </motion.div>
      </div>
    </div>
  )
}

export default PrizeVault
