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
      answer: `We understand that every individual’s journey is unique — which is why there isn’t a fixed one-size-fits-all pricing.
Before starting therapy, we offer a free 10-minute exploratory call with Dr. Meghna.

This call is simply a space to understand your concerns and personalize your care plan — no obligations, no pressure.`,
    },
    {
      question: 'How many sessions does it usually take?',
      answer: `It truly depends on the individual and the nature of their concerns.
Typically, most clients begin to notice changes and improvements within 1 to 3 months — that’s about 4 to 8 sessions on average.

Our goal is never to rush your process, but to walk beside you — gently, at a pace that feels right for you.`,
    },
    {
      question: 'What is The Reflect & Rise Journal?',
      answer: `Mindsutra's Reflect & Rise Journal, is intentionally designed to balance psychological depth with usability, making it accessible without diluting its effectiveness. This journal is built around giving you direction without eliminating distractions. It helps ground you at the end of the day; to slowly understand patterns in your thoughts, emotions, and behaviors.`,
    },
    {
      question: 'How do the supplements (Vitamin A, D, B12, Magnesium) help with mental health / well-being?',
      answer: `We take a nutritional-supportive approach — supplements are not the sole solution, but can help to optimize your body and brain so therapeutic work can be more effective.

Here’s a simplified view of what research suggests (while recognizing that every person’s situation is unique):

- Vitamin D
  Low vitamin D levels have been associated with higher risk of depression and more severe depressive symptoms in many studies. Some trials and reviews suggest that vitamin D supplementation may help improve mood, especially in those who are deficient.

- Vitamin B12 (and B-vitamins more broadly)
  B12 helps with neurological function, neurotransmitter synthesis, and methylation pathways. Low B12 (and deficiencies in folate / other B-vitamins) have been correlated with depressive symptoms. Some clinical studies show improvements in mood when B-vitamin supplementation is used as an adjunct, especially in those with low baseline status.

- Magnesium
  Magnesium plays a role in neuronal excitability, regulation of stress hormones, synaptic function, and NMDA receptor modulation. Several studies point to an inverse relationship between magnesium levels and symptoms of depression. Some clinical evidence also suggests that magnesium supplementation (sometimes in combination with B6) may have mood-beneficial effects.`,
    },
    {
      question: 'What does each consultation involve?',
      answer: `When you book a session (after the exploratory call), here’s what you can expect. Our approach is holistic, collaborative, and tailored:

1. Review of your history & symptoms

2. Assessment & working hypotheses

3. Personalized care plan

4. Ongoing monitoring & adaptation

5. Referrals & tie-ups when needed`,
    },
    {
      question: 'What is Funtional Psychiatry? What does an Functional Psychiatrist do?',
      answer: `Functional psychiatry is a root-cause approach to mental health that merges traditional psychiatry with functional medicine. Rather than just managing symptoms, it investigates underlying biological, nutritional, and lifestyle imbalances such as gut health, inflammation, or nutrient deficiencies to heal the whole person, take your first lab test test now.`,
    },
    {
      question: 'What is anxiety and depression?',
      answer: `Anxiety and depression are among the most common mental health concerns — and both are highly treatable.

- Anxiety often shows up as restlessness, worry, physical tension, or overthinking.
- Depression can feel like emptiness, low energy, loss of interest, or hopelessness.

Both conditions are not signs of weakness — they’re signs that something in your mind-body system needs care and attention.`,
    },
    {
      question: 'Do psychiatric medications cause dependence or side effects?',
      answer: `This is a very common concern — and it’s completely valid to ask.

Psychiatric medications work like any other kind of medical support. For instance, someone with diabetes might take insulin while also improving their diet and lifestyle. Similarly, psychiatric medication helps bring balance, while therapy and lifestyle changes strengthen that progress.

“Medication and therapy go hand in hand.”

Most people don’t become dependent on psychiatric medication — but they do benefit from taking it under the guidance of a professional who can monitor and adjust it as needed.
If side effects occur, they’re usually manageable and often temporary as your body adjusts.

The focus is always on helping you stabilize first, and then heal from within, so that over time, your need for medication can reduce — if and when that’s right for you.`,
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
              <AccordionContent className="text-muted-foreground text-base whitespace-pre-line">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}
