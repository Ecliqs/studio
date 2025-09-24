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

  const studies = [
    {
      title: 'Navigating Anxiety: A Journey to Calm',
      description:
        'Discover how a client learned to manage generalized anxiety and panic attacks through a combination of CBT and mindfulness techniques, leading to a more peaceful and controlled life.',
      tags: ['Anxiety', 'CBT', 'Mindfulness'],
      image: caseStudy1Image,
    },
    {
      title: 'Rebuilding Connection: A Couple’s Story',
      description:
        'Follow the path of a couple as they worked through communication breakdowns and relational trauma to rediscover their bond and build a healthier, more loving partnership.',
      tags: ['Couples Counseling', 'Relational Trauma'],
      image: caseStudy2Image,
    },
  ];

  return (
    <section id="case-studies" className="py-12 sm:py-16 lg:py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="font-headline text-3xl md:text-4xl font-semibold text-foreground">
            Stories of Transformation
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Every individual&apos;s journey is unique. Here are some examples of
            how we&apos;ve helped clients find their path to wellness.
          </p>
        </div>
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8">
          {studies.map((study, index) => (
            <Card
              key={index}
              className="flex flex-col overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              {study.image && (
                <Image
                  src={study.image.imageUrl}
                  alt={study.image.description}
                  data-ai-hint={study.image.imageHint}
                  width={600}
                  height={400}
                  className="w-full h-48 object-cover"
                />
              )}
              <CardHeader>
                <CardTitle className="font-headline text-xl">
                  {study.title}
                </CardTitle>
                <div className="flex flex-wrap gap-2 pt-2">
                  {study.tags.map((tag, tagIndex) => (
                    <Badge key={tagIndex} variant="secondary">
                      {tag}
                    </Badge>
                  ))}
                </div>
              </CardHeader>
              <CardContent className="flex-grow">
                <CardDescription>{study.description}</CardDescription>
              </CardContent>
              <CardFooter>
                <Button variant="link" className="px-0">
                  Read Full Story <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
