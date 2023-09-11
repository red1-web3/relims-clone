const TestimonialSection = () => {
  return (
    <section className="mt-10 md:mt-[70px] lg:mt-[100px]">
      <div className="max-w-[690px] mx-auto text-center">
        <h2 className="__h2">What Our Customers Say</h2>
        <div className="mt-10 max-md:mx-5 md:w-[700px] max-md:px-[15px] h-[400px] __c_all text-start bg-[url('/testimonial_bg.png')] bg-cover bg-no-repeat bg-center">
          <div className="flex items-center gap-x-5 max-w-[500px]">
            <div>
              <h4 className="text-xl/[30px] font-bold">VP of Operations,</h4>
              <p className="text-[#6a717a] text-sm">
                Complex Clinical Laboratory in Texas
              </p>
            </div>
            <p className="max-w-[251px] text-[#6a717a] text-[11px]/[13px] md:text-sm italic">
              Relims works like a partner and not just a vendor. They provided
              us with excellent workflow design capabilities for COVID and
              helped us pivot easily to infectious disease testing. Their
              support is prompt and they take responsibility for wowing our
              clients!
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialSection;
