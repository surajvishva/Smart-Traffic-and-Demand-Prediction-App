import { useState } from 'react';
// import { TrafficMap } from './components/TrafficMap';
import { TrafficMap } from './components/TrafficMap-realtime'; //changed
import { PredictionPanel } from './components/PredictionPanel';
import { RouteSearch } from './components/RouteSearch';
// import { DemandChart } from './components/DemandChart';
import { DemandChart } from './components/DemandChart-realtime'; //changed
import { Navigation2, TrendingUp, Map, BarChart3 } from 'lucide-react';

type Tab = 'map' | 'predictions' | 'routes' | 'analytics';

export default function App() {
  const [activeTab, setActiveTab] = useState<Tab>('map');

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white border-b border-gray-200 sticky top-0 z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center gap-3">
              <div className="bg-blue-600 p-2 rounded-lg">
                <Navigation2 className="size-6 text-white" />
              </div>
              <div>
                <h1 className="font-semibold text-gray-900">Smart Traffic</h1>
                <p className="text-sm text-gray-500">Real-time & Predictions</p>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <span className="hidden sm:inline-flex items-center gap-2 text-sm text-gray-600">
                <span className="size-2 bg-green-500 rounded-full animate-pulse"></span>
                Live Data
              </span>
            </div>
          </div>
        </div>
      </header>

      {/* Navigation Tabs */}
      <nav className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex gap-1 overflow-x-auto">
            <TabButton
              active={activeTab === 'map'}
              onClick={() => setActiveTab('map')}
              icon={<Map className="size-4" />}
              label="Live Map"
            />
            <TabButton
              active={activeTab === 'predictions'}
              onClick={() => setActiveTab('predictions')}
              icon={<TrendingUp className="size-4" />}
              label="Predictions"
            />
            <TabButton
              active={activeTab === 'routes'}
              onClick={() => setActiveTab('routes')}
              icon={<Navigation2 className="size-4" />}
              label="Routes"
            />
            <TabButton
              active={activeTab === 'analytics'}
              onClick={() => setActiveTab('analytics')}
              icon={<BarChart3 className="size-4" />}
              label="Analytics"
            />
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        {activeTab === 'map' && <TrafficMap />}
        {activeTab === 'predictions' && <PredictionPanel />}
        {activeTab === 'routes' && <RouteSearch />}
        {activeTab === 'analytics' && <DemandChart />}
      </main>
    </div>
  );
}

interface TabButtonProps {
  active: boolean;
  onClick: () => void;
  icon: React.ReactNode;
  label: string;
}

function TabButton({ active, onClick, icon, label }: TabButtonProps) {
  return (
    <button
      onClick={onClick}
      className={`flex items-center gap-2 px-4 py-3 border-b-2 transition-colors whitespace-nowrap ${active
        ? 'border-blue-600 text-blue-600'
        : 'border-transparent text-gray-600 hover:text-gray-900 hover:border-gray-300'
        }`}
    >
      {icon}
      <span className="text-sm">{label}</span>
    </button>
  );
}
