"use client";

import React from "react";
import { Timeline } from "@/components/ui/timeline";
import Image from "next/image";
import Link from "next/link";

export function FeaturesSection() {
  const projects = [
    {
      title: "MyEOTC",
      content: (
        <div>
          <p className="mb-8 text-xs font-normal text-neutral-800 md:text-sm dark:text-neutral-200">
            A comprehensive resource hub for the Ethiopian Orthodox Tewahedo Church community. Built to provide centralized access to resources, community features, and spiritual guidance.
          </p>
          <Link 
            href="https://myeotc.org/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="block group"
          >
            <div className="relative overflow-hidden rounded-lg shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] transition-transform group-hover:scale-[1.02]">
              <Image
                src="/myeotc.png"
                alt="MyEOTC Project"
                width={1200}
                height={600}
                className="w-full h-auto object-cover"
              />
            </div>
          </Link>
        </div>
      ),
    },
    {
      title: "ROD16 Photography",
      content: (
        <div>
          <p className="mb-8 text-xs font-normal text-neutral-800 md:text-sm dark:text-neutral-200">
            A professional photography portfolio website for ROD16 PHOTOGRAPHY, specializing in wedding photography, portraits, and visual storytelling. Serving Virginia, Maryland & worldwide with over a decade of experience capturing meaningful moments.
          </p>
          <Link 
            href="https://rod16.vercel.app/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="block group"
          >
            <div className="relative overflow-hidden rounded-lg shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] transition-transform group-hover:scale-[1.02]">
              <Image
                src="/rod16.png"
                alt="ROD16 Photography Project"
                width={1200}
                height={600}
                className="w-full h-auto object-cover"
              />
            </div>
          </Link>
        </div>
      ),
    },
    {
      title: "AlphaMail AI",
      content: (
        <div>
          <p className="mb-8 text-xs font-normal text-neutral-800 md:text-sm dark:text-neutral-200">
            An AI-powered email solution designed to revolutionize communication. Currently in development, this platform will leverage artificial intelligence to enhance productivity and streamline email management.
          </p>
          <Link 
            href="https://alphamail.ai/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="block group"
          >
            <div className="relative overflow-hidden rounded-lg shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] transition-transform group-hover:scale-[1.02]">
              <Image
                src="/alphamail.ai.png"
                alt="AlphaMail AI Project"
                width={1200}
                height={600}
                className="w-full h-auto object-cover"
              />
            </div>
          </Link>
        </div>
      ),
    },
  ];

  return (
    <div className="relative w-full overflow-clip">
      <Timeline data={projects} />
    </div>
  );
}

