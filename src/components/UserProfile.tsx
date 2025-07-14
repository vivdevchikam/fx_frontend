import React, { useState } from 'react';
import { 
  User, Settings, X, Edit3, Save, Camera, 
  Heart, Apple, Target, Shield, Bell, LogOut,
  CheckCircle, Scan, TrendingUp, Calendar
} from 'lucide-react';

interface UserProfileProps {
  isOpen: boolean;
  onClose: () => void;
  currentPlan?: string;
}

const UserProfile: React.FC<UserProfileProps> = ({ isOpen, onClose, currentPlan = 'free' }) => {
  const [activeTab, setActiveTab] = useState('profile');
  const [isEditing, setIsEditing] = useState(false);
  const [profileData, setProfileData] = useState({
    name: 'Alex Johnson',
    email: 'alex.johnson@email.com',
    profilePicture: '',
    joinDate: '2024-01-15',
    healthGoals: ['Weight Management', 'Heart Health'],
    dietaryPreferences: ['Vegetarian', 'Low Sodium'],
    allergies: ['Nuts'],
    notifications: {
      dailyReminders: true,
      weeklyReports: true,
      healthAlerts: false,
      newFeatures: true
    }
  });

  const [scanHistory] = useState([
    { id: 1, product: 'Organic Cereal', score: 8.5, date: '2024-01-20', verdict: 'Healthy' },
    { id: 2, product: 'Greek Yogurt', score: 9.2, date: '2024-01-19', verdict: 'Excellent' },
    { id: 3, product: 'Protein Bar', score: 6.8, date: '2024-01-18', verdict: 'Moderate' },
    { id: 4, product: 'Whole Grain Bread', score: 7.9, date: '2024-01-17', verdict: 'Good' },
    { id: 5, product: 'Almond Milk', score: 8.1, date: '2024-01-16', verdict: 'Healthy' }
  ]);

  const healthOptions = [
    { id: 'weight-loss', label: 'Weight Loss', icon: Target },
    { id: 'heart-health', label: 'Heart Health', icon: Heart },
    { id: 'muscle-gain', label: 'Muscle Gain', icon: TrendingUp },
    { id: 'diabetes-friendly', label: 'Diabetes Friendly', icon: Shield },
    { id: 'low-sodium', label: 'Low Sodium', icon: Apple },
    { id: 'organic-only', label: 'Organic Only', icon: CheckCircle }
  ];

  const handleInputChange = (field: string, value: any) => {
    setProfileData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleNotificationToggle = (key: string) => {
    setProfileData(prev => ({
      ...prev,
      notifications: {
        ...prev.notifications,
        [key]: !prev.notifications[key as keyof typeof prev.notifications]
      }
    }));
  };

  const handleHealthGoalToggle = (goal: string) => {
    setProfileData(prev => ({
      ...prev,
      healthGoals: prev.healthGoals.includes(goal)
        ? prev.healthGoals.filter(g => g !== goal)
        : [...prev.healthGoals, goal]
    }));
  };

  const handleSave = () => {
    setIsEditing(false);
    // Here you would typically save to backend
    console.log('Profile saved:', profileData);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-3xl shadow-2xl w-full max-w-4xl max-h-[90vh] overflow-hidden">
        {/* Header */}
        <div className="relative bg-gradient-to-r from-emerald-500 to-sky-500 p-6">
          <button
            onClick={onClose}
            className="absolute top-4 right-4 text-white/80 hover:text-white transition-colors"
          >
            <X className="w-6 h-6" />
          </button>
          
          <div className="flex items-center space-x-4">
            <div className="relative">
              {profileData.profilePicture ? (
                <img
                  src={profileData.profilePicture}
                  alt="Profile"
                  className="w-16 h-16 rounded-2xl object-cover border-2 border-white/20"
                />
              ) : (
                <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center">
                  <User className="w-8 h-8 text-white" />
                </div>
              )}
              {isEditing && (
                <button className="absolute -bottom-2 -right-2 bg-white rounded-full p-2 shadow-lg">
                  <Camera className="w-4 h-4 text-gray-600" />
                </button>
              )}
            </div>
            <div className="text-white">
              <h1 className="text-2xl font-bold">{profileData.name}</h1>
              <p className="text-white/90">Member since {new Date(profileData.joinDate).toLocaleDateString()}</p>
              <div className="mt-2">
                <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                  currentPlan === 'premium' 
                    ? 'bg-gradient-to-r from-purple-500 to-blue-500 text-white' 
                    : 'bg-white/20 text-white'
                }`}>
                  {currentPlan === 'premium' ? '👑 Premium Member' : '🆓 Free Plan'}
                </span>
              </div>
            </div>
          </div>

          {/* Quick Stats */}
          <div className="grid grid-cols-3 gap-4 mt-6">
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 text-center">
              <div className="text-2xl font-bold text-white">{scanHistory.length}</div>
              <div className="text-white/80 text-sm">
                Total Scans
                {currentPlan === 'free' && (
                  <div className="text-xs text-white/60 mt-1">Daily limit: 2</div>
                )}
              </div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 text-center">
              <div className="text-2xl font-bold text-white">
                {(scanHistory.reduce((sum, scan) => sum + scan.score, 0) / scanHistory.length).toFixed(1)}
              </div>
              <div className="text-white/80 text-sm">Avg Score</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 text-center">
              <div className="text-2xl font-bold text-white">7</div>
              <div className="text-white/80 text-sm">
                Day Streak
                {currentPlan === 'free' && (
                  <div className="text-xs text-white/60 mt-1">
                    <span className="text-yellow-300">🔒</span> Advanced tracking
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Navigation Tabs */}
        <div className="border-b border-gray-200">
          <nav className="flex space-x-8 px-6">
            {[
              { id: 'profile', label: 'Profile', icon: User },
              { id: 'history', label: 'Scan History', icon: Scan },
              { id: 'settings', label: 'Settings', icon: Settings }
            ].map(tab => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center space-x-2 py-4 px-2 border-b-2 font-medium text-sm transition-colors ${
                  activeTab === tab.id
                    ? 'border-emerald-500 text-emerald-600'
                    : 'border-transparent text-gray-500 hover:text-gray-700'
                }`}
              >
                <tab.icon className="w-4 h-4" />
                <span>{tab.label}</span>
              </button>
            ))}
          </nav>
        </div>

        {/* Content */}
        <div className="p-6 overflow-y-auto max-h-[50vh]">
          {/* Profile Tab */}
          {activeTab === 'profile' && (
            <div className="space-y-6">
              <div className="flex items-center justify-between">
                <h3 className="text-xl font-bold text-gray-900">Profile Information</h3>
                <button
                  onClick={() => isEditing ? handleSave() : setIsEditing(true)}
                  className="flex items-center space-x-2 px-4 py-2 bg-emerald-500 text-white rounded-xl hover:bg-emerald-600 transition-colors"
                >
                  {isEditing ? <Save className="w-4 h-4" /> : <Edit3 className="w-4 h-4" />}
                  <span>{isEditing ? 'Save' : 'Edit'}</span>
                </button>
              </div>

              {/* Basic Info */}
              <div className="bg-gray-50 rounded-2xl p-6">
                <h4 className="font-semibold text-gray-900 mb-4">Basic Information</h4>
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Full Name</label>
                    <input
                      type="text"
                      value={profileData.name}
                      onChange={(e) => handleInputChange('name', e.target.value)}
                      disabled={!isEditing}
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-500 disabled:bg-gray-100"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
                    <input
                      type="email"
                      value={profileData.email}
                      onChange={(e) => handleInputChange('email', e.target.value)}
                      disabled={!isEditing}
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-500 disabled:bg-gray-100"
                    />
                  </div>
                </div>
              </div>

              {/* Health Goals */}
              <div className="bg-gray-50 rounded-2xl p-6">
                <h4 className="font-semibold text-gray-900 mb-4">Health & Food Preferences</h4>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                  {healthOptions.map(option => (
                    <button
                      key={option.id}
                      onClick={() => isEditing && handleHealthGoalToggle(option.label)}
                      disabled={!isEditing}
                      className={`p-4 rounded-xl border-2 transition-all duration-300 ${
                        profileData.healthGoals.includes(option.label)
                          ? 'border-emerald-500 bg-emerald-50 text-emerald-700'
                          : 'border-gray-200 bg-white text-gray-600 hover:border-emerald-300'
                      } ${!isEditing ? 'cursor-default' : 'cursor-pointer'}`}
                    >
                      <option.icon className="w-6 h-6 mx-auto mb-2" />
                      <div className="text-sm font-medium">{option.label}</div>
                    </button>
                  ))}
                </div>
              </div>

              {/* Current Selections */}
              <div className="bg-emerald-50 rounded-2xl p-6">
                <h4 className="font-semibold text-emerald-800 mb-4">Your Current Preferences</h4>
                <div className="space-y-3">
                  <div>
                    <span className="text-sm font-medium text-emerald-700">Health Goals:</span>
                    <div className="flex flex-wrap gap-2 mt-2">
                      {profileData.healthGoals.map((goal, index) => (
                        <span key={index} className="px-3 py-1 bg-emerald-100 text-emerald-700 rounded-full text-sm">
                          {goal}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div>
                    <span className="text-sm font-medium text-emerald-700">Dietary Preferences:</span>
                    <div className="flex flex-wrap gap-2 mt-2">
                      {profileData.dietaryPreferences.map((pref, index) => (
                        <span key={index} className="px-3 py-1 bg-sky-100 text-sky-700 rounded-full text-sm">
                          {pref}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div>
                    <span className="text-sm font-medium text-emerald-700">Allergies:</span>
                    <div className="flex flex-wrap gap-2 mt-2">
                      {profileData.allergies.map((allergy, index) => (
                        <span key={index} className="px-3 py-1 bg-red-100 text-red-700 rounded-full text-sm">
                          {allergy}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* History Tab */}
          {activeTab === 'history' && (
            <div className="space-y-6">
              <div className="flex items-center justify-between">
                <h3 className="text-xl font-bold text-gray-900">Scan History</h3>
                {currentPlan === 'free' && (
                  <div className="bg-amber-50 border border-amber-200 rounded-lg px-3 py-2">
                    <p className="text-amber-800 text-sm font-medium">
                      🔒 Limited to recent 3 scans
                    </p>
                    <p className="text-amber-600 text-xs">
                      Upgrade for full history access
                    </p>
                  </div>
                )}
              </div>
              
              <div className="space-y-4">
                {scanHistory.slice(0, currentPlan === 'free' ? 3 : scanHistory.length).map(scan => (
                  <div key={scan.id} className="bg-white border border-gray-200 rounded-xl p-4 hover:shadow-md transition-shadow">
                    <div className="flex items-center justify-between">
                      <div>
                        <h4 className="font-medium text-gray-900">{scan.product}</h4>
                        <p className="text-sm text-gray-600 flex items-center mt-1">
                          <Calendar className="w-4 h-4 mr-1" />
                          {new Date(scan.date).toLocaleDateString()}
                        </p>
                      </div>
                      <div className="text-right">
                        <div className={`text-lg font-bold ${
                          scan.score >= 8 ? 'text-emerald-600' :
                          scan.score >= 6 ? 'text-sky-600' : 'text-amber-600'
                        }`}>
                          {scan.score}/10
                        </div>
                        <div className={`text-xs px-2 py-1 rounded-full ${
                          scan.verdict === 'Excellent' ? 'bg-emerald-100 text-emerald-700' :
                          scan.verdict === 'Healthy' || scan.verdict === 'Good' ? 'bg-sky-100 text-sky-700' :
                          'bg-amber-100 text-amber-700'
                        }`}>
                          {scan.verdict}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
                
                {currentPlan === 'free' && scanHistory.length > 3 && (
                  <div className="text-center py-8 bg-gradient-to-r from-purple-50 to-blue-50 rounded-xl border border-purple-200">
                    <p className="text-purple-800 font-medium mb-2">
                      🔒 {scanHistory.length - 3} more scans available with Premium
                    </p>
                    <button className="bg-gradient-to-r from-emerald-500 to-sky-500 text-white px-6 py-2 rounded-lg font-medium hover:from-emerald-600 hover:to-sky-600 transition-all duration-300">
                      Upgrade to Premium
                    </button>
                  </div>
                )}
              </div>
            </div>
          )}

          {/* Settings Tab */}
          {activeTab === 'settings' && (
            <div className="space-y-6">
              <h3 className="text-xl font-bold text-gray-900">Settings</h3>

              {/* Notifications */}
              <div className="bg-gray-50 rounded-2xl p-6">
                <h4 className="font-semibold text-gray-900 mb-4 flex items-center">
                  <Bell className="w-5 h-5 mr-2" />
                  Notification Preferences
                </h4>
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <span className="font-medium text-gray-700">Daily Scan Reminders</span>
                      <p className="text-sm text-gray-500">Get reminded to scan your food daily</p>
                    </div>
                    <button
                      onClick={() => handleNotificationToggle('dailyReminders')}
                      className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                        profileData.notifications.dailyReminders ? 'bg-emerald-500' : 'bg-gray-300'
                      }`}
                    >
                      <span
                        className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                          profileData.notifications.dailyReminders ? 'translate-x-6' : 'translate-x-1'
                        }`}
                      />
                    </button>
                  </div>

                  <div className="flex items-center justify-between">
                    <div>
                      <span className="font-medium text-gray-700">Weekly Health Reports</span>
                      <p className="text-sm text-gray-500">Receive weekly summaries of your health choices</p>
                    </div>
                    <button
                      onClick={() => handleNotificationToggle('weeklyReports')}
                      className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                        profileData.notifications.weeklyReports ? 'bg-emerald-500' : 'bg-gray-300'
                      }`}
                    >
                      <span
                        className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                          profileData.notifications.weeklyReports ? 'translate-x-6' : 'translate-x-1'
                        }`}
                      />
                    </button>
                  </div>

                  <div className="flex items-center justify-between">
                    <div>
                      <span className="font-medium text-gray-700">Health Alerts</span>
                      <p className="text-sm text-gray-500">Get notified about concerning ingredients</p>
                    </div>
                    <button
                      onClick={() => handleNotificationToggle('healthAlerts')}
                      className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                        profileData.notifications.healthAlerts ? 'bg-emerald-500' : 'bg-gray-300'
                      }`}
                    >
                      <span
                        className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                          profileData.notifications.healthAlerts ? 'translate-x-6' : 'translate-x-1'
                        }`}
                      />
                    </button>
                  </div>

                  <div className="flex items-center justify-between">
                    <div>
                      <span className="font-medium text-gray-700">New Features</span>
                      <p className="text-sm text-gray-500">Be the first to know about new FX Health features</p>
                    </div>
                    <button
                      onClick={() => handleNotificationToggle('newFeatures')}
                      className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                        profileData.notifications.newFeatures ? 'bg-emerald-500' : 'bg-gray-300'
                      }`}
                    >
                      <span
                        className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                          profileData.notifications.newFeatures ? 'translate-x-6' : 'translate-x-1'
                        }`}
                      />
                    </button>
                  </div>
                </div>
              </div>

              {/* Account Actions */}
              <div className="bg-gray-50 rounded-2xl p-6">
                <h4 className="font-semibold text-gray-900 mb-4">Account</h4>
                <div className="space-y-3">
                  <button className="w-full text-left p-3 bg-white rounded-xl border border-gray-200 hover:border-emerald-300 transition-colors">
                    <span className="font-medium text-gray-700">Export My Data</span>
                    <p className="text-sm text-gray-500">Download all your scan history and preferences</p>
                  </button>
                  <button className="w-full text-left p-3 bg-white rounded-xl border border-gray-200 hover:border-red-300 transition-colors">
                    <span className="font-medium text-red-600 flex items-center">
                      <LogOut className="w-4 h-4 mr-2" />
                      Sign Out
                    </span>
                    <p className="text-sm text-gray-500">Sign out of your FX Health account</p>
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default UserProfile;