import {
  Cinnamon_Hero,
  Main_Hero,
  Pickle_Hero,
  lemon_Hero,
} from "@/assets/leadPage_Images";
import Link from "next/link";
import React from "react";

const Hero = () => {
  return (
    <div className="w-full main-bg md:pt-20">
      <div className="w-full flex flex-col items-center gap-4 md:gap-8 justify-center pt-16 md:pt-8 pb-10 md:pb-20">
        <div className="md:text-[65px] text-3xl font-semibold tracking-tight text-center md:leading-[80px]">
          Customized e-commerce <br /> platform
        </div>
        <div className="md:text-lg text-sm md:leading-6 px-5 md:px-0 text-center md:text-left">
          Design and simplicity are at the core of our website. Easily{" "}
          <br className="hidden md:block" />
          customize, and promote a stunning website that's search{" "}
          <br className="hidden md:block" /> engine ready with the power of
          YardEcommerce’s platform.
        </div>
        <Link href={"/login"}>
          <button className="btn-one !w-32 md:!w-40 !py-2.5 text-sm md:text-lg font-semibold common-transition">
            Create Now
          </button>
        </Link>

        {/* ..............................image section................................... */}
        <div className="w-full flex relative justify-center items-center overflow-hidden">
          <div className="absolute -left-9 w-44 md:w-[25rem] bottom-0">
            <img src={Pickle_Hero.src} alt="" />
          </div>
          <div className="grid grid-cols-10 w-full">
            <div className="md:col-span-2 col-span-1"></div>
            <div className="md:col-span-7 col-span-8 pb-10 relative">
              <div className="absolute -left-10 md:-left-36 md:top-[90px] top-6 w-fit">
                <button className="md:w-48 w-fit bg-opacity-50 bg-[#e0f3ff8a] backdrop-filter backdrop-blur-md md:py-3 py-2 border-[#0D70AE] px-2 tracking-tight text-[8px] md:text-xs rounded-3xl border">
                  Chhattisgarh Herbal Products
                </button>
              </div>
              <img src={Main_Hero.src} alt="hero_main" className="w-" />
            </div>
            <div className="col-span-1 relative">
              <div className="absolute bottom-0 !z-[555] w-9 md:w-16">
                <img src={Cinnamon_Hero.src} alt="" className="!w-full" />
              </div>
              <div className="absolute right-0 !z-[555] w-10 md:w-20">
                <img src={lemon_Hero.src} alt="" className="!w-full" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
