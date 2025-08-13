import SectionHeader from "@/components/SectionHeader";
import Card from "@/components/Card";
import CheckIcon from "@/assets/icons/check-circle.svg";

const packages = [
  {
    title: "Foundation Site",
    bestFor: "Perfect for shop owners moving off Etsy or starting fresh",
    price: "Investment: $500",
    features: [
      "Up to 5 Pages",
      "Basic SEO Setup",
      "Mobile-Optimized Design",
      "Launch-Ready Shopify or Framer Site",
      "1 Month of Support",
    ],
    cta: "Get Started",
  },
  {
    title: "Conversion Boost",
    price: "Investment: $750",
    bestFor:
      "Active shops looking to save time and boost their online presence",
    features: [
      "Up to 10 Pages",
      "Smart Product Descriptions",
      "Custom Post-Purchase Emails",
      "Tag & Collection Setup",
      "Caption Templates for Drops",
    ],
    cta: "Boost My Shop",
  },
  {
    title: "Growth System",
    price: "Contact for Quote",
    bestFor:
      "Scaling brands ready to streamline their operations and grow their business",
    features: [
      "Custom Site + Backend Strategy",
      "Launch & Fulfillment Workflow Design",
      "System Integrations (Shopify, Notion, n8n)",
      "Ongoing Optimization & Reporting",
    ],
    cta: "Start Your System",
  },
];

export const PackagesSection = ({
  onContactClick,
}: {
  onContactClick: (pkgName: string) => void;
}) => {
  return (
    <section className="py-16 lg:py-24 scroll-mt-24" id="packages">
      <div className="md:max-w-[1080px] mx-auto px-4">
        <SectionHeader
          title="Choose Your Package"
          eyebrow="Pricing"
          description="Select the perfect package to fit your needs and budget."
        />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-10 md:mt-20">
          {packages.map((pkg) => (
            <Card
              key={pkg.title}
              className=" p-8 flex flex-col justify-between h-full shadow-lg shadow-blue-300/20 hover:shadow-xl hover:shadow-blue-500/30 transition-shadow duration-300"
            >
              <h3 className="text-2xl font-bold text-center">{pkg.title}</h3>
              <p className="text-sm mt-6 text-white/60">{pkg.bestFor}</p>
              <ul className="flex flex-col gap-3 mt-6 mb-6">
                {pkg.features.map((feature) => (
                  <li
                    key={feature}
                    className="flex items-center gap-2 text-white/70"
                  >
                    <CheckIcon className="size-5 shrink-0 text-green-400" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-auto">
                <p className="text-sm font-normal text-center mb-4 min-h-[1.5rem] text-white/40">
                  {pkg.price}
                </p>

                <button
                  className="group relative flex h-12 items-center justify-center overflow-hidden rounded-md bg-white px-6 font-medium text-gray-800 transition hover:scale-110 mx-auto"
                  onClick={() => onContactClick(pkg.title)}
                >
                  <span>{pkg.cta}</span>
                  <div className="absolute inset-0 flex h-full w-full justify-center [transform:skew(-12deg)_translateX(-100%)] group-hover:duration-1000 group-hover:[transform:skew(-12deg)_translateX(100%)]">
                    <div className="relative h-full w-8 bg-black/40"></div>
                  </div>
                </button>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
