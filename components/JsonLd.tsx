export default function JsonLd() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "QTECH SOLUTIONS CO.,LTD",
    url: "https://qtech.com.vn", // Replace with actual domain
    logo: "https://qtech.com.vn/Logo%20Qtech-1.png",
    description:
      "Chuyên gia công phần mềm, thiết kế website và phát triển sản phẩm công nghệ chất lượng cao.",
    sameAs: [
      "https://www.facebook.com/qtechsolutions",
      "https://www.linkedin.com/company/qtech-solutions",
      // Add other social links here
    ],
    contactPoint: {
      "@type": "ContactPoint",
      telephone: "+84-123-456-789", // Replace with actual phone
      contactType: "customer service",
      areaServed: "VN",
      availableLanguage: ["Vietnamese", "English"],
    },
    address: {
      "@type": "PostalAddress",
      streetAddress: "123 Tech Street", // Replace with actual address
      addressLocality: "Ho Chi Minh City",
      addressRegion: "HCM",
      postalCode: "700000",
      addressCountry: "VN",
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}
