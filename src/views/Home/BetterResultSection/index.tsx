import { betterResult } from "@/config/constant/betterResult";
import { cxm } from "@/utils";
import { useState } from "react";

const BetterResultSection = () => {
  const [activeTab, setActiveTab] = useState(2);

  return (
    <section className="mt-10 md:mt-[60px] lg:mt-[120px]">
      <div className="mx-auto text-center">
        <h2 className="__h2">Better results</h2>
        <p className="__h5 mt-3">From automation to profitability</p>
      </div>
      <div className="max-w-[768px] mx-auto mt-10">
        <div className="__c_all gap-x-5">
          {betterResult.tabs.map((label, i) => {
            return (
              <div key={i}>
                <button
                  onClick={() => setActiveTab(i)}
                  className={cxm(
                    "text-[#333333] px-[30px] h-10 __c_all border border-[#d2d2d2] rounded-full duration-200",
                    activeTab === i && "font-bold text-accent border-accent"
                  )}
                >
                  {label}
                </button>
              </div>
            );
          })}
        </div>
        <div className="text-center mt-14">
          <h2 className="text-[32px]/[35px] font-semibold">
            {betterResult.fields[activeTab].title}
          </h2>
          <p className="mt-5 __body20">
            {betterResult.fields[activeTab].description}
          </p>
        </div>
      </div>
    </section>
  );
};

export default BetterResultSection;
