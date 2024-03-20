import { Login_Bg, Logo, Shopping_Teddy } from "@/assets/leadPage_Images";
import { Field, Form, Formik } from "formik";
import Link from "next/link";
import { useState } from "react";
import * as Yup from "yup";
const SendRequestSchema = [
  {
    key: "1",
    label: "Name",
    name: "name",
    type: "text",
    validationSchema: Yup.string().required("Name is required"),
    initialValue: "",
  },
  {
    key: "2",
    label: "Email Id",
    name: "email",
    type: "string",
    validationSchema: Yup.string()
      .email("Invalid email id")
      .required("Email Id must be provided"),
    initialValue: "",
  },
  {
    key: "3",
    label: "Phone Number",
    name: "phone",
    type: "number",
    validationSchema: Yup.number()
      .min(6, "Number must be at least 6 characters")
      .required("Number is required"),
    initialValue: "",
  },
  {
    key: "4",
    label: "Company Name",
    name: "company",
    type: "string",
    validationSchema: Yup.string().required("Company Name is required"),
    initialValue: "",
  },
  {
    key: "4",
    label: "Business Email Id",
    name: "business",
    type: "string",
    validationSchema: Yup.string()
      .email("Invalid email id")
      .required("Business email must be provided"),
    initialValue: "",
  },
  {
    key: "4",
    label: "Country",
    name: "country",
    type: "string",
    validationSchema: Yup.string().required("Country must be provided"),
    initialValue: "",
  },
];

const initialValues = SendRequestSchema?.reduce((accumulator, currentValue) => {
  accumulator[currentValue?.name] = currentValue?.initialValue;
  return accumulator;
}, {} as any);

const validationSchema = SendRequestSchema?.reduce(
  (accumulator, currentValue) => {
    accumulator[currentValue?.name] = currentValue?.validationSchema;
    return accumulator;
  },
  {} as any
);
const UserLogin = () => {
  const handleSend = () => {};
  return (
    <div className="w-full h-screen">
      <div className="w-full flex h-full flex-col md:flex-row relative">
        <div
          className="md:w-[58%] w-full h-full bg-center bg-cover hidden md:block relative"
          style={{ backgroundImage: `url(${Login_Bg.src})` }}
        >
          <div className="absolute top-10 left-10">
            <Link href={"/"}>
              <img src={Logo.src} alt="" className="w-72 cursor-pointer" />
            </Link>
          </div>
        </div>
        <div className="md:w-[42%] w-full h-full bg-[#907EFF] hidden md:flex items-center justify-center ">
          <div className="md:w-[68%] w-11/12 h-fit px-5 py-8 bg-[#FFFFFF] rounded-2xl bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-50 border border-gray-100 z-[666]">
            <div className="w-full h-full">
              {/* .......................user send request here............................. */}
              <Formik
                initialValues={initialValues}
                validationSchema={Yup.object(validationSchema)}
                onSubmit={handleSend}
              >
                {(formik) => (
                  <Form>
                    <div className="w-full flex gap-4 flex-col">
                      {SendRequestSchema.map((inputItem) => (
                        <Field name={inputItem.name} key={inputItem.key}>
                          {(props: {
                            meta: { touched: any; error: any };
                            field: any;
                          }) => (
                            <div
                              className={`flex flex-col justify-center gap-2`}
                            >
                              <div className="col-span-6 w-full flex flex-col">
                                <input
                                  style={{
                                    backgroundColor: "transparent",
                                    width: "100%",
                                  }}
                                  className="form-control w-full px-3 py-2 md:py-1.5 text-sm text-black bg-white border-b border-[#FFFFFF] focus:text-black focus:outline-none  active:bg-white h-9"
                                  autoComplete="off"
                                  type={inputItem?.type}
                                  name={inputItem?.name}
                                  id="outlined-basic"
                                  placeholder={inputItem?.label}
                                  value={formik?.values[inputItem?.name]}
                                  onChange={formik.handleChange}
                                  onBlur={formik.handleBlur}
                                />
                                <span className="text-red-500 text-[10px] font- pt-1 px-1">
                                  {formik?.touched[inputItem?.name] &&
                                    (formik?.errors[inputItem?.name] as any)}
                                </span>
                              </div>
                            </div>
                          )}
                        </Field>
                      ))}
                    </div>
                    <div className="text-[8px] text-center pt-1">
                      This site is protected by reCAPTCHA and the Google Privacy
                      Policy and Terms of Service apply.
                    </div>

                    <div className="flex items-center col-span-12  justify-center flex-col gap-2 py-4">
                      <button className="btn-one !text-sm !w-32" type="submit">
                        Send Request
                      </button>
                    </div>
                  </Form>
                )}
              </Formik>
            </div>
          </div>
        </div>

        {/* ...................for mobile screen ......................... */}
        <div
          className="md:w-[42%] w-full h-full  flex md:hidden items-center justify-center bg-cover bg-center"
          style={{ backgroundImage: `url(${Login_Bg.src})` }}
        >
          <div className="md:w-[68%] w-11/12 h-fit px-5 py-8 bg-black rounded-2xl bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-40 border border-gray-100 z-[666]">
            <div className="w-full h-full">
              {/* .......................user send request here............................. */}
              <Formik
                initialValues={initialValues}
                validationSchema={Yup.object(validationSchema)}
                onSubmit={handleSend}
              >
                {(formik) => (
                  <Form>
                    <div className="w-full flex gap-4 flex-col">
                      {SendRequestSchema.map((inputItem) => (
                        <Field name={inputItem.name} key={inputItem.key}>
                          {(props: {
                            meta: { touched: any; error: any };
                            field: any;
                          }) => (
                            <div
                              className={`flex flex-col justify-center gap-2`}
                            >
                              <div className="col-span-6 w-full flex flex-col">
                                <input
                                  style={{
                                    backgroundColor: "transparent",
                                    width: "100%",
                                  }}
                                  className="form-control w-full px-3 py-2 md:py-1.5 text-sm text-white bg-white border-b border-[#FFFFFF] focus:text-white focus:outline-none active:bg-white h-9"
                                  autoComplete="off"
                                  type={inputItem?.type}
                                  name={inputItem?.name}
                                  id="outlined-basic"
                                  placeholder={inputItem?.label}
                                  value={formik?.values[inputItem?.name]}
                                  onChange={formik.handleChange}
                                  onBlur={formik.handleBlur}
                                />
                                <span className="text-red-500 text-[10px] font- pt-1 px-1">
                                  {formik?.touched[inputItem?.name] &&
                                    (formik?.errors[inputItem?.name] as any)}
                                </span>
                              </div>
                            </div>
                          )}
                        </Field>
                      ))}
                    </div>
                    <div className="text-[8px] text-center pt-1 text-white">
                      This site is protected by reCAPTCHA and the Google Privacy
                      Policy and Terms of Service apply.
                    </div>

                    <div className="flex items-center col-span-12  justify-center flex-col gap-2 py-4">
                      <button className="btn-one !text-sm !w-32" type="submit">
                        Send Request
                      </button>
                    </div>
                  </Form>
                )}
              </Formik>
            </div>
          </div>
        </div>
        <div className="absolute bottom-0 left-[47%]">
          <img src={Shopping_Teddy.src} alt="" className="w-80" />
        </div>
        <div className="absolute md:hidden top-6 left-6">
          <img src={Logo.src} alt="" className="w-44" />
        </div>
      </div>
    </div>
  );
};

export default UserLogin;
