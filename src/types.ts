export type IDTemplate = "employee" | "visitor" | "contractor";

export interface IDData {
  fullName: string;
  idNumber: string;
  role: string;
  department: string;
  validFrom: string;
  validUntil: string;
  bloodGroup: string;
  phone: string;
  photo: string | null;
  template: IDTemplate;
}
