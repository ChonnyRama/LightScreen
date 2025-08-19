import lsLogo from "@/assets/images/LSlogo.png";
import Image from "next/image";
import ArrowDown from "@/assets/icons/arrow-down.svg";
import grainImage from "@/assets/images/grain.jpg";
import StarIcon from "@/assets/icons/star.svg";
import { HeroOrbit } from "@/components/HeroOrbit";
import SparkleIcon from "@/assets/icons/sparkle.svg";
import ContactTrigger from "@/components/contact/ContactTrigger";

export const HeroSection = () => {
  return (
    <section
      className="py-28 md:py-44 lg:py-56 lg:-mt-10 relative z-0 overflow-x-clip"
      id="home"
    >
      <div className="absolute inset-0 [mask-image:linear-gradient(to_bottom,transparent,black_10%,black_70%,transparent)] -z-10">
        <div
          className="absolute inset-0 -z-30 opacity-5"
          style={{
            backgroundImage: `url(${grainImage.src})`,
          }}
        ></div>
        <div className="size-[620px] hero-ring"></div>
        <div className="size-[820px] hero-ring"></div>
        <div className="size-[1020px] hero-ring"></div>
        <div className="size-[1220px] hero-ring"></div>
        {/* shouldOrbit,
            shouldSpin,
            orbitDuration,
            spinDuration, */}
        <HeroOrbit
          size={430}
          rotation={-14}
          shouldOrbit
          orbitDuration="30s"
          shouldSpin
          spinDuration="3s"
        >
          <SparkleIcon className="size-8 text-yellow-300/20" />
        </HeroOrbit>
        <HeroOrbit
          size={440}
          rotation={79}
          shouldOrbit
          orbitDuration="32s"
          shouldSpin
          spinDuration="3s"
        >
          <SparkleIcon className="size-5 text-yellow-300/20" />
        </HeroOrbit>
        <HeroOrbit size={520} rotation={-41} shouldOrbit orbitDuration="34s">
          <div className="size-2 bg-yellow-300/20 rounded-full"></div>
        </HeroOrbit>
        <HeroOrbit
          size={530}
          rotation={178}
          shouldOrbit
          orbitDuration="36s"
          shouldSpin
          spinDuration="3s"
        >
          <SparkleIcon className="size-10 text-yellow-300/20" />
        </HeroOrbit>
        <HeroOrbit
          size={550}
          rotation={20}
          shouldOrbit
          orbitDuration="38s"
          shouldSpin
          spinDuration="6s"
        >
          <StarIcon className="size-12 text-yellow-300" />
        </HeroOrbit>
        <HeroOrbit
          size={590}
          rotation={98}
          shouldOrbit
          orbitDuration="40s"
          shouldSpin
          spinDuration="6s"
        >
          <StarIcon className="size-8 text-yellow-300" />
        </HeroOrbit>
        <HeroOrbit size={650} rotation={-5} shouldOrbit orbitDuration="42s">
          <div className="size-2 bg-yellow-300/20 rounded-full"></div>
        </HeroOrbit>
        <HeroOrbit
          size={710}
          rotation={144}
          shouldOrbit
          orbitDuration="44s"
          shouldSpin
          spinDuration="3s"
        >
          <SparkleIcon className="size-14 text-yellow-300/20" />
        </HeroOrbit>
        <HeroOrbit size={720} rotation={85} shouldOrbit orbitDuration="46s">
          <div className="size-3 bg-yellow-300/20 rounded-full"></div>
        </HeroOrbit>
        <HeroOrbit
          size={800}
          rotation={-72}
          shouldOrbit
          orbitDuration="48s"
          shouldSpin
          spinDuration="6s"
        >
          <StarIcon className="size-28 text-yellow-300" />
        </HeroOrbit>
      </div>
      <div className="container">
        <div className="relative top-[-0.9rem] md:top-[-2.3rem]">
          <div className="flex flex-col items-center z-10">
            <Image
              className="size-[100px]"
              src={lsLogo}
              alt="LightScreen logo"
            />
            <div
              className={`font-sans mb-4 text-center font-semibold text-4xl tracking-wide leading-tight bg-gradient-to-b from-sky-300 to-cyan-600 text-transparent bg-clip-text animate-pulse-slow`}
            >
              Light Screen Studio
            </div>
            <div className="bg-gray-950 border border-gray-800 px-4 py-1.5 inline-flex items-center gap-4 rounded-lg">
              <div className="bg-green-500 size-2.5 rounded-full relative">
                <div className="absolute inset-0 bg-green-500 animate-ping-large rounded-full"></div>
              </div>
              <div className="text-sm font-medium">
                Available for new projects
              </div>
            </div>
          </div>
          <div className="max-w-lg mx-auto">
            <h1 className="font-sans text-3xl text-center mt-8 tracking-wide md:text-4xl ">
              Websites and Systems That Grow With You
            </h1>
            <p className="mt-4 text-center text-white/60 md:text-lg">
              I help creative entrepreneurs and small brands build digital
              systems that quietly handle the busywork so you can stay focused
              on what you do best: creating, connecting, and growing your
              business.
            </p>
          </div>
          <div className="flex flex-col items-center mt-8 gap-4 md:flex-row justify-center">
            <button className="inline-flex items-center gap-2 border border-white/15 px-6 h-12 rounded-xl">
              <a href="#case-study" className="font-semibold">
                Explore My Work
              </a>
              <ArrowDown className="size-4" />
            </button>
            <ContactTrigger className="relative inline-flex items-center gap-2 px-6 h-12 overflow-hidden bg-white text-gray-900 rounded-xl group transition-all duration-300">
              {/* Animated sliding background */}
              <span className="absolute w-48 h-48 rounded rotate-[-40deg] bg-sky-500 bottom-0 left-0 -translate-x-full translate-y-full mb-9 ml-9 transition-all duration-500 ease-out group-hover:translate-x-0 group-hover:mb-32 group-hover:ml-0"></span>

              {/* Button content */}
              <span className="relative z-10 group-hover:animate-wave">👋</span>
              <span className="relative z-10 font-semibold transition-colors duration-300 ease-in-out group-hover:text-white">
                Book a Call
              </span>
            </ContactTrigger>
          </div>
        </div>
      </div>
      <div id="hero-end-sentinel" className="h-px w-full" />
    </section>
  );
};
