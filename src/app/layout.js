import { Inter, Anta } from "next/font/google";
import "./globals.css";
import { Analytics } from "@vercel/analytics/react"


const inter = Inter({ subsets: ["latin"] });

<meta name="google-site-verification" content="rtbTSySVPsmYDfIpbFtS7Vm4Y8xKTuABW30uQxjEqqw" /
export const metadata = {
  title: "Yummy",
  description: "Traditional Food resort and  unique recipies",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div>
          {children}
          <Analytics/>
        </div>
      </body>
    </html>
  );
}
