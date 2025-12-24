import socialFacebookIcon from "../assets/icons/social-facebook-icon.svg";
import socialInstagramIcon from "../assets/icons/social-instagram-icon.svg";
import socialTwitterIcon from "../assets/icons/social-twitter-icon.svg";
import facebookWhiteBgIcon from "../assets/icons/facebook_icon_white_bg.svg";
import twitterWhiteBgIcon from "../assets/icons/twitter_icon_white_bg.svg";
import instagramWhiteBgIcon from "../assets/icons/instagram_icon_white_bg.svg";
import youtubeWhiteBgIcon from "../assets/icons/youtube_icon_white_bg.svg";

export default function Testimonials() {
  return (
    <section className="bg-white mt-50">
      <div className="mt-12 flex justify-center gap-3">
        <span className="h-2 w-2 rounded-full bg-[#26262B]" />
        <span className="h-2 w-2 rounded-full bg-[#26262B]/30" />
        <span className="h-2 w-2 rounded-full bg-[#26262B]/30" />
        <span className="h-2 w-2 rounded-full bg-[#26262B]/30" />
        <span className="h-2 w-2 rounded-full bg-[#26262B]/30" />
      </div>
      <div className="mx-auto max-w-7xl px-8 mt-6">
        {/* Header */}
        <div className="mb-16 flex items-start justify-between">
          <div>
            <h2 className="font-avenir text-[32px] font-semibold tracking-[0.5px] text-[#26262B]">
              Setapp in your words.
            </h2>
          </div>

          <div className="flex flex-row justify-around items-center-safe gap-4">
            <p className=" w-[265px] h-[65px]font-avenir text-[18px] tracking-[0.9px] text-[#26262B]">
              What you say about how Setapp powers you up.
            </p>

            <div className="flex flex-col items-end gap-4">
              {/* Social icons */}
              <div className="flex items-center gap-3">
                <img
                  src={facebookWhiteBgIcon}
                  width={24}
                  height={24}
                  alt="Twitter Icon"
                />
                <img
                  src={twitterWhiteBgIcon}
                  width={24}
                  height={24}
                  alt="Twitter Icon"
                />
                <img
                  src={instagramWhiteBgIcon}
                  width={24}
                  height={24}
                  alt="Twitter Icon"
                />
                <img
                  src={youtubeWhiteBgIcon}
                  width={24}
                  height={24}
                  alt="Twitter Icon"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
          {/* Card 1 */}
          <div className="flex w-[360px] h-[280px] flex-col justify-between rounded-[16px] bg-[#71719A] text-white">
            <p className="font-Avenir Next text-[16px] leading-[26px] p-8">
              Have been using Setapp for almost two years, and I have to say
              it’s the best and the most cost-effective way of having apps on
              Mac.
            </p>

            <div className="w-full h-20 p-4 flex items-center justify-between text-sm opacity-90 bg-[#F5F5F5]">
              <div>
                <p className="font-medium text-[#26262B]">Arash Pourhabibi</p>
                <p className="text-xs opacity-70 text-[#26262B]">
                  @ArashPourhabibi
                </p>
              </div>
              <img
                src={socialTwitterIcon}
                width={24}
                height={24}
                alt="Twitter Icon"
              />
            </div>
          </div>

          {/* Card 2 */}
          <div className="flex w-[360px] h-[280px] flex-col justify-between rounded-[16px] bg-[#71719A] text-white">
            <p className="font-Avenir Next text-[16px] leading-[26px] p-8">
              My favorites ❤️ from @Setapp Ulysses, CleanMyMac X, Paste,
              MindNode, Swift Publisher.
            </p>

            <div className="w-full h-20 p-4 flex items-center justify-between text-sm opacity-90 bg-[#F5F5F5]">
              <div>
                <p className="font-medium text-[#26262B]">Arash Pourhabibi</p>
                <p className="text-xs opacity-70 text-[#26262B]">
                  @ArashPourhabibi
                </p>
              </div>
              <img
                src={socialInstagramIcon}
                width={24}
                height={24}
                alt="Twitter Icon"
              />
            </div>
          </div>

          {/* Card 3 */}
          <div className="flex w-[360px] h-[280px] flex-col justify-between rounded-[16px] bg-[#71719A] text-white">
            <p className="font-Avenir Next text-[16px] leading-[26px] p-8">
              For those of you that wonder where I discover/get all the awesome
              apps for my Mac that I use, a lot of them are from Setapp!
            </p>

            <div className="w-full h-20 p-4 flex items-center justify-between text-sm opacity-90 bg-[#F5F5F5]">
              <div>
                <p className="font-medium text-[#26262B]">Arash Pourhabibi</p>
                <p className="text-xs opacity-70 text-[#26262B]">
                  @ArashPourhabibi
                </p>
              </div>
              <img
                src={socialFacebookIcon}
                width={8}
                height={8}
                alt="Twitter Icon"
              />
            </div>
          </div>
        </div>

        {/* Pagination dots */}
        <div className="mt-12 flex justify-center gap-3">
          <span className="h-2 w-2 rounded-full bg-[#26262B]" />
          <span className="h-2 w-2 rounded-full bg-[#26262B]/30" />
          <span className="h-2 w-2 rounded-full bg-[#26262B]/30" />
          <span className="h-2 w-2 rounded-full bg-[#26262B]/30" />
          <span className="h-2 w-2 rounded-full bg-[#26262B]/30" />
        </div>
      </div>

        {/* Divider */}
      <div className="flex flex-row justify-center items-center">
        <div className="w-[100%] h-[1px] bg-[#FEFEFE] mt-6" />
      </div>
    </section>
  );
}
