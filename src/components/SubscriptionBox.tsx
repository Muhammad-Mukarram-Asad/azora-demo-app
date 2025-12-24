import navbarLogo from "../assets/icons/navbar_logo.svg";

const SubscriptionBox = () => {
  return (
    <div
      className="
        absolute
        left-1/2
        -translate-x-1/2
        top-10
        z-30

        bg-[#F5F5F5]
        w-[90%]
        max-w-5xl
        h-[500px]
        px-12
        py-10
        rounded-[20px]

        flex
        flex-col
        gap-6
        items-start
        justify-center
        shadow-xl
      "
    >
      <img src={navbarLogo} width={76} height={120} alt="Logo" />

      <h1 className="text-[#26262B] font-avenir font-semibold text-[46px] tracking-[1.3px] leading-14">
        Superpowers starting $9.99/month.
        <br />
        Free for 7 days.
      </h1>

      <div className="flex items-center gap-6">
        <button className="h-12 w-55 rounded-md bg-[#26262B] text-white font-avenir text-[16px] tracking-[1px]">
          Get started now
        </button>

        <button className="h-12 w-55 rounded-md border border-[#26262B] text-[#26262B] font-avenir text-[16px] tracking-[1px]">
          More about Setapp
        </button>
      </div>
    </div>
  );
};

export default SubscriptionBox;
