import "./globals.css";
import { Anton, Inter, Space_Mono } from "next/font/google";

const display = Anton({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-display",
  display: "swap",
});

const sans = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  variable: "--font-sans",
  display: "swap",
});

const mono = Space_Mono({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-mono",
  display: "swap",
});

export const metadata = {
  title: "Ariha Noor — Full-Stack Engineer (with AI Integrations)",
  description:
    "Ariha Noor is a Full-Stack Engineer who ships products end to end — polished Next.js front ends, Node APIs and data, with AI integrations woven in where they count.",
  keywords: [
    "Ariha Noor",
    "Full-Stack Engineer",
    "Full-Stack Developer",
    "React",
    "Next.js",
    "Node.js",
    "AI Integrations",
    "RAG",
    "Portfolio",
  ],
  openGraph: {
    title: "Ariha Noor — Full-Stack Engineer (with AI Integrations)",
    description:
      "Shipping full-stack products end to end — clean front ends, solid back ends, and a touch of AI where it counts.",
    type: "website",
  },
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${display.variable} ${sans.variable} ${mono.variable}`}
    >
      <head>
        <link rel="icon" href="/favicon.svg" />
      </head>
      <body className="grain bg-paper text-ink antialiased">{children}</body>
    </html>
  );
}
