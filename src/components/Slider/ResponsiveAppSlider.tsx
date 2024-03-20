import Slider from "react-slick";
import {
  App_Five,
  App_Four,
  App_One,
  App_Three,
  App_Two,
} from "@/assets/leadPage_Images";
import { useRef, useState } from "react";
import { motion } from "framer-motion";

const Slider_Arr = [
  {
    id: 1,
    img: App_One.src,
    className: ``,
  },
  {
    id: 2,
    img: App_Two.src,
  },
  {
    id: 3,
    img: App_Three.src,
  },
  {
    id: 4,
    img: App_Four.src,
  },
  {
    id: 5,
    img: App_Five.src,
  },
];
const ResponsiveAppSlider = () => {
  const ref = useRef<any>(null);
  const [currentImage, setCurrentImage] = useState(2);

  const handleNextSlide = () => {
    ref.current.slickNext();
    setCurrentImage((prev) => (prev === 5 ? 1 : prev + 1));
  };
  const handlePrevSlide = () => {
    setCurrentImage((prev) => (prev === 1 ? 5 : prev - 1));
    ref.current.slickPrev();
  };

  const settings = {
    draggable: false,
    dots: false,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    speed: 400,
    cssEase: "linear",
    pauseOnHover: false,
    arrows: false,
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
                <img src={curElm.img} alt="image" className="w-64" />
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

export default ResponsiveAppSlider;
