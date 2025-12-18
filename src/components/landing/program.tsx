import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Check } from 'lucide-react';

export function Programs() {
  const programs = [
    {
      title: 'Reclaim Therapy Package',
      price: '₹9,999',
      duration: 'Valid for 3 Months',
      description: 'A structured therapy program to help you regain emotional balance and mental clarity.',
      features: [
        '5 Therapy Sessions',
        'Personalised care approach',
        'Progress tracking & guidance',
        '1 Supplement FREE for 1 Week',
      ],
      cta: 'Enroll Now',
      popular: true,
    },
    {
      title: 'Reset Supplement Package',
      price: '₹14,999',
      duration: '3 Months',
      description: 'A holistic supplement plan designed to reset your body and mind.',
      features: [
        '5 Carefully curated supplements',
        'Supports mental & physical well-being',
        '3-month structured usage plan',
        'Expert-recommended formulations',
      ],
      cta: 'Get Started',
    },
    {
      title: 'Reset + Reclaim (Combo)',
      price: '₹21,000',
      duration: '3 Months',
      description: 'The complete healing journey combining therapy and supplements for lasting results.',
      features: [
        '5 Therapy Sessions',
        'Complete supplement package',
        'Integrated mind–body approach',
        'Maximum value & long-term benefits',
      ],
      cta: 'Choose Combo',
    },
  ];

  return (
    <section id="programs" className="py-12 sm:py-16 lg:py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="font-headline text-3xl md:text-4xl font-semibold text-foreground">
            Our Healing Programs
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Carefully designed programs to support your mental and emotional well-being over time.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-start">
          {programs.map((program) => (
            <Card
              key={program.title}
              className={`flex flex-col h-full shadow-lg hover:shadow-xl transition-shadow duration-300 ${
                program.popular ? 'border-primary border-2' : ''
              }`}
            >
              {program.popular && (
                <div className="bg-primary text-primary-foreground text-center py-1 font-semibold text-sm">
                  Most Popular
                </div>
              )}

              <CardHeader>
                <CardTitle className="font-headline text-2xl">
                  {program.title}
                </CardTitle>
                <CardDescription>{program.description}</CardDescription>

                <div className="pt-4">
                  <div className="text-4xl font-bold" style={{ fontFamily: 'sans-serif' }}>{program.price}</div>
                  <div className="text-sm text-muted-foreground mt-1">
                    {program.duration}
                  </div>
                </div>
              </CardHeader>

              <CardContent className="flex-grow">
                <ul className="space-y-3">
                  {program.features.map((feature, index) => (
                    <li key={index} className="flex items-center gap-2">
                      <Check className="h-5 w-5 text-green-500" />
                      <span className="text-muted-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>

              <CardFooter className="flex justify-center">
                <a href="#appointment" className="w-full">
                <Button className="w-full" size="lg">
                    {program.cta}
                  </Button>
                </a>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
