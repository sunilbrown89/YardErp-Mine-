import Slider from "react-slick";
import {
  Website_One,
  Website_Three,
  Website_Two,
} from "@/assets/leadPage_Images";
import { useRef, useState } from "react";
import { motion } from "framer-motion";

const Slider_Arr = [
  {
    id: 1,
    img: Website_One.src,
    className: ``,
  },
  {
    id: 2,
    img: Website_Two.src,
  },
  {
    id: 3,
    img: Website_Three.src,
  },
  {
    id: 4,
    img: Website_Two.src,
  },
];
const ResponsiveWebsiteSlider = () => {
  const ref = useRef<any>(null);
  const [currentImage, setCurrentImage] = useState(1);

  const handleNextSlide = () => {
    ref.current.slickNext();
    setCurrentImage((prev) => (prev === 4 ? 1 : prev + 1));
  };
  const handlePrevSlide = () => {
    setCurrentImage((prev) => (prev === 1 ? 4 : prev - 1));
    ref.current.slickPrev();
  };

  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    speed: 400,
    cssEase: "linear",
    pauseOnHover: false,
    arrows: false,
    draggable: false,
  };
  const variants = {
    open: { scale: 1 },
    closed: { scale: 0.6 },
  };
  return (
    <div className="w-full flex md:hidden flex-col gap-8">
      <section className="testimonial-slick company-slick-slider overflow-hidden ">
        <Slider ref={ref} {...settings} className="our-store-dots">
          {Slider_Arr?.map((curElm: any) => (
            <div
              className="w-full flex items-center justify-center"
              key={curElm.id}
            >
              <motion.div
                transition={{ duration: 0.5 }}
                animate={curElm.id === currentImage ? "open" : "closed"}
                variants={variants}
                className="w-full flex items-center justify-center"
              >
                <img src={curElm.img} alt="image" className="w-full" />
              </motion.div>
            </div>
          ))}
        </Slider>
      </section>
      <div className="flex gap-5 w-full items-center justify-center">
        <button
          // disabled={isLoading}
          onClick={handleNextSlide}
          className={`btn-one flex text-xl font-semibold common-transition border-theme items-center justify-center w-10 border-2 cursor-pointer rounded-full h-10`}
        >
          {`<`}
        </button>
        <button
          onClick={handlePrevSlide}
          className={`gradientButton text-xl font-semibold common-transition btn-one flex items-center border-theme justify-center cursor-pointer w-10 border-2 rounded-full h-10`}
        >
          {`>`}
        </button>
      </div>
    </div>
  );
};

export default ResponsiveWebsiteSlider;
