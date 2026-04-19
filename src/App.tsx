import { useState, type ChangeEvent } from "react";
import { IDCard } from "./IDCard";
import type { IDData, IDTemplate } from "./types";

const initial: IDData = {
  fullName: "Ayesha Rahman",
  idNumber: "YG-2026-0184",
  role: "Senior Engineer",
  department: "Engineering",
  validFrom: "2026-01-01",
  validUntil: "2027-12-31",
  bloodGroup: "O+",
  phone: "+880 1712 345678",
  photo: null,
  template: "employee",
};

export default function App() {
  const [data, setData] = useState<IDData>(initial);

  const update = <K extends keyof IDData>(key: K, value: IDData[K]) =>
    setData((prev) => ({ ...prev, [key]: value }));

  const onPhoto = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = () => update("photo", reader.result as string);
    reader.readAsDataURL(file);
  };

  const reset = () => setData(initial);

  return (
    <div className="min-h-full">
      <header className="bg-white border-b border-slate-200">
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="h-9 w-9 rounded-lg bg-gradient-to-br from-brand-600 to-brand-900 flex items-center justify-center text-white font-bold">
              Y
            </div>
            <div>
              <div className="text-lg font-bold text-slate-900 leading-tight">
                Yanabiya Group
              </div>
              <div className="text-xs text-slate-500">ID Preview Studio</div>
            </div>
          </div>
          <div className="flex gap-2">
            <button
              onClick={reset}
              className="px-3 py-1.5 text-sm rounded-md border border-slate-300 hover:bg-slate-50"
            >
              Reset
            </button>
            <button
              onClick={() => window.print()}
              className="px-3 py-1.5 text-sm rounded-md bg-brand-600 text-white hover:bg-brand-700"
            >
              Print / Save PDF
            </button>
          </div>
        </div>
      </header>

      <main className="max-w-6xl mx-auto px-6 py-8 grid lg:grid-cols-[1fr_420px] gap-8">
        <section className="bg-white rounded-xl shadow-sm border border-slate-200 p-6">
          <h2 className="text-sm font-semibold text-slate-700 mb-4">
            Cardholder details
          </h2>

          <div className="grid sm:grid-cols-2 gap-4">
            <TemplatePicker
              value={data.template}
              onChange={(t) => update("template", t)}
            />

            <TextField
              label="Full name"
              value={data.fullName}
              onChange={(v) => update("fullName", v)}
            />
            <TextField
              label="ID number"
              value={data.idNumber}
              onChange={(v) => update("idNumber", v)}
            />
            <TextField
              label="Role / Position"
              value={data.role}
              onChange={(v) => update("role", v)}
            />
            <TextField
              label="Department"
              value={data.department}
              onChange={(v) => update("department", v)}
            />
            <TextField
              label="Valid from"
              type="date"
              value={data.validFrom}
              onChange={(v) => update("validFrom", v)}
            />
            <TextField
              label="Valid until"
              type="date"
              value={data.validUntil}
              onChange={(v) => update("validUntil", v)}
            />
            <TextField
              label="Blood group"
              value={data.bloodGroup}
              onChange={(v) => update("bloodGroup", v)}
            />
            <TextField
              label="Phone"
              value={data.phone}
              onChange={(v) => update("phone", v)}
            />
          </div>

          <div className="mt-6">
            <label className="block text-xs font-medium text-slate-600 mb-2">
              Photo
            </label>
            <div className="flex items-center gap-3">
              <input
                type="file"
                accept="image/*"
                onChange={onPhoto}
                className="block text-sm file:mr-3 file:py-2 file:px-3 file:rounded-md file:border-0 file:bg-brand-50 file:text-brand-700 hover:file:bg-brand-100"
              />
              {data.photo && (
                <button
                  type="button"
                  onClick={() => update("photo", null)}
                  className="text-xs text-slate-500 hover:text-slate-700 underline"
                >
                  Remove
                </button>
              )}
            </div>
          </div>
        </section>

        <section className="flex justify-center items-start lg:sticky lg:top-8 self-start">
          <IDCard data={data} />
        </section>
      </main>
    </div>
  );
}

function TextField({
  label,
  value,
  onChange,
  type = "text",
}: {
  label: string;
  value: string;
  onChange: (v: string) => void;
  type?: string;
}) {
  return (
    <label className="block">
      <span className="block text-xs font-medium text-slate-600 mb-1">
        {label}
      </span>
      <input
        type={type}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="w-full rounded-md border border-slate-300 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-brand-500 focus:border-transparent"
      />
    </label>
  );
}

function TemplatePicker({
  value,
  onChange,
}: {
  value: IDTemplate;
  onChange: (t: IDTemplate) => void;
}) {
  const options: { key: IDTemplate; label: string }[] = [
    { key: "employee", label: "Employee" },
    { key: "visitor", label: "Visitor" },
    { key: "contractor", label: "Contractor" },
  ];

  return (
    <div className="sm:col-span-2">
      <span className="block text-xs font-medium text-slate-600 mb-1">
        Template
      </span>
      <div className="inline-flex rounded-md border border-slate-300 bg-slate-50 p-1">
        {options.map((opt) => (
          <button
            key={opt.key}
            type="button"
            onClick={() => onChange(opt.key)}
            className={`px-3 py-1.5 text-sm rounded ${
              value === opt.key
                ? "bg-white shadow text-slate-900"
                : "text-slate-600 hover:text-slate-900"
            }`}
          >
            {opt.label}
          </button>
        ))}
      </div>
    </div>
  );
}
