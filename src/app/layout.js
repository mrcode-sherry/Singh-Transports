// app/layout.js
import { Montserrat, Roboto } from "next/font/google";
import "./globals.css";
import Navbar from "@/component/Navbar";
import Footer from "@/component/Footer";
import Footerbar from "@/component/Footerbar";

// Montserrat for headings
const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  display: "swap",
});

// Roboto for body
const roboto = Roboto({
  variable: "--font-roboto",
  subsets: ["latin"],
  weight: ["300", "400", "500", "700"],
  display: "swap",
});

export const metadata = {
  title: "SinghTransports",
  description: "Reliable shuttle and transport booking website.",
};

export default function RootLayout({ children }) {
  return (
    // apply the font variable classes on the HTML element
    <html
      lang="en"
      className={`${montserrat.variable} ${roboto.variable}`}
    >
      <body className="antialiased">
        <section>
          <Navbar />
        </section>

        {children}

        <section>
          <Footer />
        </section>

        <section>
          <Footerbar />
        </section>
      </body>
    </html>
  );
}
