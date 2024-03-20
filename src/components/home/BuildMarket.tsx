import React from "react";

const mapMarket = [
  {
    key: 1,
    title: "Build",
    subtitle: "An ecommerce website",
    desc: (
      <div>
        Design your online store with our professional website templates. Save
        on development costs and start selling faster.
      </div>
    ),
    reDesc:
      "Design your online store with our professional website templates. Save on development costs and start selling faster.",
    btn: "Learn More",
  },
  {
    key: 2,
    title: "Manage",
    subtitle: "Your store",
    desc: (
      <div>
        YardEcommerce handles everything for you— order management, shipping
        integration, product catalogues, payment gateways, SEO, email
        automation, and more.
      </div>
    ),
    reDesc:
      "YardEcommerce handles everything for you— order management, shipping integration, product catalogues, payment gateways, SEO, email automation, and more.",
    btn: "Learn More",
  },
  {
    key: 3,
    title: "Market",
    subtitle: "Your store online",
    desc: (
      <div>
        Engage with customers within the same dashboard to convert website
        visitors, encourage repeat purchase, and recover lost sales. Make
        informed decisions with.
      </div>
    ),
    reDesc:
      "Engage with customers within the same dashboard to convert website visitors, encourage repeat purchase, and recover lost sales. Make informed decisions with advanced reporting and analytics features.",
    btn: "Learn More",
  },
];

const BuildMarket = () => {
  return (
    <section className="w-full bg-white">
      <article className="custom-container flex justify-center items-center">
        <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 md:gap-16 gap-4 py-10 md:py-16 w-full md:w-11/12">
          {mapMarket?.map((item, i) => (
            <div
              className="flex flex-col lg:gap-2 rounded-md md:bg-white "
              key={item.key}
            >
              <div className="title-styling">{item.title}</div>
              <div className="md:text-lg text-base text-themeDark">
                {item.subtitle}
              </div>
              <div className="font-normal text-base pt-2 w-full pb-5 hidden md:block leading-5">
                {item.desc}
              </div>
              <span className="flex md:hidden text-sm w-full pb-3">
                {item.reDesc}
              </span>

              <div className="pb-2  ">
                <button className="btn-one md:w-fit !text-sm !w-28">
                  {item.btn}
                </button>
              </div>
            </div>
          ))}
        </div>
      </article>
    </section>
  );
};

export default BuildMarket;
