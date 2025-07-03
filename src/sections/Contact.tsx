import ArrowUpRightIcon from "@/assets/icons/arrow-up-right.svg";
import grainImage from "@/assets/images/grain.jpg";

export const ContactSection = () => {
  return (
    <div className="py-16 pt-12 lg:py-24 lg:pt-20">
      <div className="container" id="contact">
        <div className="bg-gradient-to-r from-emerald-300 to-sky-400 text-gray-900 py-8 px-10 rounded-3xl text-center relative overflow-hidden z-0 md:text-left">
          <div
            className="absolute inset-0 opacity-5 -z-10"
            style={{
              backgroundImage: `url(${grainImage.src})`,
            }}
          ></div>
          <div className="flex flex-col gap-8 md:gap-16 justify-center items-center md:flex-row">
            <div className="">
              <h2 className="font-serif text-2xl md:text-3xl">
                Let's build something that performs !
              </h2>
              <p className="text-sm mt-2 md:text-base">
                Ready to turn your vision into a high-performing site that
                reflects your brand, converts visitors, and drives real growth?
              </p>
              <div className="my-2 border-t border-white/10" />
              <p className="text-sm mt-2 md:text-base">
                Let’s talk about how I can help you level up with strategy,
                design, and moving your business forward.
              </p>
            </div>
            <div className="">
              <button className="text-white bg-gray-900 inline-flex items-center px-6 h-12 rounded-xl gap-2 w-max border border-gray-950">
                <span className="font-semibold">Book an Appointment</span>
                <ArrowUpRightIcon className="size-4" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
