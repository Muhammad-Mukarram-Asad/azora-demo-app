export default function Testimonials() {
  return (
    <section className="bg-white py-24">
      <div className="mx-auto max-w-7xl px-8">
        
        {/* Header */}
        <div className="mb-16 flex items-start justify-between">
          <div>
            <h2 className="font-avenir text-[32px] font-semibold tracking-[0.5px] text-[#26262B]">
              Setapp in your words.
            </h2>
          </div>

          <div className="flex flex-col items-end gap-4">
            <p className="font-avenir text-[14px] tracking-[0.9px] text-[#26262B] opacity-80">
              What you say about how Setapp powers you up.
            </p>

            {/* Social icons */}
            <div className="flex items-center gap-3">
              <div className="flex h-8 w-8 items-center justify-center rounded-full bg-[#3b5998] text-white">f</div>
              <div className="flex h-8 w-8 items-center justify-center rounded-full bg-[#1DA1F2] text-white">t</div>
              <div className="flex h-8 w-8 items-center justify-center rounded-full bg-[#E1306C] text-white">i</div>
              <div className="flex h-8 w-8 items-center justify-center rounded-full bg-[#FF0000] text-white">▶</div>
            </div>
          </div>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          
          {/* Card 1 */}
          <div className="flex h-[280px] flex-col justify-between rounded-[16px] bg-[#6f7198] p-8 text-white">
            <p className="font-avenir text-[16px] leading-[26px]">
              Have been using Setapp for almost two years, and I have to say
              it’s the best and the most cost-effective way of having apps on
              Mac.
            </p>

            <div className="flex items-center justify-between text-sm opacity-90">
              <div>
                <p className="font-medium">Arash Pourhabibi</p>
                <p className="text-xs opacity-70">@ArashPourhabibi</p>
              </div>
              <span>🐦</span>
            </div>
          </div>

          {/* Card 2 */}
          <div className="flex h-[280px] flex-col justify-between rounded-[16px] bg-[#d8b18b] p-8 text-white">
            <p className="font-avenir text-[16px] leading-[26px]">
              My favorites ❤️ from @Setapp Ulysses, CleanMyMac X, Paste,
              MindNode, Swift Publisher.
            </p>

            <div className="flex items-center justify-between text-sm opacity-90">
              <div>
                <p className="font-medium">Mauricio Sanchez</p>
                <p className="text-xs opacity-70">@m741s</p>
              </div>
              <span>📸</span>
            </div>
          </div>

          {/* Card 3 */}
          <div className="flex h-[280px] flex-col justify-between rounded-[16px] bg-[#7a526f] p-8 text-white">
            <p className="font-avenir text-[16px] leading-[26px]">
              For those of you that wonder where I discover/get all the awesome
              apps for my Mac that I use, a lot of them are from Setapp!
            </p>

            <div className="flex items-center justify-between text-sm opacity-90">
              <div>
                <p className="font-medium">Meredith Sweet</p>
                <p className="text-xs opacity-70">@meredith.sweet.silberstein</p>
              </div>
              <span>f</span>
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
    </section>
  )
}
