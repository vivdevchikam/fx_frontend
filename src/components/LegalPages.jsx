import React, { useState } from 'react';
import { ArrowLeft, HelpCircle, Shield, FileText, Home } from 'lucide-react';
import HelpCenter from './HelpCenter';
import PrivacyPolicy from './PrivacyPolicy';
import TermsOfService from './TermsOfService';

const LegalPages = ({ onBack, initialPage = 'home' }) => {
  const [currentPage, setCurrentPage] = useState(initialPage);

  // Update current page when initialPage changes
  React.useEffect(() => {
    setCurrentPage(initialPage);
  }, [initialPage]);

  const handleBack = () => {
    if (currentPage === 'home') {
      onBack();
    } else {
      setCurrentPage('home');
    }
  };

  if (currentPage === 'help') {
    return <HelpCenter onBack={handleBack} />;
  }

  if (currentPage === 'privacy') {
    return <PrivacyPolicy onBack={handleBack} />;
  }

  if (currentPage === 'terms') {
    return <TermsOfService onBack={handleBack} />;
  }

  // Home page with navigation to legal pages
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white">
      {/* Navigation Bar */}
      <nav className="bg-white shadow-sm border-b border-gray-200">
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
            
            {/* Legal Pages Navigation */}
            <div className="flex items-center space-x-6">
              <button
                onClick={() => setCurrentPage('help')}
                className="flex items-center space-x-2 text-gray-600 hover:text-emerald-600 transition-colors"
              >
                <HelpCircle className="w-4 h-4" />
                <span>Help Center</span>
              </button>
              <button
                onClick={() => setCurrentPage('privacy')}
                className="flex items-center space-x-2 text-gray-600 hover:text-emerald-600 transition-colors"
              >
                <Shield className="w-4 h-4" />
                <span>Privacy Policy</span>
              </button>
              <button
                onClick={() => setCurrentPage('terms')}
                className="flex items-center space-x-2 text-gray-600 hover:text-emerald-600 transition-colors"
              >
                <FileText className="w-4 h-4" />
                <span>Terms of Service</span>
              </button>
            </div>
          </div>
        </div>
      </nav>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Legal & Support</h1>
          <p className="text-xl text-gray-600">Access our help resources and legal information</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          <button
            onClick={() => setCurrentPage('help')}
            className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 hover:-translate-y-2"
          >
            <div className="text-center">
              <div className="bg-emerald-100 p-4 rounded-2xl inline-block mb-4">
                <svg className="w-8 h-8 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Help Center</h3>
              <p className="text-gray-600">Find answers to common questions and get support</p>
            </div>
          </button>

          <button
            onClick={() => setCurrentPage('privacy')}
            className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 hover:-translate-y-2"
          >
            <div className="text-center">
              <div className="bg-blue-100 p-4 rounded-2xl inline-block mb-4">
                <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Privacy Policy</h3>
              <p className="text-gray-600">Learn how we protect and handle your data</p>
            </div>
          </button>

          <button
            onClick={() => setCurrentPage('terms')}
            className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 hover:-translate-y-2"
          >
            <div className="text-center">
              <div className="bg-green-100 p-4 rounded-2xl inline-block mb-4">
                <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Terms of Service</h3>
              <p className="text-gray-600">Understand the terms for using FX Health</p>
            </div>
          </button>
        </div>
      </div>
    </div>
  );
};

export default LegalPages;