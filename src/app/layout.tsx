import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
});

export const viewport = "width=device-width, initial-scale=1";

export const metadata: Metadata = {
  metadataBase: new URL('https://kampus.fun'),
  title: "Kampus.fun - Campus Life Platform for UF Students",
  description: "All-in-one campus hub for University of Florida students. Shop textbooks, split rides, find housing, and discover events with student-focused apps.",
  keywords: ["University of Florida", "UF", "campus life", "student apps", "GatorEx", "Rydify", "Vybr", "Tribzy", "textbooks", "ride sharing", "student housing", "campus events", "Gainesville", "Gator students"],
  authors: [{ name: "Kampus.fun Team" }],
  creator: "Kampus.fun",
  publisher: "Kampus.fun",
  robots: "index, follow",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://kampus.fun",
    siteName: "Kampus.fun",
    title: "Kampus.fun - Campus Life Platform for UF Students",
    description: "All-in-one campus hub for University of Florida students. Shop textbooks, split rides, find housing, and discover events.",
    // images: [
    //   {
    //     url: "/og-image.jpg",
    //     width: 1200,
    //     height: 630,
    //     alt: "Kampus.fun - Campus Life Platform for UF Students",
    //   },
    // ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@kampusfun",
    creator: "@kampusfun",
    title: "Kampus.fun - Campus Life Platform for UF Students",
    description: "All-in-one campus hub for University of Florida students. Shop textbooks, split rides, find housing, and discover events.",
    // images: ["/og-image.jpg"], // Add when og-image.jpg exists in public/
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
      <body
        className={`${poppins.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
