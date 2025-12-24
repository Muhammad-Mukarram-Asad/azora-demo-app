import navbarLogo from "../assets/icons/navbar_logo.svg";
import twitterIcon from "../assets/icons/twitter_icon.svg";
import instaIcon from "../assets/icons/instagram_icon.svg";
import facebookIcon from "../assets/icons/facebook_icon.svg";
import youtubeIcon from "../assets/icons/youtube_icon.svg";
import countryFlag from "../assets/icons/country_image.svg";
import downArrow from "../assets/icons/downArrow.svg";
import rightArrow from "../assets/icons/right_arrow_footer.svg";
export default function Footer() {
  return (
    <footer className="bg-[#2b2f33] text-white mt-50">

         {/* Divider */}
      <div className="flex flex-row justify-center items-center pt-70">
        <div className="w-[100%] h-[1px] bg-[#E5E5E5] mt-6" />
      </div>

      {/* Top Section */}
      <div className="mx-auto max-w-7xl px-8 pt-10 ">
        <div className="flex justify-between items-start w-full">
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
            <div className="flex w-full max-w-sm items-stretch overflow-hidden rounded-md bg-[#3a3f44]">
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full bg-transparent px-4 py-3 text-sm text-white placeholder-gray-400 outline-none"
              />

              <button className="flex items-center justify-center bg-white px-4 self-stretch">
                <img src={rightArrow} width={8} height={8} alt="Arrow" />
              </button>
            </div>

            {/* DMCA */}
            <div className="inline-block rounded bg-gray-500/20 px-2 py-1 text-[10px] text-gray-300">
              DMCA PROTECTED
            </div>
          </div>

          <div className="gap-8 flex flex-row justify-between items-start">
            {/* COLUMN 1 */}
            <div className="space-y-0 text-sm font-Avenir Next font-normal text-white text-[16px] leading-8">
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
            <div className="space-y-0 text-sm font-Avenir Next font-normal text-white text-[16px] leading-8 ml-4 ">
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
            <div className="space-y-0 text-sm font-Avenir Next font-normal text-white text-[16px] leading-8">
              <p>Getting started with Setapp</p>
              <p>Remote access to other Mac</p>
              <p>Fix macOS Ventura problems</p>
              <p>Best productivity apps</p>
              <p>Best YouTube downloaders</p>
              <p>Uninstall apps</p>
            </div>
          </div>
        </div>
      </div>

      {/* Divider */}
      <div className="border-t border-[#E5E5E5] mt-10" />

      {/* Bottom Section */}
      <div className="mx-auto max-w-7xl px-8 py-3">
        <div className="flex flex-col gap-4 text-xs text-gray-400 md:flex-row md:items-center md:justify-between">
          {/* Left */}
          <div className="flex flex-col items-start gap-2">
            <p className="text-white font-Avenir Next font-normal leading-5">
              © 2023 Setapp Limited, 9 Tallow Street, Youghal, Co. Cork,
              P36YE14, Ireland. Reg. 584165. VAT ID: IE3425001BH
            </p>

            <div className="flex flex-row justify-start items-center">
              <span className=" text-[#969799] font-Avenir Next font-normal">
                Terms of Use
              </span>
              <span className="ml-2 text-[#969799] font-Avenir Next font-normal">
                Privacy Policy
              </span>
            </div>
          </div>

          {/* Right */}
          <div className="flex items-center gap-6">
            {/* Language */}
            <div className="flex items-center absolute right-6 mb-26 gap-2 ">
              <img src={countryFlag} width={24} height={24} alt="Logo" />
              <span>English</span>
              <img src={downArrow} width={8} height={8} alt="Logo" />
            </div>

            {/* Social placeholders */}
            <div className="flex gap-3">
              <img src={facebookIcon} width={24} height={24} alt="Logo" />
              <img src={twitterIcon} width={24} height={24} alt="Logo" />
              <img src={instaIcon} width={24} height={24} alt="Logo" />
              <img src={youtubeIcon} width={24} height={24} alt="Logo" />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
