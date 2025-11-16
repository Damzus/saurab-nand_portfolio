# Saurab Nand | Personal Portfolio

A modern, responsive portfolio website built with React, TypeScript, and Vite.

🌐 **Live Demo:** [https://damzus.github.io/saurab-nand_portfolio/](https://damzus.github.io/saurab-nand_portfolio/)

## Tech Stack

- **React 19** - UI library
- **TypeScript** - Type safety
- **Vite** - Build tool and dev server
- **Tailwind CSS** - Styling (assumed based on project structure)

## Run Locally

**Prerequisites:** Node.js (v16 or higher recommended)

1. Clone the repository:

   ```bash
   git clone https://github.com/Damzus/saurab-nand_portfolio.git
   cd saurab-nand_portfolio
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Start the development server:

   ```bash
   npm run dev
   ```

4. Open your browser and visit `http://localhost:5173`

## Build for Production

```bash
npm run build
```

The built files will be in the `dist` directory.

## Preview Production Build

```bash
npm run preview
```

## Deployment

This site is automatically deployed to GitHub Pages via GitHub Actions whenever you push to the `main` branch.

### Manual Deployment Steps

If you need to deploy manually or set up GitHub Pages for the first time:

1. Push your changes to GitHub:
   ```bash
   git add .
   git commit -m "Deploy to GitHub Pages"
   git push origin main
   ```

2. Go to your GitHub repository settings:
   - Navigate to **Settings** > **Pages**
   - Under **Source**, select **GitHub Actions**
   - The workflow will automatically build and deploy your site

3. Your site will be live at: `https://damzus.github.io/saurab-nand_portfolio/`

### Deployment Status

Check the **Actions** tab in your GitHub repository to monitor deployment progress.
