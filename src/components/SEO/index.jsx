import React from "react";
import { Helmet } from "react-helmet";
import { siteUrl } from "../../../blog-config";

const SEO = ({
  title,
  description,
  url,
  socialTitle = title,
  socialDescription = description,
}) => {
  const imageUrl = new URL("/resume-og-light-v2.png", siteUrl).href;

  return (
    <Helmet>
      <title>{title}</title>
      <link rel="canonical" href={url} />
      <meta property="og:type" content="website" />
      <meta property="og:locale" content="ko_KR" />
      <meta property="og:site_name" content="신재현 이력서" />
      <meta property="og:url" content={url} />
      <meta property="og:title" content={socialTitle} />
      <meta property="og:image" content={imageUrl} />
      <meta property="og:image:secure_url" content={imageUrl} />
      <meta property="og:image:type" content="image/png" />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:image:alt" content="신재현 · Backend Developer" />
      {description && <meta name="description" content={description} />}
      {socialDescription && (
        <meta property="og:description" content={socialDescription} />
      )}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={socialTitle} />
      {socialDescription && (
        <meta name="twitter:description" content={socialDescription} />
      )}
      <meta name="twitter:image" content={imageUrl} />
      <meta name="twitter:image:alt" content="신재현 · Backend Developer" />
    </Helmet>
  );
};

export default SEO;
