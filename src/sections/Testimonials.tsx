import memojiAvatar1 from "@/assets/images/memoji-avatar-1.png";
import memojiAvatar2 from "@/assets/images/memoji-avatar-2.png";
import memojiAvatar3 from "@/assets/images/memoji-avatar-3.png";
import memojiAvatar4 from "@/assets/images/memoji-avatar-4.png";
import memojiAvatar5 from "@/assets/images/memoji-avatar-5.png";
import SectionHeader from "@/components/SectionHeader";
import Image from "next/image";
import grainImage from "@/assets/images/grain.jpg";
import Card from "@/components/Card";
import { Fragment } from "react";

const testimonials = [
  {
    name: "David Wynn",
    position: "Founder @ SoftSpots Plushies",
    text: "Working with Chonny was like hiring a second brain for my business. He set up systems that save me hours every week. Product drops, emails, SEO it just runs now. I finally feel like I can breathe and focus on creating again.",
    avatar: memojiAvatar1,
  },
  {
    name: "Jules Rivera",
    position: "Artist & Shop Owner @ JulesDrawsStuff",
    text: "I had no idea how much time I was wasting until Chonny came in and streamlined everything. He didn’t just make my Shopify store look better. He made it work better. Every small brand needs someone like this.",
    avatar: memojiAvatar2,
  },
  {
    name: "Riley Kim",
    position: "Owner @ CozyCore Studio",
    text: "Before working with Chonny, I dreaded product launches. Now everything from the listings to the emails to social captions basically takes care of itself. It’s been a total game changer for my shop and my sanity.",
    avatar: memojiAvatar3,
  },
  {
    name: "Melanie T.",
    position: "Owner @ Melagurumi",
    text: "Chonny didn’t just build a website. He built the backbone of my entire store. From organizing my product categories to setting up personalized customer flows, everything now feels effortless. Highly, highly recommend.",
    avatar: memojiAvatar4,
  },
  {
    name: "Leo Santiago",
    position: "Illustrator & Vendor @ LeoSantiArt",
    text: "As someone who sells at cons and online, I always felt like I was behind on digital stuff. Chonny helped me set up systems that keep my shop consistent even when I’m busy prepping for shows. It’s like having a quiet assistant in the background.",
    avatar: memojiAvatar5,
  },
];

export const TestimonialsSection = () => {
  return (
    <div className="py-16 lg:py-24">
      <div className="container">
        <SectionHeader
          title="What Clients Say About Me"
          eyebrow="Happy Clients"
          description="Don't just take my word for it. See what my clients have to say about my work."
        />
        <div className="mt-12 lg:mt-20 flex overflow-x-clip [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)] py-4 -my-4">
          <div className="flex flex-none gap-8 pr-8 animate-move-left [animation-duration:90s] hover:[animation-play-state:paused]">
            {new Array(2).fill(0).map((_, index) => (
              <Fragment key={index}>
                {testimonials.map((testimonial) => (
                  <Card
                    key={testimonial.name}
                    className="max-w-xs md:max-w-md md:p-8 p-6 hover:-rotate-3 transition duration-300"
                  >
                    <div className="flex gap-4 items-center">
                      <div className="size-14 bg-gray-700 rounded-full inline-flex items-center justify-center flex-shrink-0">
                        <Image
                          src={testimonial.avatar}
                          alt={testimonial.name}
                          className="max-h-full"
                        />
                      </div>
                      <div>
                        <p className="text-lg font-semibold">
                          {testimonial.name}
                        </p>
                        {/* <p className="text-sm text-gray-400">
                          {testimonial.position}
                        </p> */}
                      </div>
                    </div>
                    <p className="mt-4 md:mt-6 text-white/80 text-sm md:text-base">
                      {testimonial.text}
                    </p>
                  </Card>
                ))}
              </Fragment>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
