import React from "react";

const Privacy = () => {
  return (
    <div className="container mx-auto px-5 py-10 text-gray-800">
      <h1 className="text-3xl font-bold mb-6">Privacy Policy</h1>
      <p className="mb-4">
        At <strong>BuyBuddies</strong>, we value your privacy and are committed to
        protecting your personal information. This Privacy Policy explains how
        we collect, use, and protect your data when you use our website.
      </p>

      <h2 className="text-xl font-semibold mt-6 mb-2">1. Information We Collect</h2>
      <p className="mb-4">
        We may collect the following types of information when you interact with
        our site:
      </p>
      <ul className="list-disc ml-6 mb-4">
        <li>Personal details (name, email, phone number)</li>
        <li>Billing and shipping address</li>
        <li>Payment details (processed securely via third-party gateways)</li>
        <li>Browsing activity and preferences</li>
      </ul>

      <h2 className="text-xl font-semibold mt-6 mb-2">2. How We Use Your Information</h2>
      <ul className="list-disc ml-6 mb-4">
        <li>To process and deliver your orders</li>
        <li>To communicate with you regarding your orders and inquiries</li>
        <li>To send promotional offers and updates (if you opt-in)</li>
        <li>To improve our website and services</li>
      </ul>

      <h2 className="text-xl font-semibold mt-6 mb-2">3. Data Protection</h2>
      <p className="mb-4">
        We use industry-standard security measures to protect your personal
        information from unauthorized access, alteration, disclosure, or
        destruction. However, no method of transmission over the internet is
        100% secure.
      </p>

      <h2 className="text-xl font-semibold mt-6 mb-2">4. Sharing Your Information</h2>
      <p className="mb-4">
        We do not sell, trade, or rent your personal information to others. We
        may share your data with trusted third-party service providers (such as
        payment processors and delivery partners) only to fulfill your orders
        and improve our services.
      </p>

      <h2 className="text-xl font-semibold mt-6 mb-2">5. Cookies</h2>
      <p className="mb-4">
        We use cookies to improve your browsing experience, analyze site
        traffic, and personalize content. You can choose to disable cookies in
        your browser settings, but this may affect site functionality.
      </p>

      <h2 className="text-xl font-semibold mt-6 mb-2">6. Your Rights</h2>
      <ul className="list-disc ml-6 mb-4">
        <li>Access, update, or delete your personal data</li>
        <li>Opt-out of receiving promotional communications</li>
        <li>Request details of the information we hold about you</li>
      </ul>

      <h2 className="text-xl font-semibold mt-6 mb-2">7. Changes to This Policy</h2>
      <p className="mb-4">
        We may update our Privacy Policy from time to time. Any changes will be
        posted on this page with the updated effective date.
      </p>

      <h2 className="text-xl font-semibold mt-6 mb-2">8. Contact Us</h2>
      <p className="mb-4">
        If you have any questions or concerns about this Privacy Policy, please
        contact us at:
        <br />
        📧 <a href="mailto:connect@BuyBuddiesyou.com" className="text-blue-500 hover:underline">connect@BuyBuddiesyou.com</a>
        <br />
        📞 +91-212-456-7890
      </p>

      <p className="text-sm text-gray-500">
        Last Updated: {new Date().toLocaleDateString()}
      </p>
    </div>
  );
};

export default Privacy;
