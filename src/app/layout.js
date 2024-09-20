import { Inter } from "next/font/google";
import "./globals.css";
import { Analytics } from "@vercel/analytics/react";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Yummy",
  description: "Traditional Food resort and unique recipes",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <meta name="google-site-verification" content="rtbTSySVPsmYDfIpbFtS7Vm4Y8xKTuABW30uQxjEqqw" />
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
      </head>
      <body className={inter.className}>
        <div>
          {children}
          <Analytics />
        </div>
      </body>
    </html>
  );
}
