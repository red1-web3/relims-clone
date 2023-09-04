/* eslint-disable @next/next/no-img-element */
import Image from "next/image";
import Link from "next/link";

const logos = [
  "footer_logo_1.png",
  "footer_logo_2.png",
  "footer_logo_3.png",
  "footer_logo_4.png",
];

const Footer = () => {
  return (
    <footer className="shadow-[-8px_-18px_20px_20px_hsla(0,0%,90.7%,0.29)] py-10 mt-[60px] md:mt-[80px] lg:mt-[140px]">
      <div className="max-w-[1200px] mx-auto max-lg:px-5">
        <div className="flex max-md:flex-col items-start gap-x-11">
          <Link href={"#"} className="max-md:max-w-[200px]">
            <Image src={"/logo.png"} width={235} height={93} alt="Logo Image" />
          </Link>

          <div className="lg:ml-10 max-md:mt-8 flex items-center gap-x-4">
            {logos.map((src, i) => (
              <img
                src={src}
                key={i}
                alt="Logo"
                className="w-[70px] md:w-20 lg:w-[153px]"
              />
            ))}
          </div>

          <div>
            <h5 className="font-bold text-[17px]/[20px]">Contact Us</h5>
            <div className="mt-5 text-sm font-ligth text-[#828282]">
              <a href="mailto:info@relims.com">Info@relims.com</a>
              <div className="flex gap-x-2 mt-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width={15}
                  height={20}
                  viewBox="0 0 18 24"
                >
                  <path
                    id="location-pin"
                    d="M12,0A9.043,9.043,0,0,0,3,9.065c0,7.1,8.154,14.437,8.5,14.745a.752.752,0,0,0,1,0C12.846,23.5,21,16.168,21,9.065A9.043,9.043,0,0,0,12,0Zm0,14a5,5,0,1,1,5-5A5.006,5.006,0,0,1,12,14Z"
                    transform="translate(-3)"
                    fill="#0a67b2"
                  />
                </svg>
                <div>
                  <p>relims, CA 94061</p>
                  <p>United States</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <p className="mt-[30px]">2023 Copyright www.relims.com</p>
      </div>
    </footer>
  );
};

export default Footer;
