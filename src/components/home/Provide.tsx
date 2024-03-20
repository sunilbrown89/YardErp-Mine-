import {
  Android_Provide,
  Featural_Provide,
  Mobile_Provide,
} from "@/assets/leadPage_Images";
import { useState } from "react";
import { motion } from "framer-motion";

const Provide_Arr = [
  {
    id: 1,
    title: (
      <div>
        Mobile responsive <br />
        websites
      </div>
    ),
    description: (
      <div>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        <br /> Vestibulum gravida, magna vitae porttitor ultricies, quam
        <br /> diam suscipit dolor, accumsan semper risus lectus eget
        <br /> ante. Praesent volutpat venenatis tellus, eget mattis
        <br /> tellus placerat et. Maecenas orci sem, ultrices sed
        <br />
        fermentum sit amet, hendrerit quis turpis. Donec volutpat
        <br /> non sem quis interdum.
      </div>
    ),
    resDescription:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum gravida, magna vitae porttitor ultricies, quam diam suscipit dolor, accumsan semper risus lectus eget ante. Praesent volutpat venenatis tellus, eget mattis tellus placerat et. Maecenas orci sem, ultrices sed fermentum sit amet, hendrerit quis turpis. Donec volutpat non sem quis interdum.",

    image: Featural_Provide.src,
  },
  {
    id: 2,
    title: (
      <div>
        Featural admin <br />
        panels
      </div>
    ),
    description: (
      <div>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        <br /> Vestibulum gravida, magna vitae porttitor ultricies, quam
        <br /> diam suscipit dolor, accumsan semper risus lectus eget
        <br /> ante. Praesent volutpat venenatis tellus, eget mattis
        <br /> tellus placerat et. Maecenas orci sem, ultrices sed
        <br />
        fermentum sit amet, hendrerit quis turpis. Donec volutpat
        <br /> non sem quis interdum.
      </div>
    ),
    resDescription:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum gravida, magna vitae porttitor ultricies, quam diam suscipit dolor, accumsan semper risus lectus eget ante. Praesent volutpat venenatis tellus, eget mattis tellus placerat et. Maecenas orci sem, ultrices sed fermentum sit amet, hendrerit quis turpis. Donec volutpat non sem quis interdum.",
    image: Mobile_Provide.src,
  },
  {
    id: 3,
    title: (
      <div>
        Android & IOS
        <br /> apps
      </div>
    ),
    description: (
      <div>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        <br /> Vestibulum gravida, magna vitae porttitor ultricies, quam
        <br /> diam suscipit dolor, accumsan semper risus lectus eget
        <br /> ante. Praesent volutpat venenatis tellus, eget mattis
        <br /> tellus placerat et. Maecenas orci sem, ultrices sed
        <br />
        fermentum sit amet, hendrerit quis turpis. Donec volutpat
        <br /> non sem quis interdum.
      </div>
    ),
    resDescription:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum gravida, magna vitae porttitor ultricies, quam diam suscipit dolor, accumsan semper risus lectus eget ante. Praesent volutpat venenatis tellus, eget mattis tellus placerat et. Maecenas orci sem, ultrices sed fermentum sit amet, hendrerit quis turpis. Donec volutpat non sem quis interdum.",
    image: Android_Provide.src,
  },
];

const hiddenMask = `repeating-linear-gradient(to right, rgba(0,0,0,0) 0px, rgba(0,0,0,0) 30px, rgba(0,0,0,1) 30px, rgba(0,0,0,1) 30px)`;
const visibleMask = `repeating-linear-gradient(to right, rgba(0,0,0,0) 0px, rgba(0,0,0,0) 0px, rgba(0,0,0,1) 0px, rgba(0,0,0,1) 30px)`;
const Provide = () => {
  const [isInView, setIsInView] = useState(false);
  return (
    <div className="w-full custom-container bg-white">
      <div className="w-full flex items-center justify-center py-10">
        <div className="md:w-5/6 w-full flex items-center justify-center flex-col">
          {Provide_Arr.map((item) => (
            <div
              className="w-full md:gap-10 grid grid-cols-12 justify-items-center"
              key={item.id}
            >
              <div
                className={`md:col-span-6 col-span-12 w-full flex justify-center md:items-end h-full flex-col ${
                  item.id === 2 ? "md:!order-2" : "md:!order-1"
                }`}
              >
                <div
                  className={`flex flex-col gap-3 ${
                    item.id === 2 ? "md:w-full" : "w-full md:items-end"
                  }`}
                >
                  <div className="flex flex-col gap-2 md:gap-4">
                    <div className="title-styling">{item.title}</div>
                    <div className="leading-5 hidden md:block">
                      {item.description}
                    </div>
                    <div className="leading-5 flex md:hidden text-sm w-full">
                      {item.resDescription}
                    </div>
                  </div>
                </div>
              </div>
              <div
                className={`md:col-span-6 col-span-12 w-full flex items-center justify-center md:justify-normal ${
                  item.id === 2 ? "md:!order-1 md:justify-end" : "md:!order-2"
                }`}
              >
                <motion.div
                  initial={false}
                  animate={
                    isInView
                      ? { WebkitMaskImage: visibleMask, maskImage: visibleMask }
                      : { WebkitMaskImage: hiddenMask, maskImage: hiddenMask }
                  }
                  transition={{ duration: 1, delay: 0.3 }}
                  viewport={{ once: true }}
                  onViewportEnter={() => setIsInView(true)}
                  className=""
                >
                  <img
                    src={item.image}
                    alt="provide_image"
                    className="md:!w-[27rem] !w-full py-5 md:py-0 md:rounded-[30px] overflow-hidden"
                  />
                </motion.div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Provide;
