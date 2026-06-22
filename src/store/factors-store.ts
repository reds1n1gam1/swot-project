import { defineStore } from "pinia";
import type { FactorItem } from "../types/FactorItem";

interface FactorsStore {
  factors: FactorItem[];
}

export const useFactorsStore = defineStore("counter", {
  state: () => ({ factors: [] }) as FactorsStore,
  getters: {
    getAllFactors: (state) => state.factors,
    getRecentFactors: (state) => {
        state.factors.sort((a,b) => a.dateAdded.getTime() - b.dateAdded.getTime())
    }
  },
  actions: {
    addNewItem(item: FactorItem) {
      this.factors.push(item);
    },
    removeItem(item: FactorItem) {
      this.factors = this.factors.filter((factor) => factor.id !== item.id);
    },
  },
});
