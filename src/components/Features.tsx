import React from 'react';
import { Scan, Brain, Shield, Zap, Heart, Users } from 'lucide-react';

const Features = () => {
  const features = [
    {
      icon: Scan,
      title: "Smart Label Scanning",
      description: "Advanced OCR technology instantly reads and analyzes any food label with 98% accuracy.",
      color: "from-emerald-500 to-emerald-600",
    },
    {
      icon: Brain,
      title: "AI Health Analysis",
      description: "Our AI evaluates ingredients against your health profile and dietary restrictions.",
      color: "from-sky-500 to-sky-600",
    },
    {
      icon: Heart,
      title: "Personalized Insights",
      description: "Get tailored recommendations based on your health goals and dietary preferences.",
      color: "from-rose-500 to-rose-600",
    },
    {
      icon: Zap,
      title: "Instant Results",
      description: "Receive comprehensive health scores and recommendations in under 2 seconds.",
      color: "from-amber-500 to-amber-600",
    },
    {
      icon: Shield,
      title: "Privacy First",
      description: "Your health data is encrypted and never shared. HIPAA compliant security.",
      color: "from-indigo-500 to-indigo-600",
    },
    {
      icon: Users,
      title: "Family Profiles",
      description: "Create profiles for family members with different dietary needs and restrictions.",
      color: "from-purple-500 to-purple-600",
    },
  ];

  return (
    <section id="features" className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Powerful Features for
            <span className="block bg-gradient-to-r from-emerald-600 to-sky-600 bg-clip-text text-transparent">
              Healthier Living
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Our cutting-edge technology combines computer vision, AI analysis, and personalized health insights to revolutionize how you make food choices.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group relative bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 hover:border-gray-200 hover:-translate-y-2"
            >
              <div className={`inline-flex p-3 rounded-xl bg-gradient-to-r ${feature.color} mb-6`}>
                <feature.icon className="w-6 h-6 text-white" />
              </div>
              
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                {feature.title}
              </h3>
              
              <p className="text-gray-600 leading-relaxed">
                {feature.description}
              </p>

              {/* Hover Effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-emerald-50 to-sky-50 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10"></div>
            </div>
          ))}
        </div>

        {/* Feature Showcase */}
        <div className="mt-20 bg-gradient-to-r from-emerald-50 to-sky-50 rounded-3xl p-8 lg:p-16">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-3xl font-bold text-gray-900 mb-6">
                See FX Health in Action
              </h3>
              <p className="text-lg text-gray-600 mb-8">
                Watch how our AI instantly analyzes a product label and provides comprehensive health insights tailored to your personal health profile.
              </p>
              
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-emerald-500 rounded-full flex items-center justify-center">
                    <span className="text-white font-semibold text-sm">1</span>
                  </div>
                  <span className="text-gray-700">Upload or capture product label</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-sky-500 rounded-full flex items-center justify-center">
                    <span className="text-white font-semibold text-sm">2</span>
                  </div>
                  <span className="text-gray-700">AI analyzes ingredients and nutrition</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-indigo-500 rounded-full flex items-center justify-center">
                    <span className="text-white font-semibold text-sm">3</span>
                  </div>
                  <span className="text-gray-700">Get personalized health verdict</span>
                </div>
              </div>
            </div>

            <div className="relative">
              <img
                src="https://images.pexels.com/photos/4226140/pexels-photo-4226140.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="AI analyzing food products"
                className="w-full h-80 object-cover rounded-2xl shadow-lg"
              />
              
              {/* Overlay with analysis result */}
              <div className="absolute inset-0 bg-black/20 rounded-2xl flex items-center justify-center">
                <div className="bg-white rounded-xl p-6 shadow-xl max-w-xs">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-emerald-600 mb-2">Health Score: 7.2/10</div>
                    <div className="text-sm text-gray-600 mb-3">Good Choice!</div>
                    <div className="text-xs text-gray-500">
                      ✅ High in protein<br/>
                      ⚠️ Contains added sugars<br/>
                      ✅ Natural ingredients
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;