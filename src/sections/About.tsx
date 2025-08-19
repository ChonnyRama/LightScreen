"use client";
import Card from "@/components/Card";
import SectionHeader from "@/components/SectionHeader";
import Image from "next/image";
import JavaScriptIcon from "@/assets/icons/square-js.svg";
import HTMLIcon from "@/assets/icons/html5.svg";
import CSSIcon from "@/assets/icons/css3.svg";
import ReactIcon from "@/assets/icons/react.svg";
import ChromeIcon from "@/assets/icons/chrome.svg";
import GitHubIcon from "@/assets/icons/github.svg";
import MapImage from "@/assets/images/map1.jpg";
import LocationIcon from "@/assets/images/location-pin.png";
import CardHeader from "@/components/CardHeader";
import ToolboxItems from "@/components/ToolboxItems";
import { motion } from "framer-motion";
import { useRef } from "react";
import inspo1 from "@/assets/images/inspo1.png";
import inspo2 from "@/assets/images/inspo2.png";
import inspo3 from "@/assets/images/inspo3.png";
import figma from "@/assets/icons/icons8-figma.svg";
import googleAnalytics from "@/assets/icons/icons8-google-analytics.svg";
import shopify from "@/assets/icons/icons8-shopify.svg";
import stripe from "@/assets/icons/icons8-stripe.svg";

const toolboxItems = [
  {
    title: "JavaScript",
    iconType: JavaScriptIcon,
  },
  {
    title: "HTML5",
    iconType: HTMLIcon,
  },
  {
    title: "CSS3",
    iconType: CSSIcon,
  },
  {
    title: "React",
    iconType: ReactIcon,
  },
  {
    title: "Chrome",
    iconType: ChromeIcon,
  },
  {
    title: "GitHub",
    iconType: GitHubIcon,
  },
  {
    title: "Figma",
    iconType: figma,
  },
  {
    title: "Google Analytics",
    iconType: googleAnalytics,
  },
  {
    title: "Shopify",
    iconType: shopify,
  },
  {
    title: "Stripe",
    iconType: stripe,
  },
];

const hobbies = [
  {
    title: "Gaming",
    emoji: "🎮",
    left: "5%",
    top: "5%",
  },
  {
    title: "Traveling",
    emoji: "✈️",
    left: "50%",
    top: "5%",
  },

  {
    title: "Music",
    emoji: "🎵",
    left: "35%",
    top: "40%",
  },
  {
    title: "Cooking",
    emoji: "🍳",
    left: "10%",
    top: "35%",
  },
  {
    title: "Reading",
    emoji: "📚",
    left: "70%",
    top: "45%",
  },
  {
    title: "Anime",
    emoji: "🎥",
    left: "5%",
    top: "65%",
  },
  {
    title: "Fitness",
    emoji: "🏋️",
    left: "45%",
    top: "70%",
  },
];

export const AboutSection = () => {
  const constraintRef = useRef(null);

  return (
    <div className="py-20 lg:py-28">
      <div className="container scroll-mt-24" id="about">
        <SectionHeader
          eyebrow="About Me"
          title="A Glimpse Into My World"
          description="Learn more about who I am, what I do, and what inspires me"
        />
        <div className="mt-20 flex flex-col gap-8">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-5 lg:grid-cols-3">
            <Card className="h-[320px] md:col-span-2 lg:col-span-1 overflow-x-hidden">
              <CardHeader
                title="Inspiration"
                description="Designs, creators, and moments that spark my creativity."
              />
              <div className="flex gap-1 px-2 group h-full overflow-x-hidden">
                {[inspo2, inspo1, inspo3].map((img, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{
                      delay: i * 0.15,
                      duration: 0.4,
                      ease: "easeOut",
                    }}
                    viewport={{ once: true }}
                    className="
                      relative flex-1 aspect-square overflow-hidden rounded-lg
                      transition-all duration-500 ease-in-out
                      group-hover:opacity-60 hover:!flex-[3] hover:!opacity-100
                    "
                  >
                    <Image
                      src={img}
                      alt={`Inspiration ${i + 1}`}
                      fill
                      className="object-cover transition-transform duration-500 ease-in-out"
                      sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, 33vw"
                    />
                  </motion.div>
                ))}
              </div>
            </Card>
            <Card className="h-[320px] md:col-span-3 lg:col-span-2">
              <CardHeader
                title="My Toolbox"
                description="Discover the technologies and tools I use to build amazing digital experiences."
                className=""
              />
              <ToolboxItems
                items={toolboxItems}
                className=""
                itemsWrapperClassName="animate-move-left [animation-duration:35s] hover:[animation-play-state:paused]"
              />
              <ToolboxItems
                items={toolboxItems}
                className="mt-6"
                itemsWrapperClassName="-translate-x-1/2 animate-move-right [animation-duration:17s] hover:[animation-play-state:paused]"
              />
            </Card>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-5 gap-8 lg:grid-cols-3">
            <Card className="h-[320px] p-0 flex flex-col md:col-span-3 lg:col-span-2">
              <CardHeader
                title="Beyond the Code"
                description="Explore my interests and hobbies beyond the digital realm."
                className="px-6 pt-6"
              />
              <div className="relative flex-1" ref={constraintRef}>
                {hobbies.map((hobby) => (
                  <motion.div
                    key={hobby.title}
                    className="inline-flex items-center gap-2 px-6 bg-gradient-to-r from-emerald-300 to-sky-400 rounded-full py-1.5 absolute"
                    style={{
                      left: hobby.left || "50%",
                      top: hobby.top || "50%",
                    }}
                    drag
                    dragConstraints={constraintRef}
                  >
                    <span className="font-medium text-gray-950">
                      {hobby.title}
                    </span>
                    <span role="img" aria-label={hobby.title}>
                      {hobby.emoji}
                    </span>
                  </motion.div>
                ))}
              </div>
            </Card>
            <Card className="h-[320px] p-0 relative md:col-span-2 lg:col-span-1">
              <Image
                className="h-full w-full object-cover"
                src={MapImage}
                alt="Map"
              ></Image>
              <div className="absolute top-[43%] left-[48%] md:left-[47%] -translate-x-1/2 -translate-y-1/2 size-5 rounded-full  after:content-[''] after:absolute after:inset-0 after:outline-2 after:-outline-offset-2 after:rounded-full after:outline-gray-950/30">
                <div className="absolute inset-0 rounded-full bg-gradient-to-r from-emerald-300 to-sky-400 -z-10"></div>
                <div className="absolute inset-0 rounded-full bg-gradient-to-r from-emerald-300 to-sky-400 -z-20 animate-ping [animation-duration:2s]"></div>

                <Image
                  src={LocationIcon}
                  alt="Location"
                  className="size-4 rounded-full object-cover absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
                />
              </div>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};
