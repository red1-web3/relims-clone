import Image from "next/image";
import Link from "next/link";

const HeroSection = () => {
  return (
    <section className="pt-[190px] __gradient">
      <div className="max-w-[1240px] px-5 mx-auto">
        <Image
          width={1152}
          height={168}
          alt="Hero Logo Image"
          src={"/hero_logo.png"}
        />
        <div className="max-w-[768px] mx-auto text-center">
          <h5 className="__h5">Everything you need today and tomorrow</h5>
          <p className="__body20 mt-3 mb-5">
            A cloud based platform with portal access for all users. The
            scalable, secure and easy to use platform drives productivity,
            reduces errors, streamlines workflow and enhances compliance. Proven
            for labs in clinical and cannabis. A high performance ERP for labs.
          </p>
          <div className="__c_all gap-x-2">
            <Link
              href={"#"}
              className="__btn_outline text-[15px] font-bold w-[170px]"
            >
              Features
            </Link>
            <a
              href={"#"}
              className="__btn_outline text-[15px] font-bold w-[170px]"
            >
              Solutions
            </a>
          </div>
          <div className="max-w-[600px] mx-auto translate-y-12">
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
