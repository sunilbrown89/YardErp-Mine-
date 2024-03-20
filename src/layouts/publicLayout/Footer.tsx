import {
  Facebook_Png,
  Instagram_Png,
  LinkedIn_Png,
  Logo,
  Twitter_Png,
} from "@/assets/leadPage_Images";
import Link from "next/link";
// import LOGO from "../../assets/logo.png";
// import FooterImage from "../../assets/FooterImage.png";
import { useRouter } from "next/router";

const footerLinK_Arr = [
  {
    id: 1,
    title: "Quick Links",
    allLinks: [
      {
        id: "11",
        linkName: "Home",
        path: "/",
      },
      {
        id: "12",
        linkName: "About Us",
        path: "/",
      },
      {
        id: "13",
        linkName: "Partners",
        path: "/",
      },
      {
        id: "14",
        linkName: "Privacy",
        path: "/",
      },
      {
        id: "15",
        linkName: "Products",
        path: "/",
      },
    ],
  },
  {
    id: 2,
    title: "COMPANY",
    allLinks: [
      {
        id: "21",
        linkName: "FAQs",
        path: "/",
      },
      {
        id: "22",
        linkName: "Sitemap",
        path: "/",
      },
      {
        id: "23",
        linkName: "Corporate Social",
        path: "/",
      },
      {
        id: "24",
        linkName: "Responsibility",
        path: "/",
      },
    ],
  },
  {
    id: 3,
    title: "FEATURE",
    allLinks: [
      {
        id: "31",
        linkName: "Inventory Management",
        path: "/",
      },
      {
        id: "32",
        linkName: "SEO",
        path: "/",
      },
      {
        id: "33",
        linkName: "Social Selling",
        path: "/",
      },
      {
        id: "34",
        linkName: "Product Reviews",
        path: "/",
      },
      {
        id: "35",
        linkName: "Book a Demo",
        path: "/",
      },
    ],
  },
  {
    id: 4,
    title: "Discover",
    allLinks: [
      {
        id: "41",
        linkName: "Guides",
        path: "/",
      },
      {
        id: "42",
        linkName: "Templates",
        path: "/",
      },
      {
        id: "43",
        linkName: "Integrations",
        path: "/",
      },
      {
        id: "44",
        linkName: "Pricing",
        path: "/",
      },
    ],
  },
  {
    id: 5,
    title: "Partner Programs",
    allLinks: [
      {
        id: "51",
        linkName: "Affiliates",
        path: "/",
      },
      {
        id: "52",
        linkName: "Reseller Programs",
        path: "/",
      },
      {
        id: "53",
        linkName: "YardEcommerce Pro",
        path: "/",
      },
    ],
  },
];

const socialLink_Arr = [
  {
    id: 1,
    icon: Facebook_Png.src,
    path: "https://www.facebook.com",
  },
  {
    id: 2,
    icon: Instagram_Png.src,
    path: "https://www.instagram.com",
  },
  {
    id: 3,
    icon: Twitter_Png.src,
    path: "https://www.twitter.com",
  },
  {
    id: 4,
    icon: LinkedIn_Png.src,
    path: "https://www.linkedin.com",
  },
];

const Footer = () => {
  const router = useRouter();
  return (
    <section className="w-full flex bg-white flex-col custom-container">
      {/* main div */}
      <div className="grid grid-cols-10 md:gap-8 gap-4 py-4 md:py-10 justify-between">
        <div className="flex col-span-12 flex-col gap-3 md:gap-6 md:col-span-3">
          <img className="w-40 md:w-48" src={Logo.src} alt="logo" />
          {/* <div className="text-sm leading-6 md:leading-5 justify-center items-center text-themeDarkGray">
            Near Satya Sai Enclave, House No -HIG 66, AMRI Hospital Road,
            Khandagiri, Bhubaneswar, Odisha 751030
          </div> */}
          <div className="flex w-full gap-4 md:gap-6 items-center">
            {socialLink_Arr.map((item) => (
              <div>
                <img src={item.icon} alt="image" className="w-8 md:w-10" />
              </div>
            ))}
          </div>
        </div>
        {/* usefull Links */}
        <div className="md:col-span-7 col-span-12 gap-8 md:flex grid grid-cols-12 md:flex-row md:justify-around">
          {footerLinK_Arr.map((item) => (
            <div
              key={item.id}
              className={` flex-col gap-3 md:gap-5 flex col-span-6`}
            >
              <h3 className="text-themeDarkGray font-semibold text-themeDark">
                {item.title}
              </h3>
              <div className="flex flex-col gap-3">
                {item.allLinks.map((item) => (
                  <div key={item.id} className="">
                    <Link href={item.path}>
                      <div className={`text-sm hover:text-themeSecondary`}>
                        {item.linkName}
                      </div>
                    </Link>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="flex justify-center text-center md:text-base w-full py-3">
        <div className="text-sm hidden md:flex gap-2 items-center">
          Copyright © 2023 The YARDECOMMERCE A Product Of
          <span className="underline">SearchingYard Software Group.</span> All
          rights reserved.
        </div>
        <div className="text-sm flex md:hidden gap-2 items-center">
          Copyright © 2023 The YARDECOMMERCE A Product Of SearchingYard Software
          Group. All rights reserved.
        </div>
        {/* <img
          className="h-28 object-cover w-full"
          src={FooterImage.src}
          alt="logo"
        /> */}
      </div>
    </section>
  );
};

export default Footer;
