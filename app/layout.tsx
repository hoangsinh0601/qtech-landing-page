import type { Metadata } from "next";
import { Inter } from "next/font/google";

import "./globals.css";
import { ThemeProvider } from "./provider";
import JsonLd from "@/components/JsonLd";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "QTech Solutions - Đối Tác Outsourcing & Công Nghệ Tín Uy",
  description:
    "QTech cung cấp giải pháp Outsourcing phần mềm toàn diện, tối ưu chi phí. Đối tác công nghệ tin cậy, quy trình chuẩn quốc tế, giúp doanh nghiệp bứt phá.",
  keywords: [
    "qtech",
    "outsourcing",
    "công nghệ",
    "phát triển phần mềm",
    "thiết kế website",
    "qtech solutions",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="icon" href="/Logo Qtech-1.png" sizes="any" />
      </head>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem={false}
          forcedTheme="light"
          disableTransitionOnChange
        >
          <JsonLd />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
