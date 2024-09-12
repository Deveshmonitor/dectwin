import React, { useState } from "react";

function ContactUs() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    // Add your form submission logic here
  };

  return (
    <div className="bg-slate-100 dark:bg-dark_bg py-10">
      <div className="container mx-auto px-4 md:px-8">
        <div className="text-center mb-10">
          <h1 className="text-3xl md:text-5xl font-bold dark:text-white mb-4">
            Contact Us
          </h1>
          <p className="text-gray-600 dark:text-gray-300 text-base md:text-lg">
            We would love to hear from you! Fill out the form below or reach out
            to us through our contact details.
          </p>
        </div>
        <div className="md:flex md:space-x-8">
          {/* Contact Image */}
          <div className="w-full md:w-1/2 mt-8 md:mt-0 rounded-lg shadow-lg">
            <img
              src="/imgs/contact.jpg" // Replace with your image URL
              alt="Contact Us"
              className="w-full h-auto rounded-lg "
            />
          </div>
          {/* Contact Form */}
          <div className="w-full md:w-1/2 bg-white dark:bg-slate-800 rounded-lg p-6 shadow-lg">
            <h2 className="text-2xl font-semibold text-primary mb-4">
              Get In Touch
            </h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-sm md:text-base dark:text-gray-300 mb-2">
                  Full Name
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border rounded-md text-sm font-custom"
                  placeholder="Your Full Name"
                  required
                />
              </div>
              <div>
                <label className="block text-sm md:text-base dark:text-gray-300 mb-2">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border rounded-md text-sm font-custom"
                  placeholder="Your Email"
                  required
                />
              </div>
              <div>
                <label className="block text-sm md:text-base dark:text-gray-300 mb-2">
                  Message
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border rounded-md text-sm font-custom"
                  placeholder="Your Message"
                  rows="4"
                  required
                ></textarea>
              </div>
              <button
                type="submit"
                className="bg-primary hover:bg-yellow-400 text-white font-semibold text-[16px] font-Poppins px-6 py-3 rounded-md transition-all duration-300"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactUs;
