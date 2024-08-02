import "./globals.css";

export const metadata = {
  title: "Ariha Portfolio",
  description: "Developed By Ariha Noor",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
      <link rel="icon" href="/favicon.png" />
      </head>
      <body className={``}>{children}</body>
    </html>
  );
}
