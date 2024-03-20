import Head from "next/head";
import Footer from "./Footer";
import Navbar from "./Navbar";

type Props = {
  children: JSX.Element[] | JSX.Element;

  title?: string;
  description?: string;
  ogImage?: string;
};
export default function PublicLayout({
  children,
  title,
  description,
  ogImage,
}: Props) {
  return (
    <main>
      <Head>
        <meta property="og:url" content="" />
        <meta property="og:type" content="website" />
        <title>
          {title || "YardEcommerce - The Ultimate Ecommerce website"}
        </title>
        <meta
          name="description"
          content={
            description ||
            "Our website is designed to make your shopping experience effortless and enjoyable. With easy navigation and filtering options, you can find what you're looking for in no time. Our fast and secure payment gateway ensures that your transactions are safe and secure."
          }
        />
        <meta property="og:image" content={ogImage} />
      </Head>
      <Navbar />
      {children}

      <Footer />
    </main>
  );
}
