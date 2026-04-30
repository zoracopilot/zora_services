const CrmHeroVisual: React.FC = () => {
  return (
    <div className="relative mx-auto w-full max-w-3xl lg:mx-0 lg:max-w-none">
      <div
        className="pointer-events-none absolute inset-x-[8%] -top-6 h-24 rounded-full bg-violet-200/40 blur-3xl sm:-top-8 sm:h-28"
        aria-hidden="true"
      />
      <div className="rounded-[36px] border border-violet-100 bg-white/90 p-4 shadow-[0_28px_70px_rgba(148,163,184,0.16)] lg:p-5">
        <div className="overflow-hidden rounded-[28px] border border-slate-100 bg-[linear-gradient(135deg,#ffffff,#f6f3ff)]">
          <img
            src="/hero/crm.webp"
            alt="Zora CRM dashboard interface preview"
            className="w-full object-cover object-top"
          />
        </div>
      </div>
    </div>
  );
};

export default CrmHeroVisual;
