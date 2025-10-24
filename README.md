🪙 Ink Game Clone (Prize Kingdoms)
⚡ Overview

Prize Kingdoms is a clone of the popular Ink Game — recreated completely from scratch using modern web technologies.
This version was built 100% inside Cursor
 and debugged, optimized, and structured with ChatGPT (GPT-5)
.

It captures the same style of gameplay as Ink’s interactive dice-based prize system — while being fully open-source, customizable, and animated using Framer Motion.

🚀 Features

🎲 Dice-Based Gameplay — Roll dice to earn points and progress through levels.

🏰 Kingdom Building System — Build castles, towers, and walls with your earnings.

🏆 Prize Unlock System — Unlock in-game prizes as you increase your score.

💫 Smooth Animations — Fully animated UI using Framer Motion.

🧠 React Hooks Logic — Uses useState and useEffect for clean state management.

🎨 Modern UI/UX — Minimal design with responsive layouts.

⚙️ Fully Modular Codebase — Easy to extend, restyle, or integrate into other projects.

🧩 Tech Stack
Category	Technology	Purpose
Frontend Framework	React
	UI components and logic
Animation Library	Framer Motion
	Animations and transitions
Icons	Lucide React
	Clean, lightweight icon set
Routing	React Router DOM
	Page navigation
Styling	Custom CSS	Handles layout, colors, responsiveness
Development Tool	Cursor
	Used for the entire build
Debugging & Optimization	ChatGPT (GPT-5)
	Debugging and logic refinement
🛠️ Installation & Setup

Clone this repository

git clone https://github.com/yourusername/ink-game-clone.git
cd ink-game-clone


Install dependencies

npm install


Run locally

npm run dev


Open https://ink-games-omega.vercel.app/
 in your browser.

📂 Project Structure
ink-game-clone/
│
├── src/
│   ├── components/
│   │   └── PrizeKingdoms.jsx      # Main game component
│   ├── pages/
│   │   └── Home.jsx               # Landing page
│   ├── styles/
│   │   └── PrizeKingdoms.css      # Custom styling
│   ├── App.jsx                    # Router and layout setup
│   └── main.jsx                   # React entry point
│
├── package.json                   # Dependencies
├── vite.config.js                 # Build config
└── README.md                      # Project documentation

🧠 Game Mechanics

Dice Roll: Generates random dice values (1–6).

Score Calculation: Sums up dice totals.

Leveling: Player levels up automatically at score milestones.

Kingdom Progression: Adds towers, castles, and walls based on treasury balance.

Prize Unlocking: Unlocks new prizes as the player’s score grows.

Reset / Pause Controls: Built-in pause and restart functionality.

🎨 Visual Design

Theme: Royal gold & dark background for contrast.

Icons: Crown, Trophy, Sword, Shield, Coins, etc. from Lucide-React.

Motion: Smooth animations for dice, menus, and transitions via Framer Motion.

Responsiveness: Works on desktop and mobile devices.

💡 Future Additions

🧩 Multiplayer leaderboard

🔐 Login & user progress storage (Firebase/Supabase)

🪙 Real reward integration

🔊 Sound effects and haptic feedback

💰 Blockchain-based prize system

👑 Credits

Original Inspiration: Ink Game

Rebuilt By: [Your Name or GitHub handle]

Developed 100% Using: Cursor

Debugged & Optimized By: ChatGPT (GPT-5)

Year: 2025

🏁 License

This project is open-source under the MIT License.
You may use, modify, and redistribute it — just credit the original creator (Ink) and this rebuild.
