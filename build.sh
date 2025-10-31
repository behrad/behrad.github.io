#!/bin/bash

# Build script for static export
echo "Building Next.js project for static export..."

# Check if node_modules exists
if [ ! -d "node_modules" ]; then
    echo "Installing dependencies..."
    npm install
fi

# Build the project
echo "Building project..."
npm run build

# Check if build was successful
if [ -d "out" ]; then
    echo "✅ Build successful! Static files are in the 'out' directory."
    echo "📁 Files ready for GitHub Pages deployment:"
    ls -la out/
else
    echo "❌ Build failed! Please check the errors above."
    exit 1
fi

echo ""
echo "🚀 To deploy to GitHub Pages:"
echo "1. Push your code to GitHub"
echo "2. Enable GitHub Pages in repository settings"
echo "3. Set source to 'GitHub Actions'"
echo "4. The site will be automatically deployed on every push to main branch"