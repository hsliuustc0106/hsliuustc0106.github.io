import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Hongsheng Liu - vLLM-Omni & AFD Plugin Core Maintainer",
  description: "Core maintainer of vLLM-Omni and AFD Plugin, member of the vLLM Project team, and Research Scientist at Huawei 2012 Lab focused on high-performance multimodal model serving.",
  keywords: "vLLM, vLLM-Omni, AFD Plugin, multimodal model serving, attention-FFN disaggregation, LLM inference, distributed systems, open source, Huawei 2012 Lab",
  authors: [{ name: "Hongsheng Liu" }],
  openGraph: {
    title: "Hongsheng Liu - vLLM-Omni & AFD Plugin Core Maintainer",
    description: "Core maintainer of vLLM-Omni and AFD Plugin and member of the vLLM Project team.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
