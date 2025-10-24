# INK Games - Project Structure

## 📁 Folder Organization

```
src/
├── components/           # Reusable UI components
│   ├── layout/          # Layout components (Header, Footer)
│   │   ├── Header.jsx
│   │   ├── Header.css
│   │   ├── Footer.jsx
│   │   └── Footer.css
│   ├── forms/           # Form components
│   │   ├── AuthModal.jsx
│   │   └── AuthModal.css
│   └── ui/              # Generic UI components (future)
├── pages/               # Page components
│   ├── games/           # Game-related pages
│   │   ├── Games.jsx
│   │   ├── Games.css
│   │   ├── PrizeKingdoms.jsx
│   │   └── PrizeKingdoms.css
│   ├── payments/       # Payment-related pages
│   │   ├── INKPay.jsx
│   │   └── INKPay.css
│   ├── auth/           # Authentication pages (future)
│   ├── Home.jsx        # Homepage
│   ├── Home.css
│   ├── Profile.jsx     # User profile
│   ├── Profile.css
│   ├── PrizeVault.jsx  # Prize collection
│   └── PrizeVault.css
├── hooks/              # Custom React hooks
│   ├── useAuth.js      # Authentication logic
│   └── useGame.js      # Game state management
├── utils/              # Utility functions
│   └── index.js        # Helper functions
├── constants/          # Application constants
│   └── index.js        # Game rules, UI constants
├── assets/             # Static assets
│   ├── images/         # Image files
│   └── icons/          # Icon files
├── App.jsx             # Main application component
├── App.css             # Global styles
├── main.jsx            # Application entry point
└── index.js            # Export index
```

## 🎯 Component Organization

### Layout Components (`components/layout/`)
- **Header**: Navigation, authentication, mobile menu
- **Footer**: Site links, social media, legal info

### Form Components (`components/forms/`)
- **AuthModal**: Login/register modal with validation

### Game Pages (`pages/games/`)
- **Games**: Browse and filter available games
- **PrizeKingdoms**: Interactive dice game with kingdom building

### Payment Pages (`pages/payments/`)
- **INKPay**: Peer-to-peer payment system

## 🪝 Custom Hooks

### `useAuth.js`
- User authentication state
- Login/logout functionality
- Persistent user sessions

### `useGame.js`
- Game state management
- Dice rolling logic
- Kingdom building mechanics

## 🛠️ Utilities

### `utils/index.js`
- Currency formatting
- Number formatting
- Dice rolling functions
- Local storage helpers
- Email validation
- Password strength validation
- Rarity color/icon helpers

## 📊 Constants

### `constants/index.js`
- Game types and difficulty levels
- Prize rarity definitions
- Animation durations
- Responsive breakpoints
- Kingdom building costs
- API endpoints (for future use)

## 🎨 Styling Organization

Each component has its own CSS file:
- `ComponentName.css` - Component-specific styles
- `App.css` - Global styles and utilities
- Responsive design with mobile-first approach

## 🚀 Benefits of This Structure

1. **Scalability**: Easy to add new features
2. **Maintainability**: Clear separation of concerns
3. **Reusability**: Components can be easily reused
4. **Organization**: Logical grouping of related files
5. **Performance**: Better code splitting opportunities
6. **Team Collaboration**: Clear structure for multiple developers

## 📝 Future Enhancements

- Add more game types in `pages/games/`
- Create authentication pages in `pages/auth/`
- Add more UI components in `components/ui/`
- Implement API integration
- Add testing structure
- Add documentation for each component


