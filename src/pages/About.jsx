import React from "react";

function About() {
  return (
    <div className="bg-slate-100 dark:bg-dark_bg py-10">
      <div className="container mx-auto px-4 md:px-8">
        {/* Hero Section */}
        <div className="text-center mb-10">
          <h1 className="text-3xl md:text-5xl font-bold dark:text-white mb-4">
            About Us
          </h1>
          <p className="text-gray-600 dark:text-gray-300 text-base md:text-lg">
            At Dectwin World, we are dedicated to providing innovative software
            solutions that drive business success and technological advancement.
          </p>
          <h2 className="text-xl md:text-2xl font-semibold text-primary mt-4">
            "Innovating the Future of Technology"
          </h2>
        </div>

        {/* Our Story */}
        <section className="bg-white dark:bg-slate-800 rounded-lg p-6 shadow-lg mb-10">
          <h2 className="text-2xl font-semibold text-primary mb-4">
            Our Story
          </h2>
          <p className="text-gray-600 dark:text-gray-300 text-base md:text-lg">
            Founded in 2021, Dectwin World started with a vision to
            revolutionize the software industry by offering cutting-edge
            solutions tailored to the unique needs of our clients. Our journey
            has been driven by a passion for technology and a commitment to
            excellence, resulting in a diverse portfolio of successful projects
            and satisfied customers.
          </p>
        </section>

        {/* Mission & Vision */}
        <section className="bg-white dark:bg-slate-800 rounded-lg p-6 shadow-lg mb-10">
          <h2 className="text-2xl font-semibold text-primary mb-4">
            Mission & Vision
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h3 className="text-xl font-semibold text-primary mb-2">
                Our Mission
              </h3>
              <p className="text-gray-600 dark:text-gray-300 text-base md:text-lg">
                Our mission is to deliver high-quality software solutions that
                empower businesses to achieve their goals, drive innovation, and
                stay ahead of the competition.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-primary mb-2">
                Our Vision
              </h3>
              <p className="text-gray-600 dark:text-gray-300 text-base md:text-lg">
                We envision a future where technology is seamlessly integrated
                into every aspect of life, enhancing efficiency, connectivity,
                and overall quality of life.
              </p>
            </div>
          </div>
        </section>

        {/* Our Team */}
        <section className="bg-white dark:bg-slate-800 rounded-lg p-6 shadow-lg mb-10">
          <h2 className="text-2xl font-semibold text-primary mb-4">
            Meet Our Team
          </h2>
          <p className="text-gray-600 dark:text-gray-300 text-base md:text-lg mb-6">
            Our team is comprised of talented and dedicated professionals who
            bring a wealth of experience and expertise to every project. From
            developers to designers, each member plays a crucial role in driving
            our success and delivering exceptional results for our clients.
          </p>
          <div className="grid md:grid-cols-3 gap-6">
            {/* Team Member 1 */}
            <div className="bg-white dark:bg-slate-700 rounded-lg p-4 shadow-md">
              <img
                src="/d.jpg" // Replace with team member image URL
                alt="Team Member"
                className="w-full h-40  rounded-md mb-4"
              />
              <h3 className="text-lg font-semibold text-primary">Devesh</h3>
              <p className="text-gray-600 dark:text-gray-300">Lead Developer</p>
            </div>
            {/* Team Member 2 */}
            <div className="bg-white dark:bg-slate-700 rounded-lg p-4 shadow-md">
              <img
                src="/img1.jpeg" // Replace with team member image URL
                alt="Team Member"
                className="w-full h-40 rounded-md mb-4"
              />
              <h3 className="text-lg font-semibold text-primary">Govind</h3>
              <p className="text-gray-600 dark:text-gray-300">
                Project Manager
              </p>
            </div>
            {/* Team Member 3 */}
            <div className="bg-white dark:bg-slate-700 rounded-lg p-4 shadow-md">
              <img
                src="/main.jpg" // Replace with team member image URL
                alt="Team Member"
                className="w-full h-40 rounded-md mb-4"
              />
              <h3 className="text-lg font-semibold text-primary">
                Arun Namdeev
              </h3>
              <p className="text-gray-600 dark:text-gray-300">UX/UI Designer</p>
            </div>
          </div>
        </section>

        {/* Our Services */}
        <section className="bg-white dark:bg-slate-800 rounded-lg p-6 shadow-lg mb-10">
          <h2 className="text-2xl font-semibold text-primary mb-4">
            Our Services
          </h2>
          <p className="text-gray-600 dark:text-gray-300 text-base md:text-lg mb-6">
            We offer a wide range of software development services tailored to
            meet the needs of businesses across various industries. Our
            expertise includes web development, mobile app development, UI/UX
            design, and more. Partner with us to bring your ideas to life and
            achieve your business objectives.
          </p>
          <ul className="list-disc pl-5 space-y-3">
            <li>Custom Software Development</li>
            <li>Web Development</li>
            <li>Mobile App Development</li>
            <li>UI/UX Design</li>
            <li>Consulting and Strategy</li>
            <li>Maintenance and Support</li>
          </ul>
        </section>

        {/* Contact Us CTA */}
        <section className="text-center">
          <h2 className="text-xl md:text-2xl font-semibold text-primary mb-4">
            Get in Touch with Us
          </h2>
          <p className="text-gray-600 dark:text-gray-300 text-base md:text-lg mb-6">
            Have any questions or interested in our services? Feel free to reach
            out to us. We're here to help you!
          </p>
          <a href="/contact">
            <button className="bg-primary hover:bg-yellow-400 text-white font-semibold text-[16px] font-Poppins px-6 py-3 rounded-md transition-all duration-300">
              Contact Us
            </button>
          </a>
        </section>
      </div>
    </div>
  );
}

export default About;
