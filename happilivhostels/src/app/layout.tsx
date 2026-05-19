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

<!-- Google tag (gtag.js) -->
<script async src="https://www.googletagmanager.com/gtag/js?id=G-1H902SX3BB"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'G-1H902SX3BB');
</script>

  <meta name="google-site-verification" content="fgAArWVRl_taRDu20qxGFUrVn4_YgNTvalgD9vg3Y6g" />
  <meta name="robots" content="follow, index, max-snippet:-1, max-video-preview:-1, max-image-preview:large"/>
<meta name='copyright' content='Happiliv Hostels'>
<meta name='language' content='ES'>
<meta name='robots' content='index,follow'>
<meta name='Classification' content='Business'>
  
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
