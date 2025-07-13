import type { Metadata } from "next";
import "./globals.css";
import { Providers } from './providers';

export const metadata: Metadata = {
  title: "Joseph Vasconcelos - Full Stack Engineer",
  description: "Full Stack Engineer with expertise in Java, TypeScript, Python, and GoLang. Passionate about building scalable applications and integrating AI solutions.",
  keywords: ["Full Stack Engineer", "Java", "TypeScript", "Python", "React", "Angular", "AI Integration", "DevOps"],
  authors: [{ name: "Joseph Vasconcelos" }],
  openGraph: {
    title: "Joseph Vasconcelos - Full Stack Engineer",
    description: "Full Stack Engineer with expertise in Java, TypeScript, Python, and GoLang. Passionate about building scalable applications and integrating AI solutions.",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Joseph Vasconcelos - Full Stack Engineer",
    description: "Full Stack Engineer with expertise in Java, TypeScript, Python, and GoLang.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        <Providers>
          {children}
        </Providers>
      </body>
    </html>
  );
}
