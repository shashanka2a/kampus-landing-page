export function JsonLdSchema() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "Kampus.fun",
    "description": "Kampus.fun is the trusted UF student marketplace for furniture, textbooks, rides, housing, and events. Verified @ufl.edu access only.",
    "url": "https://kampus.fun",
    "potentialAction": {
      "@type": "SearchAction",
      "target": "https://kampus.fun/search?q={search_term_string}",
      "query-input": "required name=search_term_string"
    },
    "publisher": {
      "@type": "Organization",
      "name": "Kampus.fun",
      "url": "https://kampus.fun",
      "logo": {
        "@type": "ImageObject",
        "url": "https://kampus.fun/logo.png"
      }
    },
    "audience": {
      "@type": "EducationalAudience",
      "educationalRole": "student",
      "audience": {
        "@type": "CollegeOrUniversity",
        "name": "University of Florida"
      }
    },
    "applicationCategory": "Student Services",
    "operatingSystem": "Web",
    "offers": {
      "@type": "Offer",
      "price": "0",
      "priceCurrency": "USD",
      "description": "Free student marketplace platform"
    }
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}
