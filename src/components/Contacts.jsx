import React, { useState } from "react";
import {
  Mail,
  Phone,
  MapPin,
  Clock,
  Send,
  CheckCircle,
  MessageCircle,
  Users,
  ShoppingCart,
  Headphones,
  Globe,
  Star,
} from "lucide-react";

export const Contacts = ({onClose}) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone:"",
    subject: "",
    message: "",
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errors, setErrors] = useState({});
  
  const validate = () => {
    const errors = {};
    if (!formData.name) errors.name = "Full Name is required";
    if (!formData.email) errors.email = "Email is required";
    if (!/\S+@\S+\.\S+/.test(formData.email))
      errors.email = "Email address is invalid";
    if (!formData.phone) errors.phone = "Phone number is required";
    if (!/^\d{10}$/.test(formData.phone))
      errors.phone = "Phone number must be 10 digits";
    if (!formData.message) errors.message = "Message is required";
    return errors;
  };
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }
    // Here you would typically send the form data to your backend
    console.log("Form submitted:", formData);
    setIsSubmitted(true);
    try {
      // const response = await fetch("https://formspree.io/f/xyyroond", {
      const response = await fetch("https://formspree.io/f/xblzpyll", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        console.log("Form submitted successfully");
        onClose();
      } else {
        console.error("Form submission error");
      }
    } catch (error) {
      console.error("Form submission error", error);
    } finally {
      setIsSubmitted(false);
    }
    // Reset form after 3 seconds
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({
        name: "",
        email: "",
        phone:"",
        subject: "",
        message: "",
      });
    }, 3000);
  };

  return (
    <div className="min-h-screen bg-gray-100 pt-14 md:pt-16 lg:pt-20">
      {/* Header Section */}
      <div className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-gray-900 sm:text-5xl">
              Contact Us
            </h1>
            <p className="mt-4 text-xl text-gray-600 max-w-2xl mx-auto">
              We'd love to hear from you. Send us a message and we'll respond as
              soon as possible.
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Contact Information */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-2xl shadow-2xl p-8 h-fit flex flex-col">
              <div className="w-full flex justify-center items-center mb-10">
              <h1 className="text-2xl font-bold text-gray-900  ">
                Get in Touch
              </h1>
              </div>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center">
                      <Phone className="w-6 h-6 text-red-600" />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900">
                      Phone
                    </h3>
                    <p className="text-gray-600 mt-1">+91- 9325010694</p>
                    <p className="text-gray-600">Mon-Sat 9am-7pm IST</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center">
                      <Mail className="w-6 h-6 text-red-600" />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900">
                      Email
                    </h3>
                    <p className="text-gray-600 mt-1">
                      eshal@sasnextgen.comnpm
                    </p>
                    <p className="text-gray-600">We'll respond within 24hrs</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center">
                      <MapPin className="w-6 h-6 text-red-600" />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900">
                      Address
                    </h3>
                    {/* <p className="text-gray-600 mt-1">
                      Shree Sant Dnyaneshwar Industrial Estate Plot 59,58, Unit
                      no 08 , Near Mohanagar Police Chowki, Mohan Nagar Main Rd,
                      D-II Block, MIDC, Chinchwad Maharashtra 411019
                    </p> */}
                    <p>401, Rohan Tower</p>
                  <p>Opp. Megamart, Old Pune-Mumbai Highway</p>
                  <p>Dapodi, Pune - 411012</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center">
                      <Clock className="w-6 h-6 text-red-600" />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900">
                      Business Hours
                    </h3>
                    <p className="text-gray-600 mt-1">
                      Monday - Friday: 9:00 AM - 7:00 PM
                      <br />
                      Saturday: 10:00 AM - 7:00 PM
                      <br />
                      Sunday: Closed
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-2xl shadow-xl p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                Send us a Message
              </h2>

              {isSubmitted ? (
                <div className="text-center py-12">
                  <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-2">
                    <CheckCircle className="w-8 h-8 text-red-600" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    Message Sent!
                  </h3>
                  <p className="text-gray-600">
                    Thank you for contacting us. We'll get back to you soon.
                  </p>
                </div>
              ) : (
                <div className="space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label
                        htmlFor="name"
                        className="block text-sm font-medium text-gray-700 mb-2"
                      >
                        Full Name *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent transition-colors"
                        placeholder="Your full name"
                      />
                      {errors.name && <p className="text-red-500 italic pt-1">{errors.name}</p>}
                    </div>

                    <div>
                      <label
                        htmlFor="email"
                        className="block text-sm font-medium text-gray-700 mb-2"
                      >
                        Email Address *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent transition-colors"
                        placeholder="your.email@example.com"
                      />
                      {errors.email && <p className="text-red-500 italic pt-1">{errors.email}</p>}
                    </div>

                    <div>
                      <label
                        htmlFor="phone"
                        className="block text-sm font-medium text-gray-700 mb-2"
                      >
                        Phone No *
                      </label>
                      <input
                        type="phone"
                        id="phone"
                        name="phone"
                        required
                        value={formData.phone}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent transition-colors"
                        placeholder="+91 9999999999"
                      />
                      {errors.phone && <p className="text-red-500 italic pt-1">{errors.phone}</p>}
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="subject"
                      className="block text-sm font-medium text-gray-700 mb-2"
                    >
                      Subject *
                    </label>
                    <select
                      id="subject"
                      name="subject"
                      required
                      value={formData.subject}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent transition-colors"
                    >
                      <option value="">Select a subject</option>
                      <option value="order-inquiry">Order Inquiry</option>
                      <option value="product-question">Product Question</option>
                      <option value="shipping-issue">Shipping Issue</option>
                      <option value="return-refund">Return/Refund</option>
                      <option value="technical-support">
                        Technical Support
                      </option>
                      <option value="partnership">Partnership Inquiry</option>
                      <option value="other">Other</option>
                    </select>
                  </div>

                  <div>
                    <label
                      htmlFor="message"
                      className="block text-sm font-medium text-gray-700 mb-2"
                    >
                      Message *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      required
                      rows={6}
                      value={formData.message}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent transition-colors resize-none"
                      placeholder="Please describe your inquiry in detail..."
                    />
                  </div>

                  <div className="flex flex-col sm:flex-row gap-4 pt-4">
                    <button
                      type="button"
                      onClick={handleSubmit}
                      className="flex-1 bg-red-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-red-700 focus:ring-2 focus:ring-red-500 focus:ring-offset-2 transition-colors flex items-center justify-center space-x-2"
                    >
                      <Send className="w-5 h-5" />
                      <span>Send Message</span>
                    </button>

                    <button
                      type="button"
                      onClick={() =>{
                        setFormData({
                          name: "",
                          email: "",
                          phone:"",
                          subject: "",
                          message: "",
                        })
                      setErrors({});
                      }}
                      className="flex-1 sm:flex-none bg-gray-100 text-gray-700 px-8 py-3 rounded-lg font-semibold hover:bg-gray-200 focus:ring-2 focus:ring-gray-500 focus:ring-offset-2 transition-colors"
                    >
                      Clear Form
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="mt-16">
          <div className="bg-white rounded-2xl shadow-xl p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">
              Frequently Asked Questions
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">
                  How long does shipping take?
                </h3>
                <p className="text-gray-600">
                  Standard shipping typically takes 3-5 business days. Express
                  shipping options are available for faster delivery.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">
                  What's your return policy?
                </h3>
                <p className="text-gray-600">
                  We offer a 30-day return policy for unused items in original
                  packaging. Return shipping is free for defective items.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">
                  Do you offer international shipping?
                </h3>
                <p className="text-gray-600">
                  Yes, we ship to most countries worldwide. International
                  shipping rates and delivery times vary by location.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">
                  How can I track my order?
                </h3>
                <p className="text-gray-600">
                  Once your order ships, you'll receive a tracking number via
                  email. You can also track orders in your account dashboard.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Live Chat & Support Options */}
        <div className="mt-16">
          <div className="bg-white rounded-2xl shadow-xl p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">
              Other Ways to Get Help
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center p-6 border border-gray-200 rounded-xl hover:border-red-300 hover:shadow-md transition-all">
                <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <MessageCircle className="w-8 h-8 text-red-600" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  Live Chat
                </h3>
                <p className="text-gray-600 mb-4">
                  Get instant help from our support team
                </p>
                <button className="bg-red-600 text-white px-6 py-2 rounded-lg hover:bg-red-700 transition-colors">
                  Start Chat
                </button>
              </div>

              <div className="text-center p-6 border border-gray-200 rounded-xl hover:border-red-300 hover:shadow-md transition-all">
                <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="w-8 h-8 text-red-600" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  Community Forum
                </h3>
                <p className="text-gray-600 mb-4">
                  Connect with other customers and get tips
                </p>
                <button className="bg-red-600 text-white px-6 py-2 rounded-lg hover:bg-red-700 transition-colors">
                  Visit Forum
                </button>
              </div>

              <div className="text-center p-6 border border-gray-200 rounded-xl hover:border-red-300 hover:shadow-md transition-all">
                <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Headphones className="w-8 h-8 text-red-600" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  Video Support
                </h3>
                <p className="text-gray-600 mb-4">
                  Schedule a video call with our experts
                </p>
                <button className="bg-red-600 text-white px-6 py-2 rounded-lg hover:bg-red-700 transition-colors">
                  Book Call
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Order Status & Quick Links */}
        <div className="mt-16">
          <div className="bg-gradient-to-r from-red-600 to-red-700 rounded-2xl shadow-xl p-8 text-white">
            <div className="text-center mb-8">
              <h2 className="text-2xl font-bold mb-4">
                Need Help with Your Order?
              </h2>
              <p className="text-red-100 max-w-2xl mx-auto">
                Quick access to common order-related services and information
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-xl p-6 text-center hover:bg-opacity-20 transition-all cursor-pointer">
                <ShoppingCart className="w-8 h-8 mx-auto mb-3" />
                <h3 className="font-semibold mb-2">Track Order</h3>
                <p className="text-sm text-red-100">Find your package status</p>
              </div>

              <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-xl p-6 text-center hover:bg-opacity-20 transition-all cursor-pointer">
                <Globe className="w-8 h-8 mx-auto mb-3" />
                <h3 className="font-semibold mb-2">Returns</h3>
                <p className="text-sm text-red-100">Start a return process</p>
              </div>

              <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-xl p-6 text-center hover:bg-opacity-20 transition-all cursor-pointer">
                <Star className="w-8 h-8 mx-auto mb-3" />
                <h3 className="font-semibold mb-2">Reviews</h3>
                <p className="text-sm text-red-100">Share your experience</p>
              </div>

              <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-xl p-6 text-center hover:bg-opacity-20 transition-all cursor-pointer">
                <Users className="w-8 h-8 mx-auto mb-3" />
                <h3 className="font-semibold mb-2">Account</h3>
                <p className="text-sm text-red-100">Manage your profile</p>
              </div>
            </div>
          </div>
        </div>

        {/* Emergency Contact */}
        <div className="mt-16">
          <div className="bg-red-50 border-l-4 border-red-500 rounded-r-2xl shadow-xl p-8">
            <div className="flex items-start">
              <div className="flex-shrink-0">
                <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center">
                  <Phone className="w-6 h-6 text-red-600" />
                </div>
              </div>
              <div className="ml-4">
                <h3 className="text-lg font-bold text-black mb-2">
                  Urgent Order Issues?
                </h3>
                <p className="text-red-700 mb-3">
                  For time-sensitive order problems, shipping emergencies, or
                  payment issues that need immediate attention.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <div>
                    <p className="font-semibold text-red-800">
                      Priority Support Line:
                    </p>
                    <p className="text-red-700">+91- 7756869619</p>
                    <p className="text-sm text-red-600">
                      Available 24/7 for urgent matters
                    </p>
                  </div>
                  <div>
                    <p className="font-semibold text-red-800">
                      Emergency Email:
                    </p>
                    <p className="text-red-700">contact@sasautomation.in</p>
                    <p className="text-sm text-red-600">
                      Response within 1 hour
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Social Media & Newsletter */}
        <div className="mt-16">
          <div className="bg-white rounded-2xl shadow-xl p-8">
            <div className="text-center mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                Stay Connected
              </h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Follow us on social media for updates, exclusive offers, and
                customer spotlights
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
              <button className="flex items-center justify-center space-x-2 bg-blue-600 text-white px-4 py-3 rounded-lg hover:bg-blue-700 transition-colors">
                <a href="https://www.facebook.com/100067006621097/about/?_rdr" target="_blank"><span className="font-medium">Facebook</span></a>
              </button>
              <button className="flex items-center justify-center space-x-2 bg-blue-600 text-white px-4 py-3 rounded-lg hover:bg-blue-700 transition-colors">
                <a href="https://in.linkedin.com/company/sas-automation-pvt-ltd" target="_blank"><span className="font-medium">Linkedin</span></a>
              </button>
              <button className="flex items-center justify-center space-x-2 bg-pink-600 text-white px-4 py-3 rounded-lg hover:bg-pink-700 transition-colors">
                <a href="https://www.instagram.com/sas.automation" target="_blank"><span className="font-medium">Instagram</span></a>
              </button>
              <button className="flex items-center justify-center space-x-2 bg-red-600 text-white px-4 py-3 rounded-lg hover:bg-red-700 transition-colors">
                <a href="https://www.youtube.com/@sasautomationpvtltd.3698" target="_blank"><span className="font-medium">YouTube</span></a>
              </button>
            </div>

            <div className="bg-gray-50 rounded-xl p-6">
              <h3 className="text-lg font-bold text-gray-900 mb-4 text-center">
                Subscribe to Our Newsletter
              </h3>
              <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent"
                />
                <button className="bg-red-600 text-white px-6 py-2 rounded-lg hover:bg-red-700 transition-colors whitespace-nowrap">
                  Subscribe
                </button>
              </div>
              <p className="text-sm text-gray-500 text-center mt-2">
                Get exclusive deals, new product alerts, and helpful tips
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
