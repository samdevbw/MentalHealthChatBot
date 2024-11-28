import { Open_Sans } from "next/font/google";

import "./globals.css";

const openSans = Open_Sans({ subsets: ["latin"] });

export const metadata = {
  title: "Mental Health Supportr AI Chatbot",
  description: "A general Purpose Chatbot that uses Google's Generative AI to respond to User Queries.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={openSans.className} suppressHydrationWarning={true}>{children}</body>
    </html>
  );
}
