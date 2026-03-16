# Gabsolution Website

Professional, bilingual (EN/FR) website for Gabsolution, an IT company based in Montreal.

## Features
- **Bilingual Support:** Switch between English and French with a single click.
- **Modern UI:** Responsive design built with React and Vanilla CSS.
- **Service Focused:** Highlights OS Installation (Windows/Linux) and Remote Support.
- **Optimized for GitHub Pages:** Easy deployment process.

## Local Development

1. **Install Dependencies:**
   ```bash
   npm install
   ```

2. **Run Development Server:**
   ```bash
   npm run dev
   ```

3. **Build for Production:**
   ```bash
   npm run build
   ```

## Deployment to GitHub Pages

### Option 1: Manual Deployment
1. Run `npm run build`.
2. Push the contents of the `dist` folder to a `gh-pages` branch.
3. In your GitHub repository settings, go to **Pages** and set the source to the `gh-pages` branch.

### Option 2: GitHub Actions (Recommended)
1. Push your code to the `main` branch.
2. Go to **Settings > Pages** in your GitHub repository.
3. Under **Build and deployment > Source**, select **GitHub Actions**.
4. Use a standard static site deployment action (like `actions/deploy-pages`).

## Custom Domain Configuration
For `gabsolution.ca`:
1. In the root of your project, create a file named `CNAME` (no extension) with only the text `gabsolution.ca`.
2. In your DNS provider (where you bought the domain), set up:
   - **A Records:** Pointing to GitHub Pages IPs.
   - **CNAME Record:** `www` pointing to `<your-username>.github.io`.

## Credits
- **Logos:** Provided by Gabsolution.
- **Tech:** React, Vite, TypeScript, Vanilla CSS.
