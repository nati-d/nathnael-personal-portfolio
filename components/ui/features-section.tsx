"use client";

import React from "react";
import { Timeline } from "@/components/ui/timeline";
import Link from "next/link";
import Image from "next/image";
import { ExternalLink, MapPin } from "lucide-react";

export function FeaturesSection() {
  const projects = [
    {
      title: "MyEOTC",
      content: (
        <div className="space-y-4">
          <p className="text-xs font-normal text-neutral-800 md:text-sm dark:text-neutral-200">
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
          
          <div>
            <p className="text-xs font-semibold text-neutral-700 dark:text-neutral-300 mb-2">
              Technologies:
            </p>
            <div className="flex flex-wrap gap-2">
              {["Next.js", "React", "TypeScript", "Tailwind CSS"].map((tech, idx) => (
                <span
                  key={idx}
                  className="text-xs px-2 py-1 rounded-md bg-neutral-100 dark:bg-neutral-800 text-neutral-700 dark:text-neutral-300"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          <div className="flex items-center gap-2">
            <MapPin className="w-4 h-4 text-neutral-600 dark:text-neutral-400" />
            <p className="text-xs text-neutral-600 dark:text-neutral-400">
              <span className="font-semibold">Location:</span> San Francisco, Remote
            </p>
          </div>

          <div className="flex items-center gap-4 pt-2">
            <Link
              href="https://myeotc.org/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-xs md:text-sm font-medium text-primary hover:text-primary/80 transition-colors"
            >
              <ExternalLink className="w-4 h-4" />
              Visit Site
            </Link>
          </div>
        </div>
      ),
    },
    {
      title: "ROD16 Photography",
      content: (
        <div className="space-y-4">
          <p className="text-xs font-normal text-neutral-800 md:text-sm dark:text-neutral-200">
            A professional photography portfolio website specializing in wedding photography, portraits, and visual storytelling. Serving Virginia, Maryland & worldwide.
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
          
          <div>
            <p className="text-xs font-semibold text-neutral-700 dark:text-neutral-300 mb-2">
              Technologies:
            </p>
            <div className="flex flex-wrap gap-2">
              {["Next.js", "React", "TypeScript", "Tailwind CSS"].map((tech, idx) => (
                <span
                  key={idx}
                  className="text-xs px-2 py-1 rounded-md bg-neutral-100 dark:bg-neutral-800 text-neutral-700 dark:text-neutral-300"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          <div className="flex items-center gap-2">
            <MapPin className="w-4 h-4 text-neutral-600 dark:text-neutral-400" />
            <p className="text-xs text-neutral-600 dark:text-neutral-400">
              <span className="font-semibold">Location:</span> San Francisco, Remote
            </p>
          </div>

          <div className="flex items-center gap-4 pt-2">
            <Link
              href="https://rod16.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-xs md:text-sm font-medium text-primary hover:text-primary/80 transition-colors"
            >
              <ExternalLink className="w-4 h-4" />
              Visit Site
            </Link>
          </div>
        </div>
      ),
    },
    {
      title: "AlphaMail AI",
      content: (
        <div className="space-y-4">
          <p className="text-xs font-normal text-neutral-800 md:text-sm dark:text-neutral-200">
            An AI-powered email solution designed to revolutionize communication. Currently in development, leveraging artificial intelligence to enhance productivity and streamline email management.
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
          
          <div>
            <p className="text-xs font-semibold text-neutral-700 dark:text-neutral-300 mb-2">
              Technologies:
            </p>
            <div className="flex flex-wrap gap-2">
              {["Next.js", "React", "TypeScript", "AI/ML"].map((tech, idx) => (
                <span
                  key={idx}
                  className="text-xs px-2 py-1 rounded-md bg-neutral-100 dark:bg-neutral-800 text-neutral-700 dark:text-neutral-300"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          <div className="flex items-center gap-2">
            <MapPin className="w-4 h-4 text-neutral-600 dark:text-neutral-400" />
            <p className="text-xs text-neutral-600 dark:text-neutral-400">
              <span className="font-semibold">Location:</span> San Francisco, Remote
            </p>
          </div>

          <div className="flex items-center gap-4 pt-2">
            <Link
              href="https://alphamail.ai/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-xs md:text-sm font-medium text-primary hover:text-primary/80 transition-colors"
            >
              <ExternalLink className="w-4 h-4" />
              Visit Site
            </Link>
          </div>
        </div>
      ),
    },
    {
      title: "Buddy",
      content: (
        <div className="space-y-4">
          <p className="text-xs font-normal text-neutral-800 md:text-sm dark:text-neutral-200">
            A comprehensive multi-platform application featuring mobile, dashboard, and backend components. Includes a dashboard for parental control, emotion detection in the app for children that automatically changes the story based on their emotions, language teaching features, and wellbeing practice exercises. Built with modern technologies to deliver seamless user experiences across different platforms.
          </p>
          
          <Link 
            href="https://github.com/nati-d/Buddy" 
            target="_blank" 
            rel="noopener noreferrer"
            className="block group"
          >
            <div className="relative overflow-hidden rounded-lg shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] transition-transform group-hover:scale-[1.02]">
              <Image
                src="/guade.jpg"
                alt="Buddy Project"
                width={1200}
                height={600}
                className="w-full h-auto object-cover"
              />
            </div>
          </Link>
          
          <div>
            <p className="text-xs font-semibold text-neutral-700 dark:text-neutral-300 mb-2">
              Technologies:
            </p>
            <div className="flex flex-wrap gap-2">
              {["Flutter", "Dart", "Python", "TypeScript", "React"].map((tech, idx) => (
                <span
                  key={idx}
                  className="text-xs px-2 py-1 rounded-md bg-neutral-100 dark:bg-neutral-800 text-neutral-700 dark:text-neutral-300"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          <div className="flex items-center gap-2">
            <MapPin className="w-4 h-4 text-neutral-600 dark:text-neutral-400" />
            <p className="text-xs text-neutral-600 dark:text-neutral-400">
              <span className="font-semibold">Location:</span> San Francisco, Remote
            </p>
          </div>

          <div className="flex items-center gap-4 pt-2">
            <Link
              href="https://github.com/nati-d/Buddy"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-xs md:text-sm font-medium text-primary hover:text-primary/80 transition-colors"
            >
              <ExternalLink className="w-4 h-4" />
              View on GitHub
            </Link>
          </div>
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

