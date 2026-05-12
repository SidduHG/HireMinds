import { CandidateBenefits } from "../components/candidate-benefits";
import { FaqSection } from "../components/faq-section";
import { FeatureGrid } from "../components/feature-grid";
import { FinalCta } from "../components/final-cta";
import { HeroSection } from "../components/hero-section";
import { HowItWorks } from "../components/how-it-works";
import { PublicFooter } from "../components/public-footer";
import { PublicHeader } from "../components/public-header";
import { ReportPreview } from "../components/report-preview";
import { ValueStrip } from "../components/value-strip";

export function LandingPage() {
  return (
    <div className="public-page">
      <PublicHeader />
      <main>
        <HeroSection />
        <ValueStrip />
        <FeatureGrid />
        <HowItWorks />
        <CandidateBenefits />
        <ReportPreview />
        <FaqSection />
        <FinalCta />
      </main>
      <PublicFooter />
    </div>
  );
}
