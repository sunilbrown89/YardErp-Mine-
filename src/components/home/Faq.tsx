import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Faq_Image, Up_Arrow } from "@/assets/leadPage_Images";

const Faq = () => {
  const [expanded, setExpanded] = useState<false | number>(0);
  const handleOpen = (i: number) => {
    setExpanded((prev) => (prev === i ? false : i));
  };
  const Faq_Arr = [
    {
      id: 1,
      question: "1. What is an eCommerce website?",
      answer:
        "An eCommerce website is an online store where you can buy or sell products online.",
    },
    {
      id: 2,
      question: "2. What is the best eCommerce website builder?",
      answer:
        "Yes, this is a free online event created to connect you to Russian educational institutions. To save your spot, you just need to register on this website and access the platform on the day and time of the virtual fair.",
    },
    {
      id: 3,
      question: "3. How can I build an eCommerce website?",
      answer:
        "The virtual fair works like a physical event and the best part is that you can do all from home! On the platform, you will be able to visit the booth of each educational institution to see more information about them and, best of all.",
    },
    {
      id: 4,
      question: "4. How do I choose a name for my eCommerce website?",
      answer:
        "We do recommend that you access the platform in the days of the event to interact directly with Russian University Representatives to get answers to your questions.",
    },
    {
      id: 5,
      question: "5. Where can I host my eCommerce website?",
      answer:
        "We recommend you attend the event on 21st-22nd of March from 12:00 – 18:00(GTM+3) if you are not able to join the event - at any time, you can contact us, and we will help you with your admission.",
    },
    {
      id: 6,
      question:
        "6. I have no design or coding skills, can I still use YardEcommerce?",
      answer:
        "We recommend you attend the event on 21st-22nd of March from 12:00 – 18:00(GTM+3) if you are not able to join the event - at any time, you can contact us, and we will help you with your admission.",
    },
  ];
  return (
    <div className="w-full custom-container flex items-center py-10 md:py-16 justify-between">
      <div className="flex flex-col w-full md:w-1/2 gap-6">
        <div className="title-styling">Frequently asked question</div>
        <div className="w-full flex flex-col gap-5">
          {Faq_Arr?.map((item, i) => (
            <div
              key={item.id}
              className="flex flex-col gap-2 pb-3 md:pb-4 border-b border-theme"
            >
              <div
                className="md:text-lg text-base px-2 cursor-pointer flex w-full justify-between items-center text-themeDark"
                onClick={() => handleOpen(i)}
              >
                <div className="w-5/6">{item.question}</div>
                <div
                  className={`dark-bg  flex items-center justify-center common-transition !rounded-full !h-6 w-6 ${
                    i === expanded ? "rotate-180" : ""
                  }`}
                >
                  <img src={Up_Arrow.src} alt="up_arrow" className="w-3" />
                </div>
              </div>
              <AnimatePresence initial={false}>
                {i === expanded && (
                  <motion.section
                    key="content"
                    initial="collapsed"
                    animate="open"
                    exit="collapsed"
                    variants={{
                      open: { opacity: 1, height: "auto" },
                      collapsed: { opacity: 0, height: 0 },
                    }}
                    transition={{
                      duration: 0.3,
                      ease: [0.04, 0.62, 0.23, 0.98],
                    }}
                  >
                    <div className="md:px-4 px-2 text-sm md:text-base leading-5 md:leading-6">
                      {item.answer}
                    </div>
                  </motion.section>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
      <div className="w-1/2 md:flex hidden items-center justify-center">
        <img src={Faq_Image.src} alt="faq_image" className="w-96" />
      </div>
    </div>
  );
};

export default Faq;
