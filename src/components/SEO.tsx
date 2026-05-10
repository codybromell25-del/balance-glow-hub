import { Helmet } from 'react-helmet-async';

interface SEOProps {
  title?: string;
  description?: string;
  canonical?: string;
  type?: string;
  image?: string;
  noindex?: boolean;
}

const SEO = ({
  title = "balance studios | for those who expect more",
  description = "Reformer Pilates across 6 locations in Limerick, Kildare, Wicklow and Meath. Expert instructors, small groups, and a welcoming community. Every body is beautiful.",
  canonical,
  type = "website",
  image = "https://balancestudios.ie/og-image.jpg",
  noindex = false,
}: SEOProps) => {
  const siteUrl = "https://balancestudios.ie";
  const fullCanonical = canonical ? `${siteUrl}${canonical}` : undefined;

  return (
    <Helmet>
      {/* Basic Meta Tags */}
      <title>{title}</title>
      <meta name="description" content={description} />
      {noindex && <meta name="robots" content="noindex,nofollow" />}
      
      {/* Canonical URL */}
      {fullCanonical && <link rel="canonical" href={fullCanonical} />}
      
      {/* Open Graph */}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content={type} />
      <meta property="og:image" content={image} />
      <meta property="og:site_name" content="balance studios" />
      {fullCanonical && <meta property="og:url" content={fullCanonical} />}
      
      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />
      
      {/* Additional SEO Tags */}
      <meta name="author" content="balance studios" />
      <meta name="geo.region" content="IE" />
      <meta name="geo.placename" content="Kildare, Ireland" />
    </Helmet>
  );
};

export default SEO;
