import { Logo } from "@/assets/leadPage_Images";
import Link from "next/link";
import ResponsiveNavbar from "./ResponsiveNavbar";

export const Navbar_Items = [
  {
    id: 1,
    title: "Feature",
    path: "",
  },
  {
    id: 2,
    title: "Products",
    path: "",
  },
  // {
  //   id: 3,
  //   title: "Pricing",
  //   path: "",
  // },
  {
    id: 4,
    title: "Templates",
    path: "",
  },
  {
    id: 5,
    title: "Resources",
    path: "",
  },
  {
    id: 6,
    title: "Solutions",
    path: "",
  },
  {
    id: 7,
    title: "Customers",
    path: "",
  },
];
const Navbar = () => {
  return (
    <section className="w-full fixed top-0 bg-white !z-[777] shadow-[rgba(50,_50,_105,_0.15)_0px_2px_5px_0px,_rgba(0,_0,_0,_0.05)_0px_1px_1px_0px]">
      <div className="w-full custom-container py-2 h-16 md:h-20 md:grid hidden md:grid-cols-11">
        <div className="col-span-3 flex items-center">
          <Link href="/">
            <img src={Logo.src} alt="logo" className="w-60" />
          </Link>
        </div>
        <div className="flex col-span-8 justify-between items-center">
          <div className="flex items-center justify-between w-full">
            {Navbar_Items.map((item) => (
              <div key={item.id} className="relative group">
                <Link href={item.path}>
                  <div
                    className={`text-base hover:text-themeSecondary cursor-pointer hover:scale-[1.01]`}
                  >
                    {item.title}
                  </div>
                </Link>
              </div>
            ))}
          </div>
          <div className="w-1/4 flex justify-end items-center">
            <Link href={"/login"}>
              <button className="btn-one !w-fit common-transition">
                Create Now
              </button>
            </Link>
          </div>
        </div>
      </div>
      <div className="w-full md:hidden block">
        <ResponsiveNavbar />
      </div>
    </section>
  );
};

export default Navbar;
