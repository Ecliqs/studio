import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';
import { Card, CardContent } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Star } from 'lucide-react';

export function Testimonials() {
  const testimonials = [
    {
      quote:
        'Working with Dr. Meghna was life-changing. I finally feel like I have the tools to manage my anxiety and live a more present, joyful life. I couldn’t be more grateful.',
      name: 'Sarah J.',
      initials: 'SJ',
    },
    {
      quote:
        'Couples counseling saved our relationship. We learned how to communicate effectively and understand each other on a deeper level. HolisticMind Clinic provided a safe and constructive space for us to heal.',
      name: 'Michael & Emily P.',
      initials: 'ME',
    },
    {
      quote:
        'I was skeptical about therapy at first, but the practical, no-nonsense approach here made all the difference. I feel more confident and in control of my life than ever before.',
      name: 'David L.',
      initials: 'DL',
    },
    {
      quote:
        "The support I received during a difficult life transition was invaluable. I felt truly heard and understood, and it gave me the strength to move forward with clarity and purpose.",
      name: 'Jessica M.',
      initials: 'JM',
    },
  ];

  return (
    <section
      id="testimonials"
      className="py-12 sm:py-16 lg:py-20 bg-secondary"
    >
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="font-headline text-3xl md:text-4xl font-semibold text-foreground">
            What Our Clients Say
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Real stories from individuals who have found healing and growth with
            us.
          </p>
        </div>
        <Carousel
          opts={{
            align: 'start',
            loop: true,
          }}
          className="mt-12 w-full max-w-4xl mx-auto"
        >
          <CarouselContent>
            {testimonials.map((testimonial, index) => (
              <CarouselItem key={index} className="md:basis-1/2">
                <div className="p-1">
                  <Card className="h-full flex flex-col justify-between shadow-lg">
                    <CardContent className="p-6 text-center flex-grow flex flex-col items-center justify-center">
                      <div className="flex gap-1 text-yellow-500 mb-4">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} className="h-5 w-5 fill-current" />
                        ))}
                      </div>
                      <p className="text-muted-foreground italic">
                        &quot;{testimonial.quote}&quot;
                      </p>
                    </CardContent>
                    <div className="bg-muted/50 p-4 flex items-center justify-center gap-4">
                      <Avatar>
                        <AvatarImage
                          src={`https://api.dicebear.com/7.x/initials/svg?seed=${testimonial.name}`}
                          alt={testimonial.name}
                        />
                        <AvatarFallback>{testimonial.initials}</AvatarFallback>
                      </Avatar>
                      <span className="font-semibold text-foreground">
                        {testimonial.name}
                      </span>
                    </div>
                  </Card>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="hidden sm:flex" />
          <CarouselNext className="hidden sm:flex" />
        </Carousel>
      </div>
    </section>
  );
}
