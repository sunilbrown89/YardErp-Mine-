import {
  Customized_Solutions,
  Experience,
  Skilled_Developers,
} from "@/assets/leadPage_Images";

const feature_Arr = [
  {
    id: 1,
    title: "6+ Years of experience",
    description: (
      <div>
        Lorem Ipsum is simply dummy text of the printing <br />
        and typesetting industry.
      </div>
    ),
    image: Experience.src,
  },
  {
    id: 2,
    title: "Customized solution",
    description: (
      <div>
        Lorem Ipsum is simply dummy text of the printing <br />
        and typesetting industry.
      </div>
    ),
    image: Customized_Solutions.src,
  },
  {
    id: 3,
    title: "Skilled developers",
    description: (
      <div>
        Lorem Ipsum is simply dummy text of the printing <br />
        and typesetting industry.
      </div>
    ),
    image: Skilled_Developers.src,
  },
];

const WhyChoose = () => {
  return (
    <article className="w-full bg-white">
      <div className="custom-container  w-full py-8 md:py-16">
        <div className="flex flex-col gap-6 items-center w-full">
          <div className="title-styling"> Why choose us?</div>
          <div className="grid lg:grid-cols-3 grid-cols-1 md:grid-cols-2 gap-5  justify-around items-center w-full ">
            {feature_Arr.map((item) => (
              <div className="grid grid-cols-1 gap-3 md:gap-5" key={item.id}>
                <div className="flex justify-center items-center">
                  <img
                    src={item.image}
                    alt=""
                    className="w-20 h-20 md:w-28 lg:w-36 md:h-28 lg:h-36"
                  />
                </div>
                <div className="grid grid-cols-1 md:gap-3 justify-center items-center w-full text-center  ">
                  <div className="font-semibold text-themeDark text-lg">
                    {item.title}
                  </div>
                  <div className="leading-5 text-sm text-center px-2 mdLpx-0">
                    {item.description}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </article>
  );
};

export default WhyChoose;
