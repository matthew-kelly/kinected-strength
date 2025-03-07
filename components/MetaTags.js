import Head from "next/head";
// import { truncateString } from "@/utils/truncateString";

export default function MetaTags({
  title,
  description,
  slug,
  image,
  structuredData,
}) {
  const pageTitle = `${title !== "Home" ? `${title} | ` : ""}Kinected Strength`;
  // const pageDescription = truncateString(description, 155);
  const pageDescription = description;
  const pageUrl = `${process.env.NEXT_PUBLIC_SITE_PROTOCOL}${
    process.env.NEXT_PUBLIC_SITE_URL
  }${title !== "Home" ? `/${slug}` : ""}`;
  const imageUrl = image.isExternal
    ? image.src
    : `${process.env.NEXT_PUBLIC_SITE_PROTOCOL}${process.env.NEXT_PUBLIC_SITE_URL}${image.src}`;

  return (
    <Head>
      {/* HTML Meta Tags */}
      <title key="title">{pageTitle}</title>
      <meta name="description" content={pageDescription} />

      {/* Facebook Meta Tags */}
      <meta property="og:url" content={pageUrl} />
      <meta property="og:type" content="website" />
      <meta property="og:title" content={pageTitle} />
      <meta property="og:description" content={pageDescription} />
      <meta property="og:image" content={imageUrl} />

      {/* Twitter Meta Tags */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta
        property="twitter:domain"
        content={`${process.env.NEXT_PUBLIC_SITE_URL}`}
      />
      <meta property="twitter:url" content={pageUrl} />
      <meta name="twitter:title" content={pageTitle} />
      <meta name="twitter:description" content={pageDescription} />
      <meta name="twitter:image" content={imageUrl} />

      {structuredData && (
        <script
          key="structured-data"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      )}
    </Head>
  );
}
