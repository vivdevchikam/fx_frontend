import React, { useState } from 'react';
import { Mail, Phone, MapPin, MessageCircle, Send, CheckCircle, Clock, Users, Lightbulb, Bug, Heart, Headphones, ArrowRight, Star } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    category: '',
    message: '',
    priority: 'medium'
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const contactMethods = [
    {
      icon: Mail,
      title: "Email Support",
      description: "Get detailed responses within 24 hours",
      contact: "hello@fxhealth.com",
      color: "from-emerald-500 to-emerald-600",
      bgColor: "from-emerald-50 to-emerald-100"
    },
    {
      icon: MessageCircle,
      title: "Live Chat",
      description: "Chat with our team during business hours",
      contact: "Available 9 AM - 6 PM PST",
      color: "from-sky-500 to-sky-600",
      bgColor: "from-sky-50 to-sky-100"
    },
    {
      icon: Phone,
      title: "Phone Support",
      description: "Speak directly with our founders",
      contact: "+1 (555) 123-4567",
      color: "from-indigo-500 to-indigo-600",
      bgColor: "from-indigo-50 to-indigo-100"
    }
  ];

  const supportCategories = [
    {
      icon: Lightbulb,
      title: "Feature Suggestions",
      description: "Share ideas to improve FX Health",
      color: "text-amber-600",
      bgColor: "bg-amber-50"
    },
    {
      icon: Bug,
      title: "Bug Reports",
      description: "Report technical issues or problems",
      color: "text-rose-600",
      bgColor: "bg-rose-50"
    },
    {
      icon: Heart,
      title: "General Feedback",
      description: "Tell us about your experience",
      color: "text-purple-600",
      bgColor: "bg-purple-50"
    },
    {
      icon: Users,
      title: "Partnership Inquiry",
      description: "Explore collaboration opportunities",
      color: "text-emerald-600",
      bgColor: "bg-emerald-50"
    }
  ];

  const faqs = [
    {
      question: "How accurate is the AI analysis?",
      answer: "Our AI is currently in beta testing with 85-90% accuracy. We're continuously improving the model based on user feedback and expert validation."
    },
    {
      question: "Is my health data secure?",
      answer: "Absolutely! We use bank-level encryption and never share your personal health information. All data is processed securely and stored with HIPAA-compliant standards."
    },
    {
      question: "When will FX Health be publicly available?",
      answer: "We're planning our public launch for Q4 2024. Beta testers get early access and help us refine the product before the official release."
    },
    {
      question: "Can I suggest new features?",
      answer: "Yes! We love hearing from our community. Use the contact form below to share your ideas - many current features came from user suggestions."
    }
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      setFormData({
        name: '',
        email: '',
        subject: '',
        category: '',
        message: '',
        priority: 'medium'
      });
    }, 2000);
  };

  if (isSubmitted) {
    return (
      <section className="py-20 bg-gradient-to-br from-emerald-50 via-sky-50 to-indigo-50 min-h-screen flex items-center">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mx-auto text-center">
            <div className="bg-white rounded-3xl p-12 shadow-2xl border border-gray-100">
              <div className="inline-flex p-4 bg-gradient-to-r from-emerald-500 to-sky-500 rounded-full mb-6">
                <CheckCircle className="w-12 h-12 text-white" />
              </div>
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Message Sent Successfully!</h2>
              <p className="text-lg text-gray-600 mb-8">
                Thank you for reaching out to FX Health. Our team will review your message and respond within 24 hours via email.
              </p>
              <div className="bg-gradient-to-r from-emerald-50 to-sky-50 rounded-2xl p-6 mb-8">
                <h3 className="font-semibold text-gray-900 mb-2">What happens next?</h3>
                <div className="space-y-2 text-sm text-gray-600">
                  <p>• Our team will review your message within 2-4 hours</p>
                  <p>• You'll receive a detailed response via email</p>
                  <p>• For urgent issues, we'll prioritize your request</p>
                  <p>• Feature suggestions will be shared with our product team</p>
                </div>
              </div>
              <button
                onClick={() => setIsSubmitted(false)}
                className="bg-gradient-to-r from-emerald-500 to-sky-500 text-white px-8 py-3 rounded-full font-semibold hover:from-emerald-600 hover:to-sky-600 transition-all duration-300 shadow-lg hover:shadow-xl"
              >
                Send Another Message
              </button>
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-emerald-50 via-sky-50 to-indigo-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Get in Touch with
            <span className="block bg-gradient-to-r from-emerald-600 to-sky-600 bg-clip-text text-transparent">
              FX Health Team
            </span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We're building FX Health with your feedback in mind. Share your ideas, report issues, or just say hello - we'd love to hear from you!
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-12 max-w-7xl mx-auto">
          {/* Contact Methods */}
          <div className="space-y-6">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">How to Reach Us</h2>
            
            {contactMethods.map((method, index) => (
              <div key={index} className={`bg-gradient-to-r ${method.bgColor} rounded-2xl p-6 border border-gray-100`}>
                <div className="flex items-start space-x-4">
                  <div className={`inline-flex p-3 rounded-xl bg-gradient-to-r ${method.color}`}>
                    <method.icon className="w-6 h-6 text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">{method.title}</h3>
                    <p className="text-gray-600 text-sm mb-3">{method.description}</p>
                    <p className="font-medium text-gray-900">{method.contact}</p>
                  </div>
                </div>
              </div>
            ))}

            {/* Startup Message */}
            <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100">
              <div className="flex items-start space-x-4">
                <div className="inline-flex p-3 rounded-xl bg-gradient-to-r from-purple-500 to-pink-500">
                  <Star className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">We're Just Getting Started!</h3>
                  <p className="text-gray-600 text-sm">
                    As an early-stage startup, your feedback is incredibly valuable. Every suggestion helps us build a better product for everyone.
                  </p>
                </div>
              </div>
            </div>

            {/* Response Time */}
            <div className="bg-gradient-to-r from-indigo-50 to-purple-50 rounded-2xl p-6 border border-indigo-100">
              <div className="flex items-center space-x-3 mb-4">
                <Clock className="w-6 h-6 text-indigo-600" />
                <h3 className="text-lg font-semibold text-gray-900">Response Times</h3>
              </div>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span className="text-gray-600">General Inquiries:</span>
                  <span className="font-medium text-gray-900">24 hours</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Bug Reports:</span>
                  <span className="font-medium text-gray-900">12 hours</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Urgent Issues:</span>
                  <span className="font-medium text-gray-900">4 hours</span>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-3xl shadow-2xl p-8 border border-gray-100">
              <div className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-2">Send Us a Message</h2>
                <p className="text-gray-600">
                  Whether you have feedback, found a bug, or want to suggest a feature - we're all ears!
                </p>
              </div>

              {/* Support Categories */}
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
                {supportCategories.map((category, index) => (
                  <div key={index} className={`${category.bgColor} rounded-xl p-4 text-center border border-gray-100`}>
                    <category.icon className={`w-6 h-6 ${category.color} mx-auto mb-2`} />
                    <h4 className="font-medium text-gray-900 text-sm mb-1">{category.title}</h4>
                    <p className="text-xs text-gray-600">{category.description}</p>
                  </div>
                ))}
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Name and Email */}
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all duration-300"
                      placeholder="Your full name"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all duration-300"
                      placeholder="your.email@example.com"
                    />
                  </div>
                </div>

                {/* Subject and Category */}
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                      Subject *
                    </label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all duration-300"
                      placeholder="Brief description of your message"
                    />
                  </div>
                  <div>
                    <label htmlFor="category" className="block text-sm font-medium text-gray-700 mb-2">
                      Category *
                    </label>
                    <select
                      id="category"
                      name="category"
                      value={formData.category}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all duration-300"
                    >
                      <option value="">Select a category</option>
                      <option value="feature-suggestion">Feature Suggestion</option>
                      <option value="bug-report">Bug Report</option>
                      <option value="general-feedback">General Feedback</option>
                      <option value="partnership">Partnership Inquiry</option>
                      <option value="technical-support">Technical Support</option>
                      <option value="beta-feedback">Beta Testing Feedback</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                </div>

                {/* Priority */}
                <div>
                  <label htmlFor="priority" className="block text-sm font-medium text-gray-700 mb-2">
                    Priority Level
                  </label>
                  <div className="flex space-x-4">
                    {['low', 'medium', 'high', 'urgent'].map((level) => (
                      <label key={level} className="flex items-center">
                        <input
                          type="radio"
                          name="priority"
                          value={level}
                          checked={formData.priority === level}
                          onChange={handleInputChange}
                          className="mr-2 text-emerald-600 focus:ring-emerald-500"
                        />
                        <span className="text-sm text-gray-700 capitalize">{level}</span>
                      </label>
                    ))}
                  </div>
                </div>

                {/* Message */}
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                    Your Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows={6}
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all duration-300 resize-none"
                    placeholder="Please provide as much detail as possible. For bug reports, include steps to reproduce the issue. For feature suggestions, explain how it would improve your experience."
                  />
                </div>

                {/* Submit Button */}
                <div className="flex flex-col sm:flex-row gap-4 items-center">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full sm:w-auto bg-gradient-to-r from-emerald-500 to-sky-500 text-white px-8 py-4 rounded-full font-semibold hover:from-emerald-600 hover:to-sky-600 transition-all duration-300 shadow-lg hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center"
                  >
                    {isSubmitting ? (
                      <>
                        <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                        Sending Message...
                      </>
                    ) : (
                      <>
                        <Send className="w-5 h-5 mr-2" />
                        Send Message
                      </>
                    )}
                  </button>
                  <p className="text-sm text-gray-500">
                    We'll respond within 24 hours via email
                  </p>
                </div>
              </form>
            </div>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="mt-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Frequently Asked Questions</h2>
            <p className="text-xl text-gray-600">
              Quick answers to common questions about FX Health
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {faqs.map((faq, index) => (
              <div key={index} className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">{faq.question}</h3>
                <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Team Availability */}
        <div className="mt-16 bg-gradient-to-r from-emerald-500 to-sky-500 rounded-3xl p-12 text-white text-center">
          <div className="max-w-3xl mx-auto">
            <h3 className="text-3xl font-bold mb-4">Our Founders Are Here to Help</h3>
            <p className="text-xl mb-8 opacity-90">
              As a startup, we believe in direct communication. Your message might be answered personally by Vivek, Tarun, or Yash - the founders of FX Health.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6">
                <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="w-8 h-8 text-white" />
                </div>
                <h4 className="font-semibold mb-2">Direct Access</h4>
                <p className="text-sm opacity-90">Speak directly with our founding team</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6">
                <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Headphones className="w-8 h-8 text-white" />
                </div>
                <h4 className="font-semibold mb-2">Personal Support</h4>
                <p className="text-sm opacity-90">Get personalized help for your needs</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6">
                <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <ArrowRight className="w-8 h-8 text-white" />
                </div>
                <h4 className="font-semibold mb-2">Quick Action</h4>
                <p className="text-sm opacity-90">Fast implementation of your feedback</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;