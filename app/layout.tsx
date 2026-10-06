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
      <body className="flex min-h-screen flex-col">
        <Header></Header>
        <main className="flex flex-1">{children}</main>
      </body>
    </html>
  );
}
