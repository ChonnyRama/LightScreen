"use client";
import SectionHeader from "@/components/SectionHeader";
import Card from "@/components/Card";
import CheckIcon from "@/assets/icons/check-circle.svg";
import React from "react";
import { Typewriter } from "react-simple-typewriter";

const services = [
  {
    number: "01",
    title: "Web Development",
    description:
      "A website shouldn't just look good, it should work hard for you. I build performance driven websites that are fast, secure, and engaging. Whether you need a simple landing page or a digital storefront, I have the skills to bring your vision to life.",
    features: [
      "CMS Integration",
      "E-commerce Setup",
      "Image and Asset Optimization",
    ],
  },
  {
    number: "02",
    title: "Web Design",
    description:
      "Capitalize on your digital momentum with a website that truly connects with your audience's feelings and desires. I design high-converting sites that align with your business goals, helping you stand out and scale effectively.",
    features: ["Conversion Optimization", "Responsive Design", "Wireframing"],
  },
  {
    number: "03",
    title: "SEO",
    description:
      "You poured energy into your brand and that deserves to be seen. I optimize your online presence to elevate your visibility in search results, helping your business attract the right audience and stand out in the digital landscape.",
    features: [
      "Technical SEO",
      "On-Page Optimization",
      "SEO Audits & Analysis",
    ],
  },
];

export const ServicesSection = () => {
  return (
    <section className="pb-16 lg:py-24 scroll-mt-24" id="services">
      <div className="container">
        <SectionHeader
          title="How I Can Help You"
          eyebrow="Services"
          description="Tired of websites that don't reflect your brand or bring results? I design and build digital experiences that reflect your unique vision and help your business grow with confidence."
        />
      </div>
      <div className="container grid grid-cols-1 gap-8 mt-12">
        {services.map((service, serviceIndex) => (
          <Card
            key={service.number}
            className=" p-6 sticky"
            style={{
              top: `calc(64px + ${serviceIndex * 80}px)`,
            }}
          >
            <div className="grid md:grid-cols-2 gap-4 items-start mb-4 px-4">
              <span className="text-4xl font-bold text-sky-400 mr-3">
                {service.number}
              </span>
              <h3 className="text-3xl font-semibold ">
                <Typewriter
                  words={[service.title]}
                  loop={1}
                  cursor
                  cursorStyle="_"
                />
              </h3>
              <div className="md:col-start-2">
                <p className="text-white/80 mb-4">{service.description}</p>
                <ul className="list-disc list-inside space-y-2">
                  {service.features.map((feature, index) => (
                    <li key={index} className="flex items-center">
                      <CheckIcon className="w-5 h-5 text-sky-400 mr-2" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </section>
  );
};
