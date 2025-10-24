import { useState, useCallback } from 'react'
import { rollDice, calculateDiceTotal } from '../utils'
import { KINGDOM_BUILDING } from '../constants'

export const useGame = () => {
  const [gameState, setGameState] = useState('menu')
  const [dice, setDice] = useState([1, 1, 1])
  const [isRolling, setIsRolling] = useState(false)
  const [score, setScore] = useState(0)
  const [level, setLevel] = useState(1)
  const [kingdom, setKingdom] = useState({
    castles: 1,
    towers: 0,
    walls: 0,
    treasury: 0
  })

  const rollDiceHandler = useCallback(() => {
    if (isRolling) return
    
    setIsRolling(true)
    setGameState('playing')
    
    // Animate dice rolling
    const rollInterval = setInterval(() => {
      setDice([
        rollDice(),
        rollDice(),
        rollDice()
      ])
    }, 100)
    
    setTimeout(() => {
      clearInterval(rollInterval)
      const finalDice = [
        rollDice(),
        rollDice(),
        rollDice()
      ]
      setDice(finalDice)
      setIsRolling(false)
      
      // Calculate score
      const total = calculateDiceTotal(finalDice)
      setScore(prev => prev + total)
      
      // Update kingdom based on score
      updateKingdom(total)
    }, 2000)
  }, [isRolling])

  const updateKingdom = (points) => {
    setKingdom(prev => {
      const newKingdom = { ...prev }
      newKingdom.treasury += points
      
      if (newKingdom.treasury >= KINGDOM_BUILDING.CASTLE_COST && newKingdom.castles < 3) {
        newKingdom.castles++
        newKingdom.treasury -= KINGDOM_BUILDING.CASTLE_COST
      }
      if (newKingdom.treasury >= KINGDOM_BUILDING.TOWER_COST && newKingdom.towers < 5) {
        newKingdom.towers++
        newKingdom.treasury -= KINGDOM_BUILDING.TOWER_COST
      }
      if (newKingdom.treasury >= KINGDOM_BUILDING.WALL_COST && newKingdom.walls < 10) {
        newKingdom.walls++
        newKingdom.treasury -= KINGDOM_BUILDING.WALL_COST
      }
      
      return newKingdom
    })
  }

  const resetGame = () => {
    setGameState('menu')
    setDice([1, 1, 1])
    setScore(0)
    setLevel(1)
    setKingdom({ castles: 1, towers: 0, walls: 0, treasury: 0 })
  }

  const pauseGame = () => {
    setGameState(gameState === 'playing' ? 'paused' : 'playing')
  }

  return {
    gameState,
    dice,
    isRolling,
    score,
    level,
    kingdom,
    rollDice: rollDiceHandler,
    resetGame,
    pauseGame,
    setGameState
  }
}


