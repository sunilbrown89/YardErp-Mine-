import { Banner_Bg, Glasses } from "@/assets/leadPage_Images";
import Link from "next/link";

const Banner = () => {
  return (
    <div
      className="w-full h-60 md:h-80 bg-center bg-cover"
      style={{ backgroundImage: `url(${Banner_Bg.src})` }}
    >
      <div className="w-full flex h-full items-center justify-center py-5 md:py-10 gap-5 flex-col">
        <div className="relative text-[#003657] text-lg font-semibold leading-5 md:title-styling text-center">
          Ready to take the next step towards
          <br /> ecommerce your way?
          <div className=" hidden md:flex absolute md:!-top-5 md:!-right-16">
            <img src={Glasses.src} alt="glasses" className="md:w-20 w-16" />
          </div>
          <div className="top-0 absolute md:hidden  -left-6 ">
            <img src={Glasses.src} alt="glasses" className="md:w-20 w-16" />
          </div>
        </div>
        <Link href={"/login"}>
          <button className="btn-one">Create Now</button>
        </Link>
      </div>
    </div>
  );
};

export default Banner;
