
import AboutUs from "./Components/AboutUs";
import MainWebsiteFooter from "./Components/mainWebsiteFooter";
import Testimonials from "./Components/Testimonials";
import BetweenPage from "./Components/between-page";
import HeroSection from "./Components/HeroSection";
import MainWebsiteHeader from "./Components/mainWebsiteHeader";


export default function Home() {
  return (
    <div>
      <MainWebsiteHeader />
      <main id="main-content">
        <HeroSection />
        <AboutUs />
        <BetweenPage />
        <Testimonials/>
      </main>
      <MainWebsiteFooter />
    </div>
  );
}