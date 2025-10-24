import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { Trophy, Star, Users, Timer, Play, Crown, Zap } from 'lucide-react'
import './Games.css'

const Games = () => {
  const games = [
    {
      id: 1,
      title: 'Prize Kingdoms',
      description: 'Build your empire, battle rivals, and win real prizes in this strategic kingdom-building game.',
      image: '/api/placeholder/400/300',
      players: '10K+',
      rating: 4.9,
      prizes: '$50K+',
      difficulty: 'Medium',
      category: 'Strategy',
      featured: true,
    },
    {
      id: 2,
      title: 'Dice Masters',
      description: 'Roll the dice and climb the leaderboard in this fast-paced dice rolling competition.',
      image: '/api/placeholder/400/300',
      players: '5K+',
      rating: 4.7,
      prizes: '$25K+',
      difficulty: 'Easy',
      category: 'Luck',
      featured: false,
    },
    {
      id: 3,
      title: 'Battle Arena',
      description: 'Fight your way through epic battles and claim victory rewards in this action-packed game.',
      image: '/api/placeholder/400/300',
      players: '8K+',
      rating: 4.8,
      prizes: '$75K+',
      difficulty: 'Hard',
      category: 'Action',
      featured: true,
    },
    {
      id: 4,
      title: 'Treasure Hunt',
      description: 'Explore mysterious lands, solve puzzles, and discover hidden treasures.',
      image: '/api/placeholder/400/300',
      players: '3K+',
      rating: 4.6,
      prizes: '$30K+',
      difficulty: 'Medium',
      category: 'Adventure',
      featured: false,
    },
    {
      id: 5,
      title: 'Card Champions',
      description: 'Master the art of card games and compete for championship titles and prizes.',
      image: '/api/placeholder/400/300',
      players: '6K+',
      rating: 4.5,
      prizes: '$40K+',
      difficulty: 'Medium',
      category: 'Card',
      featured: false,
    },
    {
      id: 6,
      title: 'Racing Legends',
      description: 'Speed through tracks, upgrade your vehicles, and race for the ultimate prize.',
      image: '/api/placeholder/400/300',
      players: '4K+',
      rating: 4.4,
      prizes: '$35K+',
      difficulty: 'Easy',
      category: 'Racing',
      featured: false,
    },
  ]

  const categories = ['All', 'Strategy', 'Action', 'Adventure', 'Card', 'Racing', 'Luck']
  const difficulties = ['All', 'Easy', 'Medium', 'Hard']

  return (
    <div className="games">
      <div className="games-container">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="games-header"
        >
          <h1>Our Games</h1>
          <p>Choose from our collection of exciting games and start winning real prizes</p>
        </motion.div>

        {/* Filters */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="games-filters"
        >
          <div className="filter-group">
            <h3>Categories</h3>
            <div className="filter-buttons">
              {categories.map((category) => (
                <button
                  key={category}
                  className={`filter-btn ${category === 'All' ? 'active' : ''}`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
          
          <div className="filter-group">
            <h3>Difficulty</h3>
            <div className="filter-buttons">
              {difficulties.map((difficulty) => (
                <button
                  key={difficulty}
                  className={`filter-btn ${difficulty === 'All' ? 'active' : ''}`}
                >
                  {difficulty}
                </button>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Games Grid */}
        <div className="games-grid">
          {games.map((game, index) => (
            <motion.div
              key={game.id}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className={`game-card ${game.featured ? 'featured' : ''}`}
            >
              {game.featured && (
                <div className="featured-badge">
                  <Crown size={16} />
                  Featured
                </div>
              )}
              
              <div className="game-image">
                <div className="game-placeholder">
                  <Play size={48} />
                </div>
                <div className="game-overlay">
                  <Link to={`/prize-kingdoms`} className="play-button">
                    <Play size={20} />
                    Play Now
                  </Link>
                </div>
              </div>
              
              <div className="game-content">
                <div className="game-header">
                  <h3>{game.title}</h3>
                  <div className="game-rating">
                    <Star size={16} fill="currentColor" />
                    <span>{game.rating}</span>
                  </div>
                </div>
                
                <p className="game-description">{game.description}</p>
                
                <div className="game-stats">
                  <div className="stat">
                    <Users size={16} />
                    <span>{game.players} players</span>
                  </div>
                  <div className="stat">
                    <Trophy size={16} />
                    <span>{game.prizes} prizes</span>
                  </div>
                  <div className="stat">
                    <Zap size={16} />
                    <span>{game.difficulty}</span>
                  </div>
                </div>
                
                <div className="game-footer">
                  <span className="game-category">{game.category}</span>
                  <Link to={`/prize-kingdoms`} className="game-link">
                    Play Game
                    <Play size={16} />
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="games-cta"
        >
          <h2>Ready to Start Playing?</h2>
          <p>Join thousands of players and start winning real prizes today</p>
          <Link to="/prize-kingdoms" className="cta-button">
            <Trophy size={20} />
            Start Playing Now
          </Link>
        </motion.div>
      </div>
    </div>
  )
}

export default Games
