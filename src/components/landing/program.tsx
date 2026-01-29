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
      title: 'Mindsutra Reclaim Package',
      price: '₹5,499',
      duration: 'Valid for 1 Months',
      description: 'A structured therapy program to help you regain emotional balance and mental clarity.',
      features: [
        '1 lab to life healing session',
        '1 inner child therapy session',
        '3 nutrition support plans',
        '1 month of WA support',
        'Helps you re-energize physically and emotionally',
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
        'Monthly 2 therapy sessions (2×3= total 6 sessions)',
        'Monthly 3 nutrition support plans (3×3=9)',
        '3 Months of WhatsApp Support',
        'Helps you reset your biology, belief and behaviour.', 
        'Improved gut health and weight loss of up to 10 kgs in 3 months. Resources for emotional regulation.',
      ],
      cta: 'Get Started',
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


        <div className="mt-12 flex justify-center">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start max-w-4xl w-full">
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
      </div>
    </section>
  );
}
