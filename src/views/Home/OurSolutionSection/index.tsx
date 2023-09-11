import { ourSolurionCards } from "@/config/constant/ourSolution";
import Image from "next/image";

const OurSolutionSection = () => {
  return (
    <section className="mt-20 md:mt-[90px] lg:mt-[100px]">
      <div className="max-w-[1037px] mx-auto text-center">
        <h2 className="__h2">Our Solutions</h2>
        <h5 className="__h5 mt-3 max-w-[519px] mx-auto">
          {"Customized LIMS software for specific industries and verticals"}
        </h5>
      </div>

      <div className="max-w-[1230px] px-[30px] mx-auto mt-[50px]">
        <div className="flex flex-wrap justify-center gap-[57px]">
          {ourSolurionCards.map(({ description, iconSrc, title, url }, i) => (
            <div
              data-aos-delay={i * 50}
              key={i}
              className="lg:w-[30%] max-w-[400px] flex flex-col justify-center items-center text-center"
            >
              <div className="__c_all h-[150px] md:h-[165px] aspect-square rounded-full border-[5px] border-[#6a717a2b]">
                <Image src={iconSrc} height={90} width={90} alt="Icon" />
              </div>
              <h5 className="text-[19px]/[23px] md:text-[25px]/[28px] font-bold text-accent my-3.5 md:my-5">
                {title}
              </h5>
              <p className="text-[15px]/[19px] md:__body16">{description}</p>
              <a href={url} className="__btn_outline px-8 mt-8">
                Learn More
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurSolutionSection;
