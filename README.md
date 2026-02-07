# commitlint.io

commit message lint online, commitlint online.

## Project setup
```bash
npm install

# extract lint options (runs automatically during install)
npm run prepare
```

**Note**: The `npm run patch` command is no longer required with the updated dependencies.

### Compiles and hot-reloads for development
```bash
npm run serve
```

### Compiles and minifies for production
```bash
npm run build
```

### Lints and fixes files
```bash
npm run lint
```

## Deployment on Vercel

This project is configured for deployment on Vercel. The `vercel.json` configuration file is included with the proper settings.

To deploy:
1. Connect your repository to Vercel
2. Vercel will automatically detect the Vue.js framework
3. The build will use the settings from `vercel.json`

## Tech Stack

- **Framework**: Vue.js 2.7
- **Build Tool**: Vue CLI 5
- **Linting**: ESLint 8 with Vue plugin
- **Commit Linting**: commitlint v19
- **Styling**: Bootstrap Vue 2
- **Deployment**: Vercel
