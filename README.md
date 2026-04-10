# portfolio-site

My personal portfolio site showcasing my software development, design, and art projects.
It has a slick, responsive design that looks good on mobile, tablet and desktop.
Features multiple themes and Irish language support in Cló Gaelach font.

Check it out at www.liamroddy.dev

## 🛠️ Built With

- **React 18** - Modern React with hooks
- **TypeScript** - Type-safe JavaScript
- **Vite** - Fast build tool and development server
- **Material-UI (MUI)** - React component library
- **Sass** - CSS preprocessor
- **React Responsive Carousel** - Image carousel component

## 🚀 Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn

### Installation

1. Clone the repository
```bash
git clone https://github.com/liamroddy/portfolio-site.git
cd portfolio-site
```

2. Install dependencies
```bash
npm install
```

## 📋 Available Scripts

### `npm run dev`

Runs the app in development mode with Vite's fast HMR.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload instantly when you make changes.\
TypeScript errors and warnings will be shown in the console.

### `npm run build`

Builds the app for production to the `dist` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

### `npm run preview`

Locally preview the production build.\
Useful for testing the production build before deployment.

### `npm run deploy`

Deploys the built app to GitHub Pages.\
Runs `npm run build` first, then deploys the `dist` folder to the `gh-pages` branch.

## 📁 Project Structure

```
src/
├── components/          # React components
│   ├── Article.tsx     # Project showcase cards
│   ├── Header.tsx      # Site header with navigation
│   ├── MainBody.tsx    # Main content area
│   ├── BackgroundHolder.tsx # Background styling
│   └── DarkModeSwitch.tsx   # Theme toggle component
├── images/             # Static images and assets
├── App.tsx            # Main app component
├── main.tsx           # App entry point
├── Themes.ts          # MUI theme configuration
├── config.ts          # App configuration constants
└── vite-env.d.ts      # Vite type definitions
```

## 🚀 Deployment

This site is automatically deployed to GitHub Pages using the `gh-pages` package:

1. Build the project: `npm run build`
2. Deploy to GitHub Pages: `npm run deploy`

The site will be available at: https://www.liamroddy.dev/

## 🔧 Development

This project was migrated from Create React App to Vite for better performance and modern tooling:

- **Fast HMR**: Instant hot module replacement during development
- **TypeScript**: Full type safety and better IDE support
- **Modern Build**: Optimized bundling with Rollup
- **Better DX**: Improved developer experience with faster builds
