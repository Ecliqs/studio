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
  const plans = [
    {
      title: 'FUNCTIONAL PSYCHIATRY CONSULTATION',
      whoIsItFor:
        'Anyone seeking professional psychiatric evaluation, medication assessment, or looking for symptomatic relief from anxiety, depression, or other mental health concerns.',
      benefits: [
        'Get a proper psychiatric evaluation',
        'Receive medication if required',
        'Find symptomatic relief with personalized care',
      ],
      deliverables: [
        '30-minute one-on-one consultation',
        'Personalized prescription if needed',
        'Clear treatment roadmap',
      ],
      price: '₹1,500',
      pricingNote: 'Starts at • Per session',
      cta: 'Book a Session',
    },
    {
      title: 'SOLUTION FOCUSED THERAPY SESSION',
      whoIsItFor:
        'Those ready to understand their problematic patterns, set meaningful emotional & behavioral goals, and improve their overall functioning.',
      benefits: [
        'Understand your problematic patterns deeply',
        'Set emotional & behavioral goals',
        'Improve overall functioning & wellbeing',
      ],
      deliverables: [
        '60-minute therapy (CBT / REBT / ACT) session',
        'Personalized insights & understanding',
        'Actionable goal-setting framework',
      ],
      price: '₹2,500',
      pricingNote: 'Starts at • Per session',
      cta: 'Book a Session',
      popular: true,
    },
  ];

  return (
    <section
      id="pricing"
      className="py-12 sm:py-16 lg:py-20 bg-background"
    >
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="font-headline text-3xl md:text-4xl font-semibold">
            Invest in Your Well-being
          </h2>

          <p className="mt-4 text-lg text-muted-foreground">
            Choose the consultation that best fits your needs.
          </p>
        </div>

        <div className="mt-12 flex justify-center">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl w-full">

            {plans.map((plan) => (
              <Card
                key={plan.title}
                className={`flex flex-col h-full shadow-lg transition-all hover:shadow-xl ${
                  plan.popular ? 'border-primary border-2' : ''
                }`}
              >
                {plan.popular && (
                  <div className="bg-primary text-primary-foreground text-center py-2 text-sm font-semibold">
                    Most Popular
                  </div>
                )}

                <CardHeader>
                  <CardTitle className="text-2xl leading-snug">
                    {plan.title}
                  </CardTitle>
                </CardHeader>

                <CardContent className="flex-1 space-y-6">
                  {/* Who is it for */}
                  <div>
                    <h3 className="font-semibold text-lg mb-2">
                      Who is it for
                    </h3>

                    <CardDescription className="leading-relaxed">
                      {plan.whoIsItFor}
                    </CardDescription>
                  </div>

                  {/* Benefits */}
                  <div>
                    <h3 className="font-semibold text-lg mb-3">
                      Benefits for you
                    </h3>

                    <ul className="space-y-2">
                      {plan.benefits.map((benefit, index) => (
                        <li
                          key={index}
                          className="flex items-start gap-2"
                        >
                          <Check className="h-5 w-5 mt-0.5 text-green-500 flex-shrink-0" />

                          <span className="text-muted-foreground">
                            {benefit}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Deliverables */}
                  <div>
                    <h3 className="font-semibold text-lg mb-3">
                      Key Deliverables
                    </h3>

                    <ul className="space-y-2">
                      {plan.deliverables.map((item, index) => (
                        <li
                          key={index}
                          className="flex items-start gap-2"
                        >
                          <Check className="h-5 w-5 mt-0.5 text-primary flex-shrink-0" />

                          <span className="text-muted-foreground">
                            {item}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Price */}
                  <div className="pt-2 border-t">
                    <div
                      className="text-4xl font-bold"
                      style={{ fontFamily: 'sans-serif' }}
                    >
                      {plan.price}
                    </div>

                    <p className="text-sm text-muted-foreground mt-1">
                      {plan.pricingNote}
                    </p>
                  </div>
                </CardContent>

                <CardFooter>
                  <a href="#appointment" className="w-full">
                    <Button size="lg" className="w-full">
                      {plan.cta}
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
