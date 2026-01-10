import { Helmet } from 'react-helmet-async';

interface StudioSchemaProps {
  name: string;
  description: string;
  address: string;
  addressLocality: string;
  postalCode: string;
  telephone?: string;
  url: string;
  image?: string;
  geo?: {
    latitude: number;
    longitude: number;
  };
}

const studioLocations: StudioSchemaProps[] = [
  {
    name: "balance studios Clane",
    description: "Premium Reformer Pilates studio in Clane, Co. Kildare. Expert instructors, state-of-the-art reformers, and small group classes.",
    address: "Unit 4a, Yew Tree Square, Prosperous Rd, Abbeyland, Clane",
    addressLocality: "Clane, Co. Kildare",
    postalCode: "W91 R642",
    url: "https://balancestudios.ie/studios/clane",
    geo: { latitude: 53.2900, longitude: -6.6870 }
  },
  {
    name: "balance studios Kildare Town",
    description: "Premium Reformer Pilates studio in Kildare Town. Expert instructors, state-of-the-art reformers, and small group classes.",
    address: "Unit 5, Dunmurry Business Park, Kildare Town",
    addressLocality: "Kildare Town, Co. Kildare",
    postalCode: "R51 Y520",
    url: "https://balancestudios.ie/studios/kildare",
    geo: { latitude: 53.1568, longitude: -6.9117 }
  },
  {
    name: "balance studios Blessington",
    description: "Premium Reformer Pilates studio in Blessington, Co. Wicklow. Expert instructors, state-of-the-art reformers, and small group classes.",
    address: "Main Street, Blessington",
    addressLocality: "Blessington, Co. Wicklow",
    postalCode: "W91 K2C6",
    url: "https://balancestudios.ie/studios/blessington",
    geo: { latitude: 53.1679, longitude: -6.5334 }
  },
  {
    name: "balance studios Enfield",
    description: "Premium Reformer Pilates studio in Enfield, Co. Meath. Expert instructors, state-of-the-art reformers, and small group classes.",
    address: "Main Street, Enfield",
    addressLocality: "Enfield, Co. Meath",
    postalCode: "A83 E2K9",
    url: "https://balancestudios.ie/studios/enfield",
    geo: { latitude: 53.4156, longitude: -6.8331 }
  },
  {
    name: "balance studios Bray",
    description: "Premium Reformer Pilates studio in Bray, Co. Wicklow. Expert instructors, state-of-the-art reformers, and small group classes.",
    address: "Main Street, Bray",
    addressLocality: "Bray, Co. Wicklow",
    postalCode: "A98 E2V9",
    url: "https://balancestudios.ie/studios/bray",
    geo: { latitude: 53.2009, longitude: -6.1112 }
  }
];

interface LocalBusinessSchemaProps {
  studioName?: string;
}

const LocalBusinessSchema = ({ studioName }: LocalBusinessSchemaProps) => {
  // If a specific studio is provided, only show that one
  const studios = studioName 
    ? studioLocations.filter(s => s.name.toLowerCase().includes(studioName.toLowerCase()))
    : studioLocations;

  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "balance studios",
    "url": "https://balancestudios.ie",
    "logo": "https://balancestudios.ie/favicon.png",
    "description": "Premium Reformer Pilates studios across Kildare and Wicklow. Expert instructors, small groups, and a welcoming community.",
    "sameAs": [
      "https://www.instagram.com/balancestudios.ie/",
      "https://www.facebook.com/balancestudios.ie/"
    ],
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.9",
      "reviewCount": "500",
      "bestRating": "5",
      "worstRating": "1"
    }
  };

  const localBusinessSchemas = studios.map(studio => ({
    "@context": "https://schema.org",
    "@type": ["LocalBusiness", "FitnessCenter", "HealthClub"],
    "name": studio.name,
    "description": studio.description,
    "url": studio.url,
    "telephone": "+353 1 234 5678",
    "email": "hello@balancestudios.ie",
    "priceRange": "€€",
    "currenciesAccepted": "EUR",
    "paymentAccepted": "Cash, Credit Card",
    "image": "https://balancestudios.ie/og-image.jpg",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": studio.address,
      "addressLocality": studio.addressLocality,
      "postalCode": studio.postalCode,
      "addressCountry": "IE"
    },
    ...(studio.geo && {
      "geo": {
        "@type": "GeoCoordinates",
        "latitude": studio.geo.latitude,
        "longitude": studio.geo.longitude
      }
    }),
    "openingHoursSpecification": [
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        "opens": "06:00",
        "closes": "21:00"
      },
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Saturday", "Sunday"],
        "opens": "08:00",
        "closes": "18:00"
      }
    ],
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.9",
      "reviewCount": "100",
      "bestRating": "5",
      "worstRating": "1"
    },
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Pilates Classes",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Intro Offer - 3 Classes",
            "description": "New client special: 3 reformer pilates classes"
          },
          "price": "50.00",
          "priceCurrency": "EUR"
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Single Reformer Class",
            "description": "Drop-in reformer pilates class"
          },
          "price": "24.00",
          "priceCurrency": "EUR"
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Unlimited Monthly Membership",
            "description": "Unlimited reformer pilates classes per month"
          },
          "price": "240.00",
          "priceCurrency": "EUR"
        }
      ]
    }
  }));

  return (
    <Helmet>
      <script type="application/ld+json">
        {JSON.stringify(organizationSchema)}
      </script>
      {localBusinessSchemas.map((schema, index) => (
        <script key={index} type="application/ld+json">
          {JSON.stringify(schema)}
        </script>
      ))}
    </Helmet>
  );
};

export default LocalBusinessSchema;
