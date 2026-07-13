import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { ArrowRight, PhoneCall } from 'lucide-react';

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
      <div className="relative z-10 w-full max-w-6xl mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center md:items-start gap-8">
          {/* Text Content */}
          <div className="flex-1 text-center md:text-left">
            <h1 className='font-headline text-3xl sm:text-4xl md:text-5xl lg:text-5xl font-bold tracking-tight'>
              Healing you inside out
            </h1>

            <p className="text-2xl">
              <i className="">with</i> <br />
            </p>
            <h2 className='font-headline text-2xl sm:text-3xl md:text-4xl lg:text-4xl font-bold tracking-tight'>
              Lab to L.I.F.E. by Dr. Meghna
            </h2>

            <p className="mt-6 max-w-2xl mx-auto md:mx-0 text-lg md:text-xl text-primary-foreground/80">
           Take your first step to healing with Mindsutra 
 </p>
            <div className="mt-10 flex flex-col sm:flex-row items-center justify-center md:justify-start gap-4">
              <Button size="lg" asChild>
                <a href="https://secure.therasoft.in/TSI/Bookyoursession.aspx?CC=nljrSrIO+Kg=&CON=qmz8KLmlxxg=" target="_blank" rel="noopener noreferrer">
                  Book Your Lab Test
                  <ArrowRight className="ml-2" />
                </a>
              </Button>
              <Button size="lg" asChild>
                <a href="tel:9392449896">
                  Call Now
                  <PhoneCall className="ml-2" />
                </a>
              </Button>
              {/* <Button size="lg" variant="secondary" asChild>
                <a href="#services">Our Services</a>
              </Button> */}
            </div>
          </div>
          {/* Video Placeholder */}
          <div className="flex-1 flex justify-center w-full max-w-md">
            <div className="test">
              <div className="aspect-video w-full bg-gray-300 rounded-lg flex items-center justify-center text-gray-600 text-xl font-semibold shadow-lg">
<iframe
  className="rounded-lg h-sm-100 w-sm-100 hero-video w-full h-full"
  src="https://www.youtube.com/embed/_u0fgtUr678?si=0tzFFQ2hGYbVujmx"
  title="YouTube video player"
  frameBorder="0"
  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
  referrerPolicy="strict-origin-when-cross-origin"
  allowFullScreen
></iframe>
              
            </div>
            <p className='text-2xl text-center'>
               Functional Psychiatrist and Psychotherapist
            </p>
            </div>
              
          </div>
          
        </div>
      </div>
    </section>
  );
}