import { features } from "@/config/constant/features";
import Image from "next/image";

const FeaturesSection = () => {
  return (
    <section className="mt-10 md:mt-[50px] lg:mt-[70px]">
      <div className="max-w-[calc(1037px+30px)] px-[30px] mx-auto text-center">
        <h2 className="__h2">Features</h2>
        <h5 className="__h5 mt-1">
          {"A framework that can adapt to your lab's specific requirements"}
        </h5>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-x-10 gap-y-5 px-8 md:px-10 mt-14">
          {features.map(({ description, icon, title }, i) => (
            <div
              key={i}
              className="__gradient __c_all flex-col gap-y-3 md:gap-y-7 py-[50px] px-8 rounded-3xl"
            >
              <Image src={icon} height={86} width={86} alt="Icon" />
              <h4 className="text-[19px]/[23px] md:text-[29px]/[26px] text-accent font-semibold">
                {title}
              </h4>
              <p className="text-[17px]/[19px] md:text-xl font-medium">
                {description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
