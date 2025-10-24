import { useState } from 'react'
import { motion } from 'framer-motion'
import { User, Trophy, Coins, Cog, Edit, Camera, Award, Star, Crown } from 'lucide-react'
import './Profile.css'

const Profile = () => {
  const [isEditing, setIsEditing] = useState(false)
  const [userInfo, setUserInfo] = useState({
    username: 'GamerPro123',
    email: 'gamer@example.com',
    level: 15,
    xp: 2500,
    totalWins: 42,
    totalPrizes: 8,
    joinDate: '2023-01-15'
  })

  const achievements = [
    { id: 1, name: 'First Win', description: 'Win your first game', icon: Trophy, unlocked: true },
    { id: 2, name: 'High Roller', description: 'Roll 3 sixes in a row', icon: Star, unlocked: true },
    { id: 3, name: 'Kingdom Builder', description: 'Build 5 castles', icon: Crown, unlocked: false },
    { id: 4, name: 'Prize Collector', description: 'Win 10 prizes', icon: Award, unlocked: false },
  ]

  return (
    <div className="profile">
      <div className="profile-container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="profile-header"
        >
          <div className="profile-avatar">
            <div className="avatar-container">
              <User size={48} />
              <button className="avatar-edit">
                <Camera size={16} />
              </button>
            </div>
            <div className="profile-info">
              <h1>{userInfo.username}</h1>
              <p>Level {userInfo.level} • {userInfo.xp} XP</p>
              <div className="level-progress">
                <div className="progress-bar">
                  <div className="progress-fill" style={{ width: '75%' }}></div>
                </div>
                <span>2,500 / 3,000 XP</span>
              </div>
            </div>
          </div>
          
          <div className="profile-stats">
            <div className="stat">
              <Trophy size={24} />
              <span className="stat-value">{userInfo.totalWins}</span>
              <span className="stat-label">Wins</span>
            </div>
            <div className="stat">
              <Coins size={24} />
              <span className="stat-value">{userInfo.totalPrizes}</span>
              <span className="stat-label">Prizes</span>
            </div>
            <div className="stat">
              <Award size={24} />
              <span className="stat-value">4</span>
              <span className="stat-label">Achievements</span>
            </div>
          </div>
        </motion.div>

        <div className="profile-content">
          <div className="profile-sections">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="profile-section"
            >
              <div className="section-header">
                <h2>Profile Information</h2>
                <button 
                  onClick={() => setIsEditing(!isEditing)}
                  className="edit-button"
                >
                  <Edit size={16} />
                  {isEditing ? 'Save' : 'Edit'}
                </button>
              </div>
              
              <div className="info-form">
                <div className="form-group">
                  <label>Username</label>
                  <input 
                    type="text" 
                    value={userInfo.username}
                    disabled={!isEditing}
                    onChange={(e) => setUserInfo({...userInfo, username: e.target.value})}
                  />
                </div>
                <div className="form-group">
                  <label>Email</label>
                  <input 
                    type="email" 
                    value={userInfo.email}
                    disabled={!isEditing}
                    onChange={(e) => setUserInfo({...userInfo, email: e.target.value})}
                  />
                </div>
                <div className="form-group">
                  <label>Member Since</label>
                  <input 
                    type="text" 
                    value={new Date(userInfo.joinDate).toLocaleDateString()}
                    disabled
                  />
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="profile-section"
            >
              <h2>Achievements</h2>
              <div className="achievements-grid">
                {achievements.map((achievement) => (
                  <div 
                    key={achievement.id}
                    className={`achievement-card ${achievement.unlocked ? 'unlocked' : 'locked'}`}
                  >
                    <div className="achievement-icon">
                      <achievement.icon size={24} />
                    </div>
                    <div className="achievement-info">
                      <h3>{achievement.name}</h3>
                      <p>{achievement.description}</p>
                    </div>
                    {achievement.unlocked && (
                      <div className="achievement-badge">
                        <Award size={16} />
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Profile
