import React from "react";

const PrivacyPolicy = () => {
  return (
    <div className="max-w-4xl mx-auto p-6">
      <h1 className="text-4xl font-bold text-primary dark:text-white mb-6">
        Privacy Policy
      </h1>
      <p className="text-gray-700 dark:text-gray-300 mb-4">
        At Dectwin World, we are committed to protecting your personal
        information and ensuring transparency about how we collect, use, and
        share data. This Privacy Policy outlines our practices and your rights
        regarding the information we gather when you use our services.
      </p>

      {/* Information Collection Section */}
      <h2 className="text-2xl font-semibold text-primary dark:text-white mb-4">
        Information We Collect
      </h2>
      <p className="text-gray-700 dark:text-gray-300 mb-4">
        We may collect personal information such as your name, email address,
        phone number, and other relevant details when you interact with our
        services. This information may be gathered when you sign up for
        newsletters, request a demo, or contact us for support.
      </p>

      {/* Use of Information Section */}
      <h2 className="text-2xl font-semibold text-primary dark:text-white mb-4">
        How We Use Your Information
      </h2>
      <p className="text-gray-700 dark:text-gray-300 mb-4">
        Your personal information is used to enhance your experience with our
        services. We may use your data to:
      </p>
      <ul className="list-disc pl-5 mb-4 text-gray-700 dark:text-gray-300">
        <li>Provide personalized service and support.</li>
        <li>Send updates, newsletters, and relevant notifications.</li>
        <li>Analyze website usage and improve our services.</li>
        <li>Comply with legal obligations and protect our users.</li>
      </ul>

      {/* Data Protection Section */}
      <h2 className="text-2xl font-semibold text-primary dark:text-white mb-4">
        Data Protection & Security
      </h2>
      <p className="text-gray-700 dark:text-gray-300 mb-4">
        We implement strict security measures to safeguard your personal
        information. Our systems are designed to protect your data against
        unauthorized access, alteration, disclosure, or destruction.
      </p>

      {/* Sharing Information Section */}
      <h2 className="text-2xl font-semibold text-primary dark:text-white mb-4">
        Sharing Your Information
      </h2>
      <p className="text-gray-700 dark:text-gray-300 mb-4">
        We do not sell or rent your personal information to third parties. We
        may share your data with trusted partners and service providers solely
        for the purpose of operating and improving our services.
      </p>

      {/* Cookies Section */}
      <h2 className="text-2xl font-semibold text-primary dark:text-white mb-4">
        Cookies & Tracking Technologies
      </h2>
      <p className="text-gray-700 dark:text-gray-300 mb-4">
        Our website uses cookies and other tracking technologies to collect
        data. This helps us understand user behavior, improve user experience,
        and deliver targeted content and advertisements.
      </p>

      {/* User Rights Section */}
      <h2 className="text-2xl font-semibold text-primary dark:text-white mb-4">
        Your Rights
      </h2>
      <p className="text-gray-700 dark:text-gray-300 mb-4">
        You have the right to access, update, or delete your personal
        information. If you wish to exercise any of your rights or have any
        questions regarding our privacy practices, please contact us.
      </p>

      {/* Changes to Privacy Policy Section */}
      <h2 className="text-2xl font-semibold text-primary dark:text-white mb-4">
        Changes to This Privacy Policy
      </h2>
      <p className="text-gray-700 dark:text-gray-300 mb-4">
        We may update this Privacy Policy from time to time. Any changes will be
        communicated on our website. We encourage you to review this policy
        periodically to stay informed about our data practices.
      </p>

      {/* Contact Information Section */}
      <h2 className="text-2xl font-semibold text-primary dark:text-white mb-4">
        Contact Us
      </h2>
      <p className="text-gray-700 dark:text-gray-300 mb-4">
        If you have any questions or concerns about this Privacy Policy, please
        contact us at{" "}
        <a href="mailto:support@dectwinworld.com" className="text-primary">
          support@dectwinworld.com
        </a>
        .
      </p>
    </div>
  );
};

export default PrivacyPolicy;
