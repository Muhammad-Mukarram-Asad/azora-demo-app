import Footer from "./components/Footer";
import HeroSection from "./components/HeroSection";
import Navbar from "./components/Navbar";
import SetappJourney from "./components/SetappJourney";
import SubscriptionBox from "./components/SubscriptionBox";
import Testimonials from "./components/Testimonials";
import VideoStory from "./components/VideoStory";
export default function App() {
  return (
    <>
      <Navbar />
      <HeroSection />
      <SetappJourney />
      <div className="relative z-20">
        <VideoStory />
      </div>
      <Testimonials />
      {/* Subscription Section */}
      <div className="relative z-20">
        <SubscriptionBox />
      </div>
      <Footer />
    </>
  );
}
