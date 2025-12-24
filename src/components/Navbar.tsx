import navbarLogo from "../assets/icons/navbar_logo.svg";
import countryFlag from "../assets/icons/country_image.svg";
export default function Navbar() {
  return (
    <header className="w-full bg-[#26262B] text-gray-200">
      <div className="mx-auto flex h-14 max-w-7xl items-center justify-between px-6">
        
        {/* Left: Logo */}
        <div className="flex items-center gap-2">
          <img src={navbarLogo} width={24} height={24} alt="Logo" />
        </div>

        <section className="flex items-center gap-6">
        {/* Center: Navigation */}
        <nav className="hidden md:flex items-center gap-6 text-sm">
          <a href="#" className="font-Avenir Next text-[14px] font-medium tracking-[0.9px] text-white">
            How it works
          </a>
          <a href="#" className="font-Avenir Next text-[14px] font-medium tracking-[0.9px] text-white">
            All apps
          </a>
          <a href="#" className="font-Avenir Next text-[14px] font-medium tracking-[0.9px] text-white">
            Pricing
          </a>
          <a href="#" className="font-Avenir Next text-[14px] font-medium tracking-[0.9px] text-white">
            For Teams
          </a>
          <a href="#" className="font-Avenir Next text-[14px] font-medium tracking-[0.9px] text-white">
            Blog
          </a>
          <a href="#" className="font-Avenir Next text-[14px] font-medium tracking-[0.9px] text-white">
            Podcast
          </a>
        </nav>

        {/* Right: Actions */}
        <div className="flex items-center gap-4 text-sm">
            <div className="h-5 border-l border-white/60" />
            <img src={countryFlag} width={18} height={18} alt="Country Flag" />
          <a
            href="#"
            className="font-Avenir Next text-[14px] font-medium tracking-[0.9px] text-white border-none"
          >
            Sign In
          </a>

          <button className="text-[14px] text-white font-Avenir Next font-normal rounded-md border border-white px-4 py-1.5 text-sm hover:border-white hover:text-white transition">
            Try free
          </button>
        </div>
        </section>
      </div>
    </header>
  )
}
