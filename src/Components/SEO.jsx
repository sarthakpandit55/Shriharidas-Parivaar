import React from "react";
import { Helmet } from "react-helmet";
import logo from "../assets/logo.jpg"; 

function SEO({ title, description, keywords, image, url }) {
  const defaultTitle = "Shri Haridas Parivaar";
  const defaultDescription = "Shriharidas Parivaar is dedicated and devoted to Shri Banke Bihari, Vrindavan, spreading devotion, positivity, and togetherness.";
  const defaultImage = logo;
  const defaultUrl = "https://yourwebsite.com/"; //website URL

  return (
    <Helmet>
      {/* Title */}
      <title>{title ? `${title} | Shri Haridas Parivaar` : defaultTitle}</title>

      {/* Meta Tags */}
      <meta name="description" content={description || defaultDescription} />
      <meta name="keywords" content={keywords || "Shri Haridas, Bhakti, Vrindavan, Parivaar"} />

      {/* Open Graph (for Facebook/WhatsApp) */}
      <meta property="og:title" content={title || defaultTitle} />
      <meta property="og:description" content={description || defaultDescription} />
      <meta property="og:image" content={image || defaultImage} />
      <meta property="og:url" content={url || defaultUrl} />
      <meta property="og:type" content="website" />

      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title || defaultTitle} />
      <meta name="twitter:description" content={description || defaultDescription} />
      <meta name="twitter:image" content={image || defaultImage} />
    </Helmet>
  );
}

export default SEO;
