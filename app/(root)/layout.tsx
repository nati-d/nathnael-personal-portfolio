import type { Metadata } from "next";
import { NavbarComponent } from "@/components/navbar";


export const metadata: Metadata = {
  title: "EOTC",
  description: "EOTC Dashboard",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="flex flex-col min-h-screen">
      <NavbarComponent />
      <main className="flex-1 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 pt-24">
        {children}
      </main>
    </div>
  );
}
