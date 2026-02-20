# Google Maps API Setup Guide

## Step 1: Get Your Google Maps API Key

1. **Go to Google Cloud Console**
   - Visit: https://console.cloud.google.com/google/maps-apis
   - Sign in with your Google account

2. **Create a New Project** (if you don't have one)
   - Click on the project dropdown at the top
   - Click "New Project"
   - Enter a project name (e.g., "Smart Traffic App")
   - Click "Create"

3. **Enable Required APIs**
   - In the Google Cloud Console, go to "APIs & Services" > "Library"
   - Search for and enable these APIs:
     - **Maps JavaScript API** (required for the map)
     - **Geolocation API** (optional, for user location)
     - **Directions API** (optional, for route directions)

4. **Create an API Key**
   - Go to "APIs & Services" > "Credentials"
   - Click "Create Credentials" > "API Key"
   - Your API key will be generated
   - **Important**: Click "Restrict Key" to add security restrictions

5. **Restrict Your API Key** (Recommended for Security)
   - Under "Application restrictions":
     - For development: Choose "HTTP referrers" and add `http://localhost:*`
     - For production: Add your actual domain
   - Under "API restrictions":
     - Choose "Restrict key"
     - Select the APIs you enabled (Maps JavaScript API, etc.)
   - Click "Save"

## Step 2: Add API Key to Your Project

1. **Open the file**: `src/components/TrafficMap.tsx`

2. **Find line 45** which looks like:
   ```typescript
   const GOOGLE_MAPS_API_KEY = 'YOUR_GOOGLE_MAPS_API_KEY';
   ```

3. **Replace** `'YOUR_GOOGLE_MAPS_API_KEY'` with your actual API key:
   ```typescript
   const GOOGLE_MAPS_API_KEY = 'AIzaSyD-9tSrke72PouQMnMX-a7eZSW0jkFMBWY'; // example
   ```

## Step 3: Run Your Application

```bash
# Install dependencies (if not already installed)
npm install

# Start the development server
npm run dev
```

The map should now display with live traffic data!

## Important Security Notes

⚠️ **Never commit your API key to public repositories!**

### Better Approach: Use Environment Variables

1. **Create a `.env` file** in your project root:
   ```
   VITE_GOOGLE_MAPS_API_KEY=your_actual_api_key_here
   ```

2. **Update TrafficMap.tsx** to use the environment variable:
   ```typescript
   const GOOGLE_MAPS_API_KEY = import.meta.env.VITE_GOOGLE_MAPS_API_KEY || 'YOUR_GOOGLE_MAPS_API_KEY';
   ```

3. **Add `.env` to `.gitignore`**:
   ```
   .env
   .env.local
   ```

## Features in Your Map

Once the API key is added, you'll see:

✅ **Live Traffic Layer** - Real-time traffic conditions (green/yellow/red roads)
✅ **Custom Markers** - Traffic monitoring locations with status colors
✅ **Interactive Map** - Zoom, pan, and click on locations
✅ **Location Details** - Speed, incidents, and traffic status for selected points
✅ **Location List** - Quick access to all monitored locations

## Troubleshooting

### Map doesn't load?
- Check browser console for errors
- Verify API key is correct
- Ensure Maps JavaScript API is enabled in Google Cloud Console
- Check if domain is whitelisted in API restrictions

### "This page can't load Google Maps correctly" error?
- API key might not be restricted properly
- Try removing all restrictions temporarily for testing
- Ensure billing is enabled on your Google Cloud project (required even for free tier)

### No traffic data showing?
- Traffic data may not be available in all regions
- Try zooming to a major city
- Ensure you're looking at the map during peak traffic hours

## Need Help?

- Google Maps API Documentation: https://developers.google.com/maps/documentation
- Stack Overflow: https://stackoverflow.com/questions/tagged/google-maps
