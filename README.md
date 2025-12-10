# Astro 5 and Strapi 5 Example Project

This is an example project showcasing Astro 5 and Strapi 5 integration. It demonstrates how to build a modern, dynamic website with a landing page, blog, and content management system using the headless CMS architecture.

Uses the **strapi-community-astro-loader-v2** to seamlessly fetch data from Strapi for pages and articles.

![Screenshot of the project](./img/0-intro.gif)

## 🚀 Live Demo

- **Frontend (Astro)**: https://client-n0mu8cpps-simons-projects-5e69799b.vercel.app
- **Backend (Strapi Admin)**: https://valuable-sunrise-50399a7a25.strapiapp.com/admin

## 🛠️ Tech Stack

### Frontend (Astro)
- **[Astro 5.12.8](https://astro.build)** - Modern web framework with island architecture
- **[Tailwind CSS 4.0](https://tailwindcss.com)** - Utility-first CSS framework
- **[strapi-community-astro-loader v2](https://github.com/strapi-community/strapi-astro-loader)** - Content collections loader for Strapi
- **[Marked](https://marked.js.org/)** - Markdown parser for rich text content

### Backend (Strapi)
- **[Strapi 5.20](https://strapi.io)** - Headless CMS
- **SQLite** - Database (local development)
- **PostgreSQL** - Database (production on Strapi Cloud)

### Deployment
- **[Vercel](https://vercel.com)** - Frontend hosting and deployment
- **[Strapi Cloud](https://cloud.strapi.io)** - Backend hosting

### Key Features
- ✅ Server-Side Rendering (SSR) with Astro
- ✅ Content Collections with type-safe schemas
- ✅ Dynamic block-based content system
- ✅ Image optimization and lazy loading
- ✅ Responsive design with Tailwind CSS
- ✅ Hot Module Replacement (HMR) for development
- ✅ SEO-friendly URLs and metadata
- ✅ Markdown support for blog content

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

## 📊 Content Types & Block System

### Strapi Content Types

This project uses the following Strapi content types:

#### Collections
- **Article**: Blog posts with featured images, authors, tags, and dynamic blocks
- **Author**: Author profiles with name, bio, and avatar
- **Tag**: Content tags for categorization

#### Single Types
- **Landing Page**: Homepage content with dynamic blocks
- **Page**: Custom pages with flexible block-based content
- **Global**: Site-wide settings (header, footer, navigation)

### Available Content Blocks

The project includes a flexible block system for building dynamic pages:

1. **Hero Block** - Large hero sections with images and CTAs
2. **Heading Section** - Section headers and subheadings
3. **Card Grid** - Responsive grid of cards with images and text
4. **Content with Image** - Rich content sections with side-by-side images
5. **FAQ Section** - Accordion-style frequently asked questions
6. **Person Card** - Author/team member profiles
7. **Markdown Block** - Rich text content with markdown support
8. **Featured Articles** - Curated blog post highlights
9. **Newsletter** - Email subscription forms

All blocks are fully responsive and styled with Tailwind CSS.

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

#### Option 1: Deploy via GitHub Integration (Recommended)

1. **Push your code to GitHub**:
   ```bash
   git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO.git
   git push -u origin main
   ```

2. **Connect to Vercel**:
   - Go to [Vercel Dashboard](https://vercel.com/dashboard)
   - Click "Add New Project"
   - Import your GitHub repository
   - Select `client` as the root directory

3. **Configure Node.js Version**:
   - Go to Project Settings → General
   - Set Node.js Version to **22.x**
   - Save changes

4. **Add Environment Variables**:
   - Go to Project Settings → Environment Variables
   - Add the following variables for all environments (Production, Preview, Development):
     - `STRAPI_BASE_URL` = `https://your-project.strapiapp.com`
     - `VITE_STRAPI_BASE_URL` = `https://your-project.strapiapp.com`
   - Click "Save"

5. **Trigger Deployment**:
   - Go to Deployments tab
   - Click "Redeploy" on the latest deployment
   - Or push a new commit to trigger auto-deployment

#### Option 2: Deploy via Vercel CLI

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

4. **Configure via Dashboard**:
   - After first deployment, configure Node.js version (22.x) and environment variables in Vercel dashboard as described in Option 1

**Important Notes**:
- The project requires Node.js 22.x - ensure this is set in Vercel project settings
- Both `STRAPI_BASE_URL` and `VITE_STRAPI_BASE_URL` are required
- Vercel will automatically redeploy when you push to GitHub (if using GitHub integration)

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

## ⚡ Performance & Best Practices

### Build Optimization
- **Static Site Generation**: Pages are pre-rendered at build time for optimal performance
- **Image Optimization**: Images are automatically optimized and served in modern formats
- **Code Splitting**: JavaScript is split into smaller chunks for faster loading
- **CSS Purging**: Unused CSS is automatically removed in production builds

### Content Management Best Practices
1. **Use Proper Image Sizes**: Upload appropriately sized images to Strapi (recommended max width: 2000px)
2. **Enable Caching**: Configure caching headers in Strapi for better performance
3. **Content Previews**: Use Strapi's draft/publish workflow for content review
4. **Backup Regularly**: Export Strapi data periodically using `yarn strapi export`

### Development Tips
- Use `yarn dev` to run both services simultaneously with hot reload
- Check Strapi API responses in browser DevTools Network tab
- Monitor build times and optimize heavy components
- Test responsive design at different breakpoints
- Keep dependencies updated for security and performance

### Security Considerations
- **API Tokens**: Use read-only tokens for public data access
- **Environment Variables**: Never commit `.env` files to version control
- **CORS Settings**: Configure proper CORS settings in Strapi for production
- **Rate Limiting**: Enable rate limiting in Strapi to prevent abuse
- **HTTPS**: Always use HTTPS in production (automatic with Vercel and Strapi Cloud)

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

**Error**: Node.js version incompatibility or build failures

**Solutions**:
1. **Set Node.js version in Vercel Dashboard**:
   - Go to Project Settings → General → Node.js Version
   - Select **22.x** (critical - Vercel may default to latest version)
   - Save and redeploy

2. **Configure Environment Variables**:
   - Ensure both `STRAPI_BASE_URL` and `VITE_STRAPI_BASE_URL` are set in Vercel
   - Add them in Project Settings → Environment Variables
   - Values should be your Strapi Cloud URL (e.g., `https://your-project.strapiapp.com`)

3. **Verify Strapi Permissions**:
   - Check API permissions are set to Public in Strapi admin
   - Ensure Strapi Cloud URL is accessible

4. **Check Build Logs**:
   - Review detailed error messages in Vercel deployment logs
   - Common issues: missing environment variables, incorrect Node version, Strapi connection failures

## ❓ Frequently Asked Questions

### Can I use a different database besides SQLite?
Yes! Strapi supports PostgreSQL, MySQL, MariaDB, and SQLite. For production, PostgreSQL is recommended (automatically configured on Strapi Cloud). Update `config/database.js` to use your preferred database.

### How do I add a new content type?
1. Start Strapi: `cd server && yarn develop`
2. Go to Content-Type Builder in Strapi Admin
3. Create your new content type
4. Add fields as needed
5. Save and the API endpoints are automatically created

### Can I customize the Tailwind theme?
Yes! Edit `client/tailwind.config.js` to customize colors, fonts, spacing, and more. The project uses Tailwind CSS v4.

### How do I add authentication?
This example focuses on public content. For authentication, you can:
- Use Strapi's built-in Users & Permissions plugin
- Implement JWT authentication
- Add protected routes in Astro
- Integrate with third-party auth providers (Auth0, Clerk, etc.)

### What's the difference between STRAPI_BASE_URL and VITE_STRAPI_BASE_URL?
- `STRAPI_BASE_URL`: Used by server-side code (Astro build, SSR)
- `VITE_STRAPI_BASE_URL`: Used by client-side code (browser JavaScript)
- Both should point to the same Strapi instance

### Can I deploy to platforms other than Vercel?
Yes! Astro supports deployment to:
- Netlify
- Cloudflare Pages
- AWS Amplify
- GitHub Pages (with adapters)
- Any Node.js hosting

See [Astro deployment guides](https://docs.astro.build/en/guides/deploy/) for more options.

### How do I update Astro or Strapi versions?
```bash
# Update Astro
cd client
yarn upgrade astro@latest

# Update Strapi
cd server
yarn upgrade @strapi/strapi@latest @strapi/plugin-users-permissions@latest
```

Always test thoroughly after major version updates.

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
