import React from "react";

const AboutHero: React.FC = () => {
  return (
    <section className="relative overflow-hidden bg-white pt-[var(--nav-h,0px)]">
      <div className="w-full pb-10">
        <div className="relative min-h-[500px] overflow-hidden bg-white lg:min-h-[500px]">
          <div className="absolute inset-x-0 top-0 h-72 overflow-hidden lg:inset-y-0 lg:left-auto lg:right-0 lg:h-full lg:w-[58%]">
            <img
              src="/about/company.jpeg"
              alt="Zora Global AI company building"
              className="h-full w-full object-cover object-center lg:object-[54%_center]"
            />
          </div>

          <div className="absolute inset-x-0 top-0 h-72 bg-gradient-to-b from-transparent to-white lg:hidden" />
          <svg
            className="absolute inset-y-0 left-0 z-10 hidden h-full w-[64%] lg:block"
            viewBox="0 0 760 500"
            preserveAspectRatio="none"
            aria-hidden="true"
          >
            <defs>
              <clipPath id="aboutHeroCurve" clipPathUnits="userSpaceOnUse">
                <path d="M0 0H742C654 76 626 174 594 290C562 405 502 466 390 500H0V0Z" />
              </clipPath>
            </defs>
            <g clipPath="url(#aboutHeroCurve)">
              <path d="M0 0H742C654 76 626 174 594 290C562 405 502 466 390 500H0V0Z" fill="white" />
              <circle cx="452" cy="560" r="270" fill="#ede9fe" fillOpacity="0.82" />
            </g>
          </svg>

          <div className="relative z-20 flex min-h-[500px] items-end px-6 pb-10 pt-80 sm:px-10 lg:min-h-[500px] lg:w-[59%] lg:items-center lg:px-16 lg:py-12">
            <div className="max-w-[36rem]">
              <p className="text-sm font-bold uppercase tracking-[0.1em] text-violet-700">
                About Us
              </p>

              <h1 className="mt-5 font-sans text-4xl font-extrabold leading-[1.12] tracking-tight text-slate-950 sm:text-5xl lg:text-[2.65rem]">
                Pioneering AI Solutions.
                <span className="block text-violet-700">
                  Built on Trust. Driven by Impact.
                </span>
              </h1>

              <p className="mt-5 max-w-[34rem] text-base leading-7 text-slate-700">
                At Zora Global AI, we believe artificial intelligence has the
                power to transform industries, empower people, and solve complex
                challenges. Our mission is to deliver intelligent solutions that
                create measurable impact for businesses and society.
              </p>

              <div className="mt-7 h-[3px] w-14 rounded-full bg-slate-500" />

            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutHero;
