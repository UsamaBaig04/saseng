import React, { useState,useEffect } from "react";
import { X, Mail, Phone, MapPin, User, MessageSquare } from "lucide-react";
import { lockScroll, unlockScroll } from './scrollLock';

export const Modal = ({ message, onClose }) => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    address: "",
    message: message || "",
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  function removeHtmlTags(html) {
    const tempDiv = document.createElement("div");
    tempDiv.innerHTML = html;
    return tempDiv.textContent || tempDiv.innerText || "";
  }

  const validate = () => {
    const errors = {};
    if (!formData.firstName) errors.firstName = "First name is required";
    if (!formData.lastName) errors.lastName = "Last name is required";
    if (!formData.email) errors.email = "Email is required";
    if (!/\S+@\S+\.\S+/.test(formData.email))
      errors.email = "Please enter a valid email address";
    if (!formData.phone) errors.phone = "Phone number is required";
    if (!/^\d{10}$/.test(formData.phone))
      errors.phone = "Phone number must be exactly 10 digits";
    if (!formData.message) errors.message = "Message is required";
    return errors;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
    
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: "" }));
    }
  };

  const handleSubmit = async (e) => {
  e.preventDefault();

  const validationErrors = validate();
  if (Object.keys(validationErrors).length > 0) {
    setErrors(validationErrors);
    return;
  }

  setIsSubmitting(true);

  try {
    // const response = await fetch("https://formspree.io/f/xyyroond", {
    const response = await fetch("https://formspree.io/f/mpqolpwp", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });

    if (response.ok) {
      console.log("Form submitted successfully", formData);
      // console.alert("Form Submitted successfully")
      setIsSuccess(true); // ✅ keep success UI from first function

      // ✅ close modal after 2 sec (like your first function)
      setTimeout(() => {
        onClose();
      }, 2000);
    } else {
      console.error("Form submission error");
      setErrors({ submit: "Failed to send message. Please try again." });
    }
  } catch (error) {
    console.error("Form submission error", error);
    setErrors({ submit: "Something went wrong. Please try again." });
  } finally {
    setIsSubmitting(false);
  }
};

  useEffect(() => {
  lockScroll();
  return () => unlockScroll();
}, []);

  if (isSuccess) {
    return (
      <div className="">
        <div className="bg-white rounded-xl sm:rounded-2xl p-6 sm:p-8 max-w-sm sm:max-w-md w-full text-center shadow-2xl animate-in zoom-in-95 duration-300">
          <div className="w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-r from-green-100 to-emerald-100 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
            <svg className="w-8 h-8 sm:w-10 sm:h-10 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
          </div>
          <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-2">Message Sent!</h3>
          <p className="text-gray-600 text-sm sm:text-base">Thank you for contacting us. We'll get back to you soon.</p>
          <div className="mt-4 w-full bg-gray-200 rounded-full h-1">
            <div className="bg-gradient-to-r from-red-500 to-rose-500 h-1 rounded-full animate-pulse" style={{width: '100%'}}></div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="fixed inset-0 bg-black bg-opacity-25 backdrop-blur-sm flex items-center justify-center p-2 sm:p-4 z-50">
      <div className="bg-white rounded-xl sm:rounded-2xl shadow-2xl w-full max-w-sm sm:max-w-md md:max-w-xl lg:max-w-2xl max-h-[95vh] sm:max-h-[90vh] overflow-hidden animate-in slide-in-from-bottom-4 duration-300">
        {/* Header */}
        <div className="bg-gradient-to-r from-red-600 via-red-500 to-rose-500 px-4 sm:px-6 py-3 sm:py-4 flex justify-between items-center relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-red-600/10 to-transparent"></div>
          <div className="flex items-center space-x-2 sm:space-x-3 relative z-10">
            <div className="w-8 h-8 sm:w-10 sm:h-10 bg-white bg-opacity-20 backdrop-blur-sm rounded-lg flex items-center justify-center shadow-lg">
              <Mail className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
            </div>
            <div>
              <h2 className="text-lg sm:text-xl font-bold text-white tracking-wide">Contact Us</h2>
              <p className="text-red-100 text-xs sm:text-sm font-medium">We'd love to hear from you</p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="text-white hover:bg-white hover:bg-opacity-20 rounded-lg p-1.5 sm:p-2 transition-all duration-200 relative z-10 backdrop-blur-sm"
          >
            <X className="w-5 h-5 sm:w-6 sm:h-6" />
          </button>
        </div>

        {/* Form */}
        <div className="p-3 sm:p-4 lg:p-6 overflow-y-auto max-h-[calc(95vh-60px)] sm:max-h-[calc(90vh-80px)] bg-gradient-to-br from-gray-50 to-red-50">
          <div className="space-y-3 sm:space-y-4">
            {/* Name Fields */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
              <div>
                <label className="block text-xs sm:text-sm font-semibold text-gray-700 mb-1.5 sm:mb-2">
                  <User className="w-3 h-3 sm:w-4 sm:h-4 inline mr-1 text-red-500" />
                  First Name
                </label>
                <input
                  type="text"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleChange}
                  placeholder="Enter your first name"
                  className={`w-full px-3 sm:px-4 py-2.5 sm:py-3 border-2 rounded-xl focus:ring-2 focus:ring-red-500 focus:border-red-500 outline-none transition-all duration-200 text-sm sm:text-base backdrop-blur-sm ${
                    errors.firstName ? 'border-red-400 bg-red-50 shadow-red-100' : 'border-gray-200 hover:border-red-300 bg-white/80 shadow-sm hover:shadow-md'
                  }`}
                />
                {errors.firstName && (
                  <p className="mt-1 text-xs sm:text-sm text-red-600 font-medium">{errors.firstName}</p>
                )}
              </div>

              <div>
                <label className="block text-xs sm:text-sm font-semibold text-gray-700 mb-1.5 sm:mb-2">
                  <User className="w-3 h-3 sm:w-4 sm:h-4 inline mr-1 text-red-500" />
                  Last Name
                </label>
                <input
                  type="text"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleChange}
                  placeholder="Enter your last name"
                  className={`w-full px-3 sm:px-4 py-2.5 sm:py-3 border-2 rounded-xl focus:ring-2 focus:ring-red-500 focus:border-red-500 outline-none transition-all duration-200 text-sm sm:text-base backdrop-blur-sm ${
                    errors.lastName ? 'border-red-400 bg-red-50 shadow-red-100' : 'border-gray-200 hover:border-red-300 bg-white/80 shadow-sm hover:shadow-md'
                  }`}
                />
                {errors.lastName && (
                  <p className="mt-1 text-xs sm:text-sm text-red-600 font-medium">{errors.lastName}</p>
                )}
              </div>
            </div>

            {/* Email */}
            <div>
              <label className="block text-xs sm:text-sm font-semibold text-gray-700 mb-1.5 sm:mb-2">
                <Mail className="w-3 h-3 sm:w-4 sm:h-4 inline mr-1 text-red-500" />
                Email Address
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Enter your email address"
                className={`w-full px-3 sm:px-4 py-2.5 sm:py-3 border-2 rounded-xl focus:ring-2 focus:ring-red-500 focus:border-red-500 outline-none transition-all duration-200 text-sm sm:text-base backdrop-blur-sm ${
                  errors.email ? 'border-red-400 bg-red-50 shadow-red-100' : 'border-gray-200 hover:border-red-300 bg-white/80 shadow-sm hover:shadow-md'
                }`}
              />
              {errors.email && (
                <p className="mt-1 text-xs sm:text-sm text-red-600 font-medium">{errors.email}</p>
              )}
            </div>

            {/* Phone */}
            <div>
              <label className="block text-xs sm:text-sm font-semibold text-gray-700 mb-1.5 sm:mb-2">
                <Phone className="w-3 h-3 sm:w-4 sm:h-4 inline mr-1 text-red-500" />
                Phone Number
              </label>
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="Enter your phone number"
                className={`w-full px-3 sm:px-4 py-2.5 sm:py-3 border-2 rounded-xl focus:ring-2 focus:ring-red-500 focus:border-red-500 outline-none transition-all duration-200 text-sm sm:text-base backdrop-blur-sm ${
                  errors.phone ? 'border-red-400 bg-red-50 shadow-red-100' : 'border-gray-200 hover:border-red-300 bg-white/80 shadow-sm hover:shadow-md'
                }`}
              />
              {errors.phone && (
                <p className="mt-1 text-xs sm:text-sm text-red-600 font-medium">{errors.phone}</p>
              )}
            </div>

            {/* Address */}
            <div>
              <label className="block text-xs sm:text-sm font-semibold text-gray-700 mb-1.5 sm:mb-2">
                <MapPin className="w-3 h-3 sm:w-4 sm:h-4 inline mr-1 text-red-500" />
                Address (Optional)
              </label>
              <input
                type="text"
                name="address"
                value={formData.address}
                onChange={handleChange}
                placeholder="Enter your address"
                className="w-full px-3 sm:px-4 py-2.5 sm:py-3 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-red-500 focus:border-red-500 outline-none hover:border-red-300 transition-all duration-200 text-sm sm:text-base bg-white/80 backdrop-blur-sm shadow-sm hover:shadow-md"
              />
            </div>

            {/* Message */}
            <div>
              <label className="block text-xs sm:text-sm font-semibold text-gray-700 mb-1.5 sm:mb-2">
                <MessageSquare className="w-3 h-3 sm:w-4 sm:h-4 inline mr-1 text-red-500" />
                Message
              </label>
              <textarea
                name="message"
                value={removeHtmlTags(formData.message)}
                onChange={handleChange}
                placeholder="Tell us how we can help you..."
                rows={3}
                className={`w-full px-3 sm:px-4 py-2.5 sm:py-3 border-2 rounded-xl focus:ring-2 focus:ring-red-500 focus:border-red-500 outline-none resize-none transition-all duration-200 text-sm sm:text-base backdrop-blur-sm ${
                  errors.message ? 'border-red-400 bg-red-50 shadow-red-100' : 'border-gray-200 hover:border-red-300 bg-white/80 shadow-sm hover:shadow-md'
                }`}
              />
              {errors.message && (
                <p className="mt-1 text-xs sm:text-sm text-red-600 font-medium">{errors.message}</p>
              )}
            </div>

            {/* Submit Error */}
            {errors.submit && (
              <div className="bg-red-50 border-2 border-red-200 rounded-xl p-3 backdrop-blur-sm">
                <p className="text-xs sm:text-sm text-red-600 font-medium">{errors.submit}</p>
              </div>
            )}

            {/* Submit Button */}
            <div className="flex flex-col sm:flex-row justify-end gap-2 sm:gap-3 pt-2 sm:pt-4">
              <button
                type="button"
                onClick={onClose}
                className="w-full sm:w-auto px-4 sm:px-6 py-2.5 sm:py-3 text-gray-700 bg-gray-100 hover:bg-gray-200 rounded-xl font-semibold transition-all duration-200 text-sm sm:text-base backdrop-blur-sm shadow-sm hover:shadow-md"
              >
                Cancel
              </button>
              <button
                type="submit"
                disabled={isSubmitting}
                onClick={handleSubmit}
                className="w-full sm:w-auto px-6 sm:px-8 py-2.5 sm:py-3 bg-gradient-to-r from-red-600 via-red-500 to-rose-500 text-white rounded-xl font-bold hover:from-red-700 hover:via-red-600 hover:to-rose-600 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-200 transform hover:scale-105 active:scale-95 flex items-center justify-center space-x-2 text-sm sm:text-base shadow-lg hover:shadow-xl backdrop-blur-sm"
              >
                {isSubmitting ? (
                  <>
                    <svg className="animate-spin w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                    </svg>
                    <span>Sending...</span>
                  </>
                ) : (
                  <>
                    <Mail className="w-4 h-4" />
                    <span>Send Message</span>
                  </>
                )}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}