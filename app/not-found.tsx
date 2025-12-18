import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";

export default function NotFound() {
  return (
    <div className="flex flex-col min-h-screen items-center justify-center py-16 bg-background">
      <Container className="flex flex-col items-center justify-center text-center max-w-2xl">
        <div className="mb-8">
          <div className="w-32 h-32 rounded-full bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center mx-auto mb-6">
            <span className="text-5xl font-bold text-primary">N</span>
          </div>
        </div>
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-4 text-foreground">
          Hi, I&apos;m Nathy
        </h1>
        <p className="text-lg sm:text-xl text-muted-foreground mb-6 max-w-lg leading-relaxed">
          Welcome to my personal space. I&apos;m passionate about building meaningful experiences and connecting with amazing people.
        </p>
        <p className="text-base text-muted-foreground mb-8 max-w-md">
          Feel free to explore or reach out if you&apos;d like to connect!
        </p>
        <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
          <Button asChild size="lg" className="w-full sm:w-auto">
            <Link href="/">Home</Link>
          </Button>
          <Button asChild variant="outline" size="lg" className="w-full sm:w-auto">
            <Link href="/about">About</Link>
          </Button>
          <Button asChild variant="outline" size="lg" className="w-full sm:w-auto">
            <Link href="/contact">Contact</Link>
          </Button>
        </div>
      </Container>
    </div>
  );
}

