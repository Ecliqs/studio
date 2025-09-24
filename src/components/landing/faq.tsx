import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

export function Faq() {
  const faqs = [
    {
      question: 'What happens during the first therapy session?',
      answer:
        'The first session is an opportunity for us to get to know each other. We will discuss what brought you to therapy, your history, and your goals. It\'s a collaborative process to determine if we are a good fit and to create an initial plan for our work together.',
    },
    {
      question: 'How long does a therapy session last?',
      answer:
        'A standard therapy session at HolisticMind Clinic lasts for 50 minutes. The frequency of sessions will be determined based on your individual needs and goals, which we will discuss during our initial consultation.',
    },
    {
      question: 'Is what I share in therapy confidential?',
      answer:
        'Yes, confidentiality is a cornerstone of therapy. Everything you share is kept private, with a few legal and ethical exceptions which we will discuss in our first session (e.g., risk of harm to self or others).',
    },
    {
      question: 'Do you offer online or virtual sessions?',
      answer:
        'Yes, we offer both in-person and secure online video sessions to accommodate your needs and preferences. You can choose the format that is most comfortable and convenient for you.',
    },
    {
      question: 'How do I know if therapy is right for me?',
      answer:
        'If you are facing challenges, feeling overwhelmed, or simply want to understand yourself better, therapy can be beneficial. We offer a free 15-minute consultation to help you decide if our services are the right fit for you without any commitment.',
    },
  ];

  return (
    <section id="faq" className="py-12 sm:py-16 lg:py-20 bg-background">
      <div className="container mx-auto px-4 max-w-3xl">
        <div className="text-center">
          <h2 className="font-headline text-3xl md:text-4xl font-semibold text-foreground">
            Frequently Asked Questions
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Find answers to common questions about our services and the therapy
            process.
          </p>
        </div>
        <Accordion type="single" collapsible className="mt-12 w-full">
          {faqs.map((faq, index) => (
            <AccordionItem key={index} value={`item-${index}`}>
              <AccordionTrigger className="text-left font-semibold text-lg hover:no-underline">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground text-base">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}
