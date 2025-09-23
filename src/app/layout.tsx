import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import { JsonLdSchema } from "../components/JsonLdSchema";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
});

export const viewport = "width=device-width, initial-scale=1";

export const metadata: Metadata = {
  metadataBase: new URL('https://kampus.fun'),
  title: "Kampus.fun – UF Student Marketplace | Buy, Sell & Connect on Campus",
  description: "Kampus.fun is the trusted UF student marketplace for furniture, textbooks, rides, housing, and events. Verified @ufl.edu access only.",
  keywords: ["University of Florida", "UF", "campus life", "student apps", "GatorEx", "Rydify", "Vybr", "Tribzy", "textbooks", "ride sharing", "student housing", "campus events", "Gainesville", "Gator students", "student platform", "campus marketplace"],
  authors: [{ name: "Kampus.fun Team" }],
  creator: "Kampus.fun",
  publisher: "Kampus.fun",
  robots: "index, follow",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://kampus.fun",
    siteName: "Kampus.fun",
    title: "Kampus.fun – UF Student Marketplace | Buy, Sell & Connect on Campus",
    description: "Kampus.fun is the trusted UF student marketplace for furniture, textbooks, rides, housing, and events. Verified @ufl.edu access only.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Kampus.fun - Student Life Platform",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@kampusfun",
    creator: "@kampusfun",
    title: "Kampus.fun – UF Student Marketplace | Buy, Sell & Connect on Campus",
    description: "Kampus.fun is the trusted UF student marketplace for furniture, textbooks, rides, housing, and events. Verified @ufl.edu access only.",
    images: ["/og-image.jpg"],
  },
  verification: {
    google: "your-google-site-verification-code",
  },
  alternates: {
    canonical: "https://kampus.fun",
  },
  category: "Education",
  classification: "Student Services",
  icons: {
    icon: '/favicon.svg',
    // apple: '/apple-icon.png', // Add when asset exists
  },
  // manifest: '/site.webmanifest', // Add when asset exists
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <JsonLdSchema />
      </head>
      <body
        className={`${poppins.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
