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

export function Pricing() {
  /*
  This component contains two pricing display options as requested.
  - Option 1 (active by default) displays concrete pricing plans.
  - Option 2 (commented out below) shows packages and prompts users to contact for pricing.

  To switch between them, simply comment out Option 1 and uncomment Option 2.
  */

  // --- OPTION 1: DETAILED PRICING ---
  const plans = [
    {
      title: 'Single Session',
      price: '₹1200',
      description: 'A single 30-minute Consultation.',
      features: [
        'One-on-one with Dr. Meghna',
        'Focused on a specific issue',
        'Pay as you go',
      ],
      cta: 'Book a Session',
    },
    {
      title: 'Therapy Session',
      price: '₹2000',
      description: 'A single 1 hour therapy session.',
      features: [
        'Consistent therapeutic support',
        'Ideal for ongoing work',
        'Flexible scheduling',
      ],
      cta: 'Book a Session',
      popular: true,
    }
  ];

  return (
    <section id="pricing" className="py-12 sm:py-16 lg:py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="font-headline text-3xl md:text-4xl font-semibold text-foreground">
            Invest in Your Well-being
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Choose a plan that fits your journey. We offer transparent pricing
            to support your path to mental wellness.
          </p>
        </div>
        <div className="mt-12 flex justify-center">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start max-w-4xl w-full">

          {plans.map((plan) => (
            <Card
              key={plan.title}
              className={`flex flex-col h-full shadow-lg hover:shadow-xl transition-shadow duration-300 ${
                plan.popular ? 'border-primary border-2' : ''
              }`}
            >
              {plan.popular && (
                <div className="bg-primary text-primary-foreground text-center py-1 font-semibold text-sm">
                  Most Popular
                </div>
              )}
              <CardHeader>
                <CardTitle className="font-headline text-2xl">
                  {plan.title}
                </CardTitle>
                <CardDescription>{plan.description}</CardDescription>
               <div className="text-4xl font-bold pt-4" style={{ fontFamily: 'sans-serif' }}>
                  {plan.price}
                </div>

              </CardHeader>
              <CardContent className="flex-grow">
                <ul className="space-y-3">
                  {plan.features.map((feature, index) => (
                    <li key={index} className="flex items-center gap-2">
                      <Check className="h-5 w-5 text-green-500" />
                      <span className="text-muted-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
              <CardFooter>
                <Button className="w-full" size="lg">
                  {plan.cta}
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
        </div>
      </div>
    </section>
  );

  /*
  // --- OPTION 2: CONTACT FOR PRICING ---
  const packages = [
    {
      title: 'Individual Therapy',
      description: 'Personalized one-on-one sessions tailored to your unique goals and challenges.',
      features: [
        '50-minute sessions',
        'Evidence-based approaches',
        'Virtual or in-person',
        'Flexible scheduling',
      ],
    },
    {
      title: 'Couples Counseling',
      description: 'Dedicated support for partners seeking to improve communication and strengthen their bond.',
      features: [
        '60-minute sessions',
        'Focus on relational dynamics',
        'Conflict resolution strategies',
        'Build a healthier partnership',
      ],
      popular: true,
    },
    {
      title: 'Life Transition Coaching',
      description: 'Guidance and support through major life changes like career shifts, relocation, or new parenthood.',
      features: [
        'Goal-oriented sessions',
        'Develop coping strategies',
        'Build resilience and confidence',
        'Actionable planning',
      ],
    },
  ];

  return (
    <section id="pricing" className="py-12 sm:py-16 lg:py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="font-headline text-3xl md:text-4xl font-semibold text-foreground">
            Our Therapy Packages
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            We offer a range of services designed to meet your needs. Contact us for detailed pricing and to find the best fit for you.
          </p>
        </div>
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-start">
          {packages.map((pkg) => (
            <Card
              key={pkg.title}
              className={`flex flex-col h-full shadow-lg hover:shadow-xl transition-shadow duration-300 ${pkg.popular ? 'border-primary border-2' : ''}`}
            >
              {pkg.popular && (
                <div className="bg-primary text-primary-foreground text-center py-1 font-semibold text-sm">
                  Most Popular
                </div>
              )}
              <CardHeader>
                <CardTitle className="font-headline text-2xl">{pkg.title}</CardTitle>
                <CardDescription>{pkg.description}</CardDescription>
              </CardHeader>
              <CardContent className="flex-grow">
                <ul className="space-y-3">
                  {pkg.features.map((feature, index) => (
                    <li key={index} className="flex items-center gap-2">
                      <Check className="h-5 w-5 text-green-500" />
                      <span className="text-muted-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
              <CardFooter>
                <Button className="w-full" variant="outline" size="lg" asChild>
                  <a href="#appointment">Contact for Pricing</a>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
  */
}
