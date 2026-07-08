import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import LenisProvider from "./components/LenisProvider";
import Layout from "./containers/pmu/Layout/layout";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Brown Theory",
  description: "PMU and Tattoo Academy",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} antialiased`}
    >
      <body>
        <Layout>
        <LenisProvider>
          {children}
        </LenisProvider>
        </Layout>
      </body>
    </html>
  );
}