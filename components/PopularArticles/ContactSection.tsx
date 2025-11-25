import React, { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Phone } from "lucide-react";

interface ContactFormData {
  companyName: string;
  name: string;
  title: string;
  email: string;
  phone: string;
  message: string;
}

const ContactSection: React.FC = () => {
  console.log("Rendering ContactSection");
  const [formData, setFormData] = useState<ContactFormData>({
    companyName: "",
    name: "",
    title: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
  };

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handlePaste = (e) => {
    if (e.clipboardData) {
      const paste = e.clipboardData.getData("text");
      const { selectionStart, selectionEnd } = e.target;
      const current = formData.message || "";
      
      const newValue =
        current.slice(0, selectionStart) + paste + current.slice(selectionEnd);
      if (newValue.length > 256) {
        
        e.preventDefault();
        const trimmed = newValue.slice(0, 256);
        setFormData((prev) => ({ ...prev, message: trimmed }));
      }
    }
  };

  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.5 },
  };

  return (
    <div className="py-24 bg-[#f8f7fa] dark:bg-slate-900">
      <motion.div
        className="max-w-6xl mx-auto px-4 md:px-6 mt-10 flex flex-col items-center gap-16"
        initial="initial"
        animate="animate"
        variants={fadeInUp}
      >
        {/* Header Section */}
        <div className="text-center space-y-4">
          <div className="inline-block px-2.5 py-0.5 bg-[#7367f0]/20 rounded">
            <span className="text-[#7367f0] text-sm font-medium font-['Public Sans']">
              Contact Us
            </span>
          </div>

          <div className="space-y-1">
            <h2 className="text-2xl md:text-3xl text-[#2f2b3d]/90 dark:text-white">
              <span className="relative inline-block font-extrabold text-[#2f2b3d]/90 dark:text-white overflow-visible">
                Request
                <span className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-r from-[#7367f0] to-[#FF66B5] opacity-30 rounded-md pointer-events-none" style={{ transform: 'skewX(-12deg)' }}></span>
              </span>
              <span className="font-medium text-[#2f2b3d]/90 dark:text-white"> for Demo</span>
            </h2>
            <p className="text-[#2f2b3d]/70 dark:text-slate-400 text-sm md:text-base">
              Any questions? Please write us a message
            </p>
          </div>
        </div>

        {/* Contact Section */}
        <div className="w-[100%] sm:w-[90%] grid grid-cols-1 lg:grid-cols-2 gap-6">
          
          <motion.div
            className="w-full bg-[#f8f7fa] dark:bg-slate-900 rounded-tl-[60px] rounded-tr-md rounded-b-md border border-[#2f2b3d]/10 p-2.5"
            variants={fadeInUp}
          >
            <div className="mx-2 sm:mx-0 relative aspect-video bg-gray-100 rounded-tl-[60px] rounded-tr-md rounded-b-md border border-[#2f2b3d]/10">
              {/* Dotted Lines Decoration */}
              <div className="absolute -top-6  -left-[20px] sm:-left-6   w-[calc(20%+24px)] h-[calc(20%+24px)] rounded-tl-[72px] border-t-2 border-l-2 border-dashed border-[#7367f0]/60 pointer-events-none" />
              <div className="absolute -top-9 -left-[28px] sm:-left-9  w-[calc(20%+48px)] h-[calc(20%+48px)] rounded-tl-[84px] border-t-2 border-l-2 border-dashed border-[#7367f0]/40 pointer-events-none" />
              <div className="absolute -top-12 -left-[34px] sm:-left-12  w-[calc(20%+72px)] h-[calc(20%+72px)] rounded-tl-[96px] border-t-2 border-l-2 border-dashed border-[#7367f0]/20 pointer-events-none" />

              {/* Map or image placeholder */}
              <img
                src="https://lumanisystems.com/images/contact.jpg"
                alt="Preview"
                className="w-full h-[360px] sm:h-[540px] sm: object-cover 
                   rounded-tl-[40px] sm:rounded-tl-[60px] 
                   relative z-10 flex items-center justify-center"
              />
            </div>

            
          </motion.div>

          {/* Contact Form */}
          <motion.div
            className="w-full bg-white dark:bg-slate-800 rounded-md shadow-[0px_3px_12px_0px_rgba(47,43,61,0.14)] p-6"
            variants={fadeInUp}
          >
            <div className="space-y-1.5 mb-6">
              <h3 className="text-[#2f2b3d]/90 dark:text-white text-2xl font-medium">
                Send a message
              </h3>

            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              {/* Company Name + Contact Name */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1">
                  <label className="text-xs text-[#2f2b3d]/90 dark:text-slate-200">
                    Company Name
                  </label>
                  <input
                    type="text"
                    name="companyName"
                    value={formData.companyName}
                    onChange={handleInputChange}
                    placeholder="Codon Systems Inc"
                    className="w-full px-3.5 py-2 rounded-md border border-[#2f2b3d]/20 text-sm focus:outline-none focus:border-[#7367f0]"
                  />
                </div>

                <div className="space-y-1">
                  <label className="text-xs text-[#2f2b3d]/90 dark:text-slate-200">
                    Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    placeholder="John Doe"
                    className="w-full px-3.5 py-2 rounded-md border border-[#2f2b3d]/20 text-sm focus:outline-none focus:border-[#7367f0]"
                  />
                </div>
              </div>

              {/* Title */}
              <div className="space-y-1">
                <label className="text-xs text-[#2f2b3d]/90 dark:text-slate-200">
                  Title
                </label>
                <input
                  type="text"
                  name="title"
                  value={formData.title}
                  onChange={handleInputChange}
                  placeholder="Manager / Owner / Director..."
                  className="w-full px-3.5 py-2 rounded-md border border-[#2f2b3d]/20 text-sm focus:outline-none focus:border-[#7367f0]"
                />
              </div>

              {/* Contact Email + Phone */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1">
                  <label className="text-xs text-[#2f2b3d]/90 dark:text-slate-200">
                  Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="johndoe@gmail.com"
                    className="w-full px-3.5 py-2 rounded-md border border-[#2f2b3d]/20 text-sm focus:outline-none focus:border-[#7367f0]"
                  />
                </div>

                <div className="space-y-1">
                  <label className="text-xs text-[#2f2b3d]/90 dark:text-slate-200">
                    Phone
                  </label>
                  <input
                    type="text"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    placeholder="+1 234 567 890"
                    className="w-full px-3.5 py-2 rounded-md border border-[#2f2b3d]/20 text-sm focus:outline-none focus:border-[#7367f0]"
                  />
                </div>
              </div>

              {/* Message */}
              <div className="space-y-1">
                <label className="text-xs text-[#2f2b3d]/90 dark:text-slate-200">
                  Message
                </label>
                <textarea
      name="message"
      value={formData.message}
      onChange={(e) => {
        const value = e.target.value;
        if (value.length <= 256) {
          handleInputChange(e);
        }
      }}
      onPaste={handlePaste}
      placeholder="Write a message.."
      rows={4}
      className={`w-full px-3.5 py-2 rounded-md border text-sm placeholder:text-[#2f2b3d]/40 
        focus:outline-none resize-none ${
          formData.message.length >= 256
            ? "border-red-500"
            : "border-[#2f2b3d]/20 focus:border-[#7367f0]"
        }`}
    />

        
        {formData.message.length >= 256 && (
          <p className="text-red-500 text-xs">Maximum 256 characters are allowed.</p>
        )}

        
        <p className="text-xs text-gray-400">{formData.message.length}/256</p>
              </div>

              {/* Submit */}
              <button
                type="submit"
                className="w-full sm:w-auto px-5 py-2 bg-[#7367f0] text-white rounded-md shadow-[0px_2px_6px_0px_rgba(115,103,240,0.30)] hover:bg-[#7367f0]/90 transition-colors"
              >
                Send Inquiry
              </button>
            </form>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
};

export default ContactSection;
