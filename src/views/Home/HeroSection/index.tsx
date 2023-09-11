import gsap from "gsap";
import Image from "next/image";
import Link from "next/link";
import { useEffect } from "react";

const HeroSection = () => {
  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.to(".__heroSectionTexts", { y: 0, stagger: 0.1 });
    });
    return () => {
      ctx.revert();
    };
  }, []);

  return (
    <section className="pt-[170px] md:pt-[190px] __gradient">
      <div className="max-w-[1250px] px-[30px] mx-auto">
        <div className="max-w-[70vw] mx-auto">
          <Image
            width={1152}
            height={168}
            alt="Hero Logo Image"
            src={"/hero_logo.png"}
          />
        </div>
        <div className="md:max-w-[768px] mx-auto text-center">
          <h5 className="__h5 max-lg:mt-3 translate-y-16 __heroSectionTexts">
            Everything you need today and tomorrow
          </h5>
          <p className="__body20 md:mt-5 mt-3 mb-5 translate-y-16 __heroSectionTexts">
            A cloud based platform with portal access for all users. The
            scalable, secure and easy to use platform drives productivity,
            reduces errors, streamlines workflow and enhances compliance. Proven
            for labs in clinical and cannabis. A high performance ERP for labs.
          </p>
          <div className="__c_all gap-x-2 translate-y-16 __heroSectionTexts">
            <Link
              href={"https://www.relims.com/features"}
              className="__btn_outline text-[15px] font-bold w-[170px]"
            >
              Features
            </Link>
            <a
              href={"https://www.relims.com/#Solutions"}
              className="__btn_outline text-[15px] font-bold w-[170px]"
            >
              Solutions
            </a>
          </div>
          <div className="max-w-[600px] mx-auto translate-y-16">
            <Image
              src={"/hero_img.png"}
              height={1560}
              width={1753}
              alt="Image"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
