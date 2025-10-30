"use client";

import { useEffect } from "react";
import { Button } from "../ui/button";

export function SocialFeed() {
  useEffect(() => {
    // Load Instagram embed script
    const script = document.createElement("script");
    script.src = "//www.instagram.com/embed.js";
    script.async = true;
    document.body.appendChild(script);

    // Reprocess embeds when script is ready
    script.onload = () => {
      if (window.instgrm) window.instgrm.Embeds.process();
    };

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  const posts = [
    "https://www.instagram.com/p/C-mnXt5yLj-/",
    "https://www.instagram.com/p/DADL7d_Jc2i/",
    "https://www.instagram.com/p/DBTIE6kMNYH/",
    "https://www.instagram.com/p/DBYKsV8hqLG/",
  ];

  return (
    <section className="py-12 sm:py-16 lg:py-20 bg-secondary">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="font-headline text-3xl md:text-4xl font-semibold text-foreground">
            Connect With Us
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Follow our journey and get daily inspiration on our social media
            channels.
          </p>
        </div>

        {/* Instagram grid */}
        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {posts.map((link, i) => (
            <div key={i} className="overflow-hidden rounded-xl">
              <blockquote
                className="instagram-media w-full !max-w-full !min-w-0"
                data-instgrm-permalink={link}
                data-instgrm-version="14"
              ></blockquote>
            </div>
          ))}
        </div>

        {/* CTA Button */}
        <div className="text-center mt-12">
          <Button size="lg" variant="outline" asChild>
            <a
              href="https://www.instagram.com/dr.meghna.holisticmindclinic"
              target="_blank"
              rel="noopener noreferrer"
            >
              Follow on Instagram
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
}
