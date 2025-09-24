import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { ArrowRight } from 'lucide-react';

export function Hero() {
  const heroImage = PlaceHolderImages.find((img) => img.id === 'hero');

  return (
    <section
      id="home"
      className="relative flex items-center justify-center min-h-screen text-white"
    >
      {heroImage && (
        <Image
          src={heroImage.imageUrl}
          alt={heroImage.description}
          data-ai-hint={heroImage.imageHint}
          fill
          className="object-cover"
          priority
        />
      )}
      <div className="absolute inset-0 bg-slate-800/60" />
      <div className="relative z-10 text-center p-4">
        <h1 className="font-headline text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight">
          Find Your Path to a <br />
          <span className="text-primary-foreground opacity-90">
            Brighter, Calmer Mind
          </span>
        </h1>
        <p className="mt-6 max-w-2xl mx-auto text-lg md:text-xl text-primary-foreground/80">
          Welcome to HolisticMind Clinic, where your mental well-being is our
          priority. We offer compassionate, personalized therapy to help you
          navigate life&apos;s challenges and rediscover your inner strength.
        </p>
        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
          <Button size="lg" asChild>
            <a href="#appointment">
              Book a Free Consultation
              <ArrowRight className="ml-2" />
            </a>
          </Button>
          <Button size="lg" variant="secondary" asChild>
            <a href="#services">Our Services</a>
          </Button>
        </div>
      </div>
    </section>
  );
}
