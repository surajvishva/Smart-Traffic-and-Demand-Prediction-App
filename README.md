# Smart Traffic Prediction App

A modern React application for real-time traffic prediction and visualization with Google Maps integration.

## 🚀 Features

- **Live Traffic Map** - Real-time traffic visualization using Google Maps
- **Traffic Layer** - Color-coded roads showing traffic conditions
- **Interactive Markers** - Click on locations to view detailed traffic data
- **Traffic Predictions** - ML-based traffic forecasting
- **Route Search** - Find optimal routes based on current and predicted traffic
- **Demand Charts** - Visualize traffic patterns and trends

## 📋 Prerequisites

- Node.js (v18 or higher)
- npm or yarn
- Google Maps API Key (required for map functionality)

## 🔑 Google Maps API Setup

### Step 1: Get Your API Key

1. Go to [Google Cloud Console](https://console.cloud.google.com/google/maps-apis)
2. Create a new project or select an existing one
3. Enable the following APIs:
   - **Maps JavaScript API** (required)
   - **Geolocation API** (optional)
   - **Directions API** (optional)
4. Go to "Credentials" and create an API key
5. Restrict your API key for security:
   - Application restriction: HTTP referrers
   - Add `http://localhost:*` for development
   - API restriction: Select only the APIs you enabled

### Step 2: Configure Your Project

**Option 1: Using Environment Variables (Recommended)**

1. Copy `.env.example` to `.env`:
   ```bash
   cp .env.example .env
   ```

2. Open `.env` and add your API key:
   ```
   VITE_GOOGLE_MAPS_API_KEY=AIzaSyD-your-actual-api-key-here
   ```

**Option 2: Direct Configuration**

1. Open `src/components/TrafficMap.tsx`
2. Find line 49 and replace the placeholder:
   ```typescript
   const GOOGLE_MAPS_API_KEY = 'AIzaSyD-your-actual-api-key-here';
   ```

⚠️ **Security Note**: Never commit your API key to public repositories! Always use environment variables and add `.env` to `.gitignore`.

## 💻 Installation & Running

```bash
# Install dependencies
npm install

# Start development server
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

## 🏗️ Build for Production

```bash
# Create production build
npm run build

# Preview production build
npm run preview
```

## 📁 Project Structure

```
smart-traffic-app/
├── src/
│   ├── components/
│   │   ├── TrafficMap.tsx          # Main map component with Google Maps
│   │   ├── PredictionPanel.tsx     # Traffic predictions display
│   │   ├── RouteSearch.tsx         # Route search functionality
│   │   ├── DemandChart.tsx         # Traffic demand visualization
│   │   └── ui/                     # Reusable UI components
│   ├── App.tsx                     # Main application component
│   ├── main.tsx                    # Application entry point
│   └── styles/                     # Global styles
├── .env.example                     # Environment variables template
├── .gitignore                       # Git ignore rules
├── GOOGLE_MAPS_SETUP.md            # Detailed API setup guide
└── package.json                     # Project dependencies
```

## 🗺️ Map Features

Once configured with your API key, the map provides:

- **Real-time Traffic Layer**: Color-coded roads (green/yellow/red)
- **Custom Markers**: Traffic monitoring points with status indicators
- **Interactive Controls**: Zoom, pan, and fullscreen
- **Location Details**: Speed, incidents, and traffic status
- **Quick Navigation**: Click locations in the sidebar to jump on the map

## 🔧 Troubleshooting

### Map doesn't load?
- Verify your API key is correct
- Check that Maps JavaScript API is enabled in Google Cloud Console
- Look for errors in the browser console
- Ensure your domain is whitelisted in API restrictions

### "This page can't load Google Maps correctly"?
- Billing must be enabled in Google Cloud (even for free tier)
- Check API key restrictions
- Verify the API key has the correct APIs enabled

### No traffic data showing?
- Traffic data availability varies by region
- Try viewing major cities during peak hours
- Ensure you're connected to the internet

## 📚 Additional Resources

- [Google Maps API Documentation](https://developers.google.com/maps/documentation)
- [React Google Maps API](https://react-google-maps-api-docs.netlify.app/)
- [Detailed Setup Guide](./GOOGLE_MAPS_SETUP.md)

## 🔎 Outputs
<img width="1903" height="1034" alt="Screenshot 2026-03-18 172413" src="https://github.com/user-attachments/assets/d2d14a18-cd48-4bbc-8828-32ff0d8a09e3" />

<img width="1901" height="1034" alt="Screenshot 2026-03-18 172429" src="https://github.com/user-attachments/assets/d4fd12a3-c991-4f98-a7ee-b0f9be3dac1d" />

<img width="1920" height="1200" alt="Screenshot 2026-03-18 172444" src="https://github.com/user-attachments/assets/a2a13ab4-50d7-4f1f-ba9d-eb55b20e3138" />

<img width="1920" height="1200" alt="Screenshot 2026-03-18 172452" src="https://github.com/user-attachments/assets/ed2629ad-8796-454e-b890-3018c2667feb" />

<img width="1920" height="1200" alt="Screenshot 2026-03-18 172517" src="https://github.com/user-attachments/assets/af658979-7cd3-4a13-bae2-8cc8ccc4de5f" />

<img width="1920" height="1200" alt="Screenshot 2026-03-18 172524" src="https://github.com/user-attachments/assets/8eedcf88-ddb7-4262-af92-05115be432af" />

<img width="1920" height="1200" alt="Screenshot 2026-03-18 172557" src="https://github.com/user-attachments/assets/b0fb0d46-d616-4559-87fd-8976df5e01eb" 
   />
<img width="1920" height="1200" alt="Screenshot 2026-03-18 172548" src="https://github.com/user-attachments/assets/5ef1fd8a-969b-41f2-82bc-b336c28a99ef" />

<img width="1920" height="1200" alt="Screenshot 2026-03-18 172540" src="https://github.com/user-attachments/assets/9ddbc5de-4fc6-4dde-aca6-dcec5a92a483" />




