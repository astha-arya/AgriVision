import React, { useState } from 'react';
import { MapPin, CloudRain, Wind, Thermometer, Droplets, Sun, CloudLightning, AlertCircle } from 'lucide-react';

const WeatherInsights = () => {
  const [location, setLocation] = useState('');
  const [loading, setLoading] = useState(false);
  const [weatherData, setWeatherData] = useState<any | null>(null);

  const handleSearch = () => {
    if (!location.trim()) return;
    
    setLoading(true);
    // Simulate API call
    setTimeout(() => {
      setLoading(false);
      setWeatherData({
        location: location,
        current: {
          temperature: 24,
          condition: 'Partly Cloudy',
          humidity: 65,
          windSpeed: 12,
          precipitation: 0,
          uvIndex: 6
        },
        forecast: [
          { day: 'Today', high: 26, low: 18, condition: 'Partly Cloudy', precipitation: 10 },
          { day: 'Tomorrow', high: 28, low: 19, condition: 'Sunny', precipitation: 0 },
          { day: 'Wednesday', high: 25, low: 17, condition: 'Rain', precipitation: 80 },
          { day: 'Thursday', high: 22, low: 16, condition: 'Rain', precipitation: 60 },
          { day: 'Friday', high: 24, low: 17, condition: 'Partly Cloudy', precipitation: 20 }
        ],
        agriculturalInsights: {
          soilMoisture: 'Moderate',
          irrigationNeeded: 'Yes - within 2 days',
          pestRisk: 'Low',
          diseaseRisk: 'Moderate - watch for fungal diseases due to humidity',
          harvestConditions: 'Favorable after Wednesday'
        }
      });
    }, 1500);
  };

  const getWeatherIcon = (condition: string) => {
    switch (condition.toLowerCase()) {
      case 'sunny':
        return <Sun className="h-6 w-6 text-yellow-500" />;
      case 'partly cloudy':
        return <CloudSun className="h-6 w-6 text-gray-500" />;
      case 'cloudy':
        return <Cloud className="h-6 w-6 text-gray-500" />;
      case 'rain':
        return <CloudRain className="h-6 w-6 text-blue-500" />;
      case 'thunderstorm':
        return <CloudLightning className="h-6 w-6 text-purple-500" />;
      default:
        return <Sun className="h-6 w-6 text-yellow-500" />;
    }
  };

  // Custom component for cloud with sun
  const CloudSun = ({ className }: { className: string }) => (
    <div className={className}>
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2v2"></path>
        <path d="M5.22 5.22l1.42 1.42"></path>
        <path d="M20 12h-2"></path>
        <path d="M17.36 17.36l-1.42-1.42"></path>
        <path d="M12 20v-2"></path>
        <path d="M5.22 18.78l1.42-1.42"></path>
        <path d="M4 12H2"></path>
        <path d="M6.64 6.64l-1.42-1.42"></path>
        <circle cx="12" cy="12" r="4"></circle>
        <path d="M16 16a4 4 0 0 1 4 4"></path>
        <path d="M12 20a8 8 0 0 1-8-8"></path>
        <path d="M20 12a8 8 0 0 0-8-8"></path>
      </svg>
    </div>
  );

  // Custom component for cloud
  const Cloud = ({ className }: { className: string }) => (
    <div className={className}>
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9Z"></path>
      </svg>
    </div>
  );

  return (
    <div>
      <div className="mb-6">
        <h2 className="text-2xl font-bold text-gray-800 mb-2">Weather Insights</h2>
        <p className="text-gray-600">
          Get real-time weather data and agricultural insights for your location.
        </p>
      </div>

      <div className="flex flex-col md:flex-row gap-4 mb-6">
        <div className="flex-grow relative">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <MapPin className="h-5 w-5 text-gray-400" />
          </div>
          <input
            type="text"
            className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md leading-5 bg-white placeholder-gray-500 focus:outline-none focus:ring-green-500 focus:border-green-500 sm:text-sm"
            placeholder="Enter your location..."
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            onKeyDown={(e) => e.key === 'Enter' && handleSearch()}
          />
        </div>
        <button
          onClick={handleSearch}
          disabled={loading || !location.trim()}
          className={`${
            loading || !location.trim() ? 'bg-gray-400' : 'bg-green-500 hover:bg-green-600'
          } text-white px-6 py-2 rounded-md transition-colors whitespace-nowrap`}
        >
          {loading ? 'Loading...' : 'Get Weather'}
        </button>
      </div>

      {weatherData ? (
        <div className="space-y-6">
          <div className="bg-gradient-to-r from-blue-500 to-blue-600 rounded-lg p-6 text-white">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between">
              <div>
                <h3 className="text-xl font-bold mb-1">{weatherData.location}</h3>
                <p className="text-blue-100">Current Weather</p>
              </div>
              <div className="flex items-center mt-4 md:mt-0">
                {getWeatherIcon(weatherData.current.condition)}
                <div className="ml-3">
                  <p className="text-3xl font-bold">{weatherData.current.temperature}°C</p>
                  <p className="text-blue-100">{weatherData.current.condition}</p>
                </div>
              </div>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-6">
              <div className="bg-white/10 rounded-lg p-3 flex items-center">
                <Droplets className="h-5 w-5 mr-2 text-blue-200" />
                <div>
                  <p className="text-xs text-blue-200">Humidity</p>
                  <p className="font-medium">{weatherData.current.humidity}%</p>
                </div>
              </div>
              <div className="bg-white/10 rounded-lg p-3 flex items-center">
                <Wind className="h-5 w-5 mr-2 text-blue-200" />
                <div>
                  <p className="text-xs text-blue-200">Wind</p>
                  <p className="font-medium">{weatherData.current.windSpeed} km/h</p>
                </div>
              </div>
              <div className="bg-white/10 rounded-lg p-3 flex items-center">
                <CloudRain className="h-5 w-5 mr-2 text-blue-200" />
                <div>
                  <p className="text-xs text-blue-200">Precipitation</p>
                  <p className="font-medium">{weatherData.current.precipitation}%</p>
                </div>
              </div>
              <div className="bg-white/10 rounded-lg p-3 flex items-center">
                <Sun className="h-5 w-5 mr-2 text-blue-200" />
                <div>
                  <p className="text-xs text-blue-200">UV Index</p>
                  <p className="font-medium">{weatherData.current.uvIndex}</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <div className="p-4 bg-gray-50 border-b border-gray-200">
              <h3 className="font-medium text-gray-800">5-Day Forecast</h3>
            </div>
            <div className="overflow-x-auto">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Day</th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Condition</th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">High / Low</th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Precipitation</th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {weatherData.forecast.map((day: any, index: number) => (
                    <tr key={index}>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{day.day}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        <div className="flex items-center">
                          {getWeatherIcon(day.condition)}
                          <span className="ml-2">{day.condition}</span>
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        <span className="text-red-500">{day.high}°</span> / <span className="text-blue-500">{day.low}°</span>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        <div className="flex items-center">
                          <div className="w-16 bg-gray-200 rounded-full h-2.5">
                            <div className="bg-blue-600 h-2.5 rounded-full" style={{ width: `${day.precipitation}%` }}></div>
                          </div>
                          <span className="ml-2">{day.precipitation}%</span>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
          
          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="font-medium text-gray-800 mb-4">Agricultural Insights</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-green-50 rounded-lg p-4 border border-green-100">
                <div className="flex items-center mb-3">
                  <Droplets className="h-5 w-5 text-green-600 mr-2" />
                  <h4 className="font-medium text-green-800">Soil & Irrigation</h4>
                </div>
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span className="text-sm text-gray-600">Soil Moisture:</span>
                    <span className="text-sm font-medium text-gray-800">{weatherData.agriculturalInsights.soilMoisture}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm text-gray-600">Irrigation Needed:</span>
                    <span className="text-sm font-medium text-gray-800">{weatherData.agriculturalInsights.irrigationNeeded}</span>
                  </div>
                </div>
              </div>
              
              <div className="bg-red-50 rounded-lg p-4 border border-red-100">
                <div className="flex items-center mb-3">
                  <AlertCircle className="h-5 w-5 text-red-600 mr-2" />
                  <h4 className="font-medium text-red-800">Pest & Disease Risk</h4>
                </div>
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span className="text-sm text-gray-600">Pest Risk:</span>
                    <span className="text-sm font-medium text-gray-800">{weatherData.agriculturalInsights.pestRisk}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm text-gray-600">Disease Risk:</span>
                    <span className="text-sm font-medium text-gray-800">{weatherData.agriculturalInsights.diseaseRisk}</span>
                  </div>
                </div>
              </div>
              
              <div className="md:col-span-2 bg-yellow-50 rounded-lg p-4 border border-yellow-100">
                <div className="flex items-center mb-3">
                  <Sun className="h-5 w-5 text-yellow-600 mr-2" />
                  <h4 className="font-medium text-yellow-800">Harvest Conditions</h4>
                </div>
                <p className="text-sm text-gray-800">{weatherData.agriculturalInsights.harvestConditions}</p>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className="bg-gray-50 rounded-lg p-12 border border-gray-200 flex flex-col items-center justify-center text-center">
          <CloudRain className="h-16 w-16 text-gray-400 mb-4" />
          <h3 className="text-lg font-medium text-gray-700 mb-2">Weather Data Not Available</h3>
          <p className="text-gray-500 max-w-md">
            Enter your location above to get real-time weather data and agricultural insights for your farm.
          </p>
        </div>
      )}
    </div>
  );
};

export default WeatherInsights;