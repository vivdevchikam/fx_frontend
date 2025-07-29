import React from 'react';
import { Users, Target, Lightbulb, Heart, Shield, Zap, Award, Globe } from 'lucide-react';

const About = () => {
  const founders = [
    {
      name: "Vivek Uraiti",
      role: "Founder & CEO",
      image: "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=400",
      bio: "Passionate about leveraging AI to democratize health insights. With a background in technology and wellness, Vivek founded FX Health to bridge the gap between complex nutrition science and everyday food choices.",
      expertise: ["AI & Machine Learning", "Health Technology", "Product Strategy"]
    },
    {
      name: "Tarun Sanodiya",
      role: "Co-Founder & CTO",
      image: "https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=400",
      bio: "Technical visionary driving FX Health's AI capabilities. Tarun specializes in computer vision and OCR technology, ensuring our platform delivers accurate and lightning-fast food label analysis.",
      expertise: ["Computer Vision", "OCR Technology", "Backend Architecture"]
    },
    {
      name: "Yash Sanodiya",
      role: "Co-Founder & CPO",
      image: "https://images.pexels.com/photos/1681010/pexels-photo-1681010.jpeg?auto=compress&cs=tinysrgb&w=400",
      bio: "User experience advocate focused on making health insights accessible to everyone. Yash leads product development, ensuring FX Health remains intuitive while delivering powerful personalized recommendations.",
      expertise: ["Product Design", "User Experience", "Health Analytics"]
    }
  ];

  const values = [
    {
      icon: Heart,
      title: "Health First",
      description: "Every feature we build prioritizes your health and well-being above all else."
    },
    {
      icon: Shield,
      title: "Privacy & Security",
      description: "Your health data is sacred. We employ bank-level security to protect your information."
    },
    {
      icon: Lightbulb,
      title: "Innovation",
      description: "We're constantly pushing boundaries to make health insights more accurate and accessible."
    },
    {
      icon: Users,
      title: "Community",
      description: "Building a supportive community where everyone can make informed health choices."
    }
  ];

  const milestones = [
    {
      year: "2024",
      title: "FX Health Founded",
      description: "Three passionate founders unite with a vision to democratize health insights through AI technology."
    },
    {
      year: "Q1 2024",
      title: "MVP Development",
      description: "Built our first prototype with basic OCR and AI analysis capabilities for food label scanning."
    },
    {
      year: "Q2 2024",
      title: "Technology Refinement",
      description: "Enhanced our AI algorithms and improved accuracy for better health insights and recommendations."
    },
    {
      year: "Q3 2024",
      title: "Platform Development",
      description: "Building comprehensive platform with advanced features and personalized health recommendations."
    }
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <div className="relative mb-20">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
                Revolutionizing Health
                <span className="block bg-gradient-to-r from-emerald-600 to-sky-600 bg-clip-text text-transparent">
                  One Scan at a Time
                </span>
              </h1>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                FX Health is on a mission to make personalized nutrition accessible to everyone. We're building the future where making healthy food choices is as simple as scanning a label.
              </p>
              <div className="flex items-center space-x-6">
                <div className="text-center">
                  <div className="text-2xl font-bold text-emerald-600">2024</div>
                  <div className="text-sm text-gray-600">Founded</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-sky-600">3</div>
                  <div className="text-sm text-gray-600">Co-Founders</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-indigo-600">AI</div>
                  <div className="text-sm text-gray-600">Powered</div>
                </div>
              </div>
            </div>
            <div className="relative">
              <img
                src="https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Team collaboration"
                className="w-full h-96 object-cover rounded-2xl shadow-lg"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/20 to-sky-500/20 rounded-2xl"></div>
            </div>
          </div>
        </div>

        {/* Mission & Vision */}
        <div className="mb-20">
          <div className="grid lg:grid-cols-2 gap-12">
            <div className="bg-gradient-to-br from-emerald-50 to-emerald-100 rounded-2xl p-8">
              <div className="flex items-center mb-6">
                <Target className="w-8 h-8 text-emerald-600 mr-3" />
                <h3 className="text-2xl font-bold text-gray-900">Our Mission</h3>
              </div>
              <p className="text-gray-700 leading-relaxed">
                To empower individuals and families to make informed food choices through AI-powered insights, making personalized nutrition accessible, understandable, and actionable for everyone, regardless of their health knowledge background.
              </p>
            </div>
            <div className="bg-gradient-to-br from-sky-50 to-sky-100 rounded-2xl p-8">
              <div className="flex items-center mb-6">
                <Globe className="w-8 h-8 text-sky-600 mr-3" />
                <h3 className="text-2xl font-bold text-gray-900">Our Vision</h3>
              </div>
              <p className="text-gray-700 leading-relaxed">
                A world where every person has instant access to personalized health insights, where making healthy choices is effortless, and where technology bridges the gap between complex nutrition science and everyday decisions.
              </p>
            </div>
          </div>
        </div>

        {/* What We Offer */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">What FX Health Offers</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We're building a comprehensive platform that transforms how you interact with food and nutrition information.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-100">
              <Zap className="w-10 h-10 text-emerald-600 mb-4" />
              <h4 className="text-lg font-semibold text-gray-900 mb-3">Instant Analysis</h4>
              <p className="text-gray-600">Scan any food label and get comprehensive health insights in under 2 seconds using advanced OCR and AI technology.</p>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-100">
              <Heart className="w-10 h-10 text-sky-600 mb-4" />
              <h4 className="text-lg font-semibold text-gray-900 mb-3">Personalized Recommendations</h4>
              <p className="text-gray-600">Receive tailored health verdicts based on your dietary preferences, restrictions, and health goals.</p>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-100">
              <Shield className="w-10 h-10 text-indigo-600 mb-4" />
              <h4 className="text-lg font-semibold text-gray-900 mb-3">Privacy-First Approach</h4>
              <p className="text-gray-600">Your health data is encrypted and secure. We never share your personal information with third parties.</p>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-100">
              <Users className="w-10 h-10 text-purple-600 mb-4" />
              <h4 className="text-lg font-semibold text-gray-900 mb-3">Family Profiles</h4>
              <p className="text-gray-600">Create separate profiles for family members with different dietary needs and health considerations.</p>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-100">
              <Award className="w-10 h-10 text-amber-600 mb-4" />
              <h4 className="text-lg font-semibold text-gray-900 mb-3">Expert-Backed Insights</h4>
              <p className="text-gray-600">Our AI is trained on nutritional science and validated by healthcare professionals for accuracy.</p>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-100">
              <Lightbulb className="w-10 h-10 text-rose-600 mb-4" />
              <h4 className="text-lg font-semibold text-gray-900 mb-3">Smart Alternatives</h4>
              <p className="text-gray-600">Get suggestions for healthier alternatives when a product doesn't align with your health goals.</p>
            </div>
          </div>
        </div>

        {/* Founding Team */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Meet Our Founding Team</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Three passionate individuals united by a shared vision to make health insights accessible to everyone.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {founders.map((founder, index) => (
              <div key={index} className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300">
                <div className="text-center mb-6">
                  <img
                    src={founder.image}
                    alt={founder.name}
                    className="w-24 h-24 rounded-full object-cover mx-auto mb-4 border-4 border-emerald-100"
                  />
                  <h3 className="text-xl font-bold text-gray-900">{founder.name}</h3>
                  <p className="text-emerald-600 font-medium">{founder.role}</p>
                </div>
                
                <p className="text-gray-600 mb-6 leading-relaxed">{founder.bio}</p>
                
                <div>
                  <h4 className="font-semibold text-gray-900 mb-3">Expertise:</h4>
                  <div className="flex flex-wrap gap-2">
                    {founder.expertise.map((skill, skillIndex) => (
                      <span
                        key={skillIndex}
                        className="bg-emerald-100 text-emerald-700 px-3 py-1 rounded-full text-sm font-medium"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Our Values */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Core Values</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              The principles that guide every decision we make and every feature we build.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <div key={index} className="text-center p-6 bg-gradient-to-br from-gray-50 to-white rounded-xl border border-gray-100">
                <div className={`inline-flex p-3 rounded-xl bg-gradient-to-r ${
                  index === 0 ? 'from-emerald-500 to-emerald-600' :
                  index === 1 ? 'from-sky-500 to-sky-600' :
                  index === 2 ? 'from-indigo-500 to-indigo-600' :
                  'from-purple-500 to-purple-600'
                } mb-4`}>
                  <value.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">{value.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Journey Timeline */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Journey</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From concept to reality - here's how we're building the future of personalized nutrition.
            </p>
          </div>

          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-emerald-500 to-sky-500 rounded-full"></div>
            
            <div className="space-y-12">
              {milestones.map((milestone, index) => (
                <div key={index} className={`flex items-center ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}>
                  <div className={`w-1/2 ${index % 2 === 0 ? 'pr-8 text-right' : 'pl-8 text-left'}`}>
                    <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-100">
                      <div className="text-emerald-600 font-bold text-lg mb-2">{milestone.year}</div>
                      <h3 className="text-xl font-semibold text-gray-900 mb-3">{milestone.title}</h3>
                      <p className="text-gray-600">{milestone.description}</p>
                    </div>
                  </div>
                  
                  <div className="relative z-10">
                    <div className="w-4 h-4 bg-white border-4 border-emerald-500 rounded-full"></div>
                  </div>
                  
                  <div className="w-1/2"></div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center bg-gradient-to-r from-emerald-500 to-sky-500 rounded-3xl p-12 text-white">
          <h3 className="text-3xl font-bold mb-4">Join Us on This Journey</h3>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            We're just getting started. Be part of the revolution that's making healthy living accessible to everyone.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-emerald-600 px-8 py-4 rounded-full font-semibold text-lg hover:bg-gray-50 transition-colors shadow-lg">
              Learn More
            </button>
            <button className="border-2 border-white text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-white hover:text-emerald-600 transition-colors">
              Contact Our Team
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;