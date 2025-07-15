export interface DiseaseDetectionResult {
  disease: string;
  confidence: number;
  description: string;
  treatment: string[];
  preventiveMeasures: string[];
}

export interface CropData {
  description: string;
  growingConditions: {
    soil: string;
    water: string;
    temperature: string;
    sunlight: string;
  };
  growingSeasons: string[];
  commonDiseases: string[];
  nutritionalValue: {
    calories: string;
    protein: string;
    carbohydrates: string;
    fiber: string;
  };
  image: string;
}

export interface WeatherData {
  location: string;
  current: {
    temperature: number;
    condition: string;
    humidity: number;
    windSpeed: number;
    precipitation: number;
    uvIndex: number;
  };
  forecast: {
    day: string;
    high: number;
    low: number;
    condition: string;
    precipitation: number;
  }[];
  agriculturalInsights: {
    soilMoisture: string;
    irrigationNeeded: string;
    pestRisk: string;
    diseaseRisk: string;
    harvestConditions: string;
  };
}

export interface RiskData {
  location: string;
  droughtRisk: {
    current: string;
    trend: string;
    probability: number;
    impactLevel: string;
    timeframe: string;
    recommendations: string[];
  };
  floodRisk: {
    current: string;
    trend: string;
    probability: number;
    impactLevel: string;
    timeframe: string;
    recommendations: string[];
  };
  historicalData: {
    month: string;
    droughtRisk: number;
    floodRisk: number;
  }[];
}