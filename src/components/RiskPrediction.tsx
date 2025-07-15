import React, { useState } from 'react';
import { CloudLightning, Droplets, MapPin, AlertTriangle, Info } from 'lucide-react';

const RiskPrediction = () => {
  const [location, setLocation] = useState('');
  const [loading, setLoading] = useState(false);
  const [riskData, setRiskData] = useState<any | null>(null);

  const handleSearch = () => {
    if (!location.trim()) return;
    
    setLoading(true);
    // Simulate API call
    setTimeout(() => {
      setLoading(false);
      setRiskData({
        location: location,
        droughtRisk: {
          current: 'Moderate',
          trend: 'Increasing',
          probability: 65,
          impactLevel: 'Medium',
          timeframe: '2-4 weeks',
          recommendations: [
            'Implement water conservation measures',
            'Consider drought-resistant crop varieties for next planting',
            'Prepare irrigation systems for increased usage',
            'Monitor soil moisture levels daily'
          ]
        },
        floodRisk: {
          current: 'Low',
          trend: 'Stable',
          probability: 15,
          impactLevel: 'Low',
          timeframe: 'No immediate risk',
          recommendations: [
            'Maintain normal operations',
            'Keep drainage systems clear as a precaution',
            'Monitor weather forecasts for changes'
          ]
        },
        historicalData: [
          { month: 'Jan', droughtRisk: 20, floodRisk: 60 },
          { month: 'Feb', droughtRisk: 25, floodRisk: 55 },
          { month: 'Mar', droughtRisk: 30, floodRisk: 45 },
          { month: 'Apr', droughtRisk: 40, floodRisk: 35 },
          { month: 'May', droughtRisk: 50, floodRisk: 25 },
          { month: 'Jun', droughtRisk: 60, floodRisk: 20 },
          { month: 'Jul', droughtRisk: 70, floodRisk: 15 },
          { month: 'Aug', droughtRisk: 65, floodRisk: 15 },
          { month: 'Sep', droughtRisk: 55, floodRisk: 20 },
          { month: 'Oct', droughtRisk: 45, floodRisk: 30 },
          { month: 'Nov', droughtRisk: 35, floodRisk: 40 },
          { month: 'Dec', droughtRisk: 25, floodRisk: 50 }
        ]
      });
    }, 1500);
  };

  const getRiskLevelColor = (level: string) => {
    switch (level.toLowerCase()) {
      case 'low':
        return 'bg-green-100 text-green-800';
      case 'moderate':
        return 'bg-yellow-100 text-yellow-800';
      case 'high':
        return 'bg-orange-100 text-orange-800';
      case 'severe':
        return 'bg-red-100 text-red-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  const getTrendIcon = (trend: string) => {
    switch (trend.toLowerCase()) {
      case 'increasing':
        return (
          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-red-500" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M12 7a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0V8.414l-4.293 4.293a1 1 0 01-1.414 0L8 10.414l-4.293 4.293a1 1 0 01-1.414-1.414l5-5a1 1 0 011.414 0L11 10.586 14.586 7H12z" clipRule="evenodd" />
          </svg>
        );
      case 'decreasing':
        return (
          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-green-500" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M12 13a1 1 0 100 2h5a1 1 0 001-1v-5a1 1 0 10-2 0v2.586l-4.293-4.293a1 1 0 00-1.414 0L8 9.586l-4.293-4.293a1 1 0 00-1.414 1.414l5 5a1 1 0 001.414 0L11 9.414 14.586 13H12z" clipRule="evenodd" />
          </svg>
        );
      case 'stable':
        return (
          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-blue-500" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M18 10a1 1 0 01-1 1H3a1 1 0 110-2h14a1 1 0 011 1z" clipRule="evenodd" />
          </svg>
        );
      default:
        return null;
    }
  };

  return (
    <div>
      <div className="mb-6">
        <h2 className="text-2xl font-bold text-gray-800 mb-2">Risk Prediction</h2>
        <p className="text-gray-600">
          Get predictions for drought and flood risks based on weather data and satellite imagery.
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
          {loading ? 'Loading...' : 'Predict Risks'}
        </button>
      </div>

      {riskData ? (
        <div className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-amber-50 rounded-lg p-6 border border-amber-200">
              <div className="flex items-center mb-4">
                <div className="bg-amber-100 p-2 rounded-full">
                  <CloudLightning className="h-6 w-6 text-amber-600" />
                </div>
                <h3 className="ml-3 text-lg font-bold text-amber-800">Drought Risk</h3>
              </div>
              
              <div className="mb-4">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm text-gray-600">Current Risk Level:</span>
                  <span className={`text-sm font-medium px-2 py-1 rounded-full ${getRiskLevelColor(riskData.droughtRisk.current)}`}>
                    {riskData.droughtRisk.current}
                  </span>
                </div>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm text-gray-600">Trend:</span>
                  <span className="text-sm font-medium flex items-center">
                    {riskData.droughtRisk.trend}
                    <span className="ml-1">{getTrendIcon(riskData.droughtRisk.trend)}</span>
                  </span>
                </div>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm text-gray-600">Probability:</span>
                  <span className="text-sm font-medium">{riskData.droughtRisk.probability}%</span>
                </div>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm text-gray-600">Impact Level:</span>
                  <span className="text-sm font-medium">{riskData.droughtRisk.impactLevel}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-600">Timeframe:</span>
                  <span className="text-sm font-medium">{riskData.droughtRisk.timeframe}</span>
                </div>
              </div>
              
              <div>
                <h4 className="text-sm font-medium text-amber-800 mb-2">Recommendations:</h4>
                <ul className="space-y-1">
                  {riskData.droughtRisk.recommendations.map((rec: string, index: number) => (
                    <li key={index} className="text-sm text-gray-700 flex items-start">
                      <span className="inline-block h-4 w-4 rounded-full bg-amber-200 text-amber-800 text-xs flex items-center justify-center mr-2 mt-0.5">
                        {index + 1}
                      </span>
                      {rec}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            
            <div className="bg-blue-50 rounded-lg p-6 border border-blue-200">
              <div className="flex items-center mb-4">
                <div className="bg-blue-100 p-2 rounded-full">
                  <Droplets className="h-6 w-6 text-blue-600" />
                </div>
                <h3 className="ml-3 text-lg font-bold text-blue-800">Flood Risk</h3>
              </div>
              
              <div className="mb-4">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm text-gray-600">Current Risk Level:</span>
                  <span className={`text-sm font-medium px-2 py-1 rounded-full ${getRiskLevelColor(riskData.floodRisk.current)}`}>
                    {riskData.floodRisk.current}
                  </span>
                </div>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm text-gray-600">Trend:</span>
                  <span className="text-sm font-medium flex items-center">
                    {riskData.floodRisk.trend}
                    <span className="ml-1">{getTrendIcon(riskData.floodRisk.trend)}</span>
                  </span>
                </div>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm text-gray-600">Probability:</span>
                  <span className="text-sm font-medium">{riskData.floodRisk.probability}%</span>
                </div>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm text-gray-600">Impact Level:</span>
                  <span className="text-sm font-medium">{riskData.floodRisk.impactLevel}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-600">Timeframe:</span>
                  <span className="text-sm font-medium">{riskData.floodRisk.timeframe}</span>
                </div>
              </div>
              
              <div>
                <h4 className="text-sm font-medium text-blue-800 mb-2">Recommendations:</h4>
                <ul className="space-y-1">
                  {riskData.floodRisk.recommendations.map((rec: string, index: number) => (
                    <li key={index} className="text-sm text-gray-700 flex items-start">
                      <span className="inline-block h-4 w-4 rounded-full bg-blue-200 text-blue-800 text-xs flex items-center justify-center mr-2 mt-0.5">
                        {index + 1}
                      </span>
                      {rec}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
          
          <div className="bg-white rounded-lg p-6 border border-gray-200">
            <h3 className="text-lg font-bold text-gray-800 mb-4">Historical Risk Patterns</h3>
            <div className="h-64 relative">
              <div className="absolute inset-0 flex items-center justify-center">
                <p className="text-gray-500 text-sm">
                  [Chart visualization would display here showing historical drought and flood risk patterns]
                </p>
              </div>
              <div className="absolute bottom-0 left-0 right-0 flex justify-between px-4">
                {riskData.historicalData.map((data: any, index: number) => (
                  <div key={index} className="text-xs text-gray-500">{data.month}</div>
                ))}
              </div>
            </div>
            <div className="flex items-center justify-center mt-4 space-x-6">
              <div className="flex items-center">
                <div className="w-3 h-3 bg-amber-500 rounded-full mr-2"></div>
                <span className="text-sm text-gray-600">Drought Risk</span>
              </div>
              <div className="flex items-center">
                <div className="w-3 h-3 bg-blue-500 rounded-full mr-2"></div>
                <span className="text-sm text-gray-600">Flood Risk</span>
              </div>
            </div>
          </div>
          
          <div className="bg-gray-50 rounded-lg p-6 border border-gray-200">
            <div className="flex items-center mb-4">
              <Info className="h-5 w-5 text-blue-500 mr-2" />
              <h3 className="text-lg font-medium text-gray-800">Understanding Risk Predictions</h3>
            </div>
            <p className="text-sm text-gray-600 mb-4">
              Our risk predictions are based on a combination of historical weather data, current conditions, satellite imagery, and advanced AI models. These predictions help you take proactive measures to protect your crops and maximize yield.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-white p-4 rounded-lg border border-gray-200">
                <h4 className="text-sm font-medium text-gray-800 mb-2 flex items-center">
                  <AlertTriangle className="h-4 w-4 text-amber-500 mr-1" />
                  Drought Risk Factors
                </h4>
                <ul className="text-xs text-gray-600 space-y-1 list-disc list-inside">
                  <li>Precipitation levels below seasonal averages</li>
                  <li>Higher than normal temperatures</li>
                  <li>Low soil moisture content</li>
                  <li>Reduced groundwater levels</li>
                  <li>Historical drought patterns in the region</li>
                </ul>
              </div>
              <div className="bg-white p-4 rounded-lg border border-gray-200">
                <h4 className="text-sm font-medium text-gray-800 mb-2 flex items-center">
                  <AlertTriangle className="h-4 w-4 text-blue-500 mr-1" />
                  Flood Risk Factors
                </h4>
                <ul className="text-xs text-gray-600 space-y-1 list-disc list-inside">
                  <li>Heavy rainfall forecasts</li>
                  <li>Saturated soil conditions</li>
                  <li>Proximity to water bodies</li>
                  <li>Topography and drainage patterns</li>
                  <li>Upstream precipitation and snowmelt</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className="bg-gray-50 rounded-lg p-12 border border-gray-200 flex flex-col items-center justify-center text-center">
          <div className="flex items-center mb-4">
            <CloudLightning className="h-8 w-8 text-amber-500 mr-2" />
            <Droplets className="h-8 w-8 text-blue-500" />
          </div>
          <h3 className="text-lg font-medium text-gray-700 mb-2">Risk Prediction Data Not Available</h3>
          <p className="text-gray-500 max-w-md">
            Enter your location above to get predictions for drought and flood risks based on weather data and satellite imagery.
          </p>
        </div>
      )}
    </div>
  );
};

export default RiskPrediction;