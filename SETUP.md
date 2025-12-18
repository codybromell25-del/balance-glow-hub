# Setup Guide for Balance Glow Hub

## Prerequisites

You need to install **Node.js** (which includes npm) to run this project.

### Install Node.js

1. Download Node.js from: https://nodejs.org/
2. Choose the **LTS (Long Term Support)** version
3. Run the installer and follow the setup wizard
4. **Restart Cursor** after installation

To verify installation, open a new terminal in Cursor and run:
```bash
node --version
npm --version
```

## Setup Steps

### 1. Install Dependencies

Once Node.js is installed, run:
```bash
npm install
```

### 2. Configure Environment Variables

Create a `.env` file in the root directory with your Supabase credentials:

```env
VITE_SUPABASE_URL=your_supabase_url_here
VITE_SUPABASE_PUBLISHABLE_KEY=your_supabase_anon_key_here
```

**Where to find these values:**
- Go to your Supabase project: https://app.supabase.com
- Navigate to **Settings** → **API**
- Copy the **Project URL** (for `VITE_SUPABASE_URL`)
- Copy the **anon/public key** (for `VITE_SUPABASE_PUBLISHABLE_KEY`)

### 3. Run the Development Server

```bash
npm run dev
```

The app will be available at: http://localhost:8080

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## Project Structure

- `src/` - Source code
- `src/components/` - React components
- `src/pages/` - Page components
- `src/integrations/supabase/` - Supabase configuration
- `public/` - Static assets
- `supabase/` - Supabase migrations and config

## Need Help?

If you encounter any issues:
1. Make sure Node.js is installed and you've restarted Cursor
2. Check that all dependencies installed correctly (`npm install`)
3. Verify your `.env` file has the correct Supabase credentials
4. Check the terminal for any error messages

