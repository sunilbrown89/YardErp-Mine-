import { useState } from "react";
import { AppSlider, DashboardSlider, WebsiteSlider } from "../Slider";
import { motion } from "framer-motion";

const Slider = () => {
  const [activeButton, setActiveButton] = useState("Apps");
  const Preview_Arr = [
    {
      id: 1,
      value: "Apps",
      className: `${
        activeButton === "Apps"
          ? "translate-x-0"
          : activeButton === "Websites"
          ? "md:translate-x-[10.5rem] translate-x-32"
          : activeButton === "Panels"
          ? "md:translate-x-80 translate-x-60"
          : ""
      }`,
    },
    {
      id: 2,
      value: "Websites",
      className: `${
        activeButton === "Websites"
          ? "md:-translate-x-[10.5rem] -translate-x-28"
          : activeButton === "Apps"
          ? "translate-x-0"
          : activeButton === "Panels"
          ? "md:-translate-x-[10.5rem] -translate-x-28"
          : ""
      }`,
    },
    {
      id: 3,
      value: "Panels",
      className: `${
        activeButton === "Panels"
          ? "md:-translate-x-[10.8rem] -translate-x-28"
          : ""
      }`,
    },
  ];

  const variants = {
    open: {
      y: 0,
      opacity: 1,
      transition: {
        y: { stiffness: 1000, velocity: -100 },
      },
    },
    closed: {
      x: 400,
      opacity: 0,
      transition: {
        y: { stiffness: 1000 },
      },
    },
  };
  const websiteVariants = {
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
  const panelVariants = {
    open: {
      x: 0,
      opacity: 1,
      transition: {
        x: { stiffness: 1000, velocity: -100 },
      },
    },
    closed: {
      // y: 200,
      opacity: 0,
      transition: {
        y: { stiffness: 1000 },
      },
    },
  };
  return (
    <div className="w-full overflow-hidden bg-themeLighter ">
      <div className="w-full py-12">
        <div className="flex flex-col w-full items-center justify-center text-center md:gap-3 gap-1 ">
          <div>DESIGN TEMPLATES</div>
          <div className="title-styling">
            Create the store you need with
            <br /> designs you’ll love.
          </div>
          <div className="md:py-3 py-2">
            Create an eCommerce website that adapts with your business at every
            stage,
            <br /> from starting out to selling internationally.
          </div>
          <div className="w-full flex items-center justify-center gap-6 md:gap-10 md:pt-6 pt-4 pb-8 md:pb-10">
            {Preview_Arr.map((item) => (
              <button
                onClick={() => setActiveButton(item.value)}
                className={`${
                  item.value === activeButton
                    ? "btn-one_hover_none cursor-not-allowed"
                    : "bg-themeDark/40 text-white shadow-lg border-themeLighter rounded-3xl"
                } !py-2 md:!py-2.5 w-24 text-sm md:text-base md:w-32 delay-animation ${
                  item.className
                }`}
                key={item.id}
              >
                {item.value}
              </button>
            ))}
          </div>

          <div className="w-[120%] ">
            <motion.div
              initial={false}
              variants={variants}
              animate={activeButton === "Apps" ? "open" : "closed"}
              transition={{ duration: 0.5, delay: 0 }}
              viewport={{ once: true }}
            >
              {activeButton === "Apps" && <AppSlider />}
            </motion.div>
          </div>
          <div className="w-full">
            <motion.div
              initial={false}
              variants={websiteVariants}
              animate={activeButton === "Websites" ? "open" : "closed"}
              transition={{ duration: 0.5, delay: 0 }}
              viewport={{ once: true }}
            >
              {activeButton === "Websites" && <WebsiteSlider />}
            </motion.div>
          </div>
          <div className="w-full">
            <motion.div
              initial={false}
              variants={panelVariants}
              animate={activeButton === "Panels" ? "open" : "closed"}
              transition={{ duration: 0.5, delay: 0 }}
              viewport={{ once: true }}
            >
              {activeButton === "Panels" && <DashboardSlider />}
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Slider;
