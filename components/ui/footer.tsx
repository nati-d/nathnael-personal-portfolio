"use client";

import Link from "next/link";
import { NavbarLogo } from "@/components/navbar-logo";
import { Container } from "@/components/ui/container";

export function Footer() {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    resources: [
      { name: "Browse Resources", href: "/resources" },
      { name: "Upload Resource", href: "/upload" },
      { name: "Categories", href: "/resources?filter=categories" },
      { name: "Search", href: "/resources?search=" },
    ],
    about: [
      { name: "About Us", href: "/about" },
      { name: "Our Mission", href: "/about#mission" },
      { name: "Community", href: "/about#community" },
      { name: "Contact", href: "/contact" },
    ],
    support: [
      { name: "Help Center", href: "/help" },
      { name: "FAQ", href: "/#faq" },
      { name: "Guidelines", href: "/guidelines" },
      { name: "Privacy Policy", href: "/privacy" },
    ],
  };

  return (
    <footer className="w-full border-t bg-background">
      <Container className="py-12 lg:py-16">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-5">
          {/* Logo and Description */}
          <div className="lg:col-span-2">
            <NavbarLogo showLink={false} className="mb-4" />
            <p className="text-sm text-muted-foreground max-w-sm leading-relaxed">
              Your central hub for Ethiopian Orthodox Church resources. Built for converts, by the community.
            </p>
          </div>

          {/* Resources */}
          <div>
            <h3 className="text-sm font-semibold mb-4 text-foreground">Resources</h3>
            <ul className="space-y-3">
              {footerLinks.resources.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* About */}
          <div>
            <h3 className="text-sm font-semibold mb-4 text-foreground">About</h3>
            <ul className="space-y-3">
              {footerLinks.about.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="text-sm font-semibold mb-4 text-foreground">Support</h3>
            <ul className="space-y-3">
              {footerLinks.support.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-sm text-muted-foreground">
            © {currentYear} EOTC Resource Hub. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <Link
              href="/terms"
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              Terms of Service
            </Link>
            <Link
              href="/privacy"
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              Privacy Policy
            </Link>
          </div>
        </div>
      </Container>
    </footer>
  );
}

