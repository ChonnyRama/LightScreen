import SectionHeader from "@/components/SectionHeader";
import Card from "@/components/Card";
import CheckIcon from "@/assets/icons/check-circle.svg";

const packages = [
  {
    title: "Starter Site",
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
    title: "Content Boost",
    price: "Investment: $750",
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
    features: [
      "Custom Site + Backend Strategy",
      "Launch & Fulfillment Workflow Design",
      "System Integrations (Shopify, Notion, n8n)",
      "Ongoing Optimization & Reporting",
    ],
    cta: "Start Your System",
  },
];

export const PackagesSection = () => {
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
              <h3 className="text-2xl font-bold">{pkg.title}</h3>
              <ul className="flex flex-col gap-4 mt-6 mb-6">
                {pkg.features.map((feature) => (
                  <li
                    key={feature}
                    className="flex items-center gap-2 text-white/70"
                  >
                    <CheckIcon className="size-5 text-green-400" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-auto">
                <p className="text-sm font-normal text-center mb-4 min-h-[1.5rem]">
                  {pkg.price}
                </p>

                <button className="bg-white text-gray-950 h-12 w-full rounded-xl font-semibold mt-auto">
                  {pkg.cta}
                </button>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
