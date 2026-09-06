import InternationalPresence from "../components/InternationalPresence";
import SEO from "../components/SEO";
import Icon from "../components/Icon";
import BackgroundVideo from "../components/BackgroundVideo";
import { site } from "../data/siteData";

export default function About() {
  return (
    <>
      <SEO
        title="About Keyvostra Group - Real Estate Leadership in Casablanca"
        description="Meet the team behind Keyvostra Group: a real estate ecosystem operating in Casablanca and the United Kingdom, built on European precision, architectural integrity, and generational legacy."
        path="/about"
      />

      <div className="pt-[100px] md:pt-[120px]">
        {/* Hero */}
        <section className="px-margin-mobile md:px-margin-desktop py-section-padding max-w-container-max mx-auto grid grid-cols-1 md:grid-cols-12 gap-gutter items-center">
          <div className="md:col-span-7 flex flex-col gap-6">
            <h1 className="font-display-lg text-headline-lg-mobile md:text-display-lg text-on-surface">
              Defining the next era of{" "}
              <span className="text-primary">Casablanca</span> real estate.
            </h1>
            <p className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl">
              Founded on the principles of European precision and Moroccan
              heritage, Keyvostra Group is an authoritative presence in high-end
              property development, investment, and management.
            </p>
          </div>
          <div className="md:col-span-5 h-[400px] md:h-[600px] relative rounded overflow-hidden border border-outline/30 shadow-[0px_10px_40px_rgba(17,28,68,0.05)]">
            <BackgroundVideo
              src="/videos/founder-rising.mp4"
              poster="/images/founder-rising-poster.jpg"
              className="absolute inset-0 w-full h-full object-cover"
              priority
            />
            <div className="absolute bottom-6 left-6 right-6 bg-surface/90 backdrop-blur-md p-6 rounded border border-outline/20">
              <p className="font-label-md text-label-md text-primary mb-1">
                FOUNDER &amp; CEO
              </p>
              <p className="font-headline-md text-headline-md text-on-surface">
                {site.founder.name}
              </p>
            </div>
          </div>
        </section>

        {/* Mission & Values Bento */}
        <section className="bg-surface-container-low px-margin-mobile md:px-margin-desktop py-section-padding">
          <div className="max-w-container-max mx-auto">
            <div className="mb-16">
              <h2 className="font-headline-lg text-headline-lg-mobile md:text-headline-lg text-on-surface mb-4">
                Our Foundations
              </h2>
              <div className="h-1 w-24 bg-primary" />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-gutter">
              <div className="md:col-span-2 bg-surface p-8 md:p-12 rounded border border-outline/30 shadow-[0px_10px_40px_rgba(17,28,68,0.05)] flex flex-col justify-between hover:-translate-y-1 transition-transform duration-300">
                <div>
                  <Icon
                    name="architecture"
                    className="text-primary text-4xl mb-6"
                  />
                  <h3 className="font-headline-md text-headline-md text-on-surface mb-4">
                    The Mission
                  </h3>
                  <p className="font-body-lg text-body-lg text-on-surface-variant">
                    To engineer legacy through space. We meticulously curate and
                    manage properties that serve as long-term assets for
                    ultra-high-net-worth individuals and corporate entities,
                    ensuring unparalleled structural integrity and aesthetic
                    relevance in a rapidly evolving market.
                  </p>
                </div>
              </div>
              <div className="bg-surface p-8 md:p-12 rounded border border-outline/30 shadow-[0px_10px_40px_rgba(17,28,68,0.05)] flex flex-col justify-between hover:-translate-y-1 transition-transform duration-300">
                <div>
                  <Icon
                    name="verified_user"
                    className="text-primary text-4xl mb-6"
                  />
                  <h3 className="font-headline-md text-headline-md text-on-surface mb-4">
                    Precision
                  </h3>
                  <p className="font-body-md text-body-md text-on-surface-variant">
                    Exacting standards in every acquisition, structural
                    assessment, and management protocol. We leave no metric
                    unmeasured.
                  </p>
                </div>
              </div>
              <div className="bg-surface p-8 md:p-12 rounded border border-outline/30 shadow-[0px_10px_40px_rgba(17,28,68,0.05)] flex flex-col justify-between hover:-translate-y-1 transition-transform duration-300">
                <div>
                  <Icon name="public" className="text-primary text-4xl mb-6" />
                  <h3 className="font-headline-md text-headline-md text-on-surface mb-4">
                    Legacy
                  </h3>
                  <p className="font-body-md text-body-md text-on-surface-variant">
                    Focusing on generational wealth preservation through assets
                    that stand the test of time, both physically and
                    financially.
                  </p>
                </div>
              </div>
              <div className="md:col-span-2 bg-surface overflow-hidden rounded border border-outline/30 shadow-[0px_10px_40px_rgba(17,28,68,0.05)] relative min-h-[300px]">
                <img
                  src="/images/facade-glass-steel.jpg"
                  alt="Architectural detail of a modern Casablanca building facade combining glass, steel, and stone, reflecting Keyvostra Group's architectural standards."
                  loading="lazy"
                  className="absolute inset-0 w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-on-surface/80 to-transparent" />
                <div className="absolute bottom-8 left-8 right-8">
                  <h3 className="font-headline-md text-headline-md text-on-primary mb-2">
                    Architectural Integrity
                  </h3>
                  <p className="font-body-md text-body-md text-surface-bright/90 max-w-lg">
                    Beyond transactions, we are custodians of the built
                    environment.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
      <InternationalPresence />
    </>
  );
}
