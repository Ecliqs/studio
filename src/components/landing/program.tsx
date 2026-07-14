import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";

export function Programs() {
 const programs = [
  {
    title: "Regression Therapy",
    subtitle: "Deep Subconscious Healing",
    price: "₹4,000",
    duration: "Starts at • Per Session",
    description:
      "A guided regression therapy session designed to uncover and heal deep-rooted emotional patterns through subconscious work.",

    features: [
      "90-minute immersive regression therapy session",
      "Inner Child Regression or Past Life Regression",
      "Deep subconscious reprogramming",
      "Heal unresolved emotional wounds",
      "Address deeply rooted behavioural and emotional patterns",
      "Experience lasting emotional transformation",
    ],

    buttonText: "Book Session",
    popular: false,
  },
  {
    title: "30-Day Care Bundle",
    subtitle: "Comprehensive Healing Program",
    price: "₹8,500",
    duration: "Starts at • Per Bundle",
    description:
      "A structured 30-day healing journey combining psychiatric consultation, psychotherapy, regression therapy, and continuous support.",

    features: [
      "1 Psychiatric Consultation",
      "1 Cognitive Behavioural Therapy (CBT) Session",
      "1 Regression Therapy Session",
      "Weekly Follow-up Calls",
      "MindSutra – Reflect & Rise Journal with guided weekly exercises",
      "Comprehensive multi-disciplinary healing approach",
      "Holistic support for mind, body & emotional wellbeing",
      "Sustained guidance throughout the 30-day program",
    ],

    buttonText: "Enroll Now",
    popular: true,
  },
];

  return (
    <section
      id="programs"
      className="bg-background py-12 sm:py-16 lg:py-20"
    >
      <div className="container mx-auto px-4">
        {/* Section Heading */}
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="font-headline text-3xl font-semibold text-foreground md:text-4xl">
            Our Healing Programs
          </h2>

          <p className="mt-4 text-lg text-muted-foreground">
            Carefully designed programs to support your mental and emotional
            well-being through personalized therapy and holistic healing.
          </p>
        </div>

        {/* Cards */}
        <div className="mt-12 flex justify-center">
          <div className="grid w-full max-w-6xl grid-cols-1 gap-8 md:grid-cols-2 items-stretch">
            {programs.map((program) => (
              <Card
                key={program.title}
                className={`flex h-full flex-col overflow-hidden rounded-xl transition-all duration-300 hover:-translate-y-1 hover:shadow-xl ${
                  program.popular
                    ? "border-2 border-primary shadow-lg"
                    : "border shadow-md"
                }`}
              >
                {program.popular && (
                  <div className="bg-primary py-2 text-center text-sm font-semibold text-primary-foreground">
                    ⭐ Most Popular
                  </div>
                )}

                <CardHeader className="space-y-5">
                  <div>
                    <CardTitle className="font-headline text-2xl leading-tight">
                      {program.title}
                    </CardTitle>

                    <p className="mt-2 text-sm font-medium text-primary">
                      {program.subtitle}
                    </p>
                  </div>

                  <CardDescription className="text-base leading-relaxed">
                    {program.description}
                  </CardDescription>

                  <div className="border-t pt-5">
                    <div
                      className="text-4xl font-bold tracking-tight"
                      style={{ fontFamily: "sans-serif" }}
                    >
                      {program.price}
                    </div>

                    <p className="mt-2 text-sm text-muted-foreground">
                      {program.duration}
                    </p>
                  </div>
                </CardHeader>

                <CardContent className="flex-1">
                  <h3 className="mb-4 text-lg font-semibold">
                    What's Included
                  </h3>

                  <ul className="space-y-4">
                    {program.features.map((feature, index) => (
                      <li
                        key={index}
                        className="flex items-start gap-3"
                      >
                        <Check className="mt-0.5 h-5 w-5 shrink-0 text-green-600" />

                        <span className="leading-relaxed text-muted-foreground">
                          {feature}
                        </span>
                      </li>
                    ))}
                  </ul>
                </CardContent>

                <CardFooter className="pt-6">
                  <a href="https://secure.therasoft.in/TSI/Bookyoursession.aspx?CC=nljrSrIO+Kg=&CON=qmz8KLmlxxg=" target="_blank" rel="noopener noreferrer" className="w-full">
                    <Button size="lg" className="w-full">
                      {program.buttonText}
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