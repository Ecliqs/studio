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
      question: 'What is the “Let’s Be Reelistic” workshop about?',
      answer: `The Let’s Be Reelistic workshop is all about creating a safe, open, and non-judgmental space where we come together to reflect, share, and grow.
It’s not just an event — it’s an experience built around community and connection.

Through the medium of fiction, we explore real-life themes that often go unspoken. Stories become the cue for honest conversations — about healing, resilience, and the beautifully messy parts of being human.
The workshop is designed to help you connect with yourself and others, find shared understanding, and gather resources that support your own healing journey.`,
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
      question: 'What is Integrative Psychiatry? What does an Integrative Psychiatrist do?',
      answer: `Integrative Psychiatry looks at the whole person — mind, body, and lifestyle — instead of focusing only on symptoms.
An Integrative Psychiatrist considers not just mental health concerns, but also physical factors like nutrition, hormones, sleep, and stress patterns.

This approach follows a biopsychosocial model, meaning it takes into account:

- Biological aspects (like genetics, brain chemistry, nutrition, and physical health)
- Psychological aspects (like emotions, coping patterns, and thought processes)
- Social and cultural aspects (like relationships, environment, and community)

It’s a 360-degree model — blending medical expertise with lifestyle, therapy, and self-awareness.
The goal is not just to treat symptoms, but to support long-term, balanced well-being.`,
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
