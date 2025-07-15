import React, { useState } from 'react';
import { Upload, Camera, AlertCircle, CheckCircle } from 'lucide-react';

const DiseaseDetection = () => {
  const [image, setImage] = useState<string | null>(null);
  const [analyzing, setAnalyzing] = useState(false);
  const [result, setResult] = useState<any | null>(null);

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        setImage(reader.result as string);
        setResult(null);
      };
      reader.readAsDataURL(file);
    }
  };

  const analyzeImage = () => {
    setAnalyzing(true);
    // Simulate API call
    setTimeout(() => {
      setAnalyzing(false);
      setResult({
        disease: 'Late Blight',
        confidence: 92,
        description: 'Late blight is a plant disease that mainly affects potatoes and tomatoes, causing significant damage to leaves, stems, and fruits.',
        treatment: [
          'Apply fungicides containing chlorothalonil or mancozeb',
          'Remove and destroy infected plant parts',
          'Ensure proper spacing between plants for air circulation',
          'Avoid overhead irrigation'
        ],
        preventiveMeasures: [
          'Use resistant varieties',
          'Practice crop rotation',
          'Plant in well-drained soil',
          'Apply preventive fungicides during wet weather'
        ]
      });
    }, 2000);
  };

  return (
    <div>
      <div className="mb-6">
        <h2 className="text-2xl font-bold text-gray-800 mb-2">Disease Detection</h2>
        <p className="text-gray-600">
          Upload an image of your crop to detect diseases and get treatment recommendations.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="bg-gray-50 rounded-lg p-6 border border-gray-200">
          {!image ? (
            <div className="border-2 border-dashed border-gray-300 rounded-lg p-12 flex flex-col items-center justify-center">
              <Upload className="h-12 w-12 text-gray-400 mb-4" />
              <p className="text-gray-500 mb-4 text-center">
                Drag and drop an image here, or click to select
              </p>
              <label className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-lg cursor-pointer transition-colors">
                Upload Image
                <input
                  type="file"
                  className="hidden"
                  accept="image/*"
                  onChange={handleImageUpload}
                />
              </label>
              <p className="mt-4 text-sm text-gray-500">
                Supported formats: JPG, PNG, WEBP
              </p>
            </div>
          ) : (
            <div className="flex flex-col items-center">
              <div className="relative w-full mb-4">
                <img
                  src={image}
                  alt="Uploaded crop"
                  className="w-full h-64 object-cover rounded-lg"
                />
                <button
                  onClick={() => setImage(null)}
                  className="absolute top-2 right-2 bg-red-500 text-white p-1 rounded-full"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </button>
              </div>
              <button
                onClick={analyzeImage}
                disabled={analyzing}
                className={`${
                  analyzing ? 'bg-gray-400' : 'bg-green-500 hover:bg-green-600'
                } text-white px-6 py-2 rounded-lg transition-colors flex items-center`}
              >
                {analyzing ? (
                  <>
                    <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Analyzing...
                  </>
                ) : (
                  <>
                    <Camera className="mr-2 h-5 w-5" />
                    Analyze Image
                  </>
                )}
              </button>
            </div>
          )}
        </div>

        <div className="bg-gray-50 rounded-lg p-6 border border-gray-200">
          {!result ? (
            <div className="h-full flex flex-col items-center justify-center text-center">
              <AlertCircle className="h-12 w-12 text-gray-400 mb-4" />
              <h3 className="text-lg font-medium text-gray-700 mb-2">No Analysis Results Yet</h3>
              <p className="text-gray-500">
                Upload and analyze an image to see disease detection results and treatment recommendations.
              </p>
            </div>
          ) : (
            <div>
              <div className="flex items-center mb-4">
                <CheckCircle className="h-6 w-6 text-green-500 mr-2" />
                <h3 className="text-xl font-bold text-gray-800">Analysis Results</h3>
              </div>
              
              <div className="mb-4 bg-green-100 p-3 rounded-lg flex items-center">
                <div className="bg-green-500 rounded-full p-1 mr-3">
                  <CheckCircle className="h-4 w-4 text-white" />
                </div>
                <div>
                  <p className="text-green-800 font-medium">Detected: {result.disease}</p>
                  <p className="text-green-700 text-sm">Confidence: {result.confidence}%</p>
                </div>
              </div>
              
              <div className="mb-4">
                <h4 className="font-medium text-gray-800 mb-1">Description:</h4>
                <p className="text-gray-600 text-sm">{result.description}</p>
              </div>
              
              <div className="mb-4">
                <h4 className="font-medium text-gray-800 mb-1">Recommended Treatment:</h4>
                <ul className="list-disc list-inside text-sm text-gray-600 space-y-1">
                  {result.treatment.map((item: string, index: number) => (
                    <li key={index}>{item}</li>
                  ))}
                </ul>
              </div>
              
              <div>
                <h4 className="font-medium text-gray-800 mb-1">Preventive Measures:</h4>
                <ul className="list-disc list-inside text-sm text-gray-600 space-y-1">
                  {result.preventiveMeasures.map((item: string, index: number) => (
                    <li key={index}>{item}</li>
                  ))}
                </ul>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default DiseaseDetection;