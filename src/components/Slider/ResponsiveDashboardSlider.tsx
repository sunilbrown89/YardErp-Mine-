import Slider from "react-slick";
import {
  Dashboard_One,
  Dashboard_Three,
  Dashboard_Two,
} from "@/assets/leadPage_Images";
import { useRef, useState } from "react";
import { motion } from "framer-motion";

const Slider_Arr = [
  {
    id: 1,
    img: Dashboard_One.src,
    className: ``,
  },
  {
    id: 2,
    img: Dashboard_Two.src,
  },
  {
    id: 3,
    img: Dashboard_Three.src,
  },
  {
    id: 4,
    img: Dashboard_Two.src,
  },
];
const ResponsiveDashboardSlider = () => {
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
                className="!w-full flex items-center justify-center"
              >
                <img src={curElm.img} alt="image" className="md:w-full" />
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

export default ResponsiveDashboardSlider;
