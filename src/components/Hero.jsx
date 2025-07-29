import React from 'react';
import { Scan, Sparkles, Shield, Zap, ArrowRight, CheckCircle, Apple, Calendar } from 'lucide-react';

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-emerald-50 via-sky-50 to-indigo-50 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-emerald-300 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
        <div className="absolute top-40 right-10 w-72 h-72 bg-sky-300 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse animation-delay-2000"></div>
        <div className="absolute bottom-20 left-1/2 w-72 h-72 bg-indigo-300 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse animation-delay-4000"></div>
      </div>

      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 pt-16">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="text-center lg:text-left">
            {/* Badge */}
            <div className="inline-flex items-center space-x-2 bg-white/80 backdrop-blur-sm px-4 py-2 rounded-full border border-emerald-200 mb-6">
              <Sparkles className="w-4 h-4 text-emerald-600" />
              <span className="text-sm font-medium text-emerald-600">AI-Powered Health Insights</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight mb-6">
              Scan. Analyze.
              <span className="block bg-gradient-to-r from-emerald-600 via-sky-600 to-indigo-600 bg-clip-text text-transparent">
                Live Healthier.
              </span>
            </h1>

            {/* Subtitle */}
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              Transform your grocery shopping with AI-powered food analysis. Simply scan any product label and get instant, personalized health insights to make smarter choices.
            </p>

            {/* Feature Highlights */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
              <div className="flex items-center space-x-3 bg-white/60 backdrop-blur-sm rounded-xl p-4 border border-white/30">
                <div className="bg-emerald-500 p-2 rounded-lg">
                  <Scan className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">Smart Scanning</h3>
                  <p className="text-sm text-gray-600">OCR technology</p>
                </div>
              </div>
              <div className="flex items-center space-x-3 bg-white/60 backdrop-blur-sm rounded-xl p-4 border border-white/30">
                <div className="bg-sky-500 p-2 rounded-lg">
                  <Sparkles className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">AI Analysis</h3>
                  <p className="text-sm text-gray-600">Instant insights</p>
                </div>
              </div>
            </div>

            {/* Coming Soon CTA */}
            <div className="bg-gradient-to-r from-emerald-500 to-sky-500 rounded-2xl p-6 text-white mb-8">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-xl font-bold mb-2 flex items-center">
                    <Apple className="w-6 h-6 mr-2" />
                    AI Diet & Nutrition Plans
                  </h3>
                  <p className="opacity-90">Personalized meal planning powered by AI - Coming Soon</p>
                </div>
                <ArrowRight className="w-8 h-8 opacity-80" />
              </div>
            </div>

            {/* Trust Indicators */}
            <div className="flex items-center justify-center lg:justify-start space-x-6 text-sm text-gray-500">
              <div className="flex items-center space-x-2">
                <Shield className="w-4 h-4 text-emerald-600" />
                <span>Privacy First</span>
              </div>
              <div className="flex items-center space-x-2">
                <Zap className="w-4 h-4 text-sky-600" />
                <span>Instant Results</span>
              </div>
              <div className="flex items-center space-x-2">
                <CheckCircle className="w-4 h-4 text-indigo-600" />
                <span>AI Powered</span>
              </div>
            </div>
          </div>

          {/* Right Content - Hero Image */}
          <div className="relative">
            <div className="relative bg-white/20 backdrop-blur-sm rounded-3xl p-8 border border-white/30 shadow-2xl">
              <img
                src="https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Food scanning with mobile app"
                className="w-full h-96 object-cover rounded-2xl shadow-lg"
              />
              
              {/* Floating Cards */}
              <div className="absolute -top-4 -left-4 bg-white rounded-2xl p-4 shadow-xl border border-gray-100">
                <div className="flex items-center space-x-3">
                  <div className="bg-emerald-100 p-2 rounded-lg">
                    <Scan className="w-5 h-5 text-emerald-600" />
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900">Scan Complete</p>
                    <p className="text-sm text-gray-500">Health Score: 8.5/10</p>
                  </div>
                </div>
              </div>

              <div className="absolute -bottom-4 -right-4 bg-gradient-to-r from-emerald-500 to-sky-500 text-white rounded-2xl p-4 shadow-xl">
                <div className="text-center">
                  <p className="font-bold text-lg">Healthy Choice! ✅</p>
                  <p className="text-sm opacity-90">Rich in fiber & vitamins</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Enhanced Stats Section */}
        <div className="mt-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              The Future of
              <span className="bg-gradient-to-r from-emerald-600 to-sky-600 bg-clip-text text-transparent"> Smart Nutrition</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              We're building the most advanced AI-powered food analysis platform to help you make informed health decisions.
            </p>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center bg-white/60 backdrop-blur-sm rounded-2xl p-6 border border-white/30">
              <div className="text-3xl font-bold bg-gradient-to-r from-emerald-600 to-emerald-700 bg-clip-text text-transparent mb-2">AI</div>
              <div className="text-gray-600 font-medium">Powered Analysis</div>
              <div className="text-sm text-gray-500 mt-1">Advanced algorithms</div>
            </div>
            <div className="text-center bg-white/60 backdrop-blur-sm rounded-2xl p-6 border border-white/30">
              <div className="text-3xl font-bold bg-gradient-to-r from-sky-600 to-sky-700 bg-clip-text text-transparent mb-2">OCR</div>
              <div className="text-gray-600 font-medium">Smart Scanning</div>
              <div className="text-sm text-gray-500 mt-1">Label recognition</div>
            </div>
            <div className="text-center bg-white/60 backdrop-blur-sm rounded-2xl p-6 border border-white/30">
              <div className="text-3xl font-bold bg-gradient-to-r from-indigo-600 to-indigo-700 bg-clip-text text-transparent mb-2">2024</div>
              <div className="text-gray-600 font-medium">Founded</div>
              <div className="text-sm text-gray-500 mt-1">Innovation year</div>
            </div>
            <div className="text-center bg-white/60 backdrop-blur-sm rounded-2xl p-6 border border-white/30">
              <div className="text-3xl font-bold bg-gradient-to-r from-purple-600 to-purple-700 bg-clip-text text-transparent mb-2">3</div>
              <div className="text-gray-600 font-medium">Co-Founders</div>
              <div className="text-sm text-gray-500 mt-1">Expert team</div>
            </div>
          </div>
        </div>

        {/* AI Diet & Fitness Plans Preview */}
        <div className="mt-20 bg-gradient-to-r from-gray-900 to-gray-800 rounded-3xl p-12 text-white">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-3xl font-bold mb-6">
                AI Diet & Fitness Plans
                <span className="block text-emerald-400">Coming Soon</span>
              </h3>
              <p className="text-lg text-gray-300 mb-8">
                We're working on advanced AI-powered personalized diet and nutrition plans that will revolutionize how you approach healthy eating and fitness goals.
              </p>
              
              <div className="space-y-4">
                <div className="flex items-center space-x-4">
                  <div className="w-2 h-2 bg-emerald-400 rounded-full"></div>
                  <span className="text-gray-300">Personalized meal planning based on your health profile</span>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="w-2 h-2 bg-sky-400 rounded-full"></div>
                  <span className="text-gray-300">AI-generated nutrition recommendations</span>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="w-2 h-2 bg-indigo-400 rounded-full"></div>
                  <span className="text-gray-300">Custom fitness plans integrated with diet goals</span>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="w-2 h-2 bg-purple-400 rounded-full"></div>
                  <span className="text-gray-300">Smart grocery lists and meal prep guidance</span>
                </div>
              </div>

              <div className="mt-8 bg-white/10 backdrop-blur-sm rounded-xl p-4">
                <div className="flex items-center space-x-3">
                  <Calendar className="w-6 h-6 text-emerald-400" />
                  <div>
                    <p className="font-semibold">Development Timeline</p>
                    <p className="text-sm text-gray-300">AI diet plans launching Q2 2024 • Fitness integration Q3 2024</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative">
              <img
                src="https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=600"
                alt="AI Diet and Nutrition Planning"
                className="w-full h-80 object-cover rounded-2xl"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/20 to-sky-500/20 rounded-2xl"></div>
              
              {/* Overlay with diet plan preview */}
              <div className="absolute bottom-4 left-4 right-4 bg-white/90 backdrop-blur-sm rounded-xl p-4">
                <h4 className="font-semibold text-gray-900 mb-2">AI Diet Plan Preview</h4>
                <div className="text-sm text-gray-700 space-y-1">
                  <p>🥗 Breakfast: Protein-rich smoothie bowl</p>
                  <p>🍽️ Lunch: Mediterranean quinoa salad</p>
                  <p>🥘 Dinner: Grilled salmon with vegetables</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;