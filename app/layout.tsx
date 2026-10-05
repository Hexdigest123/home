import type { Metadata } from "next";
import "./globals.css";
import Header from "./components/Header";

export const metadata: Metadata = {
  title: "Home - Dashboard",
  description: "Dashboard for Home",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="de">
      <Header></Header>
      <body>{children}</body>
    </html>
  );
}
