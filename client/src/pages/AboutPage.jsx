// import React from 'react'

// export default function PrivacyPolicyPage() {
//   return (
//     <div className="p-8 bg-gray-100 text-gray-900">
//       <h1 className="text-2xl font-bold mb-4 text-center uppercase">Privacy Policy</h1>

//       <h2 className="text-xl font-semibold mb-2">Introduction</h2>
//       <p className="mb-4">
//         Welcome to [Your Company Name]. We value your privacy and are committed
//         to protecting your personal information. This Privacy Policy explains
//         how we collect, use, and safeguard your data when you use our voting
//         system.
//       </p>

//       <h2 className="text-xl font-semibold mb-2">Information We Collect</h2>
//       <ul className="list-disc list-inside mb-4">
//         <li>
//           <strong>Personal Information:</strong> We may collect personal details
//           such as name, email address, and voting preferences.
//         </li>
//         <li>
//           <strong>Usage Data:</strong> We collect information about how you use
//           our platform, including IP addresses, browser types, and interaction
//           data.
//         </li>
//         <li>
//           <strong>Cookies:</strong> We use cookies to enhance your experience on
//           our site. You can manage your cookie preferences through your browser
//           settings.
//         </li>
//       </ul>

//       <h2 className="text-xl font-semibold mb-2">
//         How We Use Your Information
//       </h2>
//       <ul className="list-disc list-inside mb-4">
//         <li>
//           <strong>To Provide Services:</strong> We use your information to
//           operate, maintain, and improve our voting system.
//         </li>
//         <li>
//           <strong>To Communicate:</strong> We may send you updates,
//           notifications, and other communications related to your use of the
//           platform.
//         </li>
//         <li>
//           <strong>For Security:</strong> We use your data to ensure the security
//           and integrity of our services.
//         </li>
//       </ul>

//       <h2 className="text-xl font-semibold mb-2">
//         How We Protect Your Information
//       </h2>
//       <p className="mb-4">
//         We implement a range of security measures to protect your personal data
//         from unauthorized access, alteration, disclosure, or destruction. This
//         includes encryption, secure servers, and regular security audits.
//       </p>

//       <h2 className="text-xl font-semibold mb-2">Sharing Your Information</h2>
//       <p className="mb-4">
//         We do not sell or rent your personal information to third parties. We
//         may share your data with trusted partners who assist us in providing our
//         services, under strict confidentiality agreements.
//       </p>

//       <h2 className="text-xl font-semibold mb-2">Your Rights</h2>
//       <ul className="list-disc list-inside mb-4">
//         <li>
//           <strong>Access and Correction:</strong> You have the right to access
//           and update your personal information.
//         </li>
//         <li>
//           <strong>Deletion:</strong> You may request the deletion of your
//           personal data, subject to legal and contractual obligations.
//         </li>
//       </ul>

//       <h2 className="text-xl font-semibold mb-2">Changes to This Policy</h2>
//       <p className="mb-4">
//         We may update this Privacy Policy from time to time. Any changes will be
//         posted on this page with an updated revision date. We encourage you to
//         review this policy periodically.
//       </p>

//       <h2 className="text-xl font-semibold mb-2">Contact Us</h2>
//       <p>
//         If you have any questions or concerns about this Privacy Policy, please
//         contact us at [Contact Information].
//       </p>
//     </div>
//   );
// }


import React from 'react';

const AboutUs = () => {
  const styles = {
    container: {
      padding: '20px',
      maxWidth: '800px',
      margin: '0 auto',
      fontFamily: 'Arial, sans-serif',
      backgroundColor: '#f9f9f9',
      borderRadius: '8px',
      boxShadow: '0 2px 10px rgba(0, 0, 0, 0.1)',
    },
    title: {
      textAlign: 'center',
      fontSize: '2.5em',
      marginBottom: '20px',
      color: '#333',
    },
    section: {
      marginBottom: '30px',
    },
    sectionTitle: {
      fontSize: '1.8em',
      color: '#2c3e50',
      marginBottom: '10px',
    },
    sectionText: {
      fontSize: '1.1em',
      color: '#555',
      lineHeight: '1.6',
    },
    offerList: {
      listStyleType: 'disc',
      paddingLeft: '20px',
    },
    listItem: {
      fontSize: '1.1em',
      marginBottom: '8px',
      color: '#444',
    }
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.title}>About Us</h1>

      <section style={styles.section}>
        <h2 style={styles.sectionTitle}>Welcome to Matdan</h2>
        <p style={styles.sectionText}>
          Matdan , we believe in the power of democracy and the importance of every individual's voice. Our platform is designed to streamline the voting process, making it accessible, transparent, and secure for all participants.
        </p>
      </section>

      <section style={styles.section}>
        <h2 style={styles.sectionTitle}>Our Mission</h2>
        <p style={styles.sectionText}>
          Our mission is to empower citizens by providing an easy-to-use voting system that ensures fair representation and fosters civic engagement. We strive to create a platform where every vote counts and every voice is heard.
        </p>
      </section>

      <section style={styles.section}>
        <h2 style={styles.sectionTitle}>What We Offer</h2>
        <ul style={styles.offerList}>
          <li style={styles.listItem}>User-Friendly Interface</li>
          <li style={styles.listItem}>Secure Voting</li>
          <li style={styles.listItem}>Transparency</li>
          <li style={styles.listItem}>Comprehensive Candidate Information</li>
        </ul>
      </section>

      <section style={styles.section}>
        <h2 style={styles.sectionTitle}>Why Choose Us?</h2>
        <ul style={styles.offerList}>
          <li style={styles.listItem}>Accessibility</li>
          <li style={styles.listItem}>Integrity</li>
          <li style={styles.listItem}>Community Engagement</li>
        </ul>
      </section>

      <section style={styles.section}>
        <h2 style={styles.sectionTitle}>Join Us</h2>
        <p style={styles.sectionText}>
          In this website, we invite you to join us in shaping the future of democracy. Together, we can create a voting experience that is secure, transparent, and representative of the diverse voices in our community.
        </p>
      </section>

      <section style={styles.section}>
        <h2 style={styles.sectionTitle}>Contact Us</h2>
        <p style={styles.sectionText}>
          For inquiries or feedback, please reach out to us at . Your input is invaluable as we strive to enhance our platform.
        </p>
      </section>
    </div>
  );
};

export default AboutUs;
