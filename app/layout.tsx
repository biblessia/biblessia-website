import type { Metadata } from "next";
import { Noto_Sans_KR } from "next/font/google";
import "./globals.css";

const notoSans = Noto_Sans_KR({
  variable: "--font-sans",
  weight: ["400", "500", "700"],
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "비블레시아",
  description: "말씀과 기도로 연결되는 신앙 공동체",
  openGraph: {
    type: "website",
    url: "https://biblessia.com",
    title: "비블레시아 — 말씀과 기도로 연결되는 신앙 공동체",
    description: "말씀 묵상, 감사일기, 중보기도를 함께 나누는 신앙 공동체 앱.",
    siteName: "비블레시아",
  },
  twitter: {
    card: "summary_large_image",
    title: "비블레시아 — 말씀과 기도로 연결된 공동체",
    description: "말씀 묵상, 감사일기, 중보기도를 함께 나누는 신앙 공동체 앱.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${notoSans.variable} antialiased`}>{children}</body>
    </html>
  );
}
