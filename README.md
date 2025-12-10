# Astro 5 and Strapi 5 Example Project

This is an example project showcasing Astro 5 and Strapi 5 integration. It demonstrates how to build a modern, dynamic website with a landing page, blog, and content management system using the headless CMS architecture.

Uses the **strapi-community-astro-loader-v2** to seamlessly fetch data from Strapi for pages and articles.

![Screenshot of the project](./img/0-intro.gif)

## 🚀 Live Demo

- **Frontend (Astro)**: https://client-n0mu8cpps-simons-projects-5e69799b.vercel.app
- **Backend (Strapi Admin)**: https://valuable-sunrise-50399a7a25.strapiapp.com/admin

## 📋 Prerequisites

Before you begin, ensure you have the following installed:

- **Node.js**: Version 20.18.2 to 22.x.x (recommended: 22.x)
- **Yarn**: Package manager
- **Git**: Version control
- **nvm** (recommended): Node Version Manager

### Installing Node.js 22 with nvm

```bash
# Install nvm (if not already installed)
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.7/install.sh | bash

# Load nvm
export NVM_DIR="$HOME/.nvm"
[ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh"

# Install and use Node.js 22
nvm install 22
nvm use 22
nvm alias default 22

# Verify installation
node -v  # Should show v22.x.x
```

## 🛠️ Local Development Setup

### 1. Clone the Repository

```bash
git clone https://github.com/simoneramo/astro-strapi-example-project.git
cd astro-strapi-example-project
```

### 2. Install Dependencies

Make sure you're using Node.js 22:

```bash
nvm use 22
yarn setup
```

This command will:
- Install root dependencies
- Install client (Astro) dependencies
- Install server (Strapi) dependencies
- Set up environment files

### 3. Seed the Database

Populate your local Strapi with sample content:

```bash
yarn seed
```

This imports:
- 6 blog articles
- 2 pages (Home, About)
- Sample authors and tags
- Media assets

### 4. Start Development Servers

Start both Astro and Strapi simultaneously:

```bash
yarn dev
```

This will start:
- **Strapi Backend**: http://localhost:1337
- **Strapi Admin**: http://localhost:1337/admin
- **Astro Frontend**: http://localhost:4323 (or next available port)

#### Or start servers individually:

```bash
# Terminal 1 - Start Strapi
cd server
yarn develop

# Terminal 2 - Start Astro
cd client
yarn dev
```

### 5. Access the Applications

- **Astro Website**: http://localhost:4323
- **Strapi Admin Panel**: http://localhost:1337/admin
  - Create an admin account on first visit
  - Username/email and password of your choice

## 📁 Project Structure

```
astro-strapi-example-project/
├── client/                  # Astro frontend application
│   ├── src/
│   │   ├── components/      # Reusable UI components
│   │   ├── layouts/         # Page layouts
│   │   ├── pages/           # Astro pages & routes
│   │   ├── utils/           # Utility functions & Strapi client
│   │   └── content.config.ts # Content collections config
│   ├── public/              # Static assets
│   ├── package.json
│   └── vercel.json          # Vercel deployment config
│
├── server/                  # Strapi backend application
│   ├── src/
│   │   ├── api/             # API endpoints & content types
│   │   ├── components/      # Reusable content components
│   │   └── extensions/      # Strapi extensions
│   ├── database/            # SQLite database (local only)
│   ├── public/              # Uploaded media files
│   ├── package.json
│   └── seed-data.tar.gz     # Sample data export
│
├── package.json             # Root package.json
└── README.md
```

## 🎨 Features

### Astro Pages

#### Home Page
The landing page with dynamic blocks fetched from Strapi:
- Hero section with CTA buttons
- Card grids
- Content with images
- Newsletter signup
- And more...

![Screenshot of the home page](./img/001-astro-client-hero.png)

#### Dynamic Pages
Create pages directly from Strapi admin with flexible block-based content:

![Screenshot of Strapi dynamic page](./img/003-strapi-client-dynamic-page.png)

#### Blog
Paginated blog listing with articles pulled from Strapi:

![Screenshot of the blog page](./img/005-astro-client-blog.png)

#### Article Pages
Individual blog posts with:
- Featured images
- Author information
- Tags/categories
- Dynamic block content
- Markdown support

![Screenshot of article page](./img/007-strapi-client-article-page.png)

#### Global Components
Header and footer managed through Strapi for site-wide consistency:

![Screenshot of global header](./img/009-strapi-client-global-page-header.png)

## 🚢 Production Deployment

### Deploy to Strapi Cloud

1. **Sign up for Strapi Cloud**: https://cloud.strapi.io/

2. **Create a new project**:
   - Import from GitHub
   - Select the `server` folder as root directory
   - Choose your region
   - Select a plan (Free tier available)

3. **Deploy and wait** for the build to complete

4. **Create admin account** when redirected to the registration page

5. **Transfer local data to Strapi Cloud**:

```bash
cd server
nvm use 22

# Get transfer token from Strapi Cloud:
# Settings → Transfer Tokens → Create new token (Full Access)

yarn strapi transfer \
  --to https://your-project.strapiapp.com/admin \
  --to-token YOUR_TRANSFER_TOKEN
```

### Deploy to Vercel

1. **Install Vercel CLI** (if not already installed):

```bash
npm i -g vercel
```

2. **Login to Vercel**:

```bash
vercel login
```

3. **Deploy from client directory**:

```bash
cd client
vercel --prod
```

4. **Set environment variables in Vercel**:

```bash
# Add Strapi URL for all environments
echo "https://your-project.strapiapp.com" | vercel env add STRAPI_BASE_URL production
echo "https://your-project.strapiapp.com" | vercel env add STRAPI_BASE_URL preview
echo "https://your-project.strapiapp.com" | vercel env add STRAPI_BASE_URL development

# Also add VITE_ prefixed version for client-side
echo "https://your-project.strapiapp.com" | vercel env add VITE_STRAPI_BASE_URL production
echo "https://your-project.strapiapp.com" | vercel env add VITE_STRAPI_BASE_URL preview
echo "https://your-project.strapiapp.com" | vercel env add VITE_STRAPI_BASE_URL development
```

5. **Redeploy to apply environment variables**:

```bash
vercel --prod
```

### Alternative: Deploy via GitHub Integration

1. **Connect your repository** to Vercel
2. **Set root directory** to `client`
3. **Add environment variables** in Vercel dashboard
4. **Push to GitHub** - Vercel will auto-deploy!

## 🔄 Development Workflow

### Working Locally

```bash
# Start development servers
yarn dev

# Make changes to Astro components or Strapi content
# Both will hot-reload automatically

# Access:
# - Astro site: http://localhost:4323
# - Strapi admin: http://localhost:1337/admin
```

### Deploying Changes

#### Code Changes (Astro/Frontend):

```bash
# 1. Make your changes in client/src/

# 2. Test locally
cd client
yarn dev

# 3. Commit and push
git add .
git commit -m "Your change description"
git push origin main

# 4. Deploy to Vercel
vercel --prod

# Or let Vercel auto-deploy from GitHub
```

#### Content Changes:

**Option A: Edit directly in Strapi Cloud** (Recommended)
- Go to your Strapi Cloud admin panel
- Make content changes
- Trigger Vercel rebuild if needed

**Option B: Sync from local to production**
```bash
cd server
yarn strapi transfer \
  --to https://your-project.strapiapp.com/admin \
  --to-token YOUR_TOKEN
```

## 🔧 Environment Variables

### Local Development

Create `.env` files (automatically created by `yarn setup`):

**client/.env**:
```env
VITE_STRAPI_BASE_URL=http://localhost:1337
```

**server/.env**:
```env
HOST=0.0.0.0
PORT=1337
APP_KEYS=your-app-keys
API_TOKEN_SALT=your-api-token-salt
ADMIN_JWT_SECRET=your-admin-jwt-secret
TRANSFER_TOKEN_SALT=your-transfer-token-salt
JWT_SECRET=your-jwt-secret
```

### Production (Vercel)

Set in Vercel dashboard or via CLI:
- `STRAPI_BASE_URL`: Your Strapi Cloud URL
- `VITE_STRAPI_BASE_URL`: Same as above (for client-side)

## 📦 Available Scripts

### Root Directory

```bash
yarn dev          # Start both Astro and Strapi
yarn setup        # Install all dependencies
yarn seed         # Seed local Strapi database
yarn export       # Export Strapi data
yarn client       # Run client commands
yarn server       # Run server commands
```

### Client Directory (`cd client`)

```bash
yarn dev          # Start Astro dev server
yarn build        # Build for production
yarn preview      # Preview production build
```

### Server Directory (`cd server`)

```bash
yarn develop      # Start Strapi in dev mode
yarn start        # Start Strapi in production mode
yarn build        # Build Strapi admin panel
yarn strapi       # Strapi CLI commands
```

## 🔑 Strapi API Permissions

To make content publicly accessible (required for Astro to fetch data):

1. Go to **Settings** → **Users & Permissions Plugin** → **Roles** → **Public**
2. Enable permissions for:
   - **Article**: `find`, `findOne`
   - **Page**: `find`, `findOne`
   - **Global**: `find`
   - **Author**: `find`, `findOne`
   - **Tag**: `find`, `findOne`

## 🐛 Troubleshooting

### Node Version Issues

**Error**: `The engine "node" is incompatible with this module`

**Solution**: Switch to Node.js 22
```bash
nvm use 22
```

### Strapi Connection Failed

**Error**: `Failed to connect to Strapi. Is the server running?`

**Solutions**:
1. Check Strapi is running: http://localhost:1337/admin
2. Verify environment variable: `STRAPI_BASE_URL` or `VITE_STRAPI_BASE_URL`
3. Check API permissions are set to Public
4. Ensure Strapi Cloud URL is accessible

### Port Already in Use

**Error**: `Port 4321 is in use`

**Solution**: Astro will automatically find the next available port (4322, 4323, etc.)

### Build Failures on Vercel

**Solutions**:
1. Ensure `STRAPI_BASE_URL` environment variable is set in Vercel
2. Check Node.js version is set to 22.x in `package.json` engines
3. Verify Strapi Cloud is accessible and API permissions are public
4. Check build logs for specific error messages

## 🤝 Contributing

This is an example project. Feel free to fork and customize for your needs!

## 📝 License

This project is open source and available for educational purposes.

## 🙏 Acknowledgments

- Built with [Astro](https://astro.build)
- Powered by [Strapi](https://strapi.io)
- Uses [strapi-community-astro-loader](https://github.com/your-repo)
- Styled with [Tailwind CSS](https://tailwindcss.com)

## 📧 Contact

If you have any questions or suggestions, please feel free to:
- Open an issue on [GitHub](https://github.com/simoneramo/astro-strapi-example-project)
- Reach out to the original author [Paul](https://twitter.com/codingthirty)

---

**Original Project**: Created by [Paul Bratslavsky](https://github.com/PaulBratslavsky)
**YouTube**: [Coding After Thirty](https://www.youtube.com/@CodingAfterThirty)
**Twitter**: [@codingthirty](https://x.com/codingthirty)
