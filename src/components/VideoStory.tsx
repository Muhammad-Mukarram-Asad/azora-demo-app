import dummyPerson from "../assets/images/dummy-person.png";

const VideoStory = () => {
  return (
    <section className="relative z-10 bg-[#7a5673]">
      {/* Content Wrapper */}
      <div className="mx-auto max-w-7xl px-8 py-24">
        <div className="grid grid-cols-1 items-center gap-12 md:grid-cols-2">
          
          {/* LEFT CONTENT */}
          <div className="text-white">
            <p className="font-avenir text-[20px] leading-[32px] max-w-md">
              Musicians like Jason use Setapp to push the limits of their
              creativity, dancing through tasks for more time to play.
            </p>

            <p className="mt-4 font-avenir text-[14px] opacity-80">
              Jason Staczek
            </p>

            {/* Play Button */}
            <div className="mt-10">
              <button className="flex h-14 w-14 items-center justify-center rounded-full bg-white text-[#7a5673] shadow-lg">
                ▶
              </button>
            </div>
          </div>

          {/* RIGHT IMAGE */}
          <div className="flex justify-center md:justify-end">
            <img
              src={dummyPerson}
              alt="Story"
              className="max-h-[420px] object-contain"
            />
          </div>
        </div>
      </div>

      {/* Navigation Arrows */}
      <div className="absolute right-8 top-8 flex gap-4 text-white opacity-70">
        <button className="text-2xl">‹</button>
        <button className="text-2xl">›</button>
      </div>
    </section>
  );
};

export default VideoStory;
