import React, { useState } from 'react';
import { Search, Leaf, Droplets, Sun, Wind, ThermometerSun, AlertCircle } from 'lucide-react';

const CropInfo = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCrop, setSelectedCrop] = useState<string | null>(null);

  const crops = [
    'Rice', 'Wheat', 'Corn', 'Soybeans', 'Potatoes', 
    'Tomatoes', 'Cotton', 'Sugarcane', 'Coffee', 'Barley'
  ];

  const filteredCrops = crops.filter(crop => 
    crop.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const cropData: Record<string, any> = {
    'Rice': {
      description: 'Rice is the seed of the grass species Oryza sativa. As a cereal grain, it is the most widely consumed staple food for a large part of the world\'s human population, especially in Asia.',
      growingConditions: {
        soil: 'Clay or clay loam soils with good water retention',
        water: 'High (flooded conditions)',
        temperature: '20-35°C',
        sunlight: 'Full sun'
      },
      growingSeasons: ['Spring', 'Summer'],
      commonDiseases: ['Rice Blast', 'Bacterial Leaf Blight', 'Sheath Blight'],
      nutritionalValue: {
        calories: '130 per 100g (cooked)',
        protein: '2.7g per 100g',
        carbohydrates: '28g per 100g',
        fiber: '0.4g per 100g'
      },
      image: 'https://images.unsplash.com/photo-1536054695850-b45461fa4d34?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
    },
    'Wheat': {
      description: 'Wheat is a grass widely cultivated for its seed, a cereal grain which is a worldwide staple food. The many species of wheat together make up the genus Triticum.',
      growingConditions: {
        soil: 'Well-drained loamy soil',
        water: 'Moderate',
        temperature: '15-24°C',
        sunlight: 'Full sun'
      },
      growingSeasons: ['Fall', 'Winter', 'Spring'],
      commonDiseases: ['Rust', 'Powdery Mildew', 'Fusarium Head Blight'],
      nutritionalValue: {
        calories: '340 per 100g (raw)',
        protein: '13.2g per 100g',
        carbohydrates: '71g per 100g',
        fiber: '10.7g per 100g'
      },
      image: 'https://images.unsplash.com/photo-1535912559317-99a2ae608c53?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
    },
    'Corn': {
      description: 'Corn, also known as maize, is a cereal grain first domesticated by indigenous peoples in southern Mexico about 10,000 years ago.',
      growingConditions: {
        soil: 'Well-drained, fertile soil',
        water: 'Moderate to high',
        temperature: '18-32°C',
        sunlight: 'Full sun'
      },
      growingSeasons: ['Spring', 'Summer'],
      commonDiseases: ['Corn Smut', 'Gray Leaf Spot', 'Northern Corn Leaf Blight'],
      nutritionalValue: {
        calories: '365 per 100g (raw)',
        protein: '9.4g per 100g',
        carbohydrates: '74g per 100g',
        fiber: '7.3g per 100g'
      },
      image: 'https://images.unsplash.com/photo-1601593768799-76e7b4a6699a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
    },
    'Soybeans': {
      description: 'The soybean or soya bean is a species of legume native to East Asia, widely grown for its edible bean, which has numerous uses.',
      growingConditions: {
        soil: 'Well-drained, loamy soil',
        water: 'Moderate',
        temperature: '20-30°C',
        sunlight: 'Full sun'
      },
      growingSeasons: ['Spring', 'Summer'],
      commonDiseases: ['Soybean Rust', 'Bacterial Blight', 'Phytophthora Root Rot'],
      nutritionalValue: {
        calories: '446 per 100g (raw)',
        protein: '36.5g per 100g',
        carbohydrates: '30g per 100g',
        fiber: '9.3g per 100g'
      },
      image: 'https://images.unsplash.com/photo-1599486045717-d0e618bd1d14?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
    },
    'Potatoes': {
      description: 'The potato is a root vegetable native to the Americas, a starchy tuber of the plant Solanum tuberosum, and the plant itself is a perennial in the nightshade family.',
      growingConditions: {
        soil: 'Loose, well-drained soil',
        water: 'Moderate',
        temperature: '15-20°C',
        sunlight: 'Full sun to partial shade'
      },
      growingSeasons: ['Spring', 'Summer'],
      commonDiseases: ['Late Blight', 'Early Blight', 'Potato Scab'],
      nutritionalValue: {
        calories: '77 per 100g (boiled)',
        protein: '2g per 100g',
        carbohydrates: '17g per 100g',
        fiber: '2.2g per 100g'
      },
      image: 'https://images.unsplash.com/photo-1518977676601-b53f82aba655?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
    }
  };

  return (
    <div>
      <div className="mb-6">
        <h2 className="text-2xl font-bold text-gray-800 mb-2">Crop Information</h2>
        <p className="text-gray-600">
          Search for detailed information about various crops, including growing conditions, common diseases, and nutritional value.
        </p>
      </div>

      <div className="relative mb-6">
        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
          <Search className="h-5 w-5 text-gray-400" />
        </div>
        <input
          type="text"
          className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md leading-5 bg-white placeholder-gray-500 focus:outline-none focus:ring-green-500 focus:border-green-500 sm:text-sm"
          placeholder="Search for a crop..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="md:col-span-1 bg-gray-50 rounded-lg p-4 border border-gray-200">
          <h3 className="font-medium text-gray-800 mb-3">Available Crops</h3>
          <div className="space-y-2">
            {filteredCrops.length > 0 ? (
              filteredCrops.map((crop) => (
                <button
                  key={crop}
                  onClick={() => setSelectedCrop(crop)}
                  className={`w-full text-left px-3 py-2 rounded-md transition-colors ${
                    selectedCrop === crop
                      ? 'bg-green-100 text-green-800 font-medium'
                      : 'hover:bg-gray-100 text-gray-700'
                  }`}
                >
                  <div className="flex items-center">
                    <Leaf className={`h-4 w-4 mr-2 ${selectedCrop === crop ? 'text-green-600' : 'text-gray-400'}`} />
                    {crop}
                  </div>
                </button>
              ))
            ) : (
              <p className="text-gray-500 text-sm p-2">No crops found matching your search.</p>
            )}
          </div>
        </div>

        <div className="md:col-span-2 bg-gray-50 rounded-lg p-6 border border-gray-200">
          {!selectedCrop ? (
            <div className="h-full flex flex-col items-center justify-center text-center p-6">
              <Leaf className="h-12 w-12 text-gray-400 mb-4" />
              <h3 className="text-lg font-medium text-gray-700 mb-2">Select a Crop</h3>
              <p className="text-gray-500">
                Choose a crop from the list to view detailed information.
              </p>
            </div>
          ) : cropData[selectedCrop] ? (
            <div>
              <div className="flex flex-col md:flex-row md:items-start mb-6">
                <img
                  src={cropData[selectedCrop].image}
                  alt={selectedCrop}
                  className="w-full md:w-1/3 h-48 object-cover rounded-lg mb-4 md:mb-0 md:mr-6"
                />
                <div>
                  <h3 className="text-xl font-bold text-gray-800 mb-2">{selectedCrop}</h3>
                  <p className="text-gray-600 mb-4">{cropData[selectedCrop].description}</p>
                  <div className="flex flex-wrap gap-2">
                    {cropData[selectedCrop].growingSeasons.map((season: string) => (
                      <span key={season} className="bg-green-100 text-green-800 text-xs px-2 py-1 rounded-full">
                        {season}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-medium text-gray-800 mb-3 flex items-center">
                    <ThermometerSun className="h-4 w-4 mr-2 text-green-600" />
                    Growing Conditions
                  </h4>
                  <div className="bg-white rounded-lg p-4 border border-gray-200">
                    <div className="grid grid-cols-2 gap-4">
                      <div className="flex items-start">
                        <div className="bg-brown-100 p-1 rounded-full mr-2">
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-brown-600" viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-11a1 1 0 10-2 0v2H7a1 1 0 100 2h2v2a1 1 0 102 0v-2h2a1 1 0 100-2h-2V7z" clipRule="evenodd" />
                          </svg>
                        </div>
                        <div>
                          <p className="text-xs text-gray-500">Soil</p>
                          <p className="text-sm text-gray-800">{cropData[selectedCrop].growingConditions.soil}</p>
                        </div>
                      </div>
                      <div className="flex items-start">
                        <div className="bg-blue-100 p-1 rounded-full mr-2">
                          <Droplets className="h-4 w-4 text-blue-600" />
                        </div>
                        <div>
                          <p className="text-xs text-gray-500">Water</p>
                          <p className="text-sm text-gray-800">{cropData[selectedCrop].growingConditions.water}</p>
                        </div>
                      </div>
                      <div className="flex items-start">
                        <div className="bg-yellow-100 p-1 rounded-full mr-2">
                          <Sun className="h-4 w-4 text-yellow-600" />
                        </div>
                        <div>
                          <p className="text-xs text-gray-500">Sunlight</p>
                          <p className="text-sm text-gray-800">{cropData[selectedCrop].growingConditions.sunlight}</p>
                        </div>
                      </div>
                      <div className="flex items-start">
                        <div className="bg-red-100 p-1 rounded-full mr-2">
                          <ThermometerSun className="h-4 w-4 text-red-600" />
                        </div>
                        <div>
                          <p className="text-xs text-gray-500">Temperature</p>
                          <p className="text-sm text-gray-800">{cropData[selectedCrop].growingConditions.temperature}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div>
                  <h4 className="font-medium text-gray-800 mb-3 flex items-center">
                    <AlertCircle className="h-4 w-4 mr-2 text-red-600" />
                    Common Diseases
                  </h4>
                  <div className="bg-white rounded-lg p-4 border border-gray-200">
                    <ul className="space-y-2">
                      {cropData[selectedCrop].commonDiseases.map((disease: string) => (
                        <li key={disease} className="flex items-center">
                          <div className="bg-red-100 p-1 rounded-full mr-2">
                            <AlertCircle className="h-3 w-3 text-red-600" />
                          </div>
                          <span className="text-sm text-gray-800">{disease}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>

              <div className="mt-6">
                <h4 className="font-medium text-gray-800 mb-3 flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-2 text-purple-600" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M7 2a1 1 0 00-.707 1.707L7 4.414v3.758a1 1 0 01-.293.707l-4 4C.817 14.769 2.156 18 4.828 18h10.343c2.673 0 4.012-3.231 2.122-5.121l-4-4A1 1 0 0113 8.172V4.414l.707-.707A1 1 0 0013 2H7zm2 6.172V4h2v4.172a3 3 0 00.879 2.12l1.027 1.028a4 4 0 00-2.171.102l-.47.156a4 4 0 01-2.53 0l-.563-.187a1.993 1.993 0 00-.114-.035l1.063-1.063A3 3 0 009 8.172z" clipRule="evenodd" />
                  </svg>
                  Nutritional Value
                </h4>
                <div className="bg-white rounded-lg p-4 border border-gray-200">
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    <div className="bg-purple-50 p-3 rounded-lg text-center">
                      <p className="text-xs text-gray-500 mb-1">Calories</p>
                      <p className="text-sm font-medium text-purple-800">{cropData[selectedCrop].nutritionalValue.calories}</p>
                    </div>
                    <div className="bg-blue-50 p-3 rounded-lg text-center">
                      <p className="text-xs text-gray-500 mb-1">Protein</p>
                      <p className="text-sm font-medium text-blue-800">{cropData[selectedCrop].nutritionalValue.protein}</p>
                    </div>
                    <div className="bg-green-50 p-3 rounded-lg text-center">
                      <p className="text-xs text-gray-500 mb-1">Carbs</p>
                      <p className="text-sm font-medium text-green-800">{cropData[selectedCrop].nutritionalValue.carbohydrates}</p>
                    </div>
                    <div className="bg-orange-50 p-3 rounded-lg text-center">
                      <p className="text-xs text-gray-500 mb-1">Fiber</p>
                      <p className="text-sm font-medium text-orange-800">{cropData[selectedCrop].nutritionalValue.fiber}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ) : (
            <div className="h-full flex flex-col items-center justify-center text-center p-6">
              <AlertCircle className="h-12 w-12 text-red-400 mb-4" />
              <h3 className="text-lg font-medium text-gray-700 mb-2">Information Not Available</h3>
              <p className="text-gray-500">
                Detailed information for {selectedCrop} is not available at this time.
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default CropInfo;