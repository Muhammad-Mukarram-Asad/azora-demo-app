import Footer from "./components/Footer"
import Navbar from "./components/Navbar"
import SubscriptionBox from "./components/SubscriptionBox"
export default function App() {
  return (
    <>
    <Navbar />
      {/* Subscription Section */}
      <div className="relative z-20">
        <SubscriptionBox />
      </div>
    <Footer />
    </>
    
  )
}
