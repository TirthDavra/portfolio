import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/contexts/ThemeContext";

const inter = Inter({ subsets: ["latin"] });
const jetbrainsMono = JetBrains_Mono({ 
  subsets: ["latin"],
  variable: "--font-mono",
});

export const metadata: Metadata = {
  title: "Tirth Davara - React Developer",
  description: "Professional React developer portfolio showcasing innovative web solutions and modern user experiences.",
  keywords: "React Developer, Frontend Developer, JavaScript, TypeScript, Next.js, Web Development",
  authors: [{ name: "Tirth Davara" }],
  viewport: "width=device-width, initial-scale=1, maximum-scale=1",
  themeColor: "#000000",
  openGraph: {
    title: "Tirth Davara - React Developer",
    description: "Professional React developer portfolio showcasing innovative web solutions and modern user experiences.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1" />
        <meta name="theme-color" content="#000000" />
      </head>
      <body className={`${inter.className} ${jetbrainsMono.variable} antialiased`}>
        <ThemeProvider>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
