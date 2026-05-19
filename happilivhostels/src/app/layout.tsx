import { Poppins } from "next/font/google";
import "./globals.css";
import Header from "./layouts/header";
import Footer from "./layouts/footer";
import { Toaster } from 'react-hot-toast';
import ClientProviders from "./providers/ClientProviders";
import { Metadata } from "next";
import FloatingButtons from "./layouts/FloatingButtons";


const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-poppins",
});


export const metadata: Metadata = {
  title: 'HappiLiv Hostels - Premium Hostel Accommodation',
  description: 'Discover premium hostel accommodation at HappiLiv. Experience comfortable stays with great amenities and a vibrant community atmosphere.',
  icons: {
    icon: "/favicon.png",
  },
};


export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${poppins.variable} font-sans antialiased`}>
        <ClientProviders>
          <Header />
          <Toaster position="top-right" />

          {children}
          <Footer />
           <FloatingButtons />
        </ClientProviders>
      </body>
    </html>
  );
}
