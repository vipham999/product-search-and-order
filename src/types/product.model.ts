export type Category =
  | "ALL"
  | "Pain Relief"
  | "Antibiotic"
  | "Supplement"
  | "Allergy";

export interface IProduct {
  id: number;
  name: string;
  price: number;
  category: Category;
  isPrescription: boolean;
}
