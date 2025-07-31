# 🚀 GitHub Pages Deployment Guide

This guide will help you deploy your Islamic Prayer App to GitHub Pages.

## 📋 Prerequisites

1. **GitHub Account** - You need a GitHub account
2. **Git Installed** - Git should be installed on your computer
3. **Web Browser** - Any modern web browser

## 🎯 Step-by-Step Deployment

### Step 1: Create GitHub Repository

1. Go to [GitHub.com](https://github.com) and sign in
2. Click the **"+"** icon in the top right corner
3. Select **"New repository"**
4. Fill in the details:
   - **Repository name**: `prayer-app`
   - **Description**: `Islamic Prayer App with Quran and Location Services`
   - **Visibility**: Choose Public or Private
   - **Initialize**: Check "Add a README file"
5. Click **"Create repository"**

### Step 2: Upload Your Files

#### Option A: Using GitHub Web Interface

1. In your new repository, click **"Add file"** → **"Upload files"**
2. Drag and drop all your files:
   - `index.html`
   - `index-fixed.html`
   - `README.md`
   - `.github/workflows/deploy.yml`
   - Any other files in your project
3. Add a commit message: `"Initial commit: Islamic Prayer App"`
4. Click **"Commit changes"**

#### Option B: Using Git Commands (Recommended)

1. Open your terminal/command prompt
2. Navigate to your project folder:
   ```bash
   cd C:\Users\burha\app1
   ```

3. Initialize Git repository:
   ```bash
   git init
   ```

4. Add all files:
   ```bash
   git add .
   ```

5. Commit the files:
   ```bash
   git commit -m "Initial commit: Islamic Prayer App"
   ```

6. Add your GitHub repository as remote:
   ```bash
   git remote add origin https://github.com/YOUR_USERNAME/prayer-app.git
   ```
   (Replace `YOUR_USERNAME` with your actual GitHub username)

7. Push to GitHub:
   ```bash
   git push -u origin main
   ```

### Step 3: Enable GitHub Pages

1. Go to your repository on GitHub
2. Click **"Settings"** tab
3. Scroll down to **"Pages"** section (in the left sidebar)
4. Under **"Source"**, select **"Deploy from a branch"**
5. Under **"Branch"**, select **"gh-pages"** and click **"Save"**

### Step 4: Configure GitHub Actions

1. In your repository, go to **"Actions"** tab
2. You should see the workflow running automatically
3. Wait for the deployment to complete (usually 2-3 minutes)

### Step 5: Access Your Live App

1. Go to **"Settings"** → **"Pages"**
2. You'll see your live URL: `https://YOUR_USERNAME.github.io/prayer-app/`
3. Click the link to visit your live app!

## 🔧 Customization

### Update Repository URL

In your `index.html` file, update these URLs with your actual GitHub username:

```html
<meta property="og:url" content="https://YOUR_USERNAME.github.io/prayer-app/">
<meta property="twitter:url" content="https://YOUR_USERNAME.github.io/prayer-app/">
```

### Update README

In your `README.md` file, update the demo link:

```markdown
Visit the live application: [Prayer App Demo](https://YOUR_USERNAME.github.io/prayer-app/)
```

## 🌟 Features After Deployment

✅ **Live Website** - Your app will be accessible worldwide  
✅ **HTTPS Secure** - Automatic SSL certificate  
✅ **Custom Domain** - Option to use your own domain  
✅ **Automatic Updates** - Changes push automatically  
✅ **Mobile Optimized** - Works on all devices  

## 🛠️ Troubleshooting

### Common Issues

1. **Page not found (404)**
   - Check that GitHub Pages is enabled
   - Wait a few minutes for deployment
   - Verify the repository is public

2. **Files not showing**
   - Make sure all files are committed to the repository
   - Check that `index.html` is in the root directory

3. **GitHub Actions failing**
   - Check the Actions tab for error messages
   - Ensure the workflow file is in `.github/workflows/deploy.yml`

### Getting Help

- **GitHub Pages Documentation**: https://pages.github.com/
- **GitHub Actions Documentation**: https://docs.github.com/en/actions
- **Create an Issue**: If you need help, create an issue in your repository

## 🎉 Success!

Once deployed, your Islamic Prayer App will be live at:
`https://YOUR_USERNAME.github.io/prayer-app/`

Share this link with friends and family to let them use your beautiful prayer app!

---

**May Allah bless this project and all who use it.** 🤲 