import { Link } from "react-router-dom";
import SEO from "../components/SEO";
import Icon from "../components/Icon";

export default function BusinessPlan() {
  return (
    <>
      <SEO
        title="Keyvostra Business Plan - Market Study & Business Plan Creation from Scratch"
        description="Market studies, financial projections, and complete business plans built from zero for real estate and entrepreneurial projects in Morocco and the United Kingdom."
        path="/business-plan"
      />

      <div className="pt-[100px]">
        {/* Hero */}
        <section className="px-margin-mobile md:px-margin-desktop py-section-padding max-w-container-max mx-auto grid grid-cols-1 md:grid-cols-2 gap-gutter items-center">
          <div className="space-y-8">
            <span className="inline-block bg-primary-container text-on-primary-container px-4 py-1 rounded font-label-sm text-label-sm uppercase tracking-wider">
              Study &amp; Business Plan
            </span>
            <h1 className="font-display-lg text-headline-lg-mobile md:text-display-lg text-on-background">
              Your Project, Built From Zero
            </h1>
            <p className="font-body-lg text-body-lg text-on-surface-variant">
              You bring the idea — we build everything around it. Market study, financial model, and a complete,
              bank-ready business plan written from a blank page. For a first investment, a new company, or a real
              estate operation in Morocco and the United Kingdom.
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
              src="/images/marble-lobby.jpg"
              alt="Marble lobby of a premium building, representative of the projects Keyvostra structures through market studies and business plans."
              fetchPriority="high"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-inverse-surface/40 to-transparent" />
          </div>
        </section>

        {/* What is included */}
        <section className="bg-surface-container-low px-margin-mobile md:px-margin-desktop py-section-padding">
          <div className="max-w-container-max mx-auto space-y-16">
            <div className="text-center max-w-3xl mx-auto space-y-4">
              <h2 className="font-headline-lg text-headline-lg text-on-background">From a Blank Page to a Funded Plan</h2>
              <p className="font-body-md text-body-md text-on-surface-variant">
                Every deliverable is written for the people who will read it: your bank, your partners, or your own
                decision.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-gutter auto-rows-[300px]">
              <div className="col-span-1 md:col-span-2 bg-surface rounded-xl p-8 border border-outline/30 flex flex-col justify-between relative overflow-hidden group">
                <div className="z-10 relative space-y-4 max-w-md">
                  <Icon name="query_stats" fill className="text-primary text-4xl" />
                  <h3 className="font-headline-md text-headline-md text-on-surface">Market Study</h3>
                  <p className="font-body-md text-body-md text-on-surface-variant">
                    Demand, competition, pricing, and location analysis — the evidence that tells you whether the
                    project holds before you commit a dirham or a pound.
                  </p>
                </div>
                <div className="absolute bottom-0 right-0 w-2/3 h-full opacity-20 group-hover:opacity-30 transition-opacity duration-500">
                  <img className="w-full h-full object-cover" loading="lazy" src="/images/aerial-neighborhood.jpg" alt="" />
                </div>
              </div>
              <div className="col-span-1 bg-surface rounded-xl p-8 border border-outline/30 flex flex-col justify-between hover:shadow-[0px_10px_40px_rgba(17,28,68,0.05)] transition-shadow">
                <Icon name="calculate" fill className="text-primary text-4xl" />
                <div>
                  <h3 className="font-headline-md text-headline-md text-on-surface mb-2">Financial Model</h3>
                  <p className="font-body-md text-body-md text-on-surface-variant">
                    Three-year projections, cash flow, break-even point, and funding needs — built as an editable
                    model, not a fixed PDF.
                  </p>
                </div>
              </div>
              <div className="col-span-1 bg-surface rounded-xl p-8 border border-outline/30 flex flex-col justify-between hover:shadow-[0px_10px_40px_rgba(17,28,68,0.05)] transition-shadow">
                <Icon name="description" fill className="text-primary text-4xl" />
                <div>
                  <h3 className="font-headline-md text-headline-md text-on-surface mb-2">Written Business Plan</h3>
                  <p className="font-body-md text-body-md text-on-surface-variant">
                    A complete document — positioning, operations, team, and financials — in French or English.
                  </p>
                </div>
              </div>
              <div className="col-span-1 md:col-span-2 relative rounded-xl overflow-hidden border border-outline/30">
                <img
                  className="absolute inset-0 w-full h-full object-cover"
                  loading="lazy"
                  src="/images/office-tower-glass.jpg"
                  alt="Glass office tower, illustrating the funding and partner conversations a Keyvostra business plan is built for."
                />
                <div className="absolute inset-0 bg-inverse-surface/60 flex flex-col justify-end p-8">
                  <h3 className="font-headline-md text-headline-md text-surface-bright mb-2">Funding &amp; Presentation</h3>
                  <p className="font-body-md text-body-md text-surface-variant max-w-lg">
                    Bank file preparation, investor pitch deck, and coaching before the meeting that decides it.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Process */}
        <section className="px-margin-mobile md:px-margin-desktop py-section-padding max-w-container-max mx-auto space-y-12">
          <h2 className="font-headline-lg text-headline-lg text-on-background text-center">How We Work</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-gutter">
            {[
              ["01", "Discovery call", "We listen to the idea, the budget, and the deadline. No document yet."],
              ["02", "Field & market data", "We gather the numbers: demand, competitors, costs, regulation."],
              ["03", "Modelling", "We build the financials and test the scenarios with you."],
              ["04", "Delivery", "You receive the full plan, the model, and the pitch — and we defend it with you."],
            ].map(([step, title, text]) => (
              <div key={step} className="bg-surface rounded-xl p-8 border border-outline/30 space-y-3">
                <span className="font-label-sm text-label-sm text-primary">{step}</span>
                <h3 className="font-headline-md text-headline-md text-on-surface">{title}</h3>
                <p className="font-body-md text-body-md text-on-surface-variant">{text}</p>
              </div>
            ))}
          </div>
        </section>
      </div>
    </>
  );
}
