# Global Harvest Logistics - Free Hosting Setup

This guide will help you deploy your Global Harvest Logistics website for free using Vercel.

## Prerequisites

- A GitHub account (free)
- A Vercel account (free)

## Step 1: Push to GitHub

1. **Initialize Git Repository** (if not already done):
   ```bash
   cd "/home/becky/Desktop/logistic web/global-harvest-logistics"
   git init
   git add .
   git commit -m "Initial commit: Global Harvest Logistics website"
   ```

2. **Create a GitHub Repository**:
   - Go to [GitHub.com](https://github.com)
   - Click "New repository"
   - Name it `global-harvest-logistics`
   - Make it public (required for free Vercel hosting)
   - Don't initialize with README
   - Click "Create repository"

3. **Push to GitHub**:
   ```bash
   git remote add origin https://github.com/YOUR_USERNAME/global-harvest-logistics.git
   git branch -M main
   git push -u origin main
   ```

## Step 2: Deploy to Vercel

1. **Go to Vercel**:
   - Visit [vercel.com](https://vercel.com)
   - Sign up with your GitHub account (free)

2. **Import Project**:
   - Click "New Project"
   - Import your `global-harvest-logistics` repository
   - Vercel will automatically detect it's a Next.js project

3. **Configure Deployment**:
   - Framework Preset: Next.js (auto-detected)
   - Root Directory: `./` (default)
   - Build Command: `npm run build` (auto-detected)
   - Output Directory: `.next` (auto-detected)
   - Install Command: `npm install` (auto-detected)

4. **Deploy**:
   - Click "Deploy"
   - Wait for deployment to complete (2-3 minutes)
   - Your site will be live at `https://your-project-name.vercel.app`

## Step 3: Custom Domain (Optional)

1. **Add Custom Domain**:
   - In your Vercel dashboard, go to your project
   - Click "Settings" → "Domains"
   - Add your custom domain (if you have one)

## Features Included

✅ **Responsive Design**: Works on all devices
✅ **Modern UI**: Clean, professional design
✅ **Fast Loading**: Optimized for performance
✅ **SEO Ready**: Meta tags and structured data
✅ **Contact Forms**: Ready for integration
✅ **Multiple Pages**: About, Services, Careers, Contact, etc.

## Free Hosting Benefits

- **100% Free**: No credit card required
- **Automatic HTTPS**: SSL certificates included
- **Global CDN**: Fast loading worldwide
- **Automatic Deployments**: Push to GitHub = auto-deploy
- **Custom Domains**: Add your own domain
- **Analytics**: Built-in performance insights

## Troubleshooting

If you encounter issues:

1. **Build Errors**: Check the Vercel build logs
2. **Missing Pages**: Ensure all pages are properly exported
3. **Styling Issues**: Verify Tailwind CSS is properly configured

## Support

- Vercel Documentation: https://vercel.com/docs
- Next.js Documentation: https://nextjs.org/docs
- GitHub: https://github.com

Your Global Harvest Logistics website is now ready for the world! 🚀
