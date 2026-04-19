import type { IDData, IDTemplate } from "./types";

const templateStyles: Record<
  IDTemplate,
  { band: string; accent: string; label: string }
> = {
  employee: {
    band: "from-brand-700 via-brand-600 to-brand-500",
    accent: "text-brand-700",
    label: "EMPLOYEE",
  },
  visitor: {
    band: "from-amber-600 via-amber-500 to-amber-400",
    accent: "text-amber-700",
    label: "VISITOR",
  },
  contractor: {
    band: "from-slate-800 via-slate-700 to-slate-600",
    accent: "text-slate-800",
    label: "CONTRACTOR",
  },
};

function formatDate(value: string) {
  if (!value) return "—";
  const d = new Date(value);
  if (Number.isNaN(d.getTime())) return value;
  return d.toLocaleDateString("en-GB", {
    day: "2-digit",
    month: "short",
    year: "numeric",
  });
}

export function IDCard({ data }: { data: IDData }) {
  const style = templateStyles[data.template];

  return (
    <div className="print-area">
      <div className="relative w-[340px] h-[540px] rounded-2xl bg-white shadow-2xl overflow-hidden border border-slate-200">
        <div
          className={`h-28 bg-gradient-to-br ${style.band} flex items-center justify-between px-5`}
        >
          <div className="text-white">
            <div className="text-xs uppercase tracking-[0.2em] opacity-90">
              Yanabiya Group
            </div>
            <div className="text-lg font-bold leading-tight">
              Identification Card
            </div>
          </div>
          <div className="bg-white/15 backdrop-blur text-white text-[10px] font-semibold tracking-wider px-2 py-1 rounded">
            {style.label}
          </div>
        </div>

        <div className="flex justify-center -mt-12">
          <div className="w-28 h-28 rounded-full ring-4 ring-white bg-slate-200 overflow-hidden shadow-lg">
            {data.photo ? (
              <img
                src={data.photo}
                alt={data.fullName || "ID photo"}
                className="w-full h-full object-cover"
              />
            ) : (
              <div className="w-full h-full flex items-center justify-center text-slate-400 text-xs">
                No Photo
              </div>
            )}
          </div>
        </div>

        <div className="px-6 pt-4 text-center">
          <div className="text-lg font-bold text-slate-900 truncate">
            {data.fullName || "Full Name"}
          </div>
          <div className={`text-sm font-medium ${style.accent}`}>
            {data.role || "Role / Position"}
          </div>
        </div>

        <div className="mx-6 mt-4 grid grid-cols-2 gap-3 text-[11px]">
          <Field label="ID No." value={data.idNumber || "—"} />
          <Field label="Dept." value={data.department || "—"} />
          <Field label="Valid From" value={formatDate(data.validFrom)} />
          <Field label="Valid Until" value={formatDate(data.validUntil)} />
          <Field label="Blood" value={data.bloodGroup || "—"} />
          <Field label="Phone" value={data.phone || "—"} />
        </div>

        <div className="absolute bottom-0 left-0 right-0 px-6 py-3 bg-slate-50 border-t border-slate-200 flex items-center justify-between">
          <div className="text-[9px] text-slate-500 leading-tight">
            If found, please return to
            <br />
            Yanabiya Group HR Dept.
          </div>
          <div className="text-right">
            <div className="text-[9px] text-slate-400">Signature</div>
            <div className="italic text-slate-700 text-sm">Authorized</div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Field({ label, value }: { label: string; value: string }) {
  return (
    <div className="bg-slate-50 rounded-md px-2 py-1.5 border border-slate-100">
      <div className="text-[9px] uppercase tracking-wider text-slate-400">
        {label}
      </div>
      <div className="text-slate-800 font-semibold truncate">{value}</div>
    </div>
  );
}
