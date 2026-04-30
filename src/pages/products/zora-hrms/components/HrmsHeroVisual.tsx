const HrmsHeroVisual: React.FC = () => {
  return (
    <div className="relative mx-auto w-full max-w-3xl lg:mx-0 lg:max-w-none">
      <div
        className="pointer-events-none absolute inset-x-[10%] -top-6 h-24 rounded-full bg-[#E6E1F7]/70 blur-3xl sm:-top-8 sm:h-28"
        aria-hidden="true"
      />
      <div className="rounded-[36px] border border-[#E5E7EB] bg-white/90 p-4 shadow-[0_28px_70px_rgba(154,163,178,0.16)] lg:p-5">
        <div className="overflow-hidden rounded-[28px] border border-[#E5E7EB] bg-[linear-gradient(135deg,#ffffff,#f5f6fa)]">
          <img
            src="/hero/hrms.webp"
            alt="HRMS dashboard interface preview"
            className="w-full object-cover object-top"
          />
        </div>
      </div>
    </div>
  );
};

export default HrmsHeroVisual;
