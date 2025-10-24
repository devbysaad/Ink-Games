import { useState } from 'react'
import { motion } from 'framer-motion'
import { CreditCard, Send, Download, History, Shield, Zap, DollarSign, Users, TrendingUp } from 'lucide-react'
import './INKPay.css'

const INKPay = () => {
  const [activeTab, setActiveTab] = useState('send')
  const [amount, setAmount] = useState('')
  const [recipient, setRecipient] = useState('')
  const [message, setMessage] = useState('')

  const tabs = [
    { id: 'send', label: 'Send Money', icon: Send },
    { id: 'receive', label: 'Receive', icon: Download },
    { id: 'history', label: 'History', icon: History },
  ]

  const recentTransactions = [
    { id: 1, type: 'sent', amount: 50, recipient: 'Player123', time: '2 hours ago', status: 'completed' },
    { id: 2, type: 'received', amount: 25, sender: 'Gamer456', time: '1 day ago', status: 'completed' },
    { id: 3, type: 'sent', amount: 100, recipient: 'Winner789', time: '3 days ago', status: 'completed' },
  ]

  const handleSendMoney = (e) => {
    e.preventDefault()
    // Handle send money logic
    console.log('Sending money:', { amount, recipient, message })
  }

  return (
    <div className="inkpay">
      <div className="inkpay-container">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="inkpay-header"
        >
          <div className="header-content">
            <div className="header-text">
              <h1>INKPay</h1>
              <p>Secure peer-to-peer payments for gamers</p>
            </div>
            <div className="header-stats">
              <div className="stat">
                <DollarSign size={20} />
                <span>Balance: $1,250.00</span>
              </div>
              <div className="stat">
                <Users size={20} />
                <span>Connected: 15</span>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Main Content */}
        <div className="inkpay-content">
          {/* Navigation Tabs */}
          <div className="tab-navigation">
            {tabs.map((tab) => {
              const Icon = tab.icon
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`tab-button ${activeTab === tab.id ? 'active' : ''}`}
                >
                  <Icon size={20} />
                  <span>{tab.label}</span>
                </button>
              )
            })}
          </div>

          {/* Tab Content */}
          <div className="tab-content">
            {/* Send Money Tab */}
            {activeTab === 'send' && (
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                className="send-money"
              >
                <div className="form-container">
                  <h2>Send Money</h2>
                  <form onSubmit={handleSendMoney} className="send-form">
                    <div className="form-group">
                      <label>Amount</label>
                      <div className="amount-input">
                        <DollarSign size={20} />
                        <input
                          type="number"
                          value={amount}
                          onChange={(e) => setAmount(e.target.value)}
                          placeholder="0.00"
                          required
                        />
                      </div>
                    </div>

                    <div className="form-group">
                      <label>Recipient</label>
                      <input
                        type="text"
                        value={recipient}
                        onChange={(e) => setRecipient(e.target.value)}
                        placeholder="Enter username or email"
                        required
                      />
                    </div>

                    <div className="form-group">
                      <label>Message (Optional)</label>
                      <textarea
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        placeholder="Add a note..."
                        rows="3"
                      />
                    </div>

                    <motion.button
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      type="submit"
                      className="send-button"
                    >
                      <Send size={20} />
                      Send Money
                    </motion.button>
                  </form>
                </div>

                <div className="quick-actions">
                  <h3>Quick Send</h3>
                  <div className="quick-amounts">
                    {[10, 25, 50, 100].map((quickAmount) => (
                      <button
                        key={quickAmount}
                        onClick={() => setAmount(quickAmount.toString())}
                        className="quick-amount"
                      >
                        ${quickAmount}
                      </button>
                    ))}
                  </div>
                </div>
              </motion.div>
            )}

            {/* Receive Money Tab */}
            {activeTab === 'receive' && (
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                className="receive-money"
              >
                <div className="receive-content">
                  <h2>Receive Money</h2>
                  <div className="qr-code">
                    <div className="qr-placeholder">
                      <CreditCard size={64} />
                    </div>
                    <p>Share this QR code to receive payments</p>
                  </div>
                  
                  <div className="payment-link">
                    <label>Payment Link</label>
                    <div className="link-container">
                      <input
                        type="text"
                        value="inkpay.com/pay/your-username"
                        readOnly
                      />
                      <button className="copy-button">Copy</button>
                    </div>
                  </div>

                  <div className="security-features">
                    <h3>Security Features</h3>
                    <div className="features-list">
                      <div className="feature">
                        <Shield size={20} />
                        <span>End-to-end encryption</span>
                      </div>
                      <div className="feature">
                        <Zap size={20} />
                        <span>Instant transfers</span>
                      </div>
                      <div className="feature">
                        <TrendingUp size={20} />
                        <span>Low fees</span>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            )}

            {/* History Tab */}
            {activeTab === 'history' && (
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                className="transaction-history"
              >
                <h2>Transaction History</h2>
                <div className="transactions-list">
                  {recentTransactions.map((transaction) => (
                    <motion.div
                      key={transaction.id}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: transaction.id * 0.1 }}
                      className="transaction-item"
                    >
                      <div className="transaction-icon">
                        {transaction.type === 'sent' ? (
                          <Send size={20} />
                        ) : (
                          <Download size={20} />
                        )}
                      </div>
                      <div className="transaction-details">
                        <div className="transaction-info">
                          <span className="transaction-type">
                            {transaction.type === 'sent' ? 'Sent to' : 'Received from'}
                          </span>
                          <span className="transaction-user">
                            {transaction.type === 'sent' ? transaction.recipient : transaction.sender}
                          </span>
                        </div>
                        <div className="transaction-amount">
                          <span className={`amount ${transaction.type}`}>
                            {transaction.type === 'sent' ? '-' : '+'}${transaction.amount}
                          </span>
                          <span className="transaction-time">{transaction.time}</span>
                        </div>
                      </div>
                      <div className="transaction-status">
                        <span className={`status ${transaction.status}`}>
                          {transaction.status}
                        </span>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

export default INKPay
