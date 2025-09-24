import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Button } from '../ui/button';

export function SocialFeed() {
  const socialImages = PlaceHolderImages.filter((img) =>
    img.id.startsWith('social-')
  ).slice(0, 4);

  return (
    <section className="py-12 sm:py-16 lg:py-20 bg-secondary">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="font-headline text-3xl md:text-4xl font-semibold text-foreground">
            Connect With Us
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Follow our journey and get daily inspiration on our social media
            channels.
          </p>
        </div>
        <div className="mt-12 grid grid-cols-2 lg:grid-cols-4 gap-4">
          {socialImages.map((image, index) => (
            <div
              key={index}
              className="group relative aspect-square overflow-hidden rounded-lg shadow-lg"
            >
              <Image
                src={image.imageUrl}
                alt={image.description}
                data-ai-hint={image.imageHint}
                fill
                className="object-cover transition-transform duration-300 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors" />
            </div>
          ))}
        </div>
        <div className="text-center mt-12">
          <Button size="lg" variant="outline">
            Follow on Instagram
          </Button>
        </div>
      </div>
    </section>
  );
}
