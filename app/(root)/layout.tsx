import type { Metadata } from "next";
import { NavbarComponent } from "@/components/navbar";
import { Footer } from "@/components/ui/footer";


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
      <main className="flex-1 w-full">
        {children}
      </main>
      <Footer />
    </div>
  );
}
