import React, { useState } from "react";

function CareersForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    role: "",
    resume: null,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleFileChange = (e) => {
    setFormData({ ...formData, resume: e.target.files[0] });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    // Add your form submission logic here
  };

  return (
    <div className="bg-slate-100 dark:bg-dark_bg py-10">
      <div className="container mx-auto p-6 md:p-10">
        <div className="bg-white dark:bg-slate-800 rounded-lg shadow-lg p-6 md:p-10">
          <h1 className="text-3xl md:text-5xl font-bold dark:text-white text-center mb-6">
            Join Our Team
          </h1>
          <p className="text-center text-gray-600 dark:text-gray-300 mb-8">
            Apply for different roles and be a part of Dectwin's growth journey.
            Fill out the form and submit your resume.
          </p>

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
                Phone Number
              </label>
              <input
                type="text"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                className="w-full px-4 py-3 border rounded-md text-sm font-custom"
                placeholder="Your Phone Number"
                required
              />
            </div>

            <div>
              <label className="block text-sm md:text-base dark:text-gray-300 mb-2">
                Select Role
              </label>
              <select
                name="role"
                value={formData.role}
                onChange={handleChange}
                className="w-full px-4 py-3 border rounded-md text-sm font-custom"
                required
              >
                <option value="">Choose a role</option>
                <option value="frontend">Frontend Developer</option>
                <option value="backend">Backend Developer</option>
                <option value="fullstack">Full Stack Developer</option>
                <option value="designer">UI/UX Designer</option>
                <option value="qa">Quality Assurance Engineer</option>
                <option value="devops">DevOps Engineer</option>
              </select>
            </div>

            <div>
              <label className="block text-sm md:text-base dark:text-gray-300 mb-2">
                Attach Resume
              </label>
              <input
                type="file"
                name="resume"
                onChange={handleFileChange}
                className="w-full px-4 py-3 border rounded-md text-sm font-custom"
                accept=".pdf,.doc,.docx"
                required
              />
            </div>

            <button
              type="submit"
              className="w-full bg-primary hover:bg-yellow-400 text-white font-semibold text-[16px] font-Poppins px-6 py-3 rounded-md transition-all duration-300"
            >
              Submit Application
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default CareersForm;
