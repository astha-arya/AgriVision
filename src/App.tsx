import React, { useState } from 'react';
import { Camera, Leaf, CloudRain, Info, Upload, Sun, CloudLightning, Droplets } from 'lucide-react';
import Header from './components/Header';
import Footer from './components/Footer';
import DiseaseDetection from './components/DiseaseDetection';
import CropInfo from './components/CropInfo';
import WeatherInsights from './components/WeatherInsights';
import RiskPrediction from './components/RiskPrediction';

function App() {
  const [activeTab, setActiveTab] = useState('disease');

  const renderContent = () => {
    switch (activeTab) {
      case 'disease':
        return <DiseaseDetection />;
      case 'crops':
        return <CropInfo />;
      case 'weather':
        return <WeatherInsights />;
      case 'risk':
        return <RiskPrediction />;
      default:
        return <DiseaseDetection />;
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-green-50 to-blue-50">
      <Header />
      
      <main className="flex-grow container mx-auto px-4 py-8">
        <div className="bg-white rounded-xl shadow-lg overflow-hidden">
          <div className="flex flex-wrap text-sm font-medium text-center border-b border-gray-200">
            <button
              onClick={() => setActiveTab('disease')}
              className={`flex items-center justify-center p-4 ${
                activeTab === 'disease'
                  ? 'text-green-600 border-b-2 border-green-600 bg-green-50'
                  : 'text-gray-500 hover:text-green-600 hover:bg-green-50'
              } flex-grow sm:flex-grow-0 sm:px-8`}
            >
              <Camera className="w-5 h-5 mr-2" />
              Disease Detection
            </button>
            <button
              onClick={() => setActiveTab('crops')}
              className={`flex items-center justify-center p-4 ${
                activeTab === 'crops'
                  ? 'text-green-600 border-b-2 border-green-600 bg-green-50'
                  : 'text-gray-500 hover:text-green-600 hover:bg-green-50'
              } flex-grow sm:flex-grow-0 sm:px-8`}
            >
              <Leaf className="w-5 h-5 mr-2" />
              Crop Information
            </button>
            <button
              onClick={() => setActiveTab('weather')}
              className={`flex items-center justify-center p-4 ${
                activeTab === 'weather'
                  ? 'text-green-600 border-b-2 border-green-600 bg-green-50'
                  : 'text-gray-500 hover:text-green-600 hover:bg-green-50'
              } flex-grow sm:flex-grow-0 sm:px-8`}
            >
              <CloudRain className="w-5 h-5 mr-2" />
              Weather Insights
            </button>
            <button
              onClick={() => setActiveTab('risk')}
              className={`flex items-center justify-center p-4 ${
                activeTab === 'risk'
                  ? 'text-green-600 border-b-2 border-green-600 bg-green-50'
                  : 'text-gray-500 hover:text-green-600 hover:bg-green-50'
              } flex-grow sm:flex-grow-0 sm:px-8`}
            >
              <CloudLightning className="w-5 h-5 mr-2" />
              Risk Prediction
            </button>
          </div>
          
          <div className="p-6">
            {renderContent()}
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
}

export default App;