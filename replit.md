# Flowise Chatbot Embed Project

## Overview
This is a JavaScript library for embedding Flowise chatbots on websites. The project has been successfully imported and configured for the Replit environment.

## Project Structure
- **Frontend**: SolidJS-based chatbot widget built with Rollup
- **Backend**: Express.js proxy server for secure API communication
- **Build System**: TypeScript, Rollup, TailwindCSS

## Current Status
✅ Dependencies installed and build system working  
✅ Frontend development server running on port 5000  
✅ Rollup configured for Replit environment (0.0.0.0:5000)  
✅ Backend server configured for Replit hosting  
⚠️ Environment variables needed for full functionality  

## Required Configuration

To fully use this chatbot embed, you need to configure environment variables through Replit's secrets management:

### Required Secrets:
1. **API_HOST** - Your Flowise instance URL (e.g., `https://your-flowise-instance.com`)
2. **FLOWISE_API_KEY** - Your Flowise API key

### Required Chatflow Configuration:
Add chatflow configurations as additional secrets using this format:
- Secret name: Any identifier (e.g., `agent1`, `support`, `demo`)
- Secret value: `[chatflowId],[allowedDomain1],[allowedDomain2],...`

Example:
- `demo` = `20db97c6-64c9-4411-bab4-7d6202171600,https://example.com`
- `support` = `1c28f529-a70f-5001-9bc5-4f4c5d03d8c0,https://help.example.com`

## Architecture
- **Frontend Port**: 5000 (development server)
- **Backend Port**: 3001 (proxy server)
- **Build Output**: `dist/` directory
- **Demo Page**: `public/index.html`

## Recent Changes
- Configured Rollup dev server for Replit environment
- Updated host binding from localhost to 0.0.0.0:5000
- Added CORS headers for proper iframe support
- Configured backend for flexible port/host settings

## Next Steps
1. Add your Flowise API credentials via Replit secrets
2. Configure your chatflow identifiers
3. Test the complete integration
4. Deploy to production if needed

## Development Commands
- `yarn dev` - Start frontend development server
- `yarn build` - Build production assets
- `yarn start` - Start proxy server (requires environment variables)