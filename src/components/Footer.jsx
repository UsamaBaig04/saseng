import React from 'react';
import { MapPin, Mail, Phone, Copyright, Youtube, MessageCircle, Linkedin,Facebook,Instagram } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="bg-gradient-to-br from-slate-900 via-slate-800 to-gray-900 text-white relative overflow-hidden">
      {/* Decorative background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-0 w-40 h-40 bg-blue-400 rounded-full -translate-x-20 -translate-y-20 blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-60 h-60 bg-emerald-400 rounded-full translate-x-30 translate-y-30 blur-3xl"></div>
        <div className="absolute top-1/2 left-1/3 w-32 h-32 bg-purple-400 rounded-full blur-3xl"></div>
      </div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Main footer content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
          
          {/* Registered Office Section */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2 mb-4">
              <MapPin className="text-blue-400 text-xl" />
              <h3 className="text-xl font-bold text-white">Registered Office</h3>
            </div>
            <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-slate-700/50 hover:border-slate-600/50 transition-all duration-300">
              <div className="space-y-3">
                <p className="text-blue-300 font-semibold text-lg">Head Office</p>
                <div className="text-sm text-gray-300 space-y-1 leading-relaxed">
                  <p>401, Rohan Tower</p>
                  <p>Opp. Megamart, Old Pune-Mumbai Highway</p>
                  <p>Dapodi, Pune - 411012</p>
                </div>
              </div>
              <div className="mt-4 pt-4 border-t border-slate-700/50">
                <p className="text-sm text-gray-400">
                  <span className="font-semibold text-emerald-400">GSTIN:</span> 
                  <span className="ml-2 text-gray-300">27AATCS4445F1ZY</span>
                </p>
              </div>
            </div>
          </div>
          
          {/* Quick Links Section */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold text-white mb-4">Quick Links</h3>
            <div className="space-y-2">
              {[
                { name: 'Home', path: '/' },
                { name: 'About Us', path: '/aboutUs' },
                { name: 'Contact', path: '/contacts' },
                { name: 'Services', path: '/services' },
                // { name: 'Projects', path: '/projects' }
              ].map((link, index) => (
                <div key={index} className="group">
                  <a 
                    href={link.path}
                    className="text-gray-300 hover:text-white transition-all duration-300 flex items-center space-x-3 p-3 rounded-lg hover:bg-slate-800/50 hover:translate-x-1"
                  >
                    <span className="w-2 h-2 bg-gradient-to-r from-blue-400 to-emerald-400 rounded-full group-hover:scale-125 transition-transform duration-300"></span>
                    <span className="font-medium">{link.name}</span>
                  </a>
                </div>
              ))}
            </div>
          </div>
          
          {/* Business Enquiry Section */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold text-white mb-4">Get In Touch</h3>
            <div className="space-y-4">
              
              {/* Contact Info */}
              <div className="space-y-3">
                <div className="flex items-center space-x-4 p-4 bg-slate-800/30 rounded-xl hover:bg-slate-800/50 transition-all duration-300 border border-slate-700/30 hover:border-slate-600/50">
                  <div className="p-2 bg-gradient-to-r from-blue-500 to-blue-600 rounded-lg">
                    <Mail className="text-white text-lg" />
                  </div>
                  <div>
                    <p className="text-xs text-gray-400 uppercase tracking-wide font-semibold">Email</p>
                    <p className="text-sm font-semibold text-white">eshal@sasnextgen.com</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-4 p-4 bg-slate-800/30 rounded-xl hover:bg-slate-800/50 transition-all duration-300 border border-slate-700/30 hover:border-slate-600/50">
                  <div className="p-2 bg-gradient-to-r from-emerald-500 to-emerald-600 rounded-lg">
                    <Phone className="text-white text-lg" />
                  </div>
                  <div>
                    <p className="text-xs text-gray-400 uppercase tracking-wide font-semibold">Phone</p>
                    <p className="text-sm font-semibold text-white">+91 9325010694</p>
                  </div>
                </div>
              </div>
              
              {/* Social Media */}
              <div className="pt-4">
                <h5 className="text-gray-300 font-semibold mb-4">Connect With Us</h5>
                <div className="flex space-x-3">
                  <a 
                    href="https://www.youtube.com/@sasautomationpvtltd.3698" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="group p-3 bg-slate-800/50 rounded-xl hover:bg-red-600 transition-all duration-300 transform hover:scale-110 hover:-translate-y-1 border border-slate-700/50 hover:border-red-500"
                  >
                    <Youtube className="text-gray-300 text-xl group-hover:text-white transition-colors duration-300" />
                  </a>
                  <a 
                    href="https://www.facebook.com/100067006621097/about/?_rdr" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="group p-3 bg-slate-800/50 rounded-xl hover:bg-blue-500 transition-all duration-300 transform hover:scale-110 hover:-translate-y-1 border border-slate-700/50 hover:border-green-400"
                  >
                    <Facebook className="text-gray-300 text-xl group-hover:text-white transition-colors duration-300" />
                  </a>
                  <a 
                    href="https://in.linkedin.com/company/sas-automation-pvt-ltd" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="group p-3 bg-slate-800/50 rounded-xl hover:bg-blue-600 transition-all duration-300 transform hover:scale-110 hover:-translate-y-1 border border-slate-700/50 hover:border-blue-400"
                  >
                    <Linkedin className="text-gray-300 text-xl group-hover:text-white transition-colors duration-300" />
                  </a>
                  <a 
                    href="https://www.instagram.com/sas.automation" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="group p-3 bg-slate-800/50 rounded-xl hover:bg-pink-700 transition-all duration-300 transform hover:scale-110 hover:-translate-y-1 border border-slate-700/50 hover:border-blue-400"
                  >
                    <Instagram className="text-gray-300 text-xl group-hover:text-white transition-colors duration-300" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Bottom section */}
        <div className="mt-12 pt-8 border-t border-slate-700/50">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="flex items-center space-x-2">
              <Copyright className="text-gray-400" />
              <p className="text-gray-400 text-sm">
                2026 SAS Engineering. All Rights Reserved.
              </p>
            </div>
            <div className="flex items-center space-x-6 text-xs text-gray-500">
              <a href="/privacy" className="hover:text-blue-400 transition-colors duration-300 hover:underline">Privacy Policy</a>
              <a href="/terms" className="hover:text-blue-400 transition-colors duration-300 hover:underline">Terms of Service</a>
              <a href="/sitemap" className="hover:text-blue-400 transition-colors duration-300 hover:underline">Sitemap</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};