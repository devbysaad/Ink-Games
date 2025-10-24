import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import {
  Trophy,
  Crown,
  Coins,
  Sword,
  Shield,
  Star,
  Square,
  Play,
  Pause,
  RotateCcw,
  Dice1,   // ✅ added
  Dice2,   // optional future use
  Dice3,
  Dice4,
  Dice5,
  Dice6,
} from 'lucide-react'
import './PrizeKingdoms.css'

const PrizeKingdoms = () => {
  const [gameState, setGameState] = useState('menu')
  const [dice, setDice] = useState([1, 1, 1])
  const [isRolling, setIsRolling] = useState(false)
  const [score, setScore] = useState(0)
  const [level, setLevel] = useState(1)
  const [kingdom, setKingdom] = useState({
    castles: 1,
    towers: 0,
    walls: 0,
    treasury: 0,
  })

  const [prizes, setPrizes] = useState([
    { id: 1, name: 'Gold Coin', value: 10, unlocked: true },
    { id: 2, name: 'Silver Crown', value: 25, unlocked: false },
    { id: 3, name: 'Diamond Ring', value: 50, unlocked: false },
    { id: 4, name: 'Royal Scepter', value: 100, unlocked: false },
  ])

  const diceIcons = [Dice1, Dice2, Dice3, Dice4, Dice5, Dice6]

  // 🎲 Roll dice animation
  const rollDice = () => {
    if (isRolling) return
    setIsRolling(true)

    const rolls = Array(3)
      .fill(0)
      .map(() => Math.floor(Math.random() * 6) + 1)

    setTimeout(() => {
      setDice(rolls)
      const total = rolls.reduce((a, b) => a + b, 0)
      const newScore = score + total
      setScore(newScore)
      updateKingdom(newScore)
      setIsRolling(false)
    }, 1000)
  }

  // 👑 Kingdom progression logic
  const updateKingdom = (newScore) => {
    const newLevel = Math.floor(newScore / 50) + 1
    setLevel(newLevel)

    setKingdom((prev) => ({
      castles: 1 + Math.floor(newScore / 200),
      towers: Math.floor(newScore / 100),
      walls: Math.floor(newScore / 50),
      treasury: newScore,
    }))

    setPrizes((prevPrizes) =>
      prevPrizes.map((p) =>
        p.value <= newScore ? { ...p, unlocked: true } : p
      )
    )
  }

  // ♻️ Reset
  const resetGame = () => {
    setDice([1, 1, 1])
    setScore(0)
    setLevel(1)
    setKingdom({ castles: 1, towers: 0, walls: 0, treasury: 0 })
    setPrizes((prev) =>
      prev.map((p) => ({ ...p, unlocked: p.id === 1 }))
    )
    setGameState('menu')
  }

  // Auto background effects or level-based updates
  useEffect(() => {
    document.title = `Prize Kingdoms — Level ${level}`
  }, [level])

  // 🎮 Game screens
  const renderContent = () => {
    switch (gameState) {
      case 'menu':
        return (
          <motion.div
            key="menu"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="menu-screen"
          >
            <h1 className="title">🏰 Prize Kingdoms 🪙</h1>
            <div className="feature-list">
              <div className="feature">
                <Dice1 size={24} />
                <span>Roll dice to earn points</span>
              </div>
              <div className="feature">
                <Crown size={24} />
                <span>Unlock royal prizes</span>
              </div>
              <div className="feature">
                <Shield size={24} />
                <span>Build your kingdom</span>
              </div>
            </div>

            <motion.button
              whileTap={{ scale: 0.9 }}
              onClick={() => setGameState('playing')}
              className="start-btn"
            >
              <Play size={20} /> Start Game
            </motion.button>
          </motion.div>
        )

      case 'playing':
        return (
          <motion.div
            key="playing"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="game-screen"
          >
            <div className="stats">
              <h2>Level {level}</h2>
              <p>Score: {score}</p>
            </div>

            <div className="kingdom-display">
              <p>Castles: {kingdom.castles}</p>
              <p>Towers: {kingdom.towers}</p>
              <p>Walls: {kingdom.walls}</p>
              <p>Treasury: {kingdom.treasury}</p>
            </div>

            <div className="dice-container">
              {dice.map((value, index) => {
                const DiceIcon = diceIcons[value - 1]
                return (
                  <motion.div
                    key={index}
                    animate={{ rotate: isRolling ? 360 : 0 }}
                    transition={{ duration: 1 }}
                  >
                    <DiceIcon size={50} />
                  </motion.div>
                )
              })}
            </div>

            <div className="controls">
              <motion.button
                whileTap={{ scale: 0.9 }}
                onClick={rollDice}
                disabled={isRolling}
              >
                {isRolling ? <Pause size={20} /> : <RotateCcw size={20} />} Roll
              </motion.button>
              <motion.button
                whileTap={{ scale: 0.9 }}
                onClick={() => setGameState('prizes')}
              >
                <Trophy size={20} /> Prizes
              </motion.button>
              <motion.button
                whileTap={{ scale: 0.9 }}
                onClick={resetGame}
                className="reset-btn"
              >
                Reset
              </motion.button>
            </div>
          </motion.div>
        )

      case 'prizes':
        return (
          <motion.div
            key="prizes"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="prize-screen"
          >
            <h2>Your Prizes</h2>
            <div className="prize-list">
              {prizes.map((p) => (
                <div
                  key={p.id}
                  className={`prize-card ${p.unlocked ? 'unlocked' : 'locked'}`}
                >
                  <Star size={20} />
                  <p>{p.name}</p>
                  <small>{p.unlocked ? 'Unlocked' : 'Locked'}</small>
                </div>
              ))}
            </div>

            <motion.button
              whileTap={{ scale: 0.9 }}
              onClick={() => setGameState('playing')}
            >
              Back to Game
            </motion.button>
          </motion.div>
        )

      default:
        return null
    }
  }

  return (
    <div className="prize-kingdoms">
      <AnimatePresence mode="wait">{renderContent()}</AnimatePresence>
    </div>
  )
}

export default PrizeKingdoms
