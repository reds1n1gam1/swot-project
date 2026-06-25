import { defineStore } from "pinia";
import type { FactorItem } from "../types/FactorItem";
import { type FactorType } from "../types/FactorType";
import { Priority } from "../types/PriorityType";

interface FactorsStore {
  factors: FactorItem[];
  title: string;
  description: string;
}

export const useFactorsStore = defineStore("counter", {
  state: () =>
    ({ factors: [], title: "", description: "" }) as FactorsStore,
  getters: {
    getAllFactors: (state) => state.factors,
    getTitle: (state) => state.title,
    getDescription: (state) => state.description,
    getRecentFactors: (state) => {
      return state.factors
        .sort((a, b) => a.dateAdded.getTime() - b.dateAdded.getTime())
        .slice(0, 5);
    },
    getFactorsLength: (state) => state.factors.length,
    getByType: (state) => {
      return (type: FactorType) =>
        state.factors.filter((item) => item.type === type);
    },
    getHighPriorityItems: (state) =>
      state.factors.filter((factor) => factor.priority === Priority.High),
  },
  actions: {
    addNewItem(item: FactorItem) {
      this.factors.push(item);
    },
    removeItem(removedToId: number) {
      this.factors = this.factors.filter((factor) => factor.id !== removedToId);
    },
    setTitle(titleName: string) {
      this.title = titleName;
    },
    setDescription(descriptionText: string) {
      this.description = descriptionText;
    },
  },
});
