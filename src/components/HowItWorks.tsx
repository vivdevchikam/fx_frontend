import React from 'react';
import { Upload, Search, CheckCircle, Smartphone } from 'lucide-react';

const HowItWorks = () => {
  const steps = [
    {
      icon: Smartphone,
      title: "Sign Up Securely",
      description: "Create your account with Gmail authentication and set up your health profile with dietary preferences and restrictions.",
      image: "https://images.pexels.com/photos/404280/pexels-photo-404280.jpeg?auto=compress&cs=tinysrgb&w=400",
    },
    {
      icon: Upload,
      title: "Scan Product Label",
      description: "Take a photo or upload an image of any food product label. Our OCR technology works with any angle or lighting.",
      image: "https://images.pexels.com/photos/5632402/pexels-photo-5632402.jpeg?auto=compress&cs=tinysrgb&w=400",
    },
    {
      icon: Search,
      title: "AI Analysis",
      description: "Our advanced AI analyzes ingredients, nutrition facts, and compares them against your personal health profile.",
      image: "https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=400",
    },
    {
      icon: CheckCircle,
      title: "Get Health Insights",
      description: "Receive instant verdict with detailed explanations, alternative suggestions, and personalized health recommendations.",
      image: "https://images.pexels.com/photos/6182527/pexels-photo-6182527.jpeg?auto=compress&cs=tinysrgb&w=400",
    },
  ];

  return (
    <section id="how-it-works" className="py-20 bg-gradient-to-br from-gray-50 to-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            How FX Health
            <span className="block bg-gradient-to-r from-emerald-600 to-sky-600 bg-clip-text text-transparent">
              Works for You
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Our simple 4-step process transforms complex nutrition data into clear, actionable health insights in seconds.
          </p>
        </div>

        {/* Steps */}
        <div className="space-y-16">
          {steps.map((step, index) => (
            <div key={index} className={`flex flex-col lg:flex-row items-center gap-12 ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}>
              {/* Content */}
              <div className="flex-1 space-y-6">
                <div className="flex items-center space-x-4">
                  <div className="flex items-center justify-center w-12 h-12 bg-gradient-to-r from-emerald-500 to-sky-500 rounded-full text-white font-bold text-lg">
                    {index + 1}
                  </div>
                  <div className={`inline-flex p-3 rounded-xl bg-gradient-to-r ${
                    index === 0 ? 'from-emerald-500 to-emerald-600' :
                    index === 1 ? 'from-sky-500 to-sky-600' :
                    index === 2 ? 'from-indigo-500 to-indigo-600' :
                    'from-purple-500 to-purple-600'
                  }`}>
                    <step.icon className="w-6 h-6 text-white" />
                  </div>
                </div>
                
                <h3 className="text-2xl font-bold text-gray-900">
                  {step.title}
                </h3>
                
                <p className="text-lg text-gray-600 leading-relaxed">
                  {step.description}
                </p>

                {index === 3 && (
                  <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-100 max-w-md">
                    <h4 className="font-semibold text-gray-900 mb-4">Sample Health Verdict:</h4>
                    <div className="space-y-3">
                      <div className="flex items-center justify-between">
                        <span className="text-emerald-600 font-medium">✅ Healthy Choice</span>
                        <span className="text-2xl font-bold text-emerald-600">8.5/10</span>
                      </div>
                      <div className="text-sm text-gray-600">
                        <p>• High in protein and fiber</p>
                        <p>• Low sodium content</p>
                        <p>• No artificial preservatives</p>
                      </div>
                    </div>
                  </div>
                )}
              </div>

              {/* Image */}
              <div className="flex-1">
                <div className="relative">
                  <img
                    src={step.image}
                    alt={step.title}
                    className="w-full h-80 object-cover rounded-2xl shadow-lg"
                  />
                  
                  {/* Overlay gradient */}
                  <div className={`absolute inset-0 bg-gradient-to-r ${
                    index === 0 ? 'from-emerald-500/20 to-transparent' :
                    index === 1 ? 'from-sky-500/20 to-transparent' :
                    index === 2 ? 'from-indigo-500/20 to-transparent' :
                    'from-purple-500/20 to-transparent'
                  } rounded-2xl`}></div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="mt-20 text-center bg-gradient-to-r from-emerald-500 to-sky-500 rounded-3xl p-12 text-white">
          <h3 className="text-3xl font-bold mb-4">
            Ready to Transform Your Health Journey?
          </h3>
          <p className="text-xl mb-8 opacity-90">
            Join the future of personalized nutrition with AI-powered insights.
          </p>
          <button className="bg-white text-emerald-600 px-8 py-4 rounded-full font-semibold text-lg hover:bg-gray-50 transition-colors shadow-lg hover:shadow-xl">
            Coming Soon
          </button>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;