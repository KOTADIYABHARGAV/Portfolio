import React, { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import { motion } from 'framer-motion';
import 'react-toastify/dist/ReactToastify.css';

function Contact() {
  const [form, setForm] = useState({
    user_email: '',
    user_name: '',
    subject: '',
    message: ''
  });

  const [errors, setErrors] = useState({});
  const [isSent, setIsSent] = useState(false);

  const validateField = (name, value) => {
    let error = "";

    if (name === "user_name" && !value.trim()) {
      error = "Name is required.";
    }

    if (name === "user_email") {
      if (!value.trim()) {
        error = "Email is required.";
      } else if (!/^\S+@\S+\.\S+$/.test(value)) {
        error = "Email is invalid.";
      }
    }

    if (name === "subject" && !value.trim()) {
      error = "Subject is required.";
    }

    if (name === "message") {
      if (!value.trim()) {
        error = "Message is required.";
      } else if (value.length < 10) {
        error = "Message must be at least 10 characters.";
      }
    }

    setErrors((prev) => ({ ...prev, [name]: error }));
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
    validateField(name, value);
  };

  const handleBlur = (e) => {
    const { name, value } = e.target;
    validateField(name, value);
  };

  const validateForm = () => {
    const newErrors = {};
    Object.keys(form).forEach((field) => {
      validateField(field, form[field]);
      if (form[field].trim() === '' || errors[field]) {
        newErrors[field] = errors[field] || "This field is required.";
      }
    });
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const sendToGoogleSheet = async (e) => {
    e.preventDefault();

    if (!validateForm()) {
      toast.error("Please fix the errors before submitting.");
      return;
    }

    const formData = new FormData();
    Object.keys(form).forEach(key => formData.append(key, form[key]));

    try {
      const response = await fetch("https://script.google.com/macros/s/AKfycbwSRK6OefrbyzvQhVHgOIQpqyT_Xr8gQ437ceF-7e3gTUB0-9WWpNoh3x-otm-UcA91Rg/exec", {
        method: "POST",
        body: formData
      });

      if (response.ok) {
        setIsSent(true);
        setForm({ user_email: '', user_name: '', subject: '', message: '' });
        setErrors({});
        toast.success("Message sent and saved to Google Sheet! ✅", {
          position: "top-right",
          autoClose: 3000,
          theme: "dark"
        });
      } else {
        toast.error("Something went wrong. Please try again.");
      }
    } catch (error) {
      console.error("Fetch Error:", error);
      toast.error("Failed to send message.");
    }
  };

  return (
    <section
      id="contact"
      className="flex flex-col items-center justify-center py-24 px-6 sm:px-8 md:px-12 lg:px-[12vw]"
    >
      <ToastContainer />
      <motion.div className="text-center mb-16"
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <h2 className="text-4xl font-bold text-gray-700 dark:text-gray-300">CONTACT</h2>
        <div className="w-32 h-1 bg-purple-500 mx-auto mt-4"></div>
        <p className="text-gray-700 dark:text-gray-300 mt-4 text-lg font-semibold">Any Query - Contact me!</p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="w-full max-w-md bg- dark:bg-[#0d081f] p-6 rounded-lg shadow-lg border border-gray-700"
      >
        <h3 className="text-2xl sm:text-3xl font-semibold text-gray-700 dark:text-gray-300 text-center">Connect with me</h3>

        {isSent ? (
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="text-green-400 text-center text-lg sm:text-xl mt-6"
          >
            ✅ Thank you! Your message has been sent.
          </motion.div>
        ) : (
          <form onSubmit={sendToGoogleSheet} className="mt-4 flex flex-col space-y-4">
            {/* Email */}
            <div>
              <input
                type="email"
                name="user_email"
                value={form.user_email}
                onChange={handleChange}
                onBlur={handleBlur}
                placeholder="Your Email"
                className="w-full p-3 rounded-md bg-white dark:bg-[#131025] text-gray-700 dark:text-gray-300 border border-gray-600 focus:outline-none focus:border-purple-500 focus:shadow-lg transition-all"
              />
              {errors.user_email && <p className="text-red-400 text-sm">{errors.user_email}</p>}
            </div>

            {/* Name */}
            <div>
              <input
                type="text"
                name="user_name"
                value={form.user_name}
                onChange={handleChange}
                onBlur={handleBlur}
                placeholder="Your Name"
                className="w-full p-3 rounded-md bg-white dark:bg-[#131025] text-gray-700 dark:text-gray-300 border border-gray-600 focus:outline-none focus:border-purple-500 focus:shadow-lg transition-all"
              />
              {errors.user_name && <p className="text-red-400 text-sm">{errors.user_name}</p>}
            </div>

            {/* Subject */}
            <div>
              <input
                type="text"
                name="subject"
                value={form.subject}
                onChange={handleChange}
                onBlur={handleBlur}
                placeholder="Subject"
                className="w-full p-3 rounded-md bg-white dark:bg-[#131025] text-gray-700 dark:text-gray-300 border border-gray-600 focus:outline-none focus:border-purple-500 focus:shadow-lg transition-all"
              />
              {errors.subject && <p className="text-red-400 text-sm">{errors.subject}</p>}
            </div>

            {/* Message */}
            <div>
              <textarea
                name="message"
                value={form.message}
                onChange={handleChange}
                onBlur={handleBlur}
                placeholder="Message"
                rows={4}
                className="w-full p-3 rounded-md bg-white dark:bg-[#131025] text-gray-700 dark:text-gray-300 border border-gray-600 focus:outline-none focus:border-purple-500 focus:shadow-lg transition-all"
              />
              {errors.message && <p className="text-red-400 text-sm">{errors.message}</p>}
            </div>

            {/* Submit */}
            <button
              type="submit"
              className="w-full bg-gradient-to-r from-purple-600 to-pink-500 py-3 text-white font-semibold rounded-md hover:scale-105 transition-all duration-300"
            >
              Send Message
            </button>
          </form>
        )}
      </motion.div>
    </section>
  );
}

export default Contact;
