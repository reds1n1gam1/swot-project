import type { FactorType } from "./FactorType";
import type { PriorityType } from "./PriorityType";

export interface FactorItem {
  id: number;
  title: string;
  type: FactorType;
  priority: PriorityType;
  dateAdded: Date,
}
