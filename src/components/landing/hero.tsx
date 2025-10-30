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
      <div className="relative z-10 w-full max-w-6xl mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center md:items-start gap-8">
          {/* Text Content */}
          <div className="flex-1 text-center md:text-left">
            <p className='text-2xl'>
              Healing you inside out — with the help of science backed Reset to Rise therapy
            </p>
            <h1 className="font-headline text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight">
              Dr. Meghna Varma<br />
            </h1>
            <p className="mt-6 max-w-2xl mx-auto md:mx-0 text-lg md:text-xl text-primary-foreground/80">
              Thank you for taking the first step towards your journey of healing and growth. We strive to understand your unique story; your concerns, health history, and lifestyle— so we can create a personalized care plan together!
            </p>
            <div className="mt-10 flex flex-col sm:flex-row items-center justify-center md:justify-start gap-4">
              <Button size="lg" asChild>
                <a href="#appointment">
                  Book a Consultation
                  <ArrowRight className="ml-2" />
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
  src="https://www.youtube.com/embed/pSMVqQrOPpY?si=9orm0ThCUm_TsE1t"
  title="YouTube video player"
  frameBorder="0"
  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
  referrerPolicy="strict-origin-when-cross-origin"
  allowFullScreen
></iframe>
              
            </div>
            <p className='text-2xl text-center'>
               Integrative Psychiatrist & Life Transitions Coach
            </p>
            </div>
              
          </div>
          
        </div>
      </div>
    </section>
  );
}