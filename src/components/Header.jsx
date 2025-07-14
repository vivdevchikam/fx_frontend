import React, { useState } from 'react';
import { Menu, X, Scan, LogIn, User, Crown } from 'lucide-react';
import Auth from './Auth';
import UserProfile from './UserProfile';
import Subscription from './Subscription';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isAuthOpen, setIsAuthOpen] = useState(false);
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  const [isSubscriptionOpen, setIsSubscriptionOpen] = useState(false);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [userPlan, setUserPlan] = useState('free'); // 'free' or 'premium'

  const handleAuthSuccess = () => {
    setIsAuthenticated(true);
  };

  const handleSignOut = () => {
    setIsAuthenticated(false);
  };

  const handleProfileOpen = () => {
    setIsProfileOpen(true);
  };

  const handleSubscriptionOpen = () => {
    setIsSubscriptionOpen(true);
  };

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-md border-b border-gray-100">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <div className="flex items-center space-x-2">
              <div className="bg-gradient-to-r from-emerald-500 to-sky-500 p-2 rounded-lg">
                <Scan className="w-6 h-6 text-white" />
              </div>
              <span className="text-2xl font-bold bg-gradient-to-r from-emerald-600 to-sky-600 bg-clip-text text-transparent">
                FX Health
              </span>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-8">
              <a href="#features" className="text-gray-700 hover:text-emerald-600 transition-colors font-medium">
                Features
              </a>
              <a href="#how-it-works" className="text-gray-700 hover:text-emerald-600 transition-colors font-medium">
                How it Works
              </a>
              <a href="#scanner" className="text-gray-700 hover:text-emerald-600 transition-colors font-medium">
                Try Scanner
              </a>
              <a href="#about" className="text-gray-700 hover:text-emerald-600 transition-colors font-medium">
                About
              </a>
              <a href="#contact" className="text-gray-700 hover:text-emerald-600 transition-colors font-medium">
                Contact
              </a>
            </nav>

            {/* Desktop Auth Buttons */}
            <div className="hidden md:flex items-center space-x-4">
              {isAuthenticated ? (
                <div className="flex items-center space-x-4">
                  <button
                    onClick={handleSubscriptionOpen}
                    className={`flex items-center space-x-2 px-4 py-2 rounded-full font-medium transition-all duration-300 ${
                      userPlan === 'premium' 
                        ? 'bg-gradient-to-r from-emerald-500 to-sky-500 text-white shadow-lg' 
                        : 'bg-gray-100 text-gray-700 hover:bg-emerald-100 hover:text-emerald-600'
                    }`}
                  >
                    <Crown className="w-4 h-4" />
                    <span>{userPlan === 'premium' ? 'Premium' : 'Upgrade'}</span>
                  </button>
                  <button
                    onClick={handleProfileOpen}
                    className="flex items-center space-x-2 text-gray-700 hover:text-emerald-600 transition-colors font-medium"
                  >
                    <User className="w-4 h-4" />
                    <span>Profile</span>
                  </button>
                  <button
                    onClick={handleSignOut}
                    className="text-gray-700 hover:text-emerald-600 transition-colors font-medium"
                  >
                    Sign Out
                  </button>
                </div>
              ) : (
                <>
                  <button
                    onClick={() => setIsAuthOpen(true)}
                    className="flex items-center space-x-2 text-gray-700 hover:text-emerald-600 transition-colors font-medium"
                  >
                    <LogIn className="w-4 h-4" />
                    <span>Sign In</span>
                  </button>
                  <button
                    onClick={() => setIsAuthOpen(true)}
                    className="bg-gradient-to-r from-emerald-500 to-sky-500 text-white px-6 py-2 rounded-full hover:from-emerald-600 hover:to-sky-600 transition-all duration-300 font-medium shadow-lg hover:shadow-xl"
                  >
                    Get Started
                  </button>
                </>
              )}
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden p-2"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

          {/* Mobile Menu */}
          {isMenuOpen && (
            <div className="md:hidden py-4 border-t border-gray-100">
              <nav className="flex flex-col space-y-4">
                <a href="#features" className="text-gray-700 hover:text-emerald-600 transition-colors font-medium">
                  Features
                </a>
                <a href="#how-it-works" className="text-gray-700 hover:text-emerald-600 transition-colors font-medium">
                  How it Works
                </a>
                <a href="#scanner" className="text-gray-700 hover:text-emerald-600 transition-colors font-medium">
                  Try Scanner
                </a>
                <a href="#about" className="text-gray-700 hover:text-emerald-600 transition-colors font-medium">
                  About
                </a>
                <a href="#contact" className="text-gray-700 hover:text-emerald-600 transition-colors font-medium">
                  Contact
                </a>
                <div className="flex flex-col space-y-2 pt-4">
                  {isAuthenticated ? (
                    <>
                      <button
                        onClick={handleSubscriptionOpen}
                        className="flex items-center justify-center space-x-2 text-gray-700 hover:text-emerald-600 transition-colors font-medium py-2"
                      >
                        <Crown className="w-4 h-4" />
                        <span>{userPlan === 'premium' ? 'Premium Plan' : 'Upgrade to Premium'}</span>
                      </button>
                      <button
                        onClick={handleProfileOpen}
                        className="flex items-center justify-center space-x-2 text-gray-700 hover:text-emerald-600 transition-colors font-medium py-2"
                      >
                        <User className="w-4 h-4" />
                        <span>Profile</span>
                      </button>
                      <button
                        onClick={handleSignOut}
                        className="text-gray-700 hover:text-emerald-600 transition-colors font-medium py-2 text-left"
                      >
                        Sign Out
                      </button>
                    </>
                  ) : (
                    <>
                      <button
                        onClick={() => setIsAuthOpen(true)}
                        className="flex items-center justify-center space-x-2 text-gray-700 hover:text-emerald-600 transition-colors font-medium py-2"
                      >
                        <LogIn className="w-4 h-4" />
                        <span>Sign In</span>
                      </button>
                      <button
                        onClick={() => setIsAuthOpen(true)}
                        className="bg-gradient-to-r from-emerald-500 to-sky-500 text-white px-6 py-3 rounded-full hover:from-emerald-600 hover:to-sky-600 transition-all duration-300 font-medium shadow-lg"
                      >
                        Get Started
                      </button>
                    </>
                  )}
                </div>
              </nav>
            </div>
          )}
        </div>
      </header>

      {/* Auth Modal */}
      <Auth
        isOpen={isAuthOpen}
        onClose={() => setIsAuthOpen(false)}
        onAuthSuccess={handleAuthSuccess}
      />

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
    </>
  );
};

export default Header;