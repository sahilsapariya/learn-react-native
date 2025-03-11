# Learning React-Native

## Folder Structure
```
/your-project-root
│── /src
│   │── /api                # API handling
│   │   ├── apiClient.ts    # Axios or Fetch client setup
│   │   ├── auth.ts         # Authentication-related API calls
│   │   ├── user.ts         # User-related API calls
│   │── /assets             # Static assets (images, fonts, etc.)
│   │── /common             # Common utilities and helpers
│   │   ├── /components     # Reusable UI components
│   │   ├── /hooks          # Custom hooks
│   │   ├── /handlers       # Custom handlers (e.g., local storage, formatting)
│   │   ├── /context        # Context API providers
│   │   ├── /interfaces     # TypeScript interfaces
│   |   |   ├── /components # component interfaces
│   |   |   ├── /hooks      # hook interfaces
│   |   |   ├── /context    # context interfaces
│   |   |   ├── /services   # service interfaces
│   |   |   ├── /schemas    # schema interfaces
│   |   |   ├── /store      # store interfaces
│   |   |   ├── /utils      # utility interfaces
│   |   |   ├── /api        # API response interfaces
│   │   │   ├── /common     # Common interfaces
│   │   │   ├── /auth       # Auth-related interfaces
|   |   |   |── index.ts    # Export all interfaces
│   │   ├── /services       # General services (e.g., analytics, logging)
│   │   ├── /wrappers       # Higher order components (HOCs)

│   │── /config             # Configuration files
│   │   ├── theme.ts        # Theme configurations
│   │   ├── env.ts          # Environment variables
│   │   ├── routes.ts       # Navigation constants
│   │── /constants          # Static app-wide constants
│   │   ├── colors.ts       # Color palette
│   │   ├── strings.ts      # String constants
│   │── /features           # Modularized feature-based structure
│   │   ├── /auth           # Authentication feature
│   │   │   ├── screens     # Screens specific to auth
│   │   │   ├── components  # Components specific to auth
│   │   │   ├── hooks       # Hooks specific to auth
│   │   │   ├── services    # Services specific to auth
│   │── /navigation         # Navigation-related files
│   │   ├── AppNavigator.ts # Main app navigation setup
│   │   ├── AuthNavigator.ts# Auth stack navigation
    |── /screens
            ├── Home
            │   ├── index.tsx         # Home screen component
            │   ├── styles.ts         # Styles specific to this screen
            │   ├── components/       # UI components specific to Home
            ├── Settings
            │   ├── index.tsx         # Settings screen
            │   ├── styles.ts
│   │── /schemas            # Validation schemas (Zod, Yup, etc.)
│   │── /store              # State management (Redux, Zustand, etc.)
│   │   ├── slices          # Redux slices
│   │   ├── store.ts        # Store configuration
│   │── /translations       # Internationalization (i18n)
│   │── /utils              # General utility functions
│   │   ├── debounce.ts     # Example utility
│   │   ├── formatDate.ts   # Another example utility
│── App.tsx                 # Root app file
│── index.tsx               # Entry point
│── package.json
│── tsconfig.json
│── .gitignore
│── README.md

```