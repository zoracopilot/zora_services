const chartHeights = [38, 60, 54, 78, 70, 92, 66, 72, 88];

const HrmsDashboardPreview: React.FC = () => {
  return (
    <div className="mx-auto w-full max-w-3xl overflow-hidden rounded-[24px] border border-slate-200 bg-white shadow-[0_28px_70px_rgba(15,23,42,0.12)] lg:mx-0 lg:max-w-none xl:rounded-[28px]">
      <div className="flex flex-wrap items-center justify-between gap-3 border-b border-slate-100 px-4 py-4 sm:px-5">
        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-gradient-to-br from-blue-500 to-indigo-600 text-sm font-black text-white">
            HR
          </div>
          <div>
            <p className="text-sm font-semibold text-slate-950">HRMS</p>
            <p className="text-xs text-slate-500">Smart HR dashboard</p>
          </div>
        </div>
        <div className="rounded-full border border-slate-200 px-3 py-1 text-xs font-semibold text-slate-500">
          This Month
        </div>
      </div>

      <div className="grid gap-4 p-3 sm:p-4 md:gap-5 xl:grid-cols-[160px_minmax(0,1fr)]">
        <div className="overflow-x-auto rounded-[22px] bg-[#0f2748] p-3 text-white xl:overflow-visible">
          <div className="space-y-2">
            {[
              "Dashboard",
              "Employees",
              "Attendance",
              "Payroll",
              "Leave Management",
              "Recruitment",
              "Performance",
              "Reports",
              "Settings",
            ].map((item, index) => (
              <div
                key={item}
                className={`rounded-2xl px-3 py-2 text-sm font-medium whitespace-nowrap ${
                  index === 0 ? "bg-blue-600 text-white" : "text-slate-200"
                }`}
              >
                {item}
              </div>
            ))}
          </div>
        </div>

        <div className="space-y-4">
          <div className="grid gap-3 sm:grid-cols-2 2xl:grid-cols-4">
            {[
              ["Total Employees", "520", "+12% from last month"],
              ["Present Today", "418", "80.4%"],
              ["On Leave", "32", "6.2%"],
              ["Departments", "12", "Active"],
            ].map(([label, value, meta], index) => (
              <div
                key={label}
                className="rounded-[22px] border border-slate-100 bg-white p-4 shadow-[0_12px_24px_rgba(148,163,184,0.08)]"
              >
                <div
                  className={`h-9 w-9 rounded-2xl ${
                    index % 2 === 0 ? "bg-blue-50" : "bg-emerald-50"
                  }`}
                />
                <p className="mt-3 text-xs font-medium text-slate-500">{label}</p>
                <p className="mt-2 text-2xl font-black tracking-tight text-slate-950">{value}</p>
                <p className="mt-1 text-xs text-emerald-500">{meta}</p>
              </div>
            ))}
          </div>

          <div className="grid gap-4 2xl:grid-cols-[1.35fr_0.85fr]">
            <div className="rounded-[24px] border border-slate-100 bg-white p-4 shadow-[0_14px_30px_rgba(148,163,184,0.08)]">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-semibold text-slate-900">Attendance Overview</p>
                  <p className="text-xs text-slate-500">This Month</p>
                </div>
                <div className="rounded-full bg-slate-100 px-3 py-1 text-xs font-semibold text-slate-600">
                  80.4%
                </div>
              </div>
              <div className="mt-5 flex h-36 items-end gap-2 sm:h-40">
                {chartHeights.map((height, index) => (
                  <div
                    key={height + index}
                    className="flex-1 rounded-t-[16px] bg-gradient-to-t from-blue-600 via-sky-400 to-indigo-300"
                    style={{ height }}
                  />
                ))}
              </div>
            </div>

            <div className="rounded-[24px] border border-slate-100 bg-white p-4 shadow-[0_14px_30px_rgba(148,163,184,0.08)]">
              <p className="text-sm font-semibold text-slate-900">Leave Summary</p>
              <div className="mt-4 space-y-3">
                {[
                  ["Total Leaves", "54"],
                  ["Approved", "38"],
                  ["Pending", "12"],
                  ["Rejected", "4"],
                ].map(([label, value], index) => (
                  <div key={label} className="flex items-center justify-between text-sm text-slate-700">
                    <div className="flex items-center gap-3">
                      <span
                        className={`h-3 w-3 rounded-full ${
                          index === 0
                            ? "bg-blue-500"
                            : index === 1
                              ? "bg-emerald-500"
                              : index === 2
                                ? "bg-amber-400"
                                : "bg-rose-400"
                        }`}
                      />
                      <span>{label}</span>
                    </div>
                    <span className="font-semibold text-slate-950">{value}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="grid gap-4 lg:grid-cols-[1fr_0.9fr]">
            <div className="rounded-[24px] border border-slate-100 bg-white p-4 shadow-[0_14px_30px_rgba(148,163,184,0.08)]">
              <p className="text-sm font-semibold text-slate-900">Quick Actions</p>
              <div className="mt-4 grid gap-3 grid-cols-2 sm:grid-cols-4">
                {["Add Employee", "Mark Attendance", "Apply Leave", "Run Payroll"].map((item) => (
                  <div
                    key={item}
                    className="flex min-h-[72px] items-center justify-center rounded-2xl border border-slate-100 bg-slate-50 px-3 py-4 text-center text-xs font-semibold text-slate-700"
                  >
                    {item}
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-[24px] border border-slate-100 bg-white p-4 shadow-[0_14px_30px_rgba(148,163,184,0.08)]">
              <p className="text-sm font-semibold text-slate-900">Upcoming Birthdays</p>
              <div className="mt-4 space-y-3">
                {[
                  ["Sarah Johnson", "May 21"],
                  ["Michael Brown", "May 22"],
                  ["Emily Davis", "May 25"],
                ].map(([name, date]) => (
                  <div key={name} className="flex items-center justify-between text-sm">
                    <span className="font-medium text-slate-700">{name}</span>
                    <span className="text-slate-500">{date}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HrmsDashboardPreview;
