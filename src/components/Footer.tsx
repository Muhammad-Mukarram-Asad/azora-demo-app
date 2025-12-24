import navbarLogo from "../assets/icons/navbar_logo.svg";
import twitterIcon from "../assets/icons/twitter_icon.svg";
import instaIcon from "../assets/icons/instagram_icon.svg"
export default function Footer() {
  return (
    <footer className="bg-[#2b2f33] text-white h-180 mt-100">

      {/* Divider */}

      {/* Top Section */}
      <div className="mx-auto max-w-7xl px-8 pt-70 pb-20">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-4">
          
          {/* LEFT: Brand + Newsletter */}
          <div className="space-y-6">
            {/* Logo */}
            <div className="flex items-center gap-2 text-white">
             <img src={navbarLogo} width={24} height={24} alt="Logo" />
              <span className="font-avenir text-sm tracking-[0.9px]">
                SETAPP
              </span>
            </div>

            <p className="text-sm text-gray-400">
              Updates from our team, written with love 🧡
            </p>

            {/* Email input */}
            <div className="flex w-full max-w-sm items-center overflow-hidden rounded-md bg-[#3a3f44]">
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full bg-transparent px-4 py-3 text-sm text-white placeholder-gray-400 outline-none"
              />
              <button className="flex h-full items-center justify-center bg-white px-4 text-black">
                →
              </button>
            </div>

            {/* DMCA */}
            <div className="inline-block rounded bg-gray-500/20 px-2 py-1 text-[10px] text-gray-300">
              DMCA PROTECTED
            </div>
          </div>

          {/* COLUMN 1 */}
          <div className="space-y-2 text-sm">
            <p>Home</p>
            <p>How it Works</p>
            <p>All Apps</p>
            <p>Pricing</p>
            <p>Setapp for Teams</p>
            <p>Blog</p>
            <p>Podcast</p>
            <p>Download</p>
          </div>

          {/* COLUMN 2 */}
          <div className="space-y-2 text-sm">
            <p>About</p>
            <p>Support</p>
            <p>Education Discount</p>
            <p>Family Plan</p>
            <p>For Developers</p>
            <p>Gift Cards</p>
            <p>Redeem Card or Code</p>
            <p>Setapp Reviews</p>
            <p>Affiliate Program</p>
            <p>Mac Developer Survey 2023</p>
          </div>

          {/* COLUMN 3 */}
          <div className="space-y-2 text-sm">
            <p>Getting started with Setapp</p>
            <p>Remote access to other Mac</p>
            <p>Fix macOS Ventura problems</p>
            <p>Best productivity apps</p>
            <p>Best YouTube downloaders</p>
            <p>Uninstall apps</p>
          </div>
        </div>
      </div>

      {/* Divider */}
      <div className="border-t border-[#E5E5E5]" />

      {/* Bottom Section */}
      <div className="mx-auto max-w-7xl px-8 py-6">
        <div className="flex flex-col gap-4 text-xs text-gray-400 md:flex-row md:items-center md:justify-between">
          
          {/* Left */}
          <p>
            © 2023 Setapp Limited, 9 Tallow Street, Youghal, Co. Cork, P36YE14,
            Ireland. Reg. 584165. VAT ID: IE3425001BH
          </p>

          {/* Right */}
          <div className="flex items-center gap-6">
            <span>Terms of Use</span>
            <span>Privacy Policy</span>

            {/* Language */}
            <div className="flex items-center gap-2">
              🇺🇸 <span>English</span>
            </div>

            {/* Social placeholders */}
            <div className="flex gap-3">
                <img src={instaIcon} width={24} height={24} alt="Logo" />

              <div className="h-6 w-6 rounded-full bg-gray-500/30">
                <img src={twitterIcon} width={24} height={24} alt="Logo" />
                </div>

              <div className="h-6 w-6 rounded-full bg-gray-500/30" />
              <div className="h-6 w-6 rounded-full bg-gray-500/30" />
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
