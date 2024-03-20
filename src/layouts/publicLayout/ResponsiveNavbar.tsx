import { CloseBtn, HamburgerBtn, Logo } from "@/assets/leadPage_Images";
import { useState } from "react";
import { Navbar_Items } from "./Navbar";
import Link from "next/link";

const ResponsiveNavbar = () => {
  const [isOpen, setToggleOpen] = useState(false);

  const sidebarVariants = {
    open: {
      x: 0,
      opacity: 1,
      transition: {
        y: { stiffness: 1000, velocity: -100 },
      },
    },
    closed: {
      x: -400,
      opacity: 0,
      transition: {
        y: { stiffness: 1000 },
      },
    },
  };
  return (
    <div className="w-full">
      <div
        className={`w-full fixed top-0 !z-[999] bg-white ${
          isOpen
            ? "shadow-none"
            : "shadow-[rgba(50,_50,_105,_0.15)_0px_2px_5px_0px,_rgba(0,_0,_0,_0.05)_0px_1px_1px_0px]"
        }`}
      >
        <div className="w-full flex justify-between py-3 custom-container items-center">
          <div>
            <img src={Logo.src} alt="logo" className="w-40 h-6" />
          </div>

          <div
            className="w-fit h-fit cursor-pointer"
            onClick={() => setToggleOpen(!isOpen)}
          >
            {isOpen ? (
              <img src={CloseBtn.src} alt="hamburger" className="w-3" />
            ) : (
              <img src={HamburgerBtn.src} alt="hamburger" className="w-4" />
            )}
          </div>
        </div>
      </div>
      <div
        className={`${
          isOpen
            ? "translate-y-0 pt-8 shadow-[rgba(50,_50,_105,_0.15)_0px_2px_5px_0px,_rgba(0,_0,_0,_0.05)_0px_1px_1px_0px] !z-[580] fixed top-0 w-full"
            : "-translate-y-40"
        } delay-animation bg-white custom-container `}
      >
        {isOpen && (
          <div className="flex flex-col gap-5 py-5">
            <div className="flex flex-col gap-3 ">
              {Navbar_Items.map((item) => (
                <div key={item.id} className="hover:text-theme cursor-pointer">
                  {item.title}
                </div>
              ))}
            </div>
            <div>
              <Link href={"/login"}>
                <button className="btn-one !text-sm">Create Now</button>
              </Link>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ResponsiveNavbar;
