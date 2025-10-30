import Image from 'next/image';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Badge } from '@/components/ui/badge';
import { ArrowRight } from 'lucide-react';

export function CaseStudies() {
  const caseStudy1Image = PlaceHolderImages.find(
    (img) => img.id === 'case-study-1'
  );
  const caseStudy2Image = PlaceHolderImages.find(
    (img) => img.id === 'case-study-2'
  );

  const posts = [
    "https://www.instagram.com/reel/C-pYPprNsEO",
    "https://www.instagram.com/p/C_h2MVSRUzv/", 
    "https://www.instagram.com/p/C9wZQKkBkhf/",
    "https://www.instagram.com/p/C9B-gEgPVTn/",
    
  ];

  return (
    <section className="py-12 sm:py-16 lg:py-20 bg-background">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="font-headline text-3xl md:text-4xl font-semibold text-foreground">
            Stories of Transformation
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Every individual's journey is unique. Here are some examples of how we've helped clients find their path to wellness.
          </p>
        </div>

        {/* Instagram grid */}
        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {posts.map((link, i) => (
            <div key={i} className="overflow-hidden rounded-xl">
              <blockquote
                className="instagram-media w-full !max-w-full !min-w-0"
                data-instgrm-permalink={link}
                data-instgrm-version="14"
              ></blockquote>
            </div>
          ))}
        </div>

        {/* CTA Button */}
        <div className="text-center mt-12">
          <Button size="lg" variant="outline" className="bg-primary text-white" asChild>
            <a href="#appointment">
              Book a Consultation
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
}
