import { Link } from "react-router-dom";
import SEO from "../components/SEO";
import Icon from "../components/Icon";

export default function Invest() {
  return (
    <>
      <SEO
        title="Keyvostra Invest - Real Estate Investment Strategy in Casablanca"
        description="Rigorous ROI analysis, feasibility studies, and market intelligence for ultra-high-net-worth investors seeking premium real estate opportunities in Casablanca."
        path="/invest"
      />

      <div className="pt-[100px]">
        {/* Hero */}
        <section className="px-margin-mobile md:px-margin-desktop py-section-padding max-w-container-max mx-auto grid grid-cols-1 md:grid-cols-2 gap-gutter items-center">
          <div className="space-y-8">
            <span className="inline-block bg-primary-container text-on-primary-container px-4 py-1 rounded font-label-sm text-label-sm uppercase tracking-wider">
              Investment Strategy
            </span>
            <h1 className="font-display-lg text-headline-lg-mobile md:text-display-lg text-on-background">
              Strategic Real Estate Investments
            </h1>
            <p className="font-body-lg text-body-lg text-on-surface-variant">
              We provide rigorous feasibility studies and ROI analysis for ultra-high-net-worth individuals seeking
              premium real estate opportunities in Casablanca. Secure your legacy with data-driven architectural
              investments.
            </p>
            <div className="pt-4">
              <Link
                to="/contact"
                className="inline-block bg-primary text-on-primary font-label-md text-label-md px-8 py-4 rounded hover:bg-primary/90 transition-colors"
              >
                Book a Consultation
              </Link>
            </div>
          </div>
          <div className="relative h-[400px] md:h-[600px] w-full rounded-xl overflow-hidden border border-outline/30">
            <img
              className="absolute inset-0 w-full h-full object-cover"
              src="/images/office-tower-glass.jpg"
              alt="Glass facade of a modern commercial office building in Casablanca, representative of Keyvostra Invest's commercial acquisitions."
              fetchPriority="high"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-inverse-surface/40 to-transparent" />
          </div>
        </section>

        {/* Services / Feasibility Bento */}
        <section className="bg-surface-container-low px-margin-mobile md:px-margin-desktop py-section-padding">
          <div className="max-w-container-max mx-auto space-y-16">
            <div className="text-center max-w-3xl mx-auto space-y-4">
              <h2 className="font-headline-lg text-headline-lg text-on-background">Rigorous Analysis &amp; Feasibility</h2>
              <p className="font-body-md text-body-md text-on-surface-variant">
                Our comprehensive investment services ensure every structural and financial detail is meticulously
                evaluated before commitment.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-gutter auto-rows-[300px]">
              <div className="col-span-1 md:col-span-2 bg-surface rounded-xl p-8 border border-outline/30 flex flex-col justify-between relative overflow-hidden group">
                <div className="z-10 relative space-y-4 max-w-md">
                  <Icon name="analytics" fill className="text-primary text-4xl" />
                  <h3 className="font-headline-md text-headline-md text-on-surface">ROI Projections</h3>
                  <p className="font-body-md text-body-md text-on-surface-variant">
                    Advanced financial modeling and long-term yield forecasting tailored to the Moroccan luxury
                    market.
                  </p>
                </div>
                <div className="absolute bottom-0 right-0 w-2/3 h-full opacity-20 group-hover:opacity-30 transition-opacity duration-500">
                  <img
                    className="w-full h-full object-cover"
                    loading="lazy"
                    src="/images/aerial-neighborhood.jpg"
                    alt=""
                  />
                </div>
              </div>
              <div className="col-span-1 bg-surface rounded-xl p-8 border border-outline/30 flex flex-col justify-between hover:shadow-[0px_10px_40px_rgba(17,28,68,0.05)] transition-shadow">
                <Icon name="architecture" fill className="text-primary text-4xl" />
                <div>
                  <h3 className="font-headline-md text-headline-md text-on-surface mb-2">Feasibility Studies</h3>
                  <p className="font-body-md text-body-md text-on-surface-variant">
                    Architectural and zoning assessments ensuring compliance and optimal land use.
                  </p>
                </div>
              </div>
              <div className="col-span-1 bg-surface rounded-xl p-8 border border-outline/30 flex flex-col justify-between hover:shadow-[0px_10px_40px_rgba(17,28,68,0.05)] transition-shadow">
                <Icon name="real_estate_agent" fill className="text-primary text-4xl" />
                <div>
                  <h3 className="font-headline-md text-headline-md text-on-surface mb-2">Market Intelligence</h3>
                  <p className="font-body-md text-body-md text-on-surface-variant">
                    Deep insights into emerging luxury corridors and corporate real estate shifts in Casablanca.
                  </p>
                </div>
              </div>
              <div className="col-span-1 md:col-span-2 relative rounded-xl overflow-hidden border border-outline/30">
                <img
                  className="absolute inset-0 w-full h-full object-cover"
                  loading="lazy"
                  src="/images/aerial-neighborhood.jpg"
                  alt="Aerial view of a modern residential neighborhood in Casablanca, illustrating Keyvostra Invest's portfolio acquisition planning."
                />
                <div className="absolute inset-0 bg-inverse-surface/60 flex flex-col justify-end p-8">
                  <h3 className="font-headline-md text-headline-md text-surface-bright mb-2">Portfolio Acquisition</h3>
                  <p className="font-body-md text-body-md text-surface-variant max-w-lg">
                    Strategic acquisition planning for institutional and private portfolios.
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
