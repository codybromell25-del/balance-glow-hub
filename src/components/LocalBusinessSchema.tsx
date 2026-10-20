import { Helmet } from "react-helmet-async";

// Only real, verified studio facts belong here — no invented phone numbers, hours or ratings.
interface StudioSchema {
  key: string; // matches StudioPage name (lowercase contains)
  slug: string;
  name: string;
  street: string;
  locality: string;
  region: string;
  postalCode?: string;
  classes: string[];
}

export const STUDIO_SCHEMAS: StudioSchema[] = [
  { key: "limerick", slug: "limerick", name: "balance studios Limerick", street: "The Coach House, Henry Street", locality: "Limerick", region: "Co. Limerick", classes: ["Reformer Pilates", "Mat Pilates", "Barre", "Yoga"] },
  { key: "clane", slug: "clane", name: "balance studios Clane", street: "Unit 4a, Yew Tree Square, Prosperous Rd, Abbeyland", locality: "Clane", region: "Co. Kildare", postalCode: "W91 R642", classes: ["Reformer Pilates"] },
  { key: "kildare", slug: "kildare", name: "balance studios Kildare Town", street: "Unit 3 Claregate St", locality: "Kildare", region: "Co. Kildare", postalCode: "R51 E772", classes: ["Reformer Pilates", "Mat Pilates", "Barre", "Yoga"] },
  { key: "blessington", slug: "blessington", name: "balance studios Blessington", street: "1a The Green, Main St", locality: "Blessington", region: "Co. Wicklow", postalCode: "W91 PNV2", classes: ["Reformer Pilates"] },
  { key: "enfield", slug: "enfield", name: "balance studios Enfield", street: "Unit 3, Main Street", locality: "Enfield", region: "Co. Meath", postalCode: "A83 RP84", classes: ["Reformer Pilates"] },
  { key: "bray", slug: "bray", name: "balance studios Bray", street: "Industrial Development Agency Business Park, Southern Cross Rd, Irishtown", locality: "Bray", region: "Co. Wicklow", postalCode: "A98 T276", classes: ["Reformer Pilates"] },
];

export const findStudioSchema = (studioName: string) =>
  STUDIO_SCHEMAS.find((s) => studioName.toLowerCase().includes(s.key));

interface LocalBusinessSchemaProps {
  studioName?: string;
}

const LocalBusinessSchema = ({ studioName }: LocalBusinessSchemaProps) => {
  const match = studioName ? findStudioSchema(studioName) : undefined;
  const studios = studioName ? (match ? [match] : []) : STUDIO_SCHEMAS;

  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "balance studios",
    url: "https://balancestudios.ie",
    logo: "https://balancestudios.ie/favicon.png",
    email: "info@balancestudios.ie",
    description: "Reformer Pilates studios in Limerick, Kildare, Wicklow and Meath.",
    sameAs: ["https://www.instagram.com/balancereformer/"],
  };

  const localBusinessSchemas = studios.map((s) => ({
    "@context": "https://schema.org",
    "@type": "ExerciseGym",
    name: s.name,
    description: `${s.classes.join(", ")} in ${s.locality}, ${s.region}. Small groups and expert instructors.`,
    url: `https://balancestudios.ie/studio/${s.slug}`,
    image: "https://balancestudios.ie/og-image.jpg",
    email: "info@balancestudios.ie",
    priceRange: "€€",
    parentOrganization: { "@type": "Organization", name: "balance studios", url: "https://balancestudios.ie" },
    address: {
      "@type": "PostalAddress",
      streetAddress: s.street,
      addressLocality: s.locality,
      addressRegion: s.region,
      ...(s.postalCode && { postalCode: s.postalCode }),
      addressCountry: "IE",
    },
    makesOffer: {
      "@type": "Offer",
      name: "Intro offer: 3 Reformer classes",
      price: "50.00",
      priceCurrency: "EUR",
    },
  }));

  return (
    <Helmet>
      <script type="application/ld+json">{JSON.stringify(organizationSchema)}</script>
      {localBusinessSchemas.map((schema, i) => (
        <script key={i} type="application/ld+json">
          {JSON.stringify(schema)}
        </script>
      ))}
    </Helmet>
  );
};

export default LocalBusinessSchema;
