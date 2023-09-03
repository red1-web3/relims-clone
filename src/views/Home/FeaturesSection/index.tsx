import { features } from "@/config/constant/features";
import Image from "next/image";

const FeaturesSection = () => {
  return (
    <section className="mt-10 md:mt-[50px] lg:mt-[70px]">
      <div className="max-w-[1037px] mx-auto text-center">
        <h2 className="__h2">Features</h2>
        <h5 className="__h5 mt-1">
          {"A framework that can adapt to your lab's specific requirements"}
        </h5>

        <div className="grid grid-cols-3 gap-x-10 px-10 mt-14">
          {features.map(({ description, icon, title }, i) => (
            <div
              key={i}
              className="__gradient __c_all flex-col gap-y-7 py-[50px] px-8 rounded-3xl"
            >
              <Image src={icon} height={86} width={86} alt="Icon" />
              <h4 className="text-[29px]/[26px] text-accent font-semibold">
                {title}
              </h4>
              <p className="text-xl font-medium">{description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
