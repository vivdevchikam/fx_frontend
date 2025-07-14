import React from 'react';
import { ArrowLeft, FileText, Scale, AlertTriangle, CheckCircle, XCircle, Mail, Calendar, Scan, Brain, Zap } from 'lucide-react';

const TermsOfService = ({ onBack }) => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-emerald-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="bg-white shadow-sm border-b border-gray-200 mb-8">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between h-16">
              {/* Back to Main Site */}
              <button
                onClick={onBack}
                className="flex items-center space-x-2 text-gray-600 hover:text-emerald-600 transition-colors"
              >
                <ArrowLeft className="w-5 h-5" />
                <span className="font-medium">Back to FX Health</span>
              </button>
              
              {/* Page Title */}
              <h1 className="text-xl font-bold text-gray-900">Terms of Service</h1>
              
              {/* Contact Button */}
              <a
                href="mailto:legal@fxhealth.com"
                className="bg-emerald-500 text-white px-4 py-2 rounded-lg hover:bg-emerald-600 transition-colors"
              >
                Legal Questions
              </a>
            </div>
          </div>
        </div>
        
        <div className="flex items-center mb-8">
          <button
            onClick={onBack}
            className="flex items-center space-x-2 text-gray-600 hover:text-emerald-600 transition-colors mr-6 md:hidden"
          >
            <ArrowLeft className="w-5 h-5" />
            <span>Back to FX Health</span>
          </button>
          <div>
            <h1 className="text-3xl font-bold text-gray-900">FX Health Terms of Service</h1>
            <p className="text-gray-600">Last updated: January 2024</p>
          </div>
        </div>

        <div className="max-w-4xl mx-auto">
          {/* Introduction */}
          <div className="bg-white rounded-2xl shadow-lg p-8 mb-8">
            <div className="flex items-center mb-6">
              <div className="bg-emerald-100 p-3 rounded-xl mr-4">
                <FileText className="w-8 h-8 text-emerald-600" />
              </div>
              <div>
                <h2 className="text-2xl font-bold text-gray-900">Welcome to FX Health</h2>
                <p className="text-gray-600">AI-powered food analysis for healthier living</p>
              </div>
            </div>
            
            <p className="text-gray-700 leading-relaxed mb-4">
              These Terms of Service ("Terms") govern your use of FX Health's AI-powered food analysis platform. 
              By creating an account or using our service, you agree to these terms.
            </p>
            
            <div className="bg-emerald-50 border border-emerald-200 rounded-xl p-4">
              <p className="text-emerald-800 font-medium">
                <CheckCircle className="w-5 h-5 inline mr-2" />
                By using FX Health, you accept these Terms of Service and our Privacy Policy.
              </p>
            </div>
          </div>

          {/* About FX Health Service */}
          <div className="bg-white rounded-2xl shadow-lg p-8 mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
              <Scan className="w-6 h-6 mr-3 text-emerald-600" />
              About FX Health Service
            </h2>
            
            <div className="space-y-4">
              <p className="text-gray-700 leading-relaxed">
                FX Health is an AI-powered food analysis startup that helps users make informed health decisions 
                by scanning product labels and providing personalized health insights. Our service includes:
              </p>
              
              <div className="grid md:grid-cols-2 gap-4">
                <div className="bg-emerald-50 rounded-xl p-4">
                  <h3 className="font-semibold text-emerald-800 mb-2 flex items-center">
                    <Brain className="w-5 h-5 mr-2" />
                    What FX Health Provides
                  </h3>
                  <ul className="text-emerald-700 space-y-1 text-sm">
                    <li>• OCR scanning of food product labels</li>
                    <li>• AI-powered ingredient and nutrition analysis</li>
                    <li>• Personalized health insights and scores</li>
                    <li>• Product recommendations based on your goals</li>
                    <li>• Scan history and progress tracking</li>
                    <li>• Health goal management and dietary preferences</li>
                  </ul>
                </div>
                
                <div className="bg-amber-50 rounded-xl p-4">
                  <h3 className="font-semibold text-amber-800 mb-2 flex items-center">
                    <Zap className="w-5 h-5 mr-2" />
                    Startup Beta Service
                  </h3>
                  <ul className="text-amber-700 space-y-1 text-sm">
                    <li>• Currently in beta testing phase</li>
                    <li>• AI algorithms continuously improving</li>
                    <li>• Features may be added or updated regularly</li>
                    <li>• Service availability may occasionally vary</li>
                    <li>• Your feedback helps us improve accuracy</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* User Responsibilities */}
          <div className="bg-white rounded-2xl shadow-lg p-8 mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
              <Scale className="w-6 h-6 mr-3 text-blue-600" />
              Your Responsibilities as an FX Health User
            </h2>
            
            <div className="space-y-6">
              <div className="border-l-4 border-emerald-500 pl-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Account Security & Accuracy</h3>
                <ul className="text-gray-700 space-y-1">
                  <li>• Keep your login credentials secure and confidential</li>
                  <li>• Notify us immediately of any unauthorized account access</li>
                  <li>• Provide accurate health profile and dietary information</li>
                  <li>• Update your health preferences as your needs change</li>
                  <li>• Use only one account per person</li>
                </ul>
              </div>

              <div className="border-l-4 border-sky-500 pl-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Appropriate Use of FX Health</h3>
                <ul className="text-gray-700 space-y-1">
                  <li>• Use the service for personal, non-commercial food analysis</li>
                  <li>• Scan only legitimate food product labels and nutrition facts</li>
                  <li>• Respect intellectual property rights of food manufacturers</li>
                  <li>• Follow all applicable laws and regulations in your jurisdiction</li>
                  <li>• Provide constructive feedback to help improve our AI</li>
                </ul>
              </div>

              <div className="border-l-4 border-red-500 pl-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Prohibited Activities</h3>
                <ul className="text-gray-700 space-y-1">
                  <li>• Attempting to reverse engineer our AI algorithms or technology</li>
                  <li>• Sharing your account credentials with other people</li>
                  <li>• Using the service to harm others or spread misinformation</li>
                  <li>• Violating any laws or regulations while using FX Health</li>
                  <li>• Attempting to overwhelm our servers or disrupt service</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Health Disclaimer */}
          <div className="bg-white rounded-2xl shadow-lg p-8 mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
              <AlertTriangle className="w-6 h-6 mr-3 text-amber-600" />
              Important Health Disclaimer
            </h2>
            
            <div className="bg-amber-50 border-2 border-amber-200 rounded-xl p-6 mb-6">
              <div className="flex items-start space-x-3">
                <AlertTriangle className="w-6 h-6 text-amber-600 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold text-amber-800 mb-2">FX Health is NOT Medical Advice</h3>
                  <p className="text-amber-700">
                    FX Health provides informational content only and is not a substitute for professional 
                    medical advice, diagnosis, or treatment. Always consult with qualified healthcare 
                    professionals regarding your health and dietary decisions.
                  </p>
                </div>
              </div>
            </div>
            
            <div className="space-y-4">
              <h3 className="font-semibold text-gray-900">Please understand that:</h3>
              <ul className="text-gray-700 space-y-2 ml-4">
                <li>• Our AI analysis is for informational and educational purposes only</li>
                <li>• Health scores are estimates based on available nutritional data</li>
                <li>• Individual health needs and dietary requirements vary significantly</li>
                <li>• You should always consult healthcare providers for medical and dietary decisions</li>
                <li>• FX Health is not liable for health outcomes based on our recommendations</li>
                <li>• Our service does not diagnose, treat, cure, or prevent any medical conditions</li>
              </ul>
            </div>
          </div>

          {/* Subscription Terms */}
          <div className="bg-white rounded-2xl shadow-lg p-8 mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Subscription & Payment Terms</h2>
            
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-green-50 rounded-xl p-6">
                <h3 className="font-semibold text-green-800 mb-3">Free Plan</h3>
                <ul className="text-green-700 space-y-2 text-sm">
                  <li>• 3 scans per day limit</li>
                  <li>• Basic health scores and insights</li>
                  <li>• Limited scan history (recent 5 scans)</li>
                  <li>• Standard customer support</li>
                  <li>• No payment required</li>
                </ul>
              </div>
              
              <div className="bg-purple-50 rounded-xl p-6">
                <h3 className="font-semibold text-purple-800 mb-3">Premium Plan ($9.99/month)</h3>
                <ul className="text-purple-700 space-y-2 text-sm">
                  <li>• Unlimited scanning</li>
                  <li>• Advanced AI insights and analysis</li>
                  <li>• Complete scan history and data export</li>
                  <li>• Family profiles and sharing</li>
                  <li>• Priority customer support</li>
                  <li>• 7-day free trial for new users</li>
                </ul>
              </div>
            </div>

            <div className="mt-6 bg-blue-50 rounded-xl p-4">
              <h4 className="font-semibold text-blue-800 mb-2">Billing & Cancellation</h4>
              <p className="text-blue-700 text-sm">
                Premium subscriptions auto-renew monthly or annually. You can cancel anytime from your account 
                settings with no cancellation fees. Refunds are provided on a case-by-case basis for unused portions.
              </p>
            </div>
          </div>

          {/* Service Availability */}
          <div className="bg-white rounded-2xl shadow-lg p-8 mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Service Availability & Limitations</h2>
            
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-green-50 rounded-xl p-6">
                <h3 className="font-semibold text-green-800 mb-3 flex items-center">
                  <CheckCircle className="w-5 h-5 mr-2" />
                  What We Strive For
                </h3>
                <ul className="text-green-700 space-y-2 text-sm">
                  <li>• 99.9% uptime when possible</li>
                  <li>• Fast AI analysis and response times</li>
                  <li>• Regular feature updates and improvements</li>
                  <li>• Responsive customer support</li>
                  <li>• Continuous AI algorithm enhancement</li>
                </ul>
              </div>
              
              <div className="bg-red-50 rounded-xl p-6">
                <h3 className="font-semibold text-red-800 mb-3 flex items-center">
                  <XCircle className="w-5 h-5 mr-2" />
                  Startup Service Limitations
                </h3>
                <ul className="text-red-700 space-y-2 text-sm">
                  <li>• Beta service may have occasional interruptions</li>
                  <li>• Features may change or be updated without notice</li>
                  <li>• AI accuracy continues to improve over time</li>
                  <li>• Some product labels may not scan properly</li>
                  <li>• Service capacity may be limited during peak usage</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Intellectual Property */}
          <div className="bg-white rounded-2xl shadow-lg p-8 mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Intellectual Property Rights</h2>
            
            <div className="space-y-4">
              <div className="bg-blue-50 rounded-xl p-6">
                <h3 className="font-semibold text-blue-800 mb-2">FX Health's Rights</h3>
                <p className="text-blue-700">
                  FX Health owns all rights to our AI algorithms, software, mobile applications, branding, 
                  and service technology. You may not copy, modify, distribute, or create derivative works 
                  from our proprietary technology.
                </p>
              </div>
              
              <div className="bg-emerald-50 rounded-xl p-6">
                <h3 className="font-semibold text-emerald-800 mb-2">Your Rights</h3>
                <p className="text-emerald-700">
                  You retain ownership of your personal data, health profile, and scan history. You can 
                  export or delete your data at any time through your account settings. We respect your 
                  data ownership rights.
                </p>
              </div>
            </div>
          </div>

          {/* Limitation of Liability */}
          <div className="bg-white rounded-2xl shadow-lg p-8 mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Limitation of Liability</h2>
            
            <div className="bg-gray-50 rounded-xl p-6">
              <p className="text-gray-700 leading-relaxed mb-4">
                As a startup providing beta AI services, FX Health's liability is limited to the maximum 
                extent permitted by law. We provide our service "as is" without warranties of any kind.
              </p>
              
              <div className="space-y-2">
                <h3 className="font-semibold text-gray-900">FX Health is not liable for:</h3>
                <ul className="text-gray-700 space-y-1 ml-4">
                  <li>• Health decisions made based on our AI recommendations</li>
                  <li>• Service interruptions, data loss, or technical issues</li>
                  <li>• Inaccuracies in AI analysis or health scores</li>
                  <li>• Third-party actions, content, or food manufacturer claims</li>
                  <li>• Any damages exceeding the amount you paid for our service</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Changes to Terms */}
          <div className="bg-white rounded-2xl shadow-lg p-8 mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Changes to These Terms</h2>
            
            <p className="text-gray-700 leading-relaxed mb-4">
              As FX Health grows and improves our AI service, we may need to update these Terms of Service. 
              We'll notify you of any significant changes via email or in-app notifications.
            </p>
            
            <div className="bg-blue-50 rounded-xl p-4">
              <p className="text-blue-800">
                <CheckCircle className="w-5 h-5 inline mr-2" />
                Continued use of FX Health after changes constitutes acceptance of the updated terms.
              </p>
            </div>
          </div>

          {/* Contact Information */}
          <div className="bg-gradient-to-r from-emerald-500 to-green-500 rounded-2xl p-8 text-white">
            <div className="text-center">
              <Mail className="w-12 h-12 mx-auto mb-4" />
              <h3 className="text-2xl font-bold mb-2">Questions About These Terms?</h3>
              <p className="text-lg mb-6 opacity-90">
                We're here to help clarify any questions about using FX Health and our Terms of Service.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="mailto:legal@fxhealth.com"
                  className="bg-white text-emerald-600 px-6 py-3 rounded-xl font-semibold hover:bg-gray-50 transition-colors"
                >
                  Contact Legal Team
                </a>
                <a
                  href="mailto:founders@fxhealth.com"
                  className="border-2 border-white text-white px-6 py-3 rounded-xl font-semibold hover:bg-white hover:text-emerald-600 transition-colors"
                >
                  Email Founders
                </a>
              </div>
            </div>
          </div>

          {/* Footer Note */}
          <div className="mt-8 text-center text-gray-600">
            <div className="flex items-center justify-center space-x-2 mb-2">
              <Calendar className="w-4 h-4" />
              <span className="text-sm">Last updated: January 15, 2024</span>
            </div>
            <p className="text-sm">
              These terms are effective immediately and govern your use of FX Health's AI-powered food analysis service.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TermsOfService;