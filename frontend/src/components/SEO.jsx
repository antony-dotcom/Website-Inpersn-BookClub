import React from 'react';
import { Helmet } from 'react-helmet';

const SEO = ({ 
  title = "InPersn BookClub - Meet Readers Over Coffee | Book Discussions in India",
  description = "Join InPersn BookClub and meet 3 other non-fiction readers in your city. Just 4 readers, 1 book, 1 cafe table. Available in Bangalore, Mumbai, Delhi, Gurgaon, Noida, Pune, Chennai, Kolkata, and Hyderabad. ₹99 per meetup.",
  keywords = "book club, reading club, book discussion, meet readers, coffee meetup, non-fiction books, Bangalore book club, Mumbai book club, Delhi book club, book lovers India, reading community",
  url = "https://inpersn.club",
  image = "https://customer-assets.emergentagent.com/job_5ea04f82-beca-491a-aa96-dd9485c3cd96/artifacts/a7lp2bjw_App%20Icon.png",
  type = "website"
}) => {
  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": "https://inpersn.club/#organization",
        "name": "InPersn BookClub",
        "url": "https://inpersn.club",
        "logo": {
          "@type": "ImageObject",
          "url": "https://customer-assets.emergentagent.com/job_5ea04f82-beca-491a-aa96-dd9485c3cd96/artifacts/a7lp2bjw_App%20Icon.png",
          "width": 512,
          "height": 512
        },
        "sameAs": [
          "https://www.instagram.com/inpersn.bookclub"
        ],
        "contactPoint": {
          "@type": "ContactPoint",
          "email": "support@inpersn.club",
          "contactType": "Customer Support"
        }
      },
      {
        "@type": "WebSite",
        "@id": "https://inpersn.club/#website",
        "url": "https://inpersn.club",
        "name": "InPersn BookClub",
        "publisher": {
          "@id": "https://inpersn.club/#organization"
        },
        "potentialAction": {
          "@type": "SearchAction",
          "target": "https://inpersn.club/?s={search_term_string}",
          "query-input": "required name=search_term_string"
        }
      },
      {
        "@type": "Service",
        "@id": "https://inpersn.club/#service",
        "name": "InPersn BookClub",
        "description": "Book club service connecting readers for in-person discussions over coffee",
        "provider": {
          "@id": "https://inpersn.club/#organization"
        },
        "areaServed": [
          {
            "@type": "City",
            "name": "Bangalore"
          },
          {
            "@type": "City",
            "name": "Mumbai"
          },
          {
            "@type": "City",
            "name": "Delhi"
          },
          {
            "@type": "City",
            "name": "Gurgaon"
          },
          {
            "@type": "City",
            "name": "Noida"
          },
          {
            "@type": "City",
            "name": "Pune"
          },
          {
            "@type": "City",
            "name": "Chennai"
          },
          {
            "@type": "City",
            "name": "Kolkata"
          },
          {
            "@type": "City",
            "name": "Hyderabad"
          }
        ],
        "offers": {
          "@type": "Offer",
          "price": "99",
          "priceCurrency": "INR",
          "description": "Per book club meetup"
        }
      },
      {
        "@type": "MobileApplication",
        "name": "InPersn BookClub",
        "operatingSystem": ["iOS", "Android"],
        "applicationCategory": "SocialNetworkingApplication",
        "offers": {
          "@type": "Offer",
          "price": "0",
          "priceCurrency": "INR"
        },
        "aggregateRating": {
          "@type": "AggregateRating",
          "ratingValue": "5.0",
          "ratingCount": "100"
        }
      }
    ]
  };

  const faqStructuredData = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "How does the matching process work?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "When you express interest in a book, we track how many people in your city are interested. Once 8 people express interest, everyone gets notified and has 24 hours to pay ₹99. The first 4 people to pay secure their spots at the table. Once 4 people have paid, the table is locked and confirmed."
        }
      },
      {
        "@type": "Question",
        "name": "What happens if less than 4 people pay within 24 hours?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "If a table doesn't reach 4 paid members within the 24-hour window, it gets cancelled and everyone who paid receives a full refund. You can then express interest in other books that are forming tables."
        }
      },
      {
        "@type": "Question",
        "name": "How much does InPersn BookClub cost?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Browsing books and expressing interest is FREE. You only pay ₹99 when you want to confirm your spot at a book club table. There are no subscriptions or hidden fees."
        }
      },
      {
        "@type": "Question",
        "name": "Which cities is InPersn BookClub available in?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "InPersn BookClub is currently available in 9 cities across India: Bangalore, Mumbai, Delhi, Gurgaon, Noida, Pune, Chennai, Kolkata, and Hyderabad. More cities coming soon!"
        }
      },
      {
        "@type": "Question",
        "name": "Is it safe to meet strangers through InPersn BookClub?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Safety is our priority. All meetups happen in public café locations, users are verified, and we have a rating system. You can also check member profiles before confirming your spot."
        }
      }
    ]
  };

  return (
    <Helmet>
      {/* Primary Meta Tags */}
      <title>{title}</title>
      <meta name="title" content={title} />
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <link rel="canonical" href={url} />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content={type} />
      <meta property="og:url" content={url} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      <meta property="og:site_name" content="InPersn BookClub" />
      <meta property="og:locale" content="en_IN" />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:url" content={url} />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />

      {/* Additional Meta Tags for AI/LLM */}
      <meta name="author" content="InPersn BookClub" />
      <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
      <meta name="googlebot" content="index, follow" />
      <meta name="bingbot" content="index, follow" />
      
      {/* Geo Tags */}
      <meta name="geo.region" content="IN" />
      <meta name="geo.placename" content="India" />
      <meta name="geo.position" content="20.5937;78.9629" />
      <meta name="ICBM" content="20.5937, 78.9629" />

      {/* Structured Data */}
      <script type="application/ld+json">
        {JSON.stringify(structuredData)}
      </script>
      <script type="application/ld+json">
        {JSON.stringify(faqStructuredData)}
      </script>
    </Helmet>
  );
};

export default SEO;