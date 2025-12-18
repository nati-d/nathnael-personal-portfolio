"use client";

import { FAQ } from "@/components/ui/faq";
import { ContactForm } from "@/components/ui/contact-form";

export function FAQSection() {
  const faqItems = [
    {
      question: "What do you do?",
      answer: "I&apos;m a full stack developer and architect passionate about creating beautiful, functional digital experiences. I work on projects ranging from personal websites to enterprise applications, always focusing on user experience and clean code.",
    },
    {
      question: "How can I work with you?",
      answer: "I&apos;m always open to discussing new projects and opportunities. Feel free to reach out through the contact form or connect with me on social media. I love collaborating with creative people and innovative companies.",
    },
    {
      question: "What technologies do you use?",
      answer: "I work with modern web technologies including React, Next.js, TypeScript, and various design tools. I&apos;m always learning and adapting to new technologies that can help create better experiences.",
    },
    {
      question: "Do you take on freelance projects?",
      answer: "Yes! I take on select freelance projects that align with my interests and expertise. If you have a project in mind, let&apos;s discuss how I can help bring your vision to life.",
    },
    {
      question: "What&apos;s your design philosophy?",
      answer: "I believe in creating designs that are both beautiful and functional. Every element should serve a purpose, and user experience always comes first. I focus on simplicity, clarity, and accessibility in all my work.",
    },
    {
      question: "How can I stay updated on your work?",
      answer: "Follow me on social media or check out my blog for the latest updates, thoughts, and projects. I share insights about my process, lessons learned, and what I&apos;m working on.",
    },
  ];

  return (
    <div className="relative w-full overflow-clip">
      <ContactForm />
      {/* <FAQ items={faqItems} /> */}
    </div>
  );
}

