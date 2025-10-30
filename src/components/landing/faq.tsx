import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

export function Faq() {
  const faqs = [
    {
      question: 'What is the pricing per session?',
      answer:
        `We understand that every individual's journey is unique — which is why there isn't a fixed one-size-fits-all pricing. Before starting therapy, we offer a free 10-minute exploratory call with Dr. Meghna. This call is simply a space to understand your concerns and personalize your care plan — no obligations, no pressure.`,
    },
    {
      question: 'How many sessions does it usually take?',
      answer:
      `It truly depends on the individual and the nature of their concerns. Typically, most clients begin to notice changes and improvements within 1 to 3 months — that's about 4 to 8 sessions on average. Our goal is never to rush your process, but to walk beside you — gently, at a pace that feels right for you.`,
    },
    {
      question: 'What is the "Let\'s Be Realistic" workshop about?',
      answer:
        `The Let's Be Reelistic workshop is all about creating a safe, open, and non-judgmental space where we come together to reflect, share, and grow. It\'s not just an event — it's an experience built around community and connection. Through the medium of fiction, we explore real-life themes that often go unspoken. Stories become the cue for honest conversations — about healing, resilience, and the beautifully messy parts of being human.`,
    },
    {
      question: 'How do the supplements help with mental health / well-being?',
      answer:
        `We take a nutritional-supportive approach — supplements are not the sole solution, but can help to optimize your body and brain so therapeutic work can be more effective. Research suggests that Vitamin D, B12, and Magnesium play important roles in mental health and well-being, particularly when combined with standard therapies.`,
    },
    {
      question: 'What does each consultation involve?',
      answer:
        'Our approach is holistic, collaborative, and tailored. Each consultation involves: 1) Review of your history & symptoms, 2) Assessment & working hypotheses, 3) Personalized care plan, 4) Ongoing monitoring & adaptation, and 5) Referrals & tie-ups when needed.',
    },
    {
      question: 'What is Integrative Psychiatry?',
      answer:
        'Integrative Psychiatry looks at the whole person — mind, body, and lifestyle — instead of focusing only on symptoms. It follows a biopsychosocial model, considering biological aspects (like genetics, brain chemistry, nutrition), psychological aspects (emotions, coping patterns), and social aspects (relationships, environment). The goal is to support long-term, balanced well-being.',
    },
    {
      question: 'What is anxiety and depression?',
      answer:
        'Anxiety and depression are among the most common mental health concerns — and both are highly treatable. Anxiety often shows up as restlessness, worry, physical tension, or overthinking. Depression can feel like emptiness, low energy, loss of interest, or hopelessness. Both conditions are not signs of weakness — they\'re signs that something in your mind-body system needs care and attention.',
    },
    {
      question: 'Do psychiatric medications cause dependence or side effects?',
      answer:
        'Most people don\'t become dependent on psychiatric medications — they benefit from taking them under professional guidance. If side effects occur, they\'re usually manageable and often temporary. The focus is always on helping you stabilize first, and then heal from within, so that over time, your need for medication can reduce — if and when that\'s right for you.',
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
