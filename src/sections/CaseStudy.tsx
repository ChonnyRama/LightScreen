import Image from "next/image";
import CheckIcon from "@/assets/icons/check-circle.svg";
import ArrowUpRightIcon from "@/assets/icons/arrow-up-right.svg";
import SectionHeader from "@/components/SectionHeader";
import Card from "@/components/Card";
import caseStudyImage from "@/assets/images/Before_after.png";
import responsiveImage from "@/assets/images/Responsive.png";

const caseStudy = {
  company: "Melagurumi",
  year: "2025",
  title: "Etsy Migration to Shopify",
  description:
    "Melanie runs a handmade plush business that started with convention booths and later expanded to Etsy. As her brand grew, so did her audience, with over 10,000 subscribers on YouTube and 20,000+ followers on Instagram. With a solid community behind her, she wanted to move beyond third-party platforms and build a space that felt truly her own.",
  challenges: [
    "Rising Etsy fees were cutting into profits.",
    "Limited customization options on Etsy made it hard to stand out.",
    "No dedicated space to showcase her full portfolio.",
    "Needed something that aligned with her brand vision.",
    "Moving away from Etsy meant losing built-in marketplace visibility",
  ],
  solutions: [
    "Designed a storefront aligned with her brand’s soft, handmade aesthetic.",
    "Ensured responsive, mobile-first layouts for fans browsing from social media.",
    "Integrated email capture for future newsletter and launch campaigns.",
    "Used clear navigation and visual hierarchy to improve product discovery.",
    "Implemented SEO best practices to maintain visibility in search results.",
  ],
  results: [
    { title: "Increased lead generation by 60%" },
    { title: "45% increase in organic traffic" },
    { title: "Reduced bounce rate by 30%" },
  ],
  link: "#",
  image1: caseStudyImage,
  image2: responsiveImage,
};

export const CaseStudySection = () => {
  return (
    <section className="py-16 lg:py-24" id="case-study">
      <div className="container">
        <SectionHeader
          title="Case Study"
          eyebrow="A Real-world Success Story"
          description="See how we transformed a client's vision into a powerful digital tool that drives results."
        />
        <Card className="mt-10 md:mt-20 p-8 md:p-12 lg:p-16">
          <div className="lg:grid lg:grid-cols-2 lg:gap-16">
            <div className="lg:col-span-1">
              <div className="bg-gradient-to-r from-emerald-300 to-sky-400 inline-flex font-bold uppercase tracking-widest text-sm text-transparent bg-clip-text gap-2">
                <span>{caseStudy.company}</span>
                <span>&bull;</span>
                <span>{caseStudy.year}</span>
              </div>
              <h3 className="font-serif text-2xl mt-2 md:text-4xl md:mt-5">
                {caseStudy.title}
              </h3>
              <p className="mt-4 text-white/70">{caseStudy.description}</p>

              <div className="mt-8">
                <h4 className="font-semibold text-lg">Challenges</h4>
                <ul className="flex flex-col gap-2 mt-2">
                  {caseStudy.challenges.map((challenge) => (
                    <li
                      className="flex gap-2 items-center text-sm text-white/50"
                      key={challenge}
                    >
                      <CheckIcon className="size-5 text-red-500" />
                      <span>{challenge}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-8">
                <h4 className="font-semibold text-lg">Solutions</h4>
                <ul className="flex flex-col gap-2 mt-2">
                  {caseStudy.solutions.map((solution) => (
                    <li
                      className="flex gap-2 items-center text-sm text-white/50"
                      key={solution}
                    >
                      <CheckIcon className="size-5 text-green-500" />
                      <span>{solution}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-8">
                <h4 className="font-semibold text-lg">Results</h4>
                <ul className="flex flex-col gap-4 mt-4">
                  {caseStudy.results.map((result) => (
                    <li
                      className="flex gap-2 items-center text-sm text-white/50 md:text-base"
                      key={result.title}
                    >
                      <CheckIcon className="size-5 md:size-6" />
                      <span className="">{result.title}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* <a href={caseStudy.link}>
                <button className="bg-white text-gray-950 h-12 w-full rounded-xl font-semibold inline-flex items-center justify-center gap-2 mt-8 md:w-auto px-6">
                  <span className="">Visit Live Site</span>
                  <ArrowUpRightIcon className="size-4" />
                </button>
              </a> */}
            </div>
            <div className="relative mt-8 lg:mt-0 flex flex-col gap-8">
              <Image
                src={caseStudy.image1}
                alt={caseStudy.title}
                className="w-full h-auto rounded-lg "
              />
              <Image
                src={caseStudy.image2}
                alt={caseStudy.title}
                className="w-full h-auto rounded-lg"
              />
            </div>
          </div>
        </Card>
      </div>
    </section>
  );
};
