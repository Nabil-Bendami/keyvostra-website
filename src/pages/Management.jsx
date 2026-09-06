import { Link } from "react-router-dom";
import SEO from "../components/SEO";
import Icon from "../components/Icon";

export default function Management() {
  return (
    <>
      <SEO
        title="Keyvostra Management - Property Management in Casablanca"
        description="Effortless, transparent property management in Casablanca: targeted marketing, rigorous tenant screening, active maintenance coordination, and real-time financial reporting."
        path="/management"
      />

      <div className="pt-24 md:pt-32 pb-section-padding">
        {/* Hero */}
        <section className="px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto mt-12 md:mt-24">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-gutter items-center">
            <div className="lg:col-span-6 z-10">
              <h1 className="font-display-lg text-headline-lg-mobile md:text-display-lg text-on-surface mb-6">
                Effortless Property Management
              </h1>
              <p className="font-body-lg text-body-lg text-on-surface-variant mb-10 max-w-lg">
                Maximize your returns while minimizing your involvement. We handle everything from rigorous tenant
                screening to seamless daily maintenance with total transparency.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link
                  to="/contact"
                  className="bg-primary text-on-primary font-label-md text-label-md px-8 py-4 rounded hover:opacity-90 transition-opacity"
                >
                  Book a Consultation
                </Link>
                <a
                  href="#lifecycle"
                  className="border border-on-surface text-on-surface font-label-md text-label-md px-8 py-4 rounded hover:bg-surface-variant transition-colors"
                >
                  Our Process
                </a>
              </div>
            </div>
            <div className="lg:col-span-6 mt-12 lg:mt-0 relative h-[400px] md:h-[500px]">
              <img
                className="absolute inset-0 w-full h-full object-cover rounded-lg shadow-sm"
                src="/images/interior-minimalist-living.jpg"
                alt="Bright, minimalist luxury apartment interior in Casablanca managed by Keyvostra Management."
                fetchPriority="high"
              />
            </div>
          </div>
        </section>

        {/* Process Bento Grid */}
        <section id="lifecycle" className="px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto mt-section-padding">
          <div className="mb-16">
            <h2 className="font-headline-lg text-headline-lg-mobile md:text-headline-lg text-on-surface mb-4">
              The Management Lifecycle
            </h2>
            <p className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl">
              A systematic, transparent approach designed for absolute peace of mind and optimized yield.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-12 gap-gutter">
            <div className="md:col-span-8 bg-surface-container-low border border-outline/30 rounded-lg p-8 md:p-12 hover:shadow-[0px_10px_40px_rgba(17,28,68,0.05)] transition-shadow duration-300 group">
              <div className="flex items-start justify-between mb-8">
                <div>
                  <Icon name="campaign" className="text-primary text-4xl mb-4" />
                  <h3 className="font-headline-md text-headline-md text-on-surface mb-2">Targeted Marketing</h3>
                </div>
                <span className="font-display-lg text-display-lg text-outline/10 group-hover:text-primary/10 transition-colors">
                  01
                </span>
              </div>
              <p className="font-body-md text-body-md text-on-surface-variant">
                We position your property to attract high-caliber tenants through professional photography, targeted
                digital campaigns, and exclusive network outreach in the corporate sector.
              </p>
            </div>
            <div className="md:col-span-4 bg-surface-container border border-outline/30 rounded-lg p-8 hover:shadow-[0px_10px_40px_rgba(17,28,68,0.05)] transition-shadow duration-300">
              <Icon name="shield_person" className="text-primary text-4xl mb-6" />
              <h3 className="font-headline-md text-headline-md text-on-surface mb-4">Rigorous Screening</h3>
              <p className="font-body-md text-body-md text-on-surface-variant">
                Comprehensive background checks, financial verification, and employment history review to ensure
                long-term stability and reliability.
              </p>
            </div>
            <div className="md:col-span-4 bg-surface-container border border-outline/30 rounded-lg p-8 hover:shadow-[0px_10px_40px_rgba(17,28,68,0.05)] transition-shadow duration-300">
              <Icon name="home_repair_service" className="text-primary text-4xl mb-6" />
              <h3 className="font-headline-md text-headline-md text-on-surface mb-4">Active Maintenance</h3>
              <p className="font-body-md text-body-md text-on-surface-variant">
                24/7 proactive and reactive maintenance coordination using our vetted network of premium
                contractors.
              </p>
            </div>
            <div className="md:col-span-8 bg-primary-fixed border border-primary/20 rounded-lg p-8 md:p-12 hover:shadow-[0px_10px_40px_rgba(17,28,68,0.05)] transition-shadow duration-300 group">
              <div className="flex items-start justify-between mb-8">
                <div>
                  <Icon name="account_balance" className="text-primary text-4xl mb-4" />
                  <h3 className="font-headline-md text-headline-md text-on-surface mb-2">Transparent Financials</h3>
                </div>
                <span className="font-display-lg text-display-lg text-primary/10 group-hover:text-primary/20 transition-colors">
                  04
                </span>
              </div>
              <p className="font-body-md text-body-md text-on-surface-variant">
                Real-time access to statements, automated rent collection, and detailed quarterly performance
                reports to keep you informed without the operational headache.
              </p>
            </div>
          </div>
        </section>

        {/* Guarantees */}
        <section className="px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto mt-section-padding">
          <div className="border-t border-outline/30 pt-16">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
              <div>
                <h2 className="font-headline-lg text-headline-lg-mobile md:text-headline-lg text-on-surface mb-6">
                  The Keyvostra Guarantee
                </h2>
                <p className="font-body-lg text-body-lg text-on-surface-variant mb-8">
                  We align our success with yours. Our management philosophy is built on absolute accountability and
                  optimized yield protection.
                </p>
                <ul className="space-y-6">
                  <li className="flex items-start gap-4 pb-6 border-b border-outline/30">
                    <Icon name="check_circle" className="text-primary mt-1" />
                    <div>
                      <h4 className="font-label-md text-label-md text-on-surface mb-1">Income Continuity</h4>
                      <p className="font-body-md text-body-md text-on-surface-variant">
                        Strategies designed to minimize vacancy periods between tenancies.
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start gap-4 pb-6 border-b border-outline/30">
                    <Icon name="check_circle" className="text-primary mt-1" />
                    <div>
                      <h4 className="font-label-md text-label-md text-on-surface mb-1">Asset Preservation</h4>
                      <p className="font-body-md text-body-md text-on-surface-variant">
                        Regular inspections to maintain property value and prevent costly repairs.
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start gap-4">
                    <Icon name="check_circle" className="text-primary mt-1" />
                    <div>
                      <h4 className="font-label-md text-label-md text-on-surface mb-1">Legal Compliance</h4>
                      <p className="font-body-md text-body-md text-on-surface-variant">
                        Strict adherence to local real estate regulations and robust lease structuring.
                      </p>
                    </div>
                  </li>
                </ul>
              </div>
              <div className="relative h-[400px] md:h-[600px] hidden md:block">
                <img
                  className="absolute inset-0 w-full h-full object-cover rounded-lg shadow-sm"
                  loading="lazy"
                  src="/images/facade-glass-steel.jpg"
                  alt="Close-up of a modern glass and steel building facade in Casablanca, reflecting Keyvostra Management's asset preservation standards."
                />
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
