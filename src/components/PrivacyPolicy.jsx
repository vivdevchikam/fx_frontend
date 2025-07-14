import React from 'react';
import { ArrowLeft, Shield, Eye, Lock, Database, Users, Mail, Calendar, Scan, Brain } from 'lucide-react';

const PrivacyPolicy = ({ onBack }) => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="bg-white shadow-sm border-b border-gray-200 mb-8">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between h-16">
              {/* Back to Main Site */}
              <button
                onClick={onBack}
                className="flex items-center space-x-2 text-gray-600 hover:text-blue-600 transition-colors"
              >
                <ArrowLeft className="w-5 h-5" />
                <span className="font-medium">Back to FX Health</span>
              </button>
              
              {/* Page Title */}
              <h1 className="text-xl font-bold text-gray-900">Privacy Policy</h1>
              
              {/* Contact Button */}
              <a
                href="mailto:privacy@fxhealth.com"
                className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition-colors"
              >
                Privacy Questions
              </a>
            </div>
          </div>
        </div>
        
        <div className="flex items-center mb-8">
          <button
            onClick={onBack}
            className="flex items-center space-x-2 text-gray-600 hover:text-blue-600 transition-colors mr-6 md:hidden"
          >
            <ArrowLeft className="w-5 h-5" />
            <span>Back to FX Health</span>
          </button>
          <div>
            <h1 className="text-3xl font-bold text-gray-900">FX Health Privacy Policy</h1>
            <p className="text-gray-600">Last updated: January 2024</p>
          </div>
        </div>

        <div className="max-w-4xl mx-auto">
          {/* Introduction */}
          <div className="bg-white rounded-2xl shadow-lg p-8 mb-8">
            <div className="flex items-center mb-6">
              <div className="bg-blue-100 p-3 rounded-xl mr-4">
                <Shield className="w-8 h-8 text-blue-600" />
              </div>
              <div>
                <h2 className="text-2xl font-bold text-gray-900">Your Health Data Privacy Matters</h2>
                <p className="text-gray-600">We're committed to protecting your personal health information</p>
              </div>
            </div>
            
            <p className="text-gray-700 leading-relaxed mb-4">
              At FX Health, we understand that your health data is deeply personal. As an AI-powered food analysis 
              startup, we're committed to maintaining the highest standards of data protection while helping you 
              make healthier food choices.
            </p>
            
            <p className="text-gray-700 leading-relaxed">
              This Privacy Policy explains how we collect, use, and protect your information when you use our 
              AI-powered food scanning and health analysis service. We believe in transparency and your right 
              to understand exactly how your data is handled.
            </p>
          </div>

          {/* What FX Health Collects */}
          <div className="bg-white rounded-2xl shadow-lg p-8 mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
              <Database className="w-6 h-6 mr-3 text-emerald-600" />
              Information FX Health Collects
            </h2>
            
            <div className="space-y-6">
              <div className="border-l-4 border-emerald-500 pl-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Account & Profile Information</h3>
                <ul className="text-gray-700 space-y-1">
                  <li>• Name and email address for account creation</li>
                  <li>• Profile picture (optional)</li>
                  <li>• Account preferences and notification settings</li>
                  <li>• Subscription and billing information (for Premium users)</li>
                </ul>
              </div>

              <div className="border-l-4 border-sky-500 pl-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Health & Dietary Profile</h3>
                <ul className="text-gray-700 space-y-1">
                  <li>• Dietary preferences (vegetarian, vegan, keto, etc.)</li>
                  <li>• Health goals (weight loss, heart health, muscle gain, etc.)</li>
                  <li>• Food allergies and intolerances</li>
                  <li>• Medical conditions affecting diet (diabetes, hypertension, etc.)</li>
                  <li>• Fitness level and activity preferences</li>
                </ul>
              </div>

              <div className="border-l-4 border-indigo-500 pl-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Food Scanning & Usage Data</h3>
                <ul className="text-gray-700 space-y-1">
                  <li>• Scanned product information and nutrition labels</li>
                  <li>• AI-generated health scores and analysis results</li>
                  <li>• Your personal notes and ratings on products</li>
                  <li>• App usage patterns and feature interactions</li>
                  <li>• Device information and IP address for security</li>
                </ul>
              </div>
            </div>
          </div>

          {/* How FX Health Uses Your Data */}
          <div className="bg-white rounded-2xl shadow-lg p-8 mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
              <Brain className="w-6 h-6 mr-3 text-purple-600" />
              How FX Health Uses Your Information
            </h2>
            
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-purple-50 rounded-xl p-6">
                <h3 className="font-semibold text-purple-800 mb-3 flex items-center">
                  <Scan className="w-5 h-5 mr-2" />
                  Core AI Services
                </h3>
                <ul className="text-purple-700 space-y-2 text-sm">
                  <li>• Provide personalized health insights based on your profile</li>
                  <li>• Analyze food products using our AI algorithms</li>
                  <li>• Generate health scores tailored to your goals</li>
                  <li>• Maintain your scan history and progress tracking</li>
                  <li>• Recommend healthier food alternatives</li>
                </ul>
              </div>
              
              <div className="bg-emerald-50 rounded-xl p-6">
                <h3 className="font-semibold text-emerald-800 mb-3">Service Improvement</h3>
                <ul className="text-emerald-700 space-y-2 text-sm">
                  <li>• Improve our AI algorithms and accuracy</li>
                  <li>• Enhance user experience and app performance</li>
                  <li>• Develop new features based on usage patterns</li>
                  <li>• Provide customer support and troubleshooting</li>
                  <li>• Send relevant health tips and product updates</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Data Protection */}
          <div className="bg-white rounded-2xl shadow-lg p-8 mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
              <Lock className="w-6 h-6 mr-3 text-red-600" />
              How FX Health Protects Your Data
            </h2>
            
            <div className="space-y-4">
              <div className="flex items-start space-x-4">
                <div className="bg-red-100 p-2 rounded-lg">
                  <Lock className="w-5 h-5 text-red-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">Bank-Level Encryption</h3>
                  <p className="text-gray-700">All your health data is encrypted in transit and at rest using AES-256 encryption, the same standard used by banks and financial institutions.</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="bg-blue-100 p-2 rounded-lg">
                  <Shield className="w-5 h-5 text-blue-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">HIPAA-Compliant Storage</h3>
                  <p className="text-gray-700">Your health information is stored on secure, HIPAA-compliant servers with regular security audits and monitoring.</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="bg-emerald-100 p-2 rounded-lg">
                  <Users className="w-5 h-5 text-emerald-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">Limited Team Access</h3>
                  <p className="text-gray-700">Only essential FX Health team members have access to your data, and only when necessary for service provision or support.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Data Sharing Policy */}
          <div className="bg-white rounded-2xl shadow-lg p-8 mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">FX Health Data Sharing Policy</h2>
            
            <div className="bg-red-50 border border-red-200 rounded-xl p-6 mb-6">
              <h3 className="font-semibold text-red-800 mb-2">🚫 We NEVER sell your health data</h3>
              <p className="text-red-700">
                FX Health will never sell, rent, or trade your personal health information to third parties. 
                Your health data is not a product - it's your private information that we're trusted to protect.
              </p>
            </div>
            
            <div className="space-y-4">
              <h3 className="font-semibold text-gray-900">Limited sharing occurs only for:</h3>
              <ul className="text-gray-700 space-y-2 ml-4">
                <li>• <strong>Essential Service Providers:</strong> Trusted cloud hosting and security partners who help us operate FX Health securely</li>
                <li>• <strong>Legal Requirements:</strong> When required by law or to protect our users' safety and rights</li>
                <li>• <strong>Business Transfers:</strong> In the unlikely event of a merger or acquisition, with continued privacy protection guarantees</li>
                <li>• <strong>Aggregated Analytics:</strong> Anonymous, aggregated data (never personally identifiable) to improve our AI algorithms</li>
              </ul>
            </div>
          </div>

          {/* Your Privacy Rights */}
          <div className="bg-white rounded-2xl shadow-lg p-8 mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Your Privacy Rights with FX Health</h2>
            
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-emerald-500 rounded-full"></div>
                  <span className="font-medium text-gray-900">Access all your health data</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-sky-500 rounded-full"></div>
                  <span className="font-medium text-gray-900">Correct any inaccurate information</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-indigo-500 rounded-full"></div>
                  <span className="font-medium text-gray-900">Delete your account and all data</span>
                </div>
              </div>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                  <span className="font-medium text-gray-900">Export your scan history and profile</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-rose-500 rounded-full"></div>
                  <span className="font-medium text-gray-900">Opt-out of all communications</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-amber-500 rounded-full"></div>
                  <span className="font-medium text-gray-900">Update health preferences anytime</span>
                </div>
              </div>
            </div>

            <div className="mt-6 bg-emerald-50 rounded-xl p-4">
              <p className="text-emerald-800 text-sm">
                <strong>Easy Data Control:</strong> You can exercise all these rights directly from your FX Health 
                profile settings, or by contacting our privacy team at privacy@fxhealth.com
              </p>
            </div>
          </div>

          {/* Startup Transparency */}
          <div className="bg-white rounded-2xl shadow-lg p-8 mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Startup Transparency</h2>
            
            <div className="bg-blue-50 rounded-xl p-6">
              <h3 className="font-semibold text-blue-800 mb-3">Why We're Different</h3>
              <p className="text-blue-700 mb-4">
                As a health-focused startup, FX Health is built on the principle that your health data should 
                work for YOU, not for advertisers or data brokers. We're funded by subscriptions, not by selling data.
              </p>
              <ul className="text-blue-700 space-y-1 text-sm">
                <li>• Founded by health and technology experts who care about privacy</li>
                <li>• Revenue comes from Premium subscriptions, not data sales</li>
                <li>• Small team means better data security and accountability</li>
                <li>• Direct communication with founders about privacy concerns</li>
              </ul>
            </div>
          </div>

          {/* Contact Information */}
          <div className="bg-gradient-to-r from-blue-500 to-indigo-500 rounded-2xl p-8 text-white">
            <div className="text-center">
              <Mail className="w-12 h-12 mx-auto mb-4" />
              <h3 className="text-2xl font-bold mb-2">Questions About Your Privacy?</h3>
              <p className="text-lg mb-6 opacity-90">
                We're here to help you understand exactly how FX Health protects your health information.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="mailto:privacy@fxhealth.com"
                  className="bg-white text-blue-600 px-6 py-3 rounded-xl font-semibold hover:bg-gray-50 transition-colors"
                >
                  Contact Privacy Team
                </a>
                <a
                  href="mailto:founders@fxhealth.com"
                  className="border-2 border-white text-white px-6 py-3 rounded-xl font-semibold hover:bg-white hover:text-blue-600 transition-colors"
                >
                  Email Founders Directly
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
              We may update this Privacy Policy as FX Health grows. We'll notify you of any significant changes 
              and always maintain the same high standards of privacy protection.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;