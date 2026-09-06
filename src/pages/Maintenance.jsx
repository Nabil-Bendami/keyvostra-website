import { Link } from "react-router-dom";
import SEO from "../components/SEO";
import Icon from "../components/Icon";

export default function Maintenance() {
  return (
    <>
      <SEO
        title="Keyvostra Maintenance - Premium Property Care in Casablanca"
        description="Preventive and reactive maintenance for premium Casablanca properties: electrical & HVAC, plumbing integrity, and restorative finishing that protects your investment."
        path="/maintenance"
      />

      <div className="pt-[100px]">
        {/* Hero */}
        <section className="px-margin-mobile md:px-margin-desktop py-section-padding max-w-container-max mx-auto grid grid-cols-1 md:grid-cols-2 gap-gutter items-center">
          <div>
            <h1 className="font-display-lg text-headline-lg-mobile md:text-display-lg text-on-background mb-6">
              Impeccable Maintenance for Premium Assets.
            </h1>
            <p className="font-body-lg text-body-lg text-on-surface-variant mb-8">
              Protecting your real estate investments with rigorous preventive maintenance and rapid technical
              repair services in Casablanca. We ensure your properties maintain their luxury standard.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                to="/contact"
                className="bg-primary text-on-primary px-8 py-4 font-label-md text-label-md rounded hover:bg-primary-container transition-colors"
              >
                Book a Consultation
              </Link>
              <a
                href="#services"
                className="border border-outline text-on-surface px-8 py-4 font-label-md text-label-md rounded hover:bg-surface-variant transition-colors"
              >
                Explore Services
              </a>
            </div>
          </div>
          <div className="relative h-[400px] md:h-[600px] rounded-lg overflow-hidden">
            <img
              className="absolute inset-0 w-full h-full object-cover"
              src="/images/interior-minimalist-living.jpg"
              alt="Pristine, well-maintained luxury interior in a Casablanca villa, kept to Keyvostra Maintenance's preventive care standard."
              fetchPriority="high"
            />
          </div>
        </section>

        {/* Services Details Bento */}
        <section id="services" className="bg-surface-container-low px-margin-mobile md:px-margin-desktop py-section-padding">
          <div className="max-w-container-max mx-auto">
            <h2 className="font-headline-lg text-headline-lg mb-12 text-center">Comprehensive Technical Solutions</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[300px]">
              <div className="md:col-span-2 bg-surface rounded-xl p-8 border border-outline/30 flex flex-col justify-between hover:shadow-[0px_10px_40px_rgba(17,28,68,0.05)] transition-shadow">
                <div>
                  <Icon name="home_repair_service" className="text-primary text-4xl mb-4" />
                  <h3 className="font-headline-md text-headline-md mb-2">Preventive Management</h3>
                  <p className="font-body-md text-body-md text-on-surface-variant">
                    Scheduled structural and system checks to mitigate risks before they occur, preserving the
                    architectural integrity of high-end assets.
                  </p>
                </div>
              </div>
              <div className="bg-surface rounded-xl p-8 border border-outline/30 flex flex-col justify-between hover:shadow-[0px_10px_40px_rgba(17,28,68,0.05)] transition-shadow">
                <div>
                  <Icon name="bolt" className="text-primary text-4xl mb-4" />
                  <h3 className="font-headline-md text-headline-md mb-2">Electrical &amp; HVAC</h3>
                  <p className="font-body-md text-body-md text-on-surface-variant">
                    Expert servicing of climate control and power systems tailored for luxury estates.
                  </p>
                </div>
              </div>
              <div className="bg-surface rounded-xl p-8 border border-outline/30 flex flex-col justify-between hover:shadow-[0px_10px_40px_rgba(17,28,68,0.05)] transition-shadow">
                <div>
                  <Icon name="water_drop" className="text-primary text-4xl mb-4" />
                  <h3 className="font-headline-md text-headline-md mb-2">Plumbing Integrity</h3>
                  <p className="font-body-md text-body-md text-on-surface-variant">
                    Rapid response and routine maintenance for complex water systems.
                  </p>
                </div>
              </div>
              <div className="md:col-span-2 relative rounded-xl overflow-hidden group">
                <img
                  className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  loading="lazy"
                  src="/images/marble-lobby.jpg"
                  alt="Pristine marble finishes in a Casablanca property after restorative maintenance work by Keyvostra Maintenance."
                />
                <div className="absolute inset-0 bg-gradient-to-t from-on-background/80 to-transparent" />
                <div className="absolute bottom-8 left-8">
                  <h3 className="font-headline-md text-headline-md text-on-primary mb-2">Restorative Finishing</h3>
                  <p className="font-body-md text-body-md text-on-primary/80 max-w-md">
                    Detail-oriented aesthetic repairs ensuring properties look as pristine as the day they were
                    built.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
