import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import {
  HeartHandshake,
  Leaf,
  Users,
  Venus,
  BetweenHorizonalEnd,
  Stethoscope,
} from 'lucide-react';

export function Services() {
  const services = [
    {
      icon: Users,
      title: 'Lab to Life Consultation',
      description:
        'A personalised treatment plan based on your lab reports and functional medicine approach.',
    },
    {
      icon: Leaf,
      title: 'Inner Child Therapy',
      description:
      'Regression therapy that helps you to deal with difficult emotions like guilt, shame, anxiety and anger to bring calm, clarity and confidence.',   
    },
    {
      icon: Venus,
      title: "Women's Health",
      description:
        'Specialized support for the unique mental health challenges women face, from postpartum issues to hormonal changes and societal pressures.',
    },
    {
      icon: BetweenHorizonalEnd,
      title: 'Relationship counseling ',
      description:
        'Relationship counselling, or couples therapy, is a form of psychotherapy that helps partners resolve conflicts, improve communication, and rebuild trust.',
    },
    {
      icon: HeartHandshake,
      title: 'Relational Trauma',
      description:
        'Heal from the wounds of difficult relationships. Our approach helps you understand patterns, build resilience, and foster healthier connections.',
    },
    {
      icon: Stethoscope,
      title: 'Natural Supplements',
      description:
        'Natural supplements bridge the gap between your daily food intake and the essential vitamins or minerals your body requires.',
    },
  ];

  return (
    <section id="services" className="py-12 sm:py-16 lg:py-20 bg-secondary">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="font-headline text-3xl md:text-4xl font-semibold text-foreground">
            Therapy Services Designed With Your Growth in Mind
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            We offer a range of specialized services to support you on your
            unique path to mental wellness and personal growth.
          </p>
        </div>
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card
              key={index}
              className="text-center shadow-lg hover:shadow-xl hover:-translate-y-2 transition-all duration-300"
            >
              <CardHeader>
                <div className="mx-auto bg-primary/20 p-4 rounded-full w-fit">
                  <service.icon className="h-8 w-8 text-primary" />
                </div>
                <CardTitle className="font-headline pt-4">
                  {service.title}
                </CardTitle>
                <CardDescription className="pt-2">
                  {service.description}
                </CardDescription>
              </CardHeader>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
