import PublicLayout from "@/layouts/publicLayout";
import {
  BuilMarket,
  Features,
  Hero,
  Provide,
  Slider,
  WhyChoose,
  Faq,
  Testimonial,
  Banner,
} from "@/components/home";
import { useState } from "react";
import { Loader } from "@/layouts/core";

const Home = () => {
  const [isLoading, setIsLoading] = useState(false);
  // if (!isLoading) return <Loader />;
  return (
    <PublicLayout>
      <Hero />
      <BuilMarket />
      <Features />
      <Provide />
      <Slider />
      <WhyChoose />
      <Testimonial />
      <Faq />
      <Banner />
    </PublicLayout>
  );
};
export default Home;
