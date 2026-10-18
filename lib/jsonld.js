const SITE = "https://giridhari-pal-portfolio.vercel.app";

export function jsonLd(p) {
  const skills = p.skillGroups.flatMap((g) => g.items);
  const person = {
    "@type": "Person",
    "@id": `${SITE}/#person`,
    name: p.name,
    givenName: "Giridhari",
    familyName: "Pal",
    url: SITE,
    image: `${SITE}/images/avatar.jpg`,
    email: `mailto:${p.email}`,
    telephone: p.phone,
    jobTitle: "Backend & Systems Engineer",
    description: p.summary,
    address: {
      "@type": "PostalAddress",
      addressLocality: "Gandhinagar",
      addressRegion: "Gujarat",
      addressCountry: "IN",
    },
    worksFor: { "@type": "Organization", name: "Dhirubhai Ambani University" },
    alumniOf: { "@type": "CollegeOrUniversity", name: p.education.school },
    knowsAbout: skills,
    knowsLanguage: p.languages,
    sameAs: [p.linkedin, p.github, SITE],
    hasCredential: p.certifications.map((c) => ({
      "@type": "EducationalOccupationalCredential",
      name: c.name,
      recognizedBy: { "@type": "Organization", name: c.issuer },
      url: c.href,
    })),
  };
  return {
    "@context": "https://schema.org",
    "@graph": [
      person,
      {
        "@type": "ProfilePage",
        "@id": `${SITE}/#profile`,
        url: SITE,
        name: `${p.name} — Backend Engineer Portfolio`,
        mainEntity: { "@id": `${SITE}/#person` },
        inLanguage: "en",
      },
      {
        "@type": "FAQPage",
        mainEntity: p.faq.map((f) => ({
          "@type": "Question",
          name: f.q,
          acceptedAnswer: { "@type": "Answer", text: f.a },
        })),
      },
    ],
  };
}
