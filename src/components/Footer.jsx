import React from 'react';
import { Scan, Mail, Phone, MapPin, Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-6">
            <div className="flex items-center space-x-2">
              <div className="bg-gradient-to-r from-emerald-500 to-sky-500 p-2 rounded-lg">
                <Scan className="w-6 h-6 text-white" />
              </div>
              <span className="text-2xl font-bold">FX Health</span>
            </div>
            <p className="text-gray-400 leading-relaxed">
              Empowering healthier choices through AI-powered food analysis. Making nutrition simple, personal, and accessible for everyone.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="bg-gray-800 p-2 rounded-lg hover:bg-emerald-600 transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="bg-gray-800 p-2 rounded-lg hover:bg-sky-600 transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="bg-gray-800 p-2 rounded-lg hover:bg-pink-600 transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="bg-gray-800 p-2 rounded-lg hover:bg-blue-600 transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Quick Links</h3>
            <ul className="space-y-3">
              <li><a href="#features" className="text-gray-400 hover:text-emerald-400 transition-colors">Features</a></li>
              <li><a href="#how-it-works" className="text-gray-400 hover:text-emerald-400 transition-colors">How it Works</a></li>
              <li><a href="#pricing" className="text-gray-400 hover:text-emerald-400 transition-colors">Pricing</a></li>
              <li><a href="#about" className="text-gray-400 hover:text-emerald-400 transition-colors">About Us</a></li>
              <li><a href="#contact" className="text-gray-400 hover:text-emerald-400 transition-colors">Contact</a></li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Support</h3>
            <ul className="space-y-3">
              <li><button onClick={() => window.dispatchEvent(new CustomEvent('navigate-legal', { detail: 'help' }))} className="text-gray-400 hover:text-emerald-400 transition-colors">Help Center</button></li>
              <li><button onClick={() => window.dispatchEvent(new CustomEvent('navigate-legal', { detail: 'privacy' }))} className="text-gray-400 hover:text-emerald-400 transition-colors">Privacy Policy</button></li>
              <li><button onClick={() => window.dispatchEvent(new CustomEvent('navigate-legal', { detail: 'terms' }))} className="text-gray-400 hover:text-emerald-400 transition-colors">Terms of Service</button></li>
              <li><a href="#" className="text-gray-400 hover:text-emerald-400 transition-colors">HIPAA Compliance</a></li>
              <li><a href="#" className="text-gray-400 hover:text-emerald-400 transition-colors">API Documentation</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Contact Us</h3>
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-emerald-400" />
                <span className="text-gray-400">hello@fxhealth.com</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-sky-400" />
                <span className="text-gray-400">+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin className="w-5 h-5 text-indigo-400" />
                <span className="text-gray-400">San Francisco, CA</span>
              </div>
            </div>

            {/* Newsletter */}
            <div className="mt-8">
              <h4 className="font-semibold mb-4">Stay Updated</h4>
              <div className="flex">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-2 bg-gray-800 border border-gray-700 rounded-l-lg focus:outline-none focus:border-emerald-500"
                />
                <button className="bg-gradient-to-r from-emerald-500 to-sky-500 px-4 py-2 rounded-r-lg hover:from-emerald-600 hover:to-sky-600 transition-colors">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400">
            © 2024 FX Health. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="text-gray-400 hover:text-emerald-400 transition-colors text-sm">Privacy</a>
            <a href="#" className="text-gray-400 hover:text-emerald-400 transition-colors text-sm">Terms</a>
            <a href="#" className="text-gray-400 hover:text-emerald-400 transition-colors text-sm">Cookies</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;