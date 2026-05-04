import React from "react";
import awsImage from "../../../../assets/amazonwebservice.webp";
import dockerImage from "../../../../assets/doctor.webp";
import firebaseImage from "../../../../assets/firebase.webp";
import flutterImage from "../../../../assets/flutter.webp";
import javaImage from "../../../../assets/java.webp";
import azureImage from "../../../../assets/microsoftazure.webp";
import nextjsImage from "../../../../assets/nextjs.webp";
import nodejsImage from "../../../../assets/nodejs.webp";
import pythonImage from "../../../../assets/python.webp";
import reactImage from "../../../../assets/react.svg";

type TechnologyCard = {
  name: string;
  image: string;
};

const technologyCards: TechnologyCard[] = [
  { name: "React", image: reactImage },
  { name: "Next.js", image: nextjsImage },
  { name: "Node.js", image: nodejsImage },
  { name: "Firebase", image: firebaseImage },
  { name: "Python", image: pythonImage },
  { name: "Java", image: javaImage },
  { name: "Flutter", image: flutterImage },
  { name: "Azure", image: azureImage },
  { name: "AWS", image: awsImage },
  { name: "Docker", image: dockerImage },
];

const TechnologiesSection: React.FC = () => {
  return (
<<<<<<< HEAD
    <section className="overflow-hidden rounded-[24px] border border-[#ece8fb] bg-[linear-gradient(180deg,#ffffff_0%,#f7f8ff_100%)] px-5 py-8 shadow-[0_10px_30px_rgba(89,76,160,0.04)] sm:px-6 sm:py-9 lg:px-8 lg:py-10">
      <div className="mx-auto flex max-w-[1160px] flex-col gap-8 lg:flex-row lg:items-start lg:gap-10">
        <div className="max-w-[260px] flex-none pt-1">
          <p className="text-[9px] font-semibold uppercase tracking-[0.2em] text-[#9a90c4]">
=======
    <section className="border border-slate-200/70 bg-[linear-gradient(180deg,#ffffff_0%,#f9fbff_100%)] px-6 py-14 shadow-[0_20px_70px_rgba(15,23,42,0.05)] lg:px-8">
      <div className="grid gap-8 lg:grid-cols-[minmax(260px,0.72fr)_minmax(0,1.28fr)]">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-violet-500">
>>>>>>> 1f6d61e57327d7abbe9b2ba7c71d76270402d363
            Technologies We Use
          </p>
          <h2 className="mt-3 max-w-[10ch] text-[1.9rem] font-semibold leading-[1.06] tracking-[-0.035em] text-[#1d1b24] sm:text-[2.1rem] lg:text-[2.02rem]">
            Modern Technologies for Modern Solutions
          </h2>
          <p className="mt-4 max-w-[235px] text-[12px] leading-[1.75] text-[#666979]">
            We leverage the latest technologies and frameworks to build fast, secure, and
            future-ready applications.
          </p>
        </div>

        <div className="min-w-0 flex-1 lg:pt-1">
          <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 lg:gap-3">
            {technologyCards.map((technology) => (
              <div
                key={technology.name}
                className="flex min-h-[72px] items-center justify-center rounded-[10px] border border-[#f0ecfb] bg-[#fdfcff] px-3 py-3 shadow-[0_4px_14px_rgba(96,83,160,0.04)] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_10px_20px_rgba(96,83,160,0.06)]"
              >
                <div className="flex w-full items-center justify-center gap-2.5">
                  <img
                    src={technology.image}
                    alt={technology.name}
                    className="h-7 w-auto max-w-[56px] object-contain"
                    loading="lazy"
                    draggable={false}
                  />
                  <span className="text-[12px] font-semibold text-[#232330]">
                    {technology.name}
                  </span>
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
};

export default TechnologiesSection;
