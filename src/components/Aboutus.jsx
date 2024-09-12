import { React, useState } from "react";
function Aboutus() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your form submission logic here
    console.log("Form submitted:", formData);
  };

  return (
    <div>
      <div className="dark:bg-dark_bg py-10 bg-slate-100">
        <div className="w-full dark:bg-slate-800 rounded-lg mx-auto container p-10 md:flex">
          <div className="w-full pr-8">
            <h2 className="md:text-xl text-base md:text-left text-center font-Poppins my-2 text-primary font-semibold">
              Our Newsletter
            </h2>
            <h1 className="md:text-5xl dark:text-white text-xl my-4 leading-tight font-bold mb-4 font-custom">
              Stay updated with our weekly newsletter
            </h1>
            <p className="text-Gray p-1 font-normal leading-snug my-2 md:text-base text-sm font-custom">
              Subscribe to our weekly newsletter for the latest updates on
              cutting-edge technologies, exclusive service offers, and industry
              insights. Stay ahead with expert tips and exciting news in the
              world of software development!
            </p>
          </div>
          <form onSubmit={handleSubmit} className="w-full">
            <h2 className="text-xl  font-Poppins my-2 text-primary font-semibold">
              Signup For Newsletter
            </h2>
            <div className="mb-4">
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full px-3  border rounded-md text-sm py-3 font-custom"
                placeholder="Your Email"
                required
              />
            </div>
            <div className="mb-4">
              <input
                type="password"
                id="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                className="w-full px-3  border rounded-md text-sm py-3 font-custom"
                placeholder="Your Name"
                required
              />
            </div>
            <button
              type="submit"
              className="bg-primary cursor-pointer hover:bg-yellow-400 font-semibold text-white text-[16px] font-Poppins px-6 py-4 rounded-md"
            >
              Get Started
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Aboutus;
