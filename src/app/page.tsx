import { Header } from '@/components/landing/header';
import { Hero } from '@/components/landing/hero';
import { StrugglingWith } from '@/components/landing/struggling-with';
import { Statistics } from '@/components/landing/statistics';
import { PersonalisedTreatment } from '@/components/landing/personalised-treatment';
import { Symptoms } from '@/components/landing/symptoms';
import { Services } from '@/components/landing/services';
import { AboutDoctor } from '@/components/landing/about-doctor';
import { SocialFeed } from '@/components/landing/social-feed';
import { Testimonials } from '@/components/landing/testimonials';
import { CaseStudies } from '@/components/landing/case-studies';
import { Pricing } from '@/components/landing/pricing';
import { Appointment } from '@/components/landing/appointment';
import { Faq } from '@/components/landing/faq';
import { Footer } from '@/components/landing/footer';
import { ScrollAnimation } from '@/components/ui/scroll-animation';

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        <ScrollAnimation>
          <Hero />
        </ScrollAnimation>
        <ScrollAnimation>
          <StrugglingWith />
        </ScrollAnimation>
        <ScrollAnimation>
          <Statistics />
        </ScrollAnimation>
        <ScrollAnimation>
          <PersonalisedTreatment />
        </ScrollAnimation>
        <ScrollAnimation>
          <Symptoms />
        </ScrollAnimation>
        <ScrollAnimation>
          <Services />
        </ScrollAnimation>
        <ScrollAnimation>
          <AboutDoctor />
        </ScrollAnimation>
        <ScrollAnimation>
          <SocialFeed />
        </ScrollAnimation>
        <ScrollAnimation>
          <Testimonials />
        </ScrollAnimation>
        <ScrollAnimation>
          <CaseStudies />
        </ScrollAnimation>
        <ScrollAnimation>
          <Pricing />
        </ScrollAnimation>
        <ScrollAnimation>
          <Appointment />
        </ScrollAnimation>
        <ScrollAnimation>
          <Faq />
        </ScrollAnimation>
      </main>
      <Footer />
    </div>
  );
}
