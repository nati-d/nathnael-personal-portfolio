"use client";

import Link from "next/link";
import { Container } from "@/components/ui/container";
import { Github, Linkedin } from "lucide-react";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full border-t bg-background">
      <Container className="py-8">
        <div className="flex flex-col items-center gap-6">
          {/* Social Links */}
          <div className="flex items-center gap-4">
            <Link
              href="https://github.com/nati-d"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-md hover:bg-muted transition-colors"
              aria-label="GitHub"
            >
              <Github className="w-5 h-5 text-muted-foreground hover:text-foreground transition-colors" />
            </Link>
            <Link
              href="https://www.linkedin.com/in/nathnael-desalegn/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-md hover:bg-muted transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-5 h-5 text-muted-foreground hover:text-foreground transition-colors" />
            </Link>
          </div>

          {/* Copyright */}
          <p className="text-sm text-muted-foreground">
            © {currentYear} Nathy. All rights reserved.
          </p>
        </div>
      </Container>
    </footer>
  );
}

