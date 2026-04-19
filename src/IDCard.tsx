import { forwardRef, useEffect, useState } from "react";
import QRCode from "qrcode";
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

function useQRCode(payload: string) {
  const [dataUrl, setDataUrl] = useState("");
  useEffect(() => {
    let cancelled = false;
    QRCode.toDataURL(payload, {
      margin: 1,
      width: 160,
      color: { dark: "#0f172a", light: "#ffffff" },
    })
      .then((url) => {
        if (!cancelled) setDataUrl(url);
      })
      .catch(() => {
        if (!cancelled) setDataUrl("");
      });
    return () => {
      cancelled = true;
    };
  }, [payload]);
  return dataUrl;
}

interface Props {
  data: IDData;
  side: "front" | "back";
}

export const IDCard = forwardRef<HTMLDivElement, Props>(function IDCard(
  { data, side },
  ref,
) {
  const style = templateStyles[data.template];
  const qrPayload = JSON.stringify({
    org: "Yanabiya Group",
    id: data.idNumber,
    name: data.fullName,
    role: data.role,
    validUntil: data.validUntil,
  });
  const qr = useQRCode(qrPayload);

  return (
    <div ref={ref} className="print-area">
      {side === "front" ? (
        <CardFront data={data} style={style} qr={qr} />
      ) : (
        <CardBack data={data} qr={qr} />
      )}
    </div>
  );
});

function CardFront({
  data,
  style,
  qr,
}: {
  data: IDData;
  style: (typeof templateStyles)[IDTemplate];
  qr: string;
}) {
  return (
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

      <div className="px-6 pt-3 text-center">
        <div className="text-lg font-bold text-slate-900 truncate">
          {data.fullName || "Full Name"}
        </div>
        <div className={`text-sm font-medium ${style.accent}`}>
          {data.role || "Role / Position"}
        </div>
      </div>

      <div className="mx-6 mt-3 grid grid-cols-2 gap-2 text-[11px]">
        <Field label="ID No." value={data.idNumber || "—"} />
        <Field label="Dept." value={data.department || "—"} />
        <Field label="Valid From" value={formatDate(data.validFrom)} />
        <Field label="Valid Until" value={formatDate(data.validUntil)} />
      </div>

      <div className="mx-6 mt-2 flex items-center gap-3">
        <div className="shrink-0 w-16 h-16 bg-white rounded border border-slate-200 overflow-hidden">
          {qr && <img src={qr} alt="QR code" className="w-full h-full" />}
        </div>
        <div className="text-[9px] text-slate-500 leading-snug">
          Scan to verify authenticity. See reverse for additional information
          and return instructions.
        </div>
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
  );
}

function CardBack({ data, qr }: { data: IDData; qr: string }) {
  return (
    <div className="relative w-[340px] h-[540px] rounded-2xl bg-white shadow-2xl overflow-hidden border border-slate-200">
      <div className="h-10 bg-slate-900 text-white flex items-center justify-center text-[10px] uppercase tracking-[0.3em]">
        Cardholder Information
      </div>

      <div className="px-6 py-4 space-y-3 text-[11px]">
        <Field label="Blood Group" value={data.bloodGroup || "—"} />
        <Field label="Phone" value={data.phone || "—"} />
        <Field label="Address" value={data.address || "—"} multiline />
        <Field
          label="Emergency Contact"
          value={data.emergencyContact || "—"}
          multiline
        />
      </div>

      <div className="mx-6 mt-3 border-t border-dashed border-slate-200 pt-4 flex items-center gap-3">
        <div className="shrink-0 w-20 h-20 bg-white rounded border border-slate-200 overflow-hidden">
          {qr && <img src={qr} alt="QR code" className="w-full h-full" />}
        </div>
        <div className="text-[9px] text-slate-600 leading-snug">
          This card remains the property of Yanabiya Group. Misuse or
          unauthorized reproduction is strictly prohibited. Report loss
          immediately to HR.
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 px-6 py-3 bg-slate-50 border-t border-slate-200 text-center text-[9px] text-slate-500">
        yanabiyagroup.com · +880 2 XXXX XXXX · hr@yanabiyagroup.com
      </div>
    </div>
  );
}

function Field({
  label,
  value,
  multiline = false,
}: {
  label: string;
  value: string;
  multiline?: boolean;
}) {
  return (
    <div className="bg-slate-50 rounded-md px-2 py-1.5 border border-slate-100">
      <div className="text-[9px] uppercase tracking-wider text-slate-400">
        {label}
      </div>
      <div
        className={`text-slate-800 font-semibold ${
          multiline ? "whitespace-pre-wrap" : "truncate"
        }`}
      >
        {value}
      </div>
    </div>
  );
}
