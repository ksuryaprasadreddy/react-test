import React, { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Phone } from "lucide-react";

interface ContactFormData {
  fullName: string;
  email: string;
  message: string;
}

const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState<ContactFormData>({
    fullName: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log("Form submitted:", formData);
  };

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.5 },
  };

  return (
    <div className="min-w-screen px-10 py-20 bg-[#f8f7fa]">
      <motion.div
        className="flex flex-col items-center gap-16"
        initial="initial"
        animate="animate"
        variants={fadeInUp}
      >
        {/* Header Section */}
        <div className="text-center space-y-4">
          <div className="inline-block px-2.5 py-0.5 bg-[#7367f0]/20 rounded">
            <span className="text-[#7367f0] text-sm font-medium">
              Contact Us
            </span>
          </div>

          <div className="space-y-1">
            <h2 className="text-2xl md:text-3xl">
              <span className="font-extrabold text-[#2f2b3d]/90">
                lets work
              </span>
              <span className="font-medium text-[#2f2b3d]/90"> together</span>
            </h2>
            <p className="text-[#2f2b3d]/70 text-sm md:text-base">
              Any question or remark? just write us a message
            </p>
          </div>
        </div>

        {/* Contact Section */}
        <div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Contact Info Card */}
          <motion.div
            className="w-full bg-[#f8f7fa] rounded-tl-[60px] rounded-tr-md rounded-b-md border border-[#2f2b3d]/10 p-2.5"
            variants={fadeInUp}
          >
            <div className="aspect-video bg-gray-100 rounded-tl-[60px] rounded-tr-md rounded-b-md border border-[#2f2b3d]/10">
              {/* Map or image placeholder */}
            </div>

            <div className="px-4 pt-4 pb-1.5 flex flex-col sm:flex-row justify-between gap-4">
              <div className="flex items-center gap-3">
                <div className="p-1.5 bg-[#7367f0]/20 rounded-md">
                  <Mail className="w-6 h-6 text-[#7367f0]" />
                </div>
                <div>
                  <p className="text-[#2f2b3d]/70 text-sm">Email</p>
                  <p className="text-[#2f2b3d]/90 text-sm font-medium">
                    example@gmail.com
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="p-1.5 bg-[#28c76f]/20 rounded-md">
                  <Phone className="w-6 h-6 text-[#28c76f]" />
                </div>
                <div>
                  <p className="text-[#2f2b3d]/70 text-sm">Phone</p>
                  <p className="text-[#2f2b3d]/90 text-sm font-medium">
                    +1234 568 963
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            className="w-full bg-white rounded-md shadow-[0px_3px_12px_0px_rgba(47,43,61,0.14)] p-6"
            variants={fadeInUp}
          >
            <div className="space-y-1.5 mb-6">
              <h3 className="text-[#2f2b3d]/90 text-2xl font-medium">
                Send a message
              </h3>
              <p className="text-[#2f2b3d]/70 text-sm">
                If you would like to discuss anything related to payment,
                account, licensing, partnerships, or have pre-sales questions,
                you&apos;re at the right place.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1">
                  <label className="text-[#2f2b3d]/90 text-xs">Full Name</label>
                  <input
                    type="text"
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleInputChange}
                    placeholder="John Doe"
                    className="w-full px-3.5 py-2 rounded-md border border-[#2f2b3d]/20 text-sm placeholder:text-[#2f2b3d]/40 focus:outline-none focus:border-[#7367f0]"
                  />
                </div>

                <div className="space-y-1">
                  <label className="text-[#2f2b3d]/90 text-xs">Email</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="johndoe@gmail.com"
                    className="w-full px-3.5 py-2 rounded-md border border-[#2f2b3d]/20 text-sm placeholder:text-[#2f2b3d]/40 focus:outline-none focus:border-[#7367f0]"
                  />
                </div>
              </div>

              <div className="space-y-1">
                <label className="text-[#2f2b3d]/90 text-xs">Message</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  placeholder="Write a message.."
                  rows={4}
                  className="w-full px-3.5 py-2 rounded-md border border-[#2f2b3d]/20 text-sm placeholder:text-[#2f2b3d]/40 focus:outline-none focus:border-[#7367f0] resize-none"
                />
              </div>

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
