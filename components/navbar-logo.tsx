import Link from "next/link";

interface NavbarLogoProps {
  href?: string;
  className?: string;
  showLink?: boolean;
}

export function NavbarLogo({ 
  href = "/", 
  className = "",
  showLink = true 
}: NavbarLogoProps) {
  const logoContent = (
    <span className={`text-xl font-bold text-foreground ${className}`}>
      Nathy
    </span>
  );

  if (showLink) {
    return (
      <Link
        href={href}
        className={`relative z-[70] mr-4 flex items-center justify-center px-2 py-1 shrink-0 ${className}`}
      >
        {logoContent}
      </Link>
    );
  }

  return (
    <div className={`flex items-center justify-center shrink-0 ${className}`}>
      {logoContent}
    </div>
  );
}

