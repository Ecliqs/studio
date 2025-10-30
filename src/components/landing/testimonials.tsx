"use client";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Star } from "lucide-react";

export function Testimonials() {
  const testimonials = [
    {
      name: "Fatima Agwan",
      initials: "FA",
      time: "4 weeks ago",
      meta: "1 review · 1 photo",
      quote:
        "Dr. Meghna clearly loves what she does. She works with passion. Her story is inspiring. I had the opportunity to meet her at the Inside Out 2 movie screening that her clinic organised. The session was so insightful and held so much space for discussion, a safe platform to share our experiences, both good and bad and have the privilege to see them in a new light. Her voice is really soothing and that itself is enough to calm one's chaotic mind. Looking forward to seeing her again.",
    },
    {
      name: "Anurag Yadav",
      initials: "AY",
      time: "a month ago",
      meta: "1 review",
      quote:
        "I had the opportunity of attending an event with Dr Meghna and it was a truly enriching and enlightening experience. Her way of explaining concepts were not only clear and practical but also came from a perspective of understanding and compassion which made it so much easier to connect with feelings that would rather go unnoticed. The discussion was engaging, insightful and left me with many key takeaways. Her warmth and depth of knowledge really stand out.",
    },
    {
      name: "Sohail Shaikh",
      initials: "SS",
      time: "a month ago",
      meta: "Local Guide · 10 reviews · 35 photos",
      quote:
        "I attended the session today and it was a truly wonderful experience. The doctor made it very fun, interactive and insightful by encouraging us to share both our positive and negative experiences and reflect on how we manage them. She created a safe and supportive space where everyone felt comfortable opening up and listening to one another. Overall it was a five star session that was engaging, meaningful and valuable.",
    },
    {
      name: "Sneha Barot",
      initials: "SB",
      time: "a month ago",
      meta: "5 reviews",
      quote:
        "Had an amazing movie analysis session with Dr. Meghna and she's fantastic at what she does. The way she explained emotions and emotional regulation was amazing and so easy to understand.",
    },
    {
      name: "Aditya Acharya",
      initials: "AA",
      time: "a month ago",
      meta: "5 reviews",
      quote:
        "Dr. Meghna Ma'am shared some valuable insights and guidance with us today. It was a great session, looking forward for more such knowledgeable sessions.",
    },
    {
      name: "Bidisha Goswami",
      initials: "BG",
      time: "a year ago",
      meta: "4 reviews",
      quote:
        "I have been visiting Dr. Meghna Varma since April 2022. I am much better in my daily life after getting suggestions and medicines from her. She listens to patients with mindfulness, and the medicines she prescribes are affordable. Highly recommended!",
    },
    {
      name: "Prathamesh Gorule",
      initials: "PG",
      time: "a month ago",
      meta: "8 reviews · 4 photos",
      quote:
        "The session taken by them was really insightful and very thoughtful. Would definitely recommend.",
    },
    {
      name: "Dr. Dhanya Sreenath",
      initials: "DS",
      time: "a year ago",
      meta: "8 reviews",
      quote:
        "Past few years my sister was going through a difficult time which led to mental illness. We came across Dr. Meghna Verma from MindGram. After few sessions, she started feeling much better. Highly recommend for psychological issues.",
    },
    {
      name: "Saravanan Balasundaram",
      initials: "SB",
      time: "3 years ago",
      meta: "Local Guide · 20 reviews · 15 photos",
      quote:
        "Thank you for being the dedicated, thoughtful, and compassionate doctor that you are! My wife struggled for 10 years with anxiety and sound phobia. After visiting you, I’ve seen so many changes in her behaviour and approach. Thank you so much, Doctor.",
    },
    {
      name: "Srikanth Boddupally",
      initials: "SB",
      time: "3 years ago",
      meta: "6 reviews",
      quote:
        "I have consulted Dr. Meghna Varma for anxiety and sleeplessness. She listened patiently and prescribed good techniques and affordable medicines that acted effectively. My anxiety and fear have come down drastically.",
    },
    {
      name: "Ashish Mukherjee",
      initials: "AM",
      time: "4 years ago",
      meta: "1 review",
      quote:
        "I recommend Dr Meghna Varma madam. She identified that subconscious anxiety was causing my acid reflux and other symptoms. The medication she prescribed had no side effects and cured my symptoms. Big thank you to Dr Meghna Varma madam!",
    },
    {
      name: "Nilesh Gourkhede",
      initials: "NG",
      time: "4 years ago",
      meta: "4 reviews",
      quote:
        "Dr. Meghana Varma is accessible, polite, and well-versed in her field. She patiently listened and prescribed the right medication for my wife’s anxiety disorder. We highly recommend consulting her for mental health concerns.",
    },
    {
      name: "Sonal G",
      initials: "SG",
      time: "3 years ago",
      meta: "Local Guide · 12 reviews · 8 photos",
      quote:
        "I went to Dr Meghana when I was constantly crying. After multiple visits, I can say she always shows me ways to find solutions and improve my thought process. She listens like an elder sister. I feel so comfortable sharing everything with her.",
    },
    {
      name: "Avi nazzz",
      initials: "AN",
      time: "a year ago",
      meta: "2 reviews",
      quote:
        "I appreciate Dr. Meghna Verma's practical methods. She provided step-by-step solutions that significantly improved my mental well-being. Highly recommended!",
    },
    {
      name: "Anonymous Someone",
      initials: "AS",
      time: "3 years ago",
      meta: "1 review",
      quote:
        "She is the best psychiatrist. The good thing about her is that she goes to the root of the problem rather than offering temporary quick fixes. She genuinely aims for long-lasting healing.",
    },
    {
      name: "Pratyush",
      initials: "P",
      time: "4 years ago",
      meta: "Local Guide · 20 reviews · 18 photos",
      quote:
        "I went to her when everything seemed bleak. I was tormented by my past and my anxiety was at its peak. Her careful diagnosis and sessions have led me to a new path in life. Grateful I could consult her at the right time.",
    },
    {
      name: "Malathi Latha",
      initials: "ML",
      time: "5 years ago",
      meta: "4 reviews",
      quote:
        "Hi Meghana, the workshop on parents of teenagers was amazing. Even though virtual, it was engaging and informative. It touched upon the issues faced and solutions we can turn to. Please have such sessions for teenagers too!",
    },
  ];

  return (
    <section id="testimonials" className="py-12 sm:py-16 lg:py-20 bg-secondary">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="font-headline text-3xl md:text-4xl font-semibold text-foreground">
            What Our Clients Say
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Real experiences from individuals who found healing and growth with
            Dr. Meghna.
          </p>
        </div>

        <Carousel
          opts={{ align: "start", loop: true }}
          className="mt-12 w-full max-w-6xl mx-auto"
        >
          <CarouselContent>
            {testimonials.map((t, i) => (
              <CarouselItem key={i} className="md:basis-1/2">
                <div className="p-2">
                  <Card className="h-full flex flex-col justify-between shadow-md border border-border">
                    <CardContent className="p-6 flex-grow flex flex-col justify-between">
                      <div className="flex gap-1 text-yellow-500 mb-2">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} className="h-4 w-4 fill-current" />
                        ))}
                      </div>
                      <p className="text-muted-foreground italic leading-relaxed text-sm md:text-base">
                        “{t.quote}”
                      </p>
                    </CardContent>
                    <div className="bg-muted/50 p-4 flex items-center gap-3">
                      <Avatar>
                        <AvatarImage
                          src={`https://api.dicebear.com/7.x/initials/svg?seed=${t.name}`}
                          alt={t.name}
                        />
                        <AvatarFallback>{t.initials}</AvatarFallback>
                      </Avatar>
                      <div className="flex flex-col text-left">
                        <span className="font-semibold text-foreground text-sm md:text-base">
                          {t.name}
                        </span>
                        {/* <span className="text-xs text-muted-foreground">
                          {t.meta}
                        </span> */}
                        <span className="text-xs text-muted-foreground italic">
                          {t.time}
                        </span>
                      </div>
                    </div>
                  </Card>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>

          <CarouselPrevious className="hidden sm:flex" />
          <CarouselNext className="hidden sm:flex" />
        </Carousel>
      </div>
    </section>
  );
}
