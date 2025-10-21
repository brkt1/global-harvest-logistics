import Footer from "@/components/ui/Footer";
import Header from "@/components/ui/Header";
import LoadingOverlay from "@/components/ui/LoadingOverlay";
import NavigationLoading from "@/components/ui/NavigationLoading";
import { LoadingProvider } from "@/contexts/LoadingContext";
import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Global Harvest Logistics - Delivering Taste, Preserving Nature",
  description: "Leading B2B logistics company specializing in temperature-sensitive commodity exports including coffee, olive oil, and specialty food products. Expert, reliable, and sustainable logistics solutions.",
  keywords: "coffee export logistics, temperature controlled shipping, sustainable freight forwarder, olive oil transportation, specialty food logistics",
  authors: [{ name: "Global Harvest Logistics" }],
  viewport: "width=device-width, initial-scale=1",
  openGraph: {
    title: "Global Harvest Logistics - Delivering Taste, Preserving Nature",
    description: "Leading B2B logistics company specializing in temperature-sensitive commodity exports",
    type: "website",
    locale: "en_US",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        <LoadingProvider>
          <NavigationLoading />
          <Header />
          <main>{children}</main>
          <Footer />
          <LoadingOverlay />
        </LoadingProvider>
      </body>
    </html>
  );
}