import { useRef, useState } from "react";
import { motion } from "framer-motion";
import Slider from "react-slick";
import {
  Quote,
  Star_Btn,
  Star_Outlined_Btn,
  Testimonial_One,
  Testimonial_Three,
  Testimonial_Two,
} from "@/assets/leadPage_Images";

const Testimonial = () => {
  const ref = useRef<any>(null);
  const [currentImage, setCurrentImage] = useState(3);

  const handleNextSlide = () => {
    ref.current.slickNext();
    setCurrentImage((prev) => (prev === 6 ? 1 : prev + 1));
  };
  const handlePrevSlide = () => {
    setCurrentImage((prev) => (prev === 1 ? 6 : prev - 1));
    ref.current.slickPrev();
  };

  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    speed: 400,
    cssEase: "linear",
    pauseOnHover: false,
    arrows: false,
    draggable: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
          speed: 400,
          cssEase: "linear",
          pauseOnHover: false,
          arrows: false,
          draggable: false,
        },
      },
      {
        breakpoint: 940,
        settings: {
          autoplay: false,
          autoplaySpeed: 3000,
          dots: true,
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          arrows: false,
        },
      },
      {
        breakpoint: 760,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
          speed: 400,
          cssEase: "linear",
          pauseOnHover: false,
          arrows: false,
          draggable: false,
        },
      },
    ],
  };
  const Testimonial_Arr = [
    {
      id: 1,
      name: "Roshini",
      deg: "CEO, Nature Foody To Your Skin",
      comment:
        "I started my business of making and selling organic skincare and haircare products on social media through Instagram, but managing orders manually took up a lot of my time as my business began to grow. ",
      image: Testimonial_One.src,
      count: 4,
    },
    {
      id: 3,
      name: "Ravichandran Bala Kumar",
      deg: "Founder, Thulam Foods",
      comment:
        "When it comes to website design and layout, YardEcommerce makes our work easy. Not long ago, around 80 percent of our business was offline, and we also had customers placing orders on the phone.",
      image: Testimonial_Three.src,
      count: 5,
    },
    {
      id: 4,
      name: "Ravichandran Bala Kumar",
      deg: "Founder, Thulam Foods",
      comment:
        "When it comes to website design and layout, YardEcommerce makes our work easy. Not long ago, around 80 percent of our business was offline, and we also had customers placing orders on the phone.",
      image: Testimonial_Two.src,
      count: 4,
    },
  ];

  return (
    <div className="w-full py-10 bg-themeLighter">
      <div className="w-full custom-container flex-col gap-2 md:gap-1 flex items-center justify-center text-center">
        <div className="text-sm md:text-base">TESTIMONIALS</div>
        <div className="title-styling">They use our service</div>
        <div className="md:w-11/12 w-full flex flex-col md:gap-6 gap-0 md:py-10">
          <section className="testimonial-slick company-slick-slider overflow-hidden ">
            <Slider ref={ref} {...settings} className="our-store-dots">
              {Testimonial_Arr?.map((curElm: any) => (
                <div
                  className="w-full !flex !items-center p-2 md:px-0 md:py-5 !justify-center"
                  key={curElm.id}
                >
                  <div className="flex w-full md:w-11/12 rounded-lg relative shadow-[rgba(50,_50,_105,_0.15)_0px_2px_5px_0px,_rgba(0,_0,_0,_0.05)_0px_1px_1px_0px] flex-col gap-2 md:gap-4 bg-white p-3 md:p-4">
                    <div className="absolute right-6 top-10">
                      <img src={Quote.src} alt="quote" className="w-8" />
                    </div>
                    <div className="flex gap-5">
                      <img
                        src={curElm.image}
                        alt="testimonial"
                        className="w-16 h-16 rounded-full object-cover"
                      />
                      <div className="flex flex-col text-start">
                        <div className="md:text-lg text-base font-semibold">
                          {curElm.name}
                        </div>
                        <div className="text-sm text-themeDark ">
                          {curElm.deg}
                        </div>
                      </div>
                    </div>
                    <div className="text-left leading-5 text-sm">
                      {curElm.comment}
                    </div>
                    <div className="flex gap-2 justify-end w-full items-center pb-3 pt-1">
                      {[...Array(5)]?.map((_, index) => (
                        <div key={index}>
                          {curElm.count >= index + 1 ? (
                            <img
                              src={Star_Btn.src}
                              alt="star"
                              className="w-4"
                            />
                          ) : (
                            <img
                              src={Star_Outlined_Btn.src}
                              alt="star"
                              className="w-4"
                            />
                          )}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </Slider>
          </section>
          <div className="flex gap-3 md:gap-6 w-full items-center justify-end">
            <button
              // disabled={isLoading}
              onClick={handleNextSlide}
              className={`btn-one flex text-xl font-semibold common-transition border-theme items-center justify-center md:w-12 h-10 border-2 cursor-pointer rounded-full md:h-12 w-10`}
            >
              {`<`}
            </button>
            <button
              onClick={handlePrevSlide}
              className={`gradientButton text-xl font-semibold common-transition btn-one flex items-center border-theme justify-center cursor-pointer md:w-12 w-10 border-2 rounded-full md:h-12 h-10`}
            >
              {`>`}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
