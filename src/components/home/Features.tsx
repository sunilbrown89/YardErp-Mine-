import {
  Inventory_Feature,
  Mobile_Feature,
  Payment_Feature,
  Security_Feature,
  User_Feature,
  Web_Feature,
} from "@/assets/leadPage_Images";
import { useState } from "react";
import { motion } from "framer-motion";

const feature_Arr = [
  {
    id: 1,
    title: "User-friendly",
    description: (
      <div>
        A page that looks professional and is <br />
        easy for anyone who visits your website
        <br /> to navigate — including those who
        <br /> require certain accessibility needs.
      </div>
    ),
    resDescription:
      "A page that looks professional and is easy for anyone who visits your website to navigate — including those who require certain accessibility needs.",
    image: User_Feature.src,
  },
  {
    id: 2,
    title: "Mobile-friendly",
    description: (
      <div>
        One that is designed to work the exact
        <br /> same way across devices. This means
        <br /> that nothing changes or is unusable
        <br /> on a computer or mobile device.
      </div>
    ),
    resDescription:
      " One that is designed to work the exact same way across devices. This means that nothing changes or is unusable on a computer or mobile device.",
    image: Mobile_Feature.src,
  },
  {
    id: 3,
    title: "Web hosting",
    description: (
      <div>
        An online service that allows you to
        <br /> publish your website files onto the
        <br />
        internet. So, anyone who has access to <br />
        the internet has access to your website.
      </div>
    ),
    resDescription:
      " An online service that allows you to publish your website files onto the internet. So, anyone who has access to the internet has access to your website.",
    image: Web_Feature.src,
  },
  {
    id: 4,
    title: "Security",
    description: (
      <div>
        the measures taken to secure a website
        <br /> from cyberattacks. That may include
        <br /> protecting a website from hackers,
        <br /> malware, scams or phishing, and errors.
      </div>
    ),
    resDescription:
      "  the measures taken to secure a website from cyberattacks. That may include protecting a website from hackers, malware, scams or phishing, and errors.",
    image: Security_Feature.src,
  },
  {
    id: 5,
    title: "Payment gateway integration",
    description: (
      <div>
        An online payment gateway ensures instant
        <br /> {`and secure transfer of a customer's personal`}
        <br /> payment information between your app, <br />
        several payment processing systems.
      </div>
    ),
    resDescription:
      "     An online payment gateway ensures instant and secure transfer of a customer's personal payment information between your app, several payment processing systems.",
    image: Payment_Feature.src,
  },
  {
    id: 7,
    title: "Inventory management",
    description: (
      <div>
        a critical element of the supply chain, is
        <br /> the tracking of inventory from
        <br /> manufacturers to warehouses and from <br />
        these facilities to a point of sale.
      </div>
    ),
    resDescription:
      "  a critical element of the supply chain, is the tracking of inventory from manufacturers to warehouses and from these facilities to a point of sale.",
    image: Inventory_Feature.src,
  },
];

const Features = () => {
  const [isInView, setIsInView] = useState(false);
  const variants = {
    open: {
      y: 0,
      opacity: 1,
      transition: {
        y: { stiffness: 1000, velocity: -100 },
      },
    },
    closed: {
      y: 200,
      opacity: 0,
      transition: {
        y: { stiffness: 1000 },
      },
    },
  };
  return (
    <div className="w-full bg-themeLighter overflow-hidden">
      <div className="custom-container w-full grid grid-cols-12 py-10 md:py-12">
        <div className="md:col-span-11 col-span-12 flex flex-col gap-2 md:gap-5">
          <div className="text-sm md:text-base text-center md:text-left">
            FEATURES
          </div>
          <div className="title-styling text-center md:text-left">
            The advantages of
            <br /> using YardEcommerce
          </div>

          <div className="w-full grid grid-cols-12 gap-6 md:gap-12 py-4 md:py-8">
            {feature_Arr.map((item) => (
              <div
                className="md:col-span-4 col-span-12 flex md:items-start flex-col gap-4"
                key={item.id}
              >
                <motion.div
                  initial={false}
                  variants={variants}
                  animate={isInView ? "open" : "closed"}
                  transition={{ duration: 1, delay: 2 }}
                  viewport={{ once: true }}
                  className="!flex flex-col gap-1 md:items-start md:justify-start md:text-left items-center justify-center text-center"
                  onViewportEnter={() => setIsInView(true)}
                >
                  <div>
                    <img
                      src={item.image}
                      alt="image"
                      className="md:w-20 w-16"
                    />
                  </div>
                  <div className="font-semibold text-theme text-base leading-4 md:leading-6 md:text-lg">
                    {item.title}
                  </div>
                  <div className="hidden md:block leading-5">
                    {item.description}
                  </div>
                  <span className="flex md:hidden text-sm w-full px-5">
                    {item.resDescription}
                  </span>
                </motion.div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Features;
