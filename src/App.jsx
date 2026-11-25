import { useTranslation } from "./i18n";
import { Suspense, lazy } from "react";
import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import WelcomeIntro from "./components/WelcomeIntro";
import ScrollToTop from "./components/ScrollToTop";
import "./styles/services.css";
import "./styles/contact-footer.css";

const Home = lazy(() => import("./pages/Home"));
const About = lazy(() => import("./pages/About"));
const Invest = lazy(() => import("./pages/Invest"));
const Management = lazy(() => import("./pages/Management"));
const Maintenance = lazy(() => import("./pages/Maintenance"));
const BusinessPlan = lazy(() => import("./pages/BusinessPlan"));
const RentSale = lazy(() => import("./pages/RentSale"));
const Portfolio = lazy(() => import("./pages/Portfolio"));
const ProjectDetail = lazy(() => import("./pages/ProjectDetail"));
const Contact = lazy(() => import("./pages/Contact"));
const NotFound = lazy(() => import("./pages/NotFound"));

export default function App() {
  const { t } = useTranslation();
  return (
    <div className="min-h-screen flex flex-col bg-background text-on-background">
      <WelcomeIntro />
      <ScrollToTop />
      <Navbar />
      <main tabIndex={-1} id="main-content" className="flex-grow">
        <Suspense
          fallback={
            <div className="pt-[140px] pb-section-padding text-center text-on-surface-variant">
              {t("Loading…")}
            </div>
          }
        >
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/invest" element={<Invest />} />
            <Route path="/management" element={<Management />} />
            <Route path="/maintenance" element={<Maintenance />} />
            <Route path="/business-plan" element={<BusinessPlan />} />
            <Route path="/rent-sale" element={<RentSale />} />
            <Route path="/portfolio" element={<Portfolio />} />
            <Route path="/portfolio/:slug" element={<ProjectDetail />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Suspense>
      </main>
      <Footer />
    </div>
  );
}
