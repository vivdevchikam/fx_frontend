import React, { useState, useRef } from 'react';
import { Upload, Camera, Scan, MessageCircle, Send, X, CheckCircle, AlertCircle, Sparkles, Brain, Heart, Shield, Lock } from 'lucide-react';
import Auth from './Auth';
import UserProfile from './UserProfile';
import HealthNews from './HealthNews';
import Subscription from './Subscription';

interface ScannerProps {
  onArticleClick?: (articleId: string) => void;
}

const Scanner: React.FC<ScannerProps> = ({ onArticleClick }) => {
  const [currentStep, setCurrentStep] = useState('auth'); // auth, upload, scanning, results, chat
  const [uploadedImage, setUploadedImage] = useState<string | null>(null);
  const [scanProgress, setScanProgress] = useState(0);
  const [analysisResults, setAnalysisResults] = useState<any>(null);
  const [chatMessages, setChatMessages] = useState<any[]>([]);
  const [chatInput, setChatInput] = useState('');
  const [isChatOpen, setIsChatOpen] = useState(false);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  const [isSubscriptionOpen, setIsSubscriptionOpen] = useState(false);
  const [userPlan, setUserPlan] = useState('free'); // 'free' or 'premium'
  const fileInputRef = useRef<HTMLInputElement>(null);

  // Mock analysis results
  const mockResults = {
    productName: "Organic Whole Grain Cereal",
    healthScore: 8.2,
    verdict: "Healthy Choice",
    verdictColor: "emerald",
    ingredients: [
      { name: "Whole grain oats", status: "good", reason: "High in fiber and nutrients" },
      { name: "Organic honey", status: "moderate", reason: "Natural sweetener, consume in moderation" },
      { name: "Sea salt", status: "good", reason: "Minimal sodium content" },
      { name: "Vitamin D", status: "good", reason: "Essential nutrient fortification" }
    ],
    nutrition: {
      calories: 150,
      protein: "5g",
      fiber: "4g",
      sugar: "6g",
      sodium: "140mg"
    },
    pros: [
      "High in fiber for digestive health",
      "Whole grain ingredients",
      "No artificial preservatives",
      "Good source of protein"
    ],
    cons: [
      "Contains added sugars",
      "Moderate sodium content"
    ],
    alternatives: [
      "Steel-cut oats with fresh berries",
      "Homemade granola with nuts",
      "Quinoa breakfast bowl"
    ],
    // Extract ingredients for news context
    scannedIngredients: ["whole grain oats", "organic honey", "sea salt", "vitamin D", "sugar", "sodium"]
  };

  const handleAuthSuccess = () => {
    setIsAuthenticated(true);
    setCurrentStep('upload');
  };

  // Check scan limits for free users
  const checkScanLimit = () => {
    if (userPlan === 'free') {
      // Mock: assume user has used 1 out of 2 daily scans
      const dailyScansUsed = 1;
      const dailyLimit = 2;
      
      if (dailyScansUsed >= dailyLimit) {
        setIsSubscriptionOpen(true);
        return false;
      }
    }
    return true;
  };

  const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (!checkScanLimit()) return;
    
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        setUploadedImage(e.target?.result as string);
        startScanning();
      };
      reader.readAsDataURL(file);
    }
  };

  const startScanning = () => {
    setCurrentStep('scanning');
    setScanProgress(0);
    
    // Simulate scanning progress
    const interval = setInterval(() => {
      setScanProgress(prev => {
        if (prev >= 100) {
          clearInterval(interval);
          setAnalysisResults(mockResults);
          setCurrentStep('results');
          return 100;
        }
        return prev + 10;
      });
    }, 200);
  };

  const handleChatSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!chatInput.trim()) return;

    const userMessage = { type: 'user', content: chatInput };
    setChatMessages(prev => [...prev, userMessage]);

    // Mock AI response
    setTimeout(() => {
      const aiResponse = {
        type: 'ai',
        content: generateAIResponse(chatInput)
      };
      setChatMessages(prev => [...prev, aiResponse]);
    }, 1000);

    setChatInput('');
  };

  const generateAIResponse = (question: string) => {
    const responses = {
      default: "Based on the analysis, this product has a health score of 8.2/10. It's a good choice due to its whole grain content and minimal processing. Would you like me to explain any specific aspect?",
      ingredients: "The main ingredients are whole grain oats (excellent for fiber), organic honey (natural but still sugar), and sea salt (minimal amount). The vitamin D fortification is beneficial for bone health.",
      alternatives: "For even healthier options, try steel-cut oats with fresh berries, homemade granola with nuts and seeds, or a quinoa breakfast bowl with fruits. These provide similar nutrition with less added sugars.",
      health: "This cereal supports digestive health with 4g of fiber per serving and provides sustained energy from whole grains. The 5g of protein helps with satiety. Just watch the 6g of added sugars."
    };

    const lowerQuestion = question.toLowerCase();
    if (lowerQuestion.includes('ingredient')) return responses.ingredients;
    if (lowerQuestion.includes('alternative') || lowerQuestion.includes('better')) return responses.alternatives;
    if (lowerQuestion.includes('health') || lowerQuestion.includes('benefit')) return responses.health;
    return responses.default;
  };

  const resetScanner = () => {
    setCurrentStep('upload');
    setUploadedImage(null);
    setScanProgress(0);
    setAnalysisResults(null);
    setChatMessages([]);
    setIsChatOpen(false);
  };

  return (
    <section id="scanner" className="py-20 bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50 min-h-screen">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Try FX Health
            <span className="block bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
              Scanner Demo
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Experience the power of AI-driven food analysis. Sign in to scan product labels and get instant health insights.
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Main Scanner Interface */}
            <div className="lg:col-span-2">
              <div className="bg-white rounded-3xl shadow-2xl overflow-hidden border border-gray-100">
                {/* Authentication Required Step */}
                {currentStep === 'auth' && (
                  <div className="p-8 text-center">
                    <div className="inline-flex p-4 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-2xl mb-6">
                      <Lock className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-4">Sign In Required</h3>
                    <p className="text-gray-600 mb-8">
                      Before you can scan any product label, you need to sign in to your FX Health account.
                    </p>
                    
                    <div className="bg-gradient-to-r from-emerald-50 to-sky-50 rounded-2xl p-6 mb-8">
                      <h4 className="font-semibold text-gray-900 mb-4">Why Sign In?</h4>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                        <div className="flex items-center space-x-3">
                          <Shield className="w-5 h-5 text-emerald-600" />
                          <span className="text-gray-700">Secure & encrypted data</span>
                        </div>
                        <div className="flex items-center space-x-3">
                          <Heart className="w-5 h-5 text-rose-600" />
                          <span className="text-gray-700">Personalized insights</span>
                        </div>
                        <div className="flex items-center space-x-3">
                          <Brain className="w-5 h-5 text-indigo-600" />
                          <span className="text-gray-700">AI-powered analysis</span>
                        </div>
                        <div className="flex items-center space-x-3">
                          <Scan className="w-5 h-5 text-purple-600" />
                          <span className="text-gray-700">Unlimited scans</span>
                        </div>
                      </div>
                    </div>

                    <Auth
                      isOpen={true}
                      onClose={() => {}}
                      onAuthSuccess={handleAuthSuccess}
                    />
                  </div>
                )}

                {/* Upload Step */}
                {currentStep === 'upload' && (
                  <div className="p-8">
                    <div className="text-center mb-8">
                      <div className="inline-flex p-4 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-2xl mb-4">
                        <Upload className="w-8 h-8 text-white" />
                      </div>
                      <h3 className="text-2xl font-bold text-gray-900 mb-2">Upload Product Label</h3>
                      <p className="text-gray-600">Take a photo or upload an image of any food product label</p>
                    </div>

                    {/* Scan Limit Notice for Free Users */}
                    {userPlan === 'free' && (
                      <div className="bg-amber-50 border border-amber-200 rounded-xl p-4 mb-6">
                        <div className="flex items-center justify-between">
                          <div>
                            <p className="text-amber-800 font-medium">Daily Scan Limit: 1/2 used</p>
                            <p className="text-amber-600 text-sm">Upgrade to Premium for unlimited scans</p>
                          </div>
                          <button
                            onClick={() => setIsSubscriptionOpen(true)}
                            className="bg-gradient-to-r from-purple-500 to-blue-500 text-white px-4 py-2 rounded-lg font-medium hover:from-purple-600 hover:to-blue-600 transition-all duration-300"
                          >
                            Upgrade
                          </button>
                        </div>
                      </div>
                    )}

                    <div className="space-y-4">
                      <div
                        onClick={() => fileInputRef.current?.click()}
                        className="border-2 border-dashed border-indigo-300 rounded-2xl p-12 text-center hover:border-indigo-400 hover:bg-indigo-50 transition-all duration-300 cursor-pointer group"
                      >
                        <Camera className="w-16 h-16 text-indigo-400 mx-auto mb-4 group-hover:text-indigo-500 transition-colors" />
                        <p className="text-lg font-medium text-gray-700 mb-2">Click to upload image</p>
                        <p className="text-gray-500">Supports JPG, PNG, WEBP up to 10MB</p>
                      </div>

                      <input
                        ref={fileInputRef}
                        type="file"
                        accept="image/*"
                        onChange={handleFileUpload}
                        className="hidden"
                      />

                      <div className="grid grid-cols-3 gap-4">
                        <div className="text-center p-4 bg-gradient-to-br from-emerald-50 to-emerald-100 rounded-xl">
                          <Scan className="w-6 h-6 text-emerald-600 mx-auto mb-2" />
                          <p className="text-sm font-medium text-emerald-700">OCR Analysis</p>
                        </div>
                        <div className="text-center p-4 bg-gradient-to-br from-sky-50 to-sky-100 rounded-xl">
                          <Brain className="w-6 h-6 text-sky-600 mx-auto mb-2" />
                          <p className="text-sm font-medium text-sky-700">AI Processing</p>
                        </div>
                        <div className="text-center p-4 bg-gradient-to-br from-purple-50 to-purple-100 rounded-xl">
                          <Heart className="w-6 h-6 text-purple-600 mx-auto mb-2" />
                          <p className="text-sm font-medium text-purple-700">Health Insights</p>
                        </div>
                      </div>
                    </div>
                  </div>
                )}

                {/* Scanning Step */}
                {currentStep === 'scanning' && (
                  <div className="p-8">
                    <div className="text-center mb-8">
                      <div className="inline-flex p-4 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-2xl mb-4 animate-pulse">
                        <Sparkles className="w-8 h-8 text-white" />
                      </div>
                      <h3 className="text-2xl font-bold text-gray-900 mb-2">Analyzing Your Product</h3>
                      <p className="text-gray-600">Our AI is processing the label and ingredients</p>
                    </div>

                    {uploadedImage && (
                      <div className="mb-8">
                        <img
                          src={uploadedImage}
                          alt="Uploaded product"
                          className="w-full h-64 object-cover rounded-2xl shadow-lg"
                        />
                      </div>
                    )}

                    {/* Premium Features Locked for Free Users */}
                    {userPlan === 'free' && (
                      <div className="bg-gradient-to-r from-purple-50 to-blue-50 border border-purple-200 rounded-xl p-4 mb-6">
                        <div className="flex items-center justify-between">
                          <div>
                            <p className="text-purple-800 font-medium">🔒 Advanced AI insights locked</p>
                            <p className="text-purple-600 text-sm">Get detailed nutrition analysis with Premium</p>
                          </div>
                          <button
                            onClick={() => setIsSubscriptionOpen(true)}
                            className="bg-gradient-to-r from-purple-500 to-blue-500 text-white px-4 py-2 rounded-lg font-medium hover:from-purple-600 hover:to-blue-600 transition-all duration-300"
                          >
                            Unlock
                          </button>
                        </div>
                      </div>
                    )}

                    <div className="space-y-6">
                      <div>
                        <div className="flex justify-between items-center mb-2">
                          <span className="text-sm font-medium text-gray-700">Analysis Progress</span>
                          <span className="text-sm font-medium text-indigo-600">{scanProgress}%</span>
                        </div>
                        <div className="w-full bg-gray-200 rounded-full h-3">
                          <div
                            className="bg-gradient-to-r from-indigo-500 to-purple-500 h-3 rounded-full transition-all duration-300"
                            style={{ width: `${scanProgress}%` }}
                          ></div>
                        </div>
                      </div>

                      <div className="grid grid-cols-3 gap-4">
                        <div className={`p-4 rounded-xl transition-all duration-300 ${scanProgress > 30 ? 'bg-emerald-100 text-emerald-700' : 'bg-gray-100 text-gray-400'}`}>
                          <CheckCircle className="w-6 h-6 mx-auto mb-2" />
                          <p className="text-sm font-medium">OCR Complete</p>
                        </div>
                        <div className={`p-4 rounded-xl transition-all duration-300 ${scanProgress > 60 ? 'bg-sky-100 text-sky-700' : 'bg-gray-100 text-gray-400'}`}>
                          <Brain className="w-6 h-6 mx-auto mb-2" />
                          <p className="text-sm font-medium">AI Analysis</p>
                        </div>
                        <div className={`p-4 rounded-xl transition-all duration-300 ${scanProgress > 90 ? 'bg-purple-100 text-purple-700' : 'bg-gray-100 text-gray-400'}`}>
                          <Heart className="w-6 h-6 mx-auto mb-2" />
                          <p className="text-sm font-medium">Health Score</p>
                        </div>
                      </div>
                    </div>
                  </div>
                )}

                {/* Results Step */}
                {currentStep === 'results' && analysisResults && (
                  <div className="p-8">
                    <div className="flex justify-between items-center mb-6">
                      <h3 className="text-2xl font-bold text-gray-900">Analysis Results</h3>
                      <button
                        onClick={resetScanner}
                        className="text-gray-500 hover:text-gray-700 transition-colors"
                      >
                        <X className="w-6 h-6" />
                      </button>
                    </div>

                    {uploadedImage && (
                      <div className="mb-6">
                        <img
                          src={uploadedImage}
                          alt="Analyzed product"
                          className="w-full h-48 object-cover rounded-xl shadow-lg"
                        />
                      </div>
                    )}

                    {/* Health Score */}
                    <div className="bg-gradient-to-r from-emerald-50 to-sky-50 rounded-2xl p-6 mb-6">
                      <div className="flex items-center justify-between">
                        <div>
                          <h4 className="text-xl font-bold text-gray-900 mb-2">{analysisResults.productName}</h4>
                          <div className="flex items-center space-x-3">
                            <span className={`px-4 py-2 rounded-full text-sm font-medium bg-${analysisResults.verdictColor}-100 text-${analysisResults.verdictColor}-700`}>
                              {analysisResults.verdict}
                            </span>
                            <CheckCircle className="w-5 h-5 text-emerald-500" />
                          </div>
                        </div>
                        <div className="text-center">
                          <div className="text-4xl font-bold text-emerald-600 mb-1">{analysisResults.healthScore}</div>
                          <div className="text-sm text-gray-600">Health Score</div>
                        </div>
                      </div>
                    </div>

                    {/* Nutrition Facts */}
                    <div className="grid grid-cols-2 lg:grid-cols-5 gap-4 mb-6">
                      {Object.entries(analysisResults.nutrition).map(([key, value]) => (
                        <div key={key} className="bg-white border border-gray-200 rounded-xl p-4 text-center">
                          <div className="text-lg font-bold text-gray-900">{value}</div>
                          <div className="text-sm text-gray-600 capitalize">{key}</div>
                        </div>
                      ))}
                    </div>

                    {/* Pros and Cons */}
                    <div className="grid md:grid-cols-2 gap-6 mb-6">
                      <div className="bg-emerald-50 rounded-xl p-6">
                        <h5 className="font-semibold text-emerald-800 mb-4 flex items-center">
                          <CheckCircle className="w-5 h-5 mr-2" />
                          Pros
                        </h5>
                        <ul className="space-y-2">
                          {analysisResults.pros.map((pro: string, index: number) => (
                            <li key={index} className="text-emerald-700 text-sm flex items-start">
                              <span className="w-2 h-2 bg-emerald-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                              {pro}
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div className="bg-amber-50 rounded-xl p-6">
                        <h5 className="font-semibold text-amber-800 mb-4 flex items-center">
                          <AlertCircle className="w-5 h-5 mr-2" />
                          Consider
                        </h5>
                        <ul className="space-y-2">
                          {analysisResults.cons.map((con: string, index: number) => (
                            <li key={index} className="text-amber-700 text-sm flex items-start">
                              <span className="w-2 h-2 bg-amber-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                              {con}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>

                    {/* Action Buttons */}
                    <div className="flex flex-col sm:flex-row gap-4">
                      <button
                        onClick={() => setIsChatOpen(true)}
                        className="flex-1 bg-gradient-to-r from-indigo-500 to-purple-500 text-white px-6 py-3 rounded-xl font-medium hover:from-indigo-600 hover:to-purple-600 transition-all duration-300 flex items-center justify-center"
                      >
                        <MessageCircle className="w-5 h-5 mr-2" />
                        Ask AI Questions
                      </button>
                      <button
                        onClick={() => setIsProfileOpen(true)}
                        className="flex-1 bg-white border border-gray-300 text-gray-700 px-6 py-3 rounded-xl font-medium hover:bg-gray-50 transition-colors"
                      >
                        View Profile
                      </button>
                      <button
                        onClick={resetScanner}
                        className="bg-white border border-gray-300 text-gray-700 px-6 py-3 rounded-xl font-medium hover:bg-gray-50 transition-colors"
                      >
                        Scan Another Product
                      </button>
                    </div>
                  </div>
                )}
              </div>
            </div>

            {/* Sidebar - Features & Chat */}
            <div className="space-y-6">
              {/* Features */}
              <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100">
                <h4 className="text-lg font-semibold text-gray-900 mb-4">What You Get</h4>
                <div className="space-y-4">
                  {userPlan === 'free' && (
                    <div className="bg-amber-50 border border-amber-200 rounded-xl p-4 mb-4">
                      <div className="flex items-center justify-between">
                        <div>
                          <p className="text-amber-800 font-medium text-sm">Free Plan Limits</p>
                          <p className="text-amber-600 text-xs">3 scans/day • Basic insights only</p>
                        </div>
                        <button
                          onClick={() => setIsSubscriptionOpen(true)}
                          className="text-amber-700 hover:text-amber-800 font-medium text-sm"
                        >
                          Upgrade →
                        </button>
                      </div>
                    </div>
                  )}
                  <div className="flex items-start space-x-3">
                    <Scan className="w-5 h-5 text-indigo-600 mt-1" />
                    <div>
                      <p className="font-medium text-gray-900">Instant OCR</p>
                      <p className="text-sm text-gray-600">Extract text from any label</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <Brain className="w-5 h-5 text-purple-600 mt-1" />
                    <div>
                      <p className="font-medium text-gray-900">AI Analysis</p>
                      <p className="text-sm text-gray-600">Comprehensive ingredient review</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <Heart className="w-5 h-5 text-rose-600 mt-1" />
                    <div>
                      <p className="font-medium text-gray-900">Health Score</p>
                      <p className="text-sm text-gray-600">Personalized recommendations</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <Shield className="w-5 h-5 text-emerald-600 mt-1" />
                    <div>
                      <p className="font-medium text-gray-900">Privacy First</p>
                      <p className="text-sm text-gray-600">Your data stays secure</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Sample Products */}
              <div className="bg-gradient-to-br from-indigo-50 to-purple-50 rounded-2xl p-6 border border-indigo-100">
                <h4 className="text-lg font-semibold text-gray-900 mb-4">Try These Samples</h4>
                <div className="space-y-3">
                  {userPlan === 'free' && (
                    <div className="bg-purple-100 border border-purple-200 rounded-lg p-3 mb-3">
                      <div className="flex items-center justify-between">
                        <div>
                          <p className="text-purple-800 font-medium text-sm">🔒 Premium Samples</p>
                          <p className="text-purple-600 text-xs">Unlock with Premium subscription</p>
                        </div>
                        <button
                          onClick={() => setIsSubscriptionOpen(true)}
                          className="text-purple-700 hover:text-purple-800 font-medium text-xs"
                        >
                          Upgrade
                        </button>
                      </div>
                    </div>
                  )}
                  <button
                    onClick={() => {
                      if (isAuthenticated && checkScanLimit()) {
                        setUploadedImage('https://images.pexels.com/photos/4226140/pexels-photo-4226140.jpeg?auto=compress&cs=tinysrgb&w=400');
                        startScanning();
                      }
                    }}
                    className={`w-full text-left p-3 bg-white rounded-lg transition-all duration-300 border border-gray-100 ${
                      isAuthenticated && userPlan === 'premium'
                        ? 'hover:shadow-md cursor-pointer' 
                        : 'opacity-50 cursor-not-allowed'
                    }`}
                    disabled={!isAuthenticated || (userPlan === 'free')}
                  >
                    <p className="font-medium text-gray-900">Organic Cereal</p>
                    <p className="text-sm text-gray-600">Whole grain breakfast option</p>
                    {!isAuthenticated && <p className="text-xs text-red-500 mt-1">Sign in required</p>}
                    {isAuthenticated && userPlan === 'free' && <p className="text-xs text-purple-500 mt-1">Premium required</p>}
                  </button>
                  <button
                    onClick={() => {
                      if (isAuthenticated && checkScanLimit()) {
                        setUploadedImage('https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=400');
                        startScanning();
                      }
                    }}
                    className={`w-full text-left p-3 bg-white rounded-lg transition-all duration-300 border border-gray-100 ${
                      isAuthenticated && userPlan === 'premium'
                        ? 'hover:shadow-md cursor-pointer' 
                        : 'opacity-50 cursor-not-allowed'
                    }`}
                    disabled={!isAuthenticated || (userPlan === 'free')}
                  >
                    <p className="font-medium text-gray-900">Protein Bar</p>
                    <p className="text-sm text-gray-600">Post-workout snack</p>
                    {!isAuthenticated && <p className="text-xs text-red-500 mt-1">Sign in required</p>}
                    {isAuthenticated && userPlan === 'free' && <p className="text-xs text-purple-500 mt-1">Premium required</p>}
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Health News Section - Contextual to Scan Results */}
        {currentStep === 'results' && analysisResults && (
          <div className="mt-16">
            <HealthNews 
              context="scan-result"
              scannedIngredients={analysisResults.scannedIngredients}
              productCategory="cereal"
              userHealthGoals={['heart-health', 'weight-management']}
              onArticleClick={onArticleClick}
            />
          </div>
        )}

        {/* AI Chat Modal */}
        {isChatOpen && (
          <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
            <div className="bg-white rounded-2xl shadow-2xl w-full max-w-2xl max-h-[80vh] flex flex-col">
              {/* Chat Header */}
              <div className="flex items-center justify-between p-6 border-b border-gray-200">
                <div className="flex items-center space-x-3">
                  <div className="bg-gradient-to-r from-indigo-500 to-purple-500 p-2 rounded-lg">
                    <MessageCircle className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900">AI Health Assistant</h3>
                    <p className="text-sm text-gray-600">Ask me anything about this product</p>
                  </div>
                </div>
                <button
                  onClick={() => setIsChatOpen(false)}
                  className="text-gray-500 hover:text-gray-700 transition-colors"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>

              {/* Chat Messages */}
              <div className="flex-1 overflow-y-auto p-6 space-y-4">
                {chatMessages.length === 0 && (
                  <div className="text-center py-8">
                    <Brain className="w-12 h-12 text-indigo-400 mx-auto mb-4" />
                    <p className="text-gray-600 mb-4">Hi! I'm your AI health assistant. Ask me about:</p>
                    <div className="grid grid-cols-2 gap-2 text-sm">
                      <button
                        onClick={() => setChatInput("Tell me about the ingredients")}
                        className="p-2 bg-indigo-50 text-indigo-700 rounded-lg hover:bg-indigo-100 transition-colors"
                      >
                        Ingredients
                      </button>
                      <button
                        onClick={() => setChatInput("What are healthier alternatives?")}
                        className="p-2 bg-purple-50 text-purple-700 rounded-lg hover:bg-purple-100 transition-colors"
                      >
                        Alternatives
                      </button>
                      <button
                        onClick={() => setChatInput("Health benefits and concerns?")}
                        className="p-2 bg-emerald-50 text-emerald-700 rounded-lg hover:bg-emerald-100 transition-colors"
                      >
                        Health Impact
                      </button>
                      <button
                        onClick={() => setChatInput("Is this good for weight loss?")}
                        className="p-2 bg-rose-50 text-rose-700 rounded-lg hover:bg-rose-100 transition-colors"
                      >
                        Weight Goals
                      </button>
                    </div>
                  </div>
                )}

                {chatMessages.map((message, index) => (
                  <div key={index} className={`flex ${message.type === 'user' ? 'justify-end' : 'justify-start'}`}>
                    <div className={`max-w-xs lg:max-w-md px-4 py-3 rounded-2xl ${
                      message.type === 'user'
                        ? 'bg-gradient-to-r from-indigo-500 to-purple-500 text-white'
                        : 'bg-gray-100 text-gray-900'
                    }`}>
                      <p className="text-sm">{message.content}</p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Chat Input */}
              <form onSubmit={handleChatSubmit} className="p-6 border-t border-gray-200">
                <div className="flex space-x-4">
                  <input
                    type="text"
                    value={chatInput}
                    onChange={(e) => setChatInput(e.target.value)}
                    placeholder="Ask about ingredients, health benefits, alternatives..."
                    className="flex-1 px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                  />
                  <button
                    type="submit"
                    disabled={!chatInput.trim()}
                    className="bg-gradient-to-r from-indigo-500 to-purple-500 text-white px-6 py-3 rounded-xl hover:from-indigo-600 hover:to-purple-600 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    <Send className="w-5 h-5" />
                  </button>
                </div>
              </form>
            </div>
          </div>
        )}

        {/* User Profile Modal */}
        <UserProfile
          isOpen={isProfileOpen}
          onClose={() => setIsProfileOpen(false)}
          currentPlan={userPlan}
        />

        {/* Subscription Modal */}
        <Subscription
          isOpen={isSubscriptionOpen}
          onClose={() => setIsSubscriptionOpen(false)}
          currentPlan={userPlan}
        />
      </div>
    </section>
  );
};

export default Scanner;