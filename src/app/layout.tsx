import AdminToolbar from "@/components/ui/AdminToolbar";
import Footer from "@/components/ui/Footer";
import Header from "@/components/ui/Header";
import LoadingOverlay from "@/components/ui/LoadingOverlay";
import NavigationLoading from "@/components/ui/NavigationLoading";
import { AdminProvider } from "@/contexts/AdminContext";
import { LoadingProvider } from "@/contexts/LoadingContext";
import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Sam Commodities - Premium Ethiopian Agricultural Exports",
  description: "Quality you can trust. We combine local agricultural excellence with international trade precision to deliver the finest Ethiopian pulses and sesame to the world.",
  keywords: "Ethiopian sesame, pulses, beans, agricultural exports, Ethiopian commodities, Humera sesame, Wollega sesame, kidney beans, pea beans",
  authors: [{ name: "Sam Commodities" }],
  openGraph: {
    title: "Sam Commodities - Premium Ethiopian Agricultural Exports",
    description: "Quality Ethiopian agricultural products from farm to port",
    type: "website",
    locale: "en_US",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="antialiased">
        <LoadingProvider>
          <AdminProvider>
            <NavigationLoading />
            <Header />
            <main>{children}</main>
            <Footer />
            <LoadingOverlay />
            <AdminToolbar />
          </AdminProvider>
        </LoadingProvider>
      </body>
    </html>
  );
}