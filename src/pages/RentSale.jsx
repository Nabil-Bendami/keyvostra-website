import { Link } from "react-router-dom";
import SEO from "../components/SEO";
import Icon from "../components/Icon";

export default function RentSale() {
  return (
    <>
      <SEO
        title="Keyvostra Rent & Sale - Rent or Sell Your Property in Morocco & the UK"
        description="Property valuation, professional listing, qualified viewings, negotiation, and secure contracts — Keyvostra rents and sells your property in Morocco and the United Kingdom."
        path="/rent-sale"
      />

      <div className="pt-[100px]">
        {/* Hero */}
        <section className="px-margin-mobile md:px-margin-desktop py-section-padding max-w-container-max mx-auto grid grid-cols-1 md:grid-cols-2 gap-gutter items-center">
          <div className="space-y-8">
            <span className="inline-block bg-primary-container text-on-primary-container px-4 py-1 rounded font-label-sm text-label-sm uppercase tracking-wider">
              Rent &amp; Sale
            </span>
            <h1 className="font-display-lg text-headline-lg-mobile md:text-display-lg text-on-background">
              Rent It. Sell It. Without the Noise.
            </h1>
            <p className="font-body-lg text-body-lg text-on-surface-variant">
              Whether you want a reliable tenant or the right buyer, we handle the whole chain: honest valuation,
              professional presentation, filtered visits, negotiation, and a contract that protects you — in Morocco
              and in the United Kingdom.
            </p>
            <div className="pt-4">
              <Link
                to="/contact"
                className="inline-block bg-primary text-on-primary font-label-md text-label-md px-8 py-4 rounded hover:bg-primary/90 transition-colors"
              >
                Estimate My Property
              </Link>
            </div>
          </div>
          <div className="relative h-[400px] md:h-[600px] w-full rounded-xl overflow-hidden border border-outline/30">
            <img
              className="absolute inset-0 w-full h-full object-cover"
              src="/images/penthouse-living-room.jpg"
              alt="Penthouse living room prepared for viewings, representative of properties Keyvostra rents and sells."
              fetchPriority="high"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-inverse-surface/40 to-transparent" />
          </div>
        </section>

        {/* Two tracks */}
        <section className="bg-surface-container-low px-margin-mobile md:px-margin-desktop py-section-padding">
          <div className="max-w-container-max mx-auto space-y-16">
            <div className="text-center max-w-3xl mx-auto space-y-4">
              <h2 className="font-headline-lg text-headline-lg text-on-background">Two Tracks, One Standard</h2>
              <p className="font-body-md text-body-md text-on-surface-variant">
                Renting and selling ask for different work. Both get the same discipline and the same single point of
                contact.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-gutter">
              <div className="bg-surface rounded-xl p-8 border border-outline/30 space-y-6">
                <Icon name="key" fill className="text-primary text-4xl" />
                <h3 className="font-headline-md text-headline-md text-on-surface">Renting</h3>
                <ul className="space-y-3 font-body-md text-body-md text-on-surface-variant">
                  <li>Rental valuation based on real local transactions</li>
                  <li>Listing, photography, and multi-platform publication</li>
                  <li>Tenant screening: income, guarantees, references</li>
                  <li>Lease drafting, inventory, and handover</li>
                  <li>Optional handover to Keyvostra Management for the day-to-day</li>
                </ul>
              </div>
              <div className="bg-surface rounded-xl p-8 border border-outline/30 space-y-6">
                <Icon name="sell" fill className="text-primary text-4xl" />
                <h3 className="font-headline-md text-headline-md text-on-surface">Selling</h3>
                <ul className="space-y-3 font-body-md text-body-md text-on-surface-variant">
                  <li>Sale price positioning, not an inflated promise</li>
                  <li>Home staging advice and presentation of the asset</li>
                  <li>Qualified buyers only — financing checked before visits</li>
                  <li>Negotiation and offer management on your behalf</li>
                  <li>Notary coordination through to the final deed</li>
                </ul>
              </div>
            </div>
            <div className="relative rounded-xl overflow-hidden border border-outline/30 h-[320px]">
              <img
                className="absolute inset-0 w-full h-full object-cover"
                loading="lazy"
                src="/images/interior-minimalist-living.jpg"
                alt="Minimalist interior staged for a viewing, illustrating Keyvostra's presentation standard for rentals and sales."
              />
              <div className="absolute inset-0 bg-inverse-surface/60 flex flex-col justify-end p-8">
                <h3 className="font-headline-md text-headline-md text-surface-bright mb-2">Owners Abroad Welcome</h3>
                <p className="font-body-md text-body-md text-surface-variant max-w-lg">
                  Living in the UK with a property in Morocco — or the reverse? We represent you on site, with
                  written reporting at every step.
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
