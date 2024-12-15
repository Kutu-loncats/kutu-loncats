kutu-loncats.github.io/
├── backend/                # Backend code
│   ├── app.js              # Entry point for the backend
│   ├── db.js               # Database connection file
│   ├── .env                # Environment variables
│   ├── routes/             # API routes
│   │   ├── games.js        # Game logic (house edge, payouts, results)
│   │   ├── users.js        # User management (signup, login, wallet)
│   │   ├── admin.js        # Admin controls
│   │   ├── wallet.js       # Wallet transactions (deposit, withdrawal)
│   │   ├── affiliate.js    # Affiliate system
│   │   ├── wager.js        # Wager tracking
│   ├── models/             # Database models (optional, if using an ORM)
│   ├── migrations/         # SQL migration scripts
│       ├── 001_create_schema.sql
├── frontend/               # Frontend code (React)
│   ├── public/             # Public assets (images, stylesheets)
│   ├── src/                # React source code
│   │   ├── App.js          # Main app entry point
│   │   ├── components/     # React components
│   │   │   ├── Game.jsx    # Game animations and play logic
│   │   │   ├── Wallet.jsx  # Deposit, withdrawal, wallet balance
│   │   │   ├── WagerStats.jsx # Wager statistics display
│   │   │   ├── Affiliate.jsx # Affiliate link and earnings
│   │   │   ├── Admin.jsx   # Admin dashboard
│   │   ├── services/       # API service files for React
│   │   │   ├── gameApi.js  # Game-related API functions
│   │   │   ├── userApi.js  # User-related API functions
│   │   │   ├── adminApi.js # Admin-related API functions
│   │   │   ├── wagerApi.js # Wager tracking API functions
│   ├── index.js            # React entry file
├── package.json            # Node.js dependencies and scripts
└── README.md               # Project documentation
