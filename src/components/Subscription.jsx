import React, { useState } from 'react';
import { 
  X, Crown, Check, Zap, Sparkles, TrendingUp, Star, Shield, 
  Heart, Brain, Scan, ArrowRight, CreditCard, Lock 
} from 'lucide-react';

const Subscription = ({ isOpen, onClose, currentPlan = 'free' }) => {
  const [isProcessing, setIsProcessing] = useState(false);

  const freeFeatures = [
    { name: '2 scans per day', included: true, icon: Scan },
    { name: 'Basic health score', included: true, icon: Heart },
    { name: 'Simple ingredient list', included: true, icon: Brain },
    { name: 'Unlimited scans', included: false, icon: Zap },
    { name: 'Detailed AI analysis', included: false, icon: Sparkles },
    { name: 'Health recommendations', included: false, icon: TrendingUp },
    { name: 'Scan history (full)', included: false, icon: Star },
    { name: 'Export scan data', included: false, icon: Shield }
  ];

  const premiumFeatures = [
    { name: 'Unlimited scans', included: true, icon: Zap },
    { name: 'Detailed AI analysis', included: true, icon: Sparkles },
    { name: 'Complete scan history', included: true, icon: Star },
    { name: 'Priority customer support', included: true, icon: Crown },
    { name: 'Advanced ingredient insights', included: true, icon: Brain },
    { name: 'Nutrition breakdown', included: true, icon: Heart }
  ];

  const handleSubscribe = async () => {
    setIsProcessing(true);
    // Simulate payment processing
    setTimeout(() => {
      setIsProcessing(false);
      alert('Subscription successful! Welcome to FX Health Premium!');
      onClose();
    }, 2000);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-3xl shadow-2xl w-full max-w-5xl max-h-[90vh] overflow-y-auto">
        {/* Header */}
        <div className="relative bg-gradient-to-r from-emerald-600 to-sky-600 p-8 text-white">
          <button
            onClick={onClose}
            className="absolute top-4 right-4 text-white/80 hover:text-white transition-colors"
          >
            <X className="w-6 h-6" />
          </button>
          
          <div className="text-center">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-white/20 backdrop-blur-sm rounded-2xl mb-4">
              <Crown className="w-8 h-8 text-white" />
            </div>
            <h1 className="text-3xl font-bold mb-2">Upgrade to FX Health Premium</h1>
            <p className="text-xl opacity-90">Unlock unlimited AI-powered food analysis</p>
          </div>

          {/* Current Plan Badge */}
          {currentPlan === 'free' && (
            <div className="absolute top-4 left-4 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full">
              <span className="text-white font-medium">Current: Free Plan</span>
            </div>
          )}
        </div>

        <div className="p-8">
          {/* Plans Comparison */}
          <div className="grid lg:grid-cols-2 gap-8 mb-8">
            {/* Free Plan */}
            <div className="bg-gray-50 rounded-2xl p-8 border-2 border-gray-200">
              <div className="text-center mb-6">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Free Plan</h3>
                <div className="text-4xl font-bold text-gray-600 mb-2">₹0</div>
                <p className="text-gray-600">Try FX Health basics</p>
              </div>

              <div className="space-y-4 mb-8">
                {freeFeatures.map((feature, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    {feature.included ? (
                      <Check className="w-5 h-5 text-emerald-500" />
                    ) : (
                      <X className="w-5 h-5 text-gray-400" />
                    )}
                    <feature.icon className={`w-4 h-4 ${feature.included ? 'text-emerald-500' : 'text-gray-400'}`} />
                    <span className={`${feature.included ? 'text-gray-900' : 'text-gray-500'}`}>
                      {feature.name}
                    </span>
                  </div>
                ))}
              </div>

              <button
                disabled={currentPlan === 'free'}
                className="w-full py-3 px-6 bg-gray-200 text-gray-500 rounded-xl font-semibold cursor-not-allowed"
              >
                {currentPlan === 'free' ? 'Current Plan' : 'Downgrade'}
              </button>
            </div>

            {/* Premium Plan */}
            <div className="bg-gradient-to-br from-emerald-50 to-sky-50 rounded-2xl p-8 border-2 border-emerald-200 relative overflow-hidden">
              {/* Popular Badge */}
              <div className="absolute top-4 right-4 bg-gradient-to-r from-emerald-500 to-sky-500 text-white px-4 py-2 rounded-full text-sm font-medium">
                Best Value
              </div>

              <div className="text-center mb-6">
                <h3 className="text-2xl font-bold text-gray-900 mb-2 flex items-center justify-center">
                  <Crown className="w-6 h-6 text-emerald-600 mr-2" />
                  Premium Plan
                </h3>
                <div className="text-4xl font-bold text-emerald-600 mb-2">
                  ₹99
                  <span className="text-lg text-gray-600">/month</span>
                </div>
                <p className="text-gray-600">Everything you need for healthy living</p>
              </div>

              <div className="space-y-4 mb-8">
                {premiumFeatures.map((feature, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <Check className="w-5 h-5 text-emerald-500" />
                    <feature.icon className="w-4 h-4 text-emerald-500" />
                    <span className="text-gray-900">{feature.name}</span>
                  </div>
                ))}
              </div>

              <button
                onClick={handleSubscribe}
                disabled={isProcessing || currentPlan === 'premium'}
                className="w-full py-4 px-6 bg-gradient-to-r from-emerald-600 to-sky-600 text-white rounded-xl font-semibold hover:from-emerald-700 hover:to-sky-700 transition-all duration-300 shadow-lg hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center"
              >
                {isProcessing ? (
                  <>
                    <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                    Processing...
                  </>
                ) : currentPlan === 'premium' ? (
                  'Current Plan'
                ) : (
                  <>
                    <Crown className="w-5 h-5 mr-2" />
                    Subscribe for ₹99/month
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </>
                )}
              </button>

              {currentPlan === 'free' && (
                <p className="text-center text-sm text-gray-600 mt-4">
                  Cancel anytime • No hidden charges
                </p>
              )}
            </div>
          </div>

          {/* Why Upgrade */}
          <div className="bg-gradient-to-r from-emerald-50 to-sky-50 rounded-2xl p-8 mb-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">
              Why Upgrade to Premium?
            </h3>
            
            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-emerald-500 to-emerald-600 rounded-2xl mb-4">
                  <Zap className="w-8 h-8 text-white" />
                </div>
                <h4 className="text-lg font-semibold text-gray-900 mb-2">Unlimited Scanning</h4>
                <p className="text-gray-600">Scan as many products as you want. No daily limits or restrictions.</p>
              </div>
              
              <div className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-sky-500 to-sky-600 rounded-2xl mb-4">
                  <Sparkles className="w-8 h-8 text-white" />
                </div>
                <h4 className="text-lg font-semibold text-gray-900 mb-2">Detailed AI Analysis</h4>
                <p className="text-gray-600">Get comprehensive ingredient analysis and personalized health insights.</p>
              </div>
              
              <div className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-indigo-500 to-indigo-600 rounded-2xl mb-4">
                  <Brain className="w-8 h-8 text-white" />
                </div>
                <h4 className="text-lg font-semibold text-gray-900 mb-2">Advanced Analysis</h4>
                <p className="text-gray-600">Get detailed ingredient analysis and comprehensive nutrition insights.</p>
              </div>
            </div>
          </div>

          {/* Payment Security */}
          <div className="bg-gray-50 rounded-2xl p-6 mb-8">
            <div className="flex items-center justify-center space-x-8">
              <div className="flex items-center space-x-2 text-gray-600">
                <Shield className="w-5 h-5" />
                <span className="text-sm">Secure Payment</span>
              </div>
              <div className="flex items-center space-x-2 text-gray-600">
                <CreditCard className="w-5 h-5" />
                <span className="text-sm">UPI, Cards, Net Banking</span>
              </div>
              <div className="flex items-center space-x-2 text-gray-600">
                <Lock className="w-5 h-5" />
                <span className="text-sm">256-bit SSL</span>
              </div>
            </div>
          </div>

          {/* FAQ */}
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white rounded-xl p-6 border border-gray-200">
              <h4 className="font-semibold text-gray-900 mb-2">Can I cancel anytime?</h4>
              <p className="text-gray-600 text-sm">Yes! Cancel your subscription anytime from your profile settings. No questions asked.</p>
            </div>
            <div className="bg-white rounded-xl p-6 border border-gray-200">
              <h4 className="font-semibold text-gray-900 mb-2">What payment methods do you accept?</h4>
              <p className="text-gray-600 text-sm">We accept UPI, debit/credit cards, net banking, and digital wallets.</p>
            </div>
            <div className="bg-white rounded-xl p-6 border border-gray-200">
              <h4 className="font-semibold text-gray-900 mb-2">Is my data safe?</h4>
              <p className="text-gray-600 text-sm">Yes! Your health data is encrypted and secure. We never sell your personal information.</p>
            </div>
            <div className="bg-white rounded-xl p-6 border border-gray-200">
              <h4 className="font-semibold text-gray-900 mb-2">Do you offer refunds?</h4>
              <p className="text-gray-600 text-sm">Yes, we offer refunds within 7 days if you're not satisfied with the service.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Subscription;