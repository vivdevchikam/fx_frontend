import React, { useState } from 'react';
import { 
  HelpCircle, Search, ChevronDown, ChevronRight, MessageCircle, 
  Mail, Phone, Book, Lightbulb, Bug, Settings, Scan, Heart,
  ArrowLeft, ExternalLink, CheckCircle, Clock, Users, Zap, Brain
} from 'lucide-react';

const HelpCenter = ({ onBack }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [expandedFaq, setExpandedFaq] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState('all');

  const categories = [
    { id: 'all', name: 'All Topics', icon: Book },
    { id: 'getting-started', name: 'Getting Started', icon: Lightbulb },
    { id: 'scanning', name: 'Food Scanning', icon: Scan },
    { id: 'ai-insights', name: 'AI Health Insights', icon: Brain },
    { id: 'account', name: 'Account & Subscription', icon: Settings },
    { id: 'technical', name: 'Technical Issues', icon: Bug }
  ];

  const faqs = [
    {
      id: 1,
      category: 'getting-started',
      question: 'What is FX Health and how does it work?',
      answer: 'FX Health is an AI-powered food analysis platform that helps you make healthier food choices. Simply scan any product label with your phone camera, and our advanced AI analyzes the ingredients and nutrition facts to provide personalized health insights based on your dietary preferences and health goals.'
    },
    {
      id: 2,
      category: 'getting-started',
      question: 'How do I get started with FX Health?',
      answer: 'Getting started is easy! 1) Sign up with your email or Google account, 2) Complete your health profile by setting dietary preferences, allergies, and health goals, 3) Start scanning product labels to get instant AI-powered health insights tailored to your needs.'
    },
    {
      id: 3,
      category: 'scanning',
      question: 'How accurate is FX Health\'s food label scanning?',
      answer: 'Our OCR (Optical Character Recognition) technology has 95%+ accuracy in reading food labels. Our AI analysis is continuously learning and improving. We use advanced machine learning algorithms trained on thousands of food products to provide reliable health insights.'
    },
    {
      id: 4,
      category: 'scanning',
      question: 'What types of food products can I scan with FX Health?',
      answer: 'You can scan any packaged food product with a nutrition label including cereals, snacks, beverages, canned goods, frozen foods, supplements, and more. Currently, fresh produce without labels cannot be scanned, but we\'re working on adding that feature.'
    },
    {
      id: 5,
      category: 'ai-insights',
      question: 'How does FX Health calculate health scores?',
      answer: 'Our AI analyzes multiple factors: ingredient quality, nutritional content, processing level, additives, and how well the product aligns with your personal health goals and dietary restrictions. Scores range from 1-10, with 10 being the healthiest option for your specific profile.'
    },
    {
      id: 6,
      category: 'ai-insights',
      question: 'Are FX Health\'s recommendations personalized?',
      answer: 'Yes! All health insights and recommendations are tailored to your individual health goals, dietary restrictions, allergies, and preferences. The more you use FX Health and update your profile, the more accurate and personalized your recommendations become.'
    },
    {
      id: 7,
      category: 'account',
      question: 'What\'s the difference between Free and Premium plans?',
      answer: 'Free users get 3 scans per day with basic health scores. Premium users ($9.99/month) get unlimited scanning, advanced AI insights, detailed nutrition analysis, family profiles, full scan history, and priority support. Try Premium free for 7 days!'
    },
    {
      id: 8,
      category: 'account',
      question: 'Is my health data secure with FX Health?',
      answer: 'Absolutely! We use bank-level encryption to protect your data. We\'re HIPAA-compliant and never sell your personal health information. Your privacy is our top priority. You can export or delete your data anytime from your profile settings.'
    },
    {
      id: 9,
      category: 'technical',
      question: 'Why isn\'t my food label scanning properly?',
      answer: 'For best results: ensure good lighting, hold your phone steady, make sure the entire nutrition label is visible in the frame, and clean your camera lens. If you\'re still having issues, try taking the photo from different angles or contact our support team.'
    },
    {
      id: 10,
      category: 'technical',
      question: 'Which devices and browsers does FX Health support?',
      answer: 'FX Health works on any device with a camera and internet connection - smartphones, tablets, and computers with webcams. We support all modern browsers including Chrome, Safari, Firefox, and Edge. For the best experience, we recommend using a smartphone.'
    },
    {
      id: 11,
      category: 'ai-insights',
      question: 'Can FX Health help with specific dietary needs like diabetes or heart health?',
      answer: 'Yes! FX Health can be configured for various health goals including diabetes management, heart health, weight loss, muscle gain, and more. Our AI considers your specific needs when analyzing products and provides relevant warnings and recommendations.'
    },
    {
      id: 12,
      category: 'getting-started',
      question: 'Is FX Health a medical device or does it provide medical advice?',
      answer: 'No, FX Health is an informational tool only and does not provide medical advice. Our AI insights are for educational purposes to help you make informed food choices. Always consult with healthcare professionals for medical decisions and dietary advice.'
    }
  ];

  const quickActions = [
    {
      title: 'Contact FX Health Support',
      description: 'Get help from our team',
      icon: MessageCircle,
      action: 'mailto:support@fxhealth.com',
      color: 'emerald'
    },
    {
      title: 'Report a Bug',
      description: 'Found an issue with scanning or AI?',
      icon: Bug,
      action: 'mailto:bugs@fxhealth.com',
      color: 'red'
    },
    {
      title: 'Suggest Features',
      description: 'Help us improve FX Health',
      icon: Lightbulb,
      action: 'mailto:features@fxhealth.com',
      color: 'amber'
    },
    {
      title: 'Join Beta Community',
      description: 'Connect with other beta users',
      icon: Users,
      action: '#',
      color: 'purple'
    }
  ];

  const filteredFaqs = faqs.filter(faq => {
    const matchesCategory = selectedCategory === 'all' || faq.category === selectedCategory;
    const matchesSearch = searchTerm === '' || 
      faq.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
      faq.answer.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const toggleFaq = (faqId) => {
    setExpandedFaq(expandedFaq === faqId ? null : faqId);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 to-sky-50">
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
              <h1 className="text-xl font-bold text-gray-900">FX Health Help Center</h1>
              
              {/* Contact Button */}
              <a
                href="mailto:support@fxhealth.com"
                className="bg-emerald-500 text-white px-4 py-2 rounded-lg hover:bg-emerald-600 transition-colors"
              >
                Contact Support
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
            <h1 className="text-3xl font-bold text-gray-900">FX Health Help Center</h1>
            <p className="text-gray-600">Get support for AI-powered food analysis</p>
          </div>
        </div>

        {/* Beta Notice */}
        <div className="bg-gradient-to-r from-blue-50 to-indigo-50 border border-blue-200 rounded-2xl p-6 mb-8">
          <div className="flex items-center space-x-3">
            <div className="bg-blue-500 p-2 rounded-lg">
              <Zap className="w-6 h-6 text-white" />
            </div>
            <div>
              <h3 className="font-semibold text-blue-900">FX Health Beta Program</h3>
              <p className="text-blue-700">
                You're using FX Health during our beta phase! Your feedback helps us improve our AI algorithms 
                and build better features. Report any issues or suggestions to help us grow.
              </p>
            </div>
          </div>
        </div>

        {/* Search */}
        <div className="relative max-w-2xl mx-auto mb-12">
          <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
          <input
            type="text"
            placeholder="Search FX Health help articles..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full pl-12 pr-4 py-4 bg-white border border-gray-300 rounded-2xl focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent shadow-lg"
          />
        </div>

        <div className="grid lg:grid-cols-4 gap-8">
          {/* Sidebar */}
          <div className="lg:col-span-1">
            {/* Categories */}
            <div className="bg-white rounded-2xl p-6 shadow-lg mb-6">
              <h3 className="font-semibold text-gray-900 mb-4">Help Categories</h3>
              <div className="space-y-2">
                {categories.map(category => (
                  <button
                    key={category.id}
                    onClick={() => setSelectedCategory(category.id)}
                    className={`w-full flex items-center space-x-3 p-3 rounded-xl transition-colors ${
                      selectedCategory === category.id
                        ? 'bg-emerald-100 text-emerald-700'
                        : 'text-gray-600 hover:bg-gray-100'
                    }`}
                  >
                    <category.icon className="w-5 h-5" />
                    <span className="font-medium">{category.name}</span>
                  </button>
                ))}
              </div>
            </div>

            {/* Quick Actions */}
            <div className="bg-white rounded-2xl p-6 shadow-lg">
              <h3 className="font-semibold text-gray-900 mb-4">Need More Help?</h3>
              <div className="space-y-3">
                {quickActions.map((action, index) => (
                  <a
                    key={index}
                    href={action.action}
                    className={`block p-4 rounded-xl border-2 border-${action.color}-200 bg-${action.color}-50 hover:bg-${action.color}-100 transition-colors`}
                  >
                    <div className="flex items-center space-x-3">
                      <action.icon className={`w-5 h-5 text-${action.color}-600`} />
                      <div>
                        <h4 className={`font-medium text-${action.color}-800`}>{action.title}</h4>
                        <p className={`text-sm text-${action.color}-600`}>{action.description}</p>
                      </div>
                    </div>
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Main Content */}
          <div className="lg:col-span-3">
            {/* FAQ Section */}
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-2xl font-bold text-gray-900">
                  Frequently Asked Questions
                </h2>
                <span className="text-sm text-gray-500">
                  {filteredFaqs.length} articles found
                </span>
              </div>

              <div className="space-y-4">
                {filteredFaqs.map(faq => (
                  <div
                    key={faq.id}
                    className="border border-gray-200 rounded-xl overflow-hidden"
                  >
                    <button
                      onClick={() => toggleFaq(faq.id)}
                      className="w-full flex items-center justify-between p-6 text-left hover:bg-gray-50 transition-colors"
                    >
                      <h3 className="font-medium text-gray-900 pr-4">
                        {faq.question}
                      </h3>
                      {expandedFaq === faq.id ? (
                        <ChevronDown className="w-5 h-5 text-gray-500 flex-shrink-0" />
                      ) : (
                        <ChevronRight className="w-5 h-5 text-gray-500 flex-shrink-0" />
                      )}
                    </button>
                    {expandedFaq === faq.id && (
                      <div className="px-6 pb-6">
                        <p className="text-gray-600 leading-relaxed">
                          {faq.answer}
                        </p>
                      </div>
                    )}
                  </div>
                ))}
              </div>

              {filteredFaqs.length === 0 && (
                <div className="text-center py-12">
                  <HelpCircle className="w-16 h-16 text-gray-400 mx-auto mb-4" />
                  <h3 className="text-lg font-medium text-gray-900 mb-2">No articles found</h3>
                  <p className="text-gray-600">
                    Try adjusting your search terms or browse by category.
                  </p>
                </div>
              )}
            </div>

            {/* Contact Support */}
            <div className="mt-8 bg-gradient-to-r from-emerald-500 to-sky-500 rounded-2xl p-8 text-white">
              <div className="text-center">
                <MessageCircle className="w-12 h-12 mx-auto mb-4" />
                <h3 className="text-2xl font-bold mb-2">Still need help with FX Health?</h3>
                <p className="text-lg mb-6 opacity-90">
                  Our support team is here to help you get the most out of AI-powered food analysis.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <a
                    href="mailto:support@fxhealth.com"
                    className="bg-white text-emerald-600 px-6 py-3 rounded-xl font-semibold hover:bg-gray-50 transition-colors flex items-center justify-center"
                  >
                    <Mail className="w-5 h-5 mr-2" />
                    Email Support
                  </a>
                  <a
                    href="mailto:hello@fxhealth.com"
                    className="border-2 border-white text-white px-6 py-3 rounded-xl font-semibold hover:bg-white hover:text-emerald-600 transition-colors flex items-center justify-center"
                  >
                    <Phone className="w-5 h-5 mr-2" />
                    Contact Founders
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HelpCenter;