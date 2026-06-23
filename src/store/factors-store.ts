import { defineStore } from "pinia";
import type { FactorItem } from "../types/FactorItem";
import { Factor, type FactorType } from "../types/FactorType";
import { Priority } from "../types/PriorityType";

interface FactorsStore {
  factors: FactorItem[];
}

export const useFactorsStore = defineStore("counter", {
  state: () => ({ factors: FACTORS_MOCK }) as FactorsStore,
  getters: {
    getAllFactors: (state) => state.factors,
    getRecentFactors: (state) => {
      return state.factors
        .sort((a, b) => a.dateAdded.getTime() - b.dateAdded.getTime())
        .slice(0, 5);
    },
    getFactorsLength: (state) => state.factors.length,
    getByType: (state) => {
      return (type: FactorType) => state.factors.filter((item) => item.type === type)
    },
    getHighPriorityItems: (state) => state.factors.filter(factor => factor.priority === Priority.High)
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

export const FACTORS_MOCK: FactorItem[] = [
  {
    id: 1,
    title: "Strong technical background",
    type: Factor.Strengths,
    priority: Priority.High,
    dateAdded: new Date("2026-06-01"),
  },
  {
    id: 2,
    title: "Existing customer network",
    type: Factor.Strengths,
    priority: Priority.High,
    dateAdded: new Date("2026-06-02"),
  },
  {
    id: 3,
    title: "Limited marketing experience",
    type: Factor.Weaknesses,
    priority: Priority.High,
    dateAdded: new Date("2026-06-03"),
  },
  {
    id: 4,
    title: "Small initial budget",
    type: Factor.Weaknesses,
    priority: Priority.Medium,
    dateAdded: new Date("2026-06-04"),
  },
  {
    id: 5,
    title: "Growing demand for AI tools",
    type: Factor.Opportunities,
    priority: Priority.High,
    dateAdded: new Date("2026-06-05"),
  },
  {
    id: 6,
    title: "Expansion into international markets",
    type: Factor.Opportunities,
    priority: Priority.Medium,
    dateAdded: new Date("2026-06-06"),
  },
  {
    id: 7,
    title: "Strong competition in the niche",
    type: Factor.Threats,
    priority: Priority.High,
    dateAdded: new Date("2026-06-07"),
  },
  {
    id: 8,
    title: "Economic uncertainty",
    type: Factor.Threats,
    priority: Priority.Medium,
    dateAdded: new Date("2026-06-08"),
  },
  {
    id: 9,
    title: "Ability to build products quickly",
    type: Factor.Strengths,
    priority: Priority.High,
    dateAdded: new Date("2026-06-09"),
  },
  {
    id: 10,
    title: "Dependence on third-party services",
    type: Factor.Threats,
    priority: Priority.Low,
    dateAdded: new Date("2026-06-10"),
  },
  {
    id: 11,
    title: "Lack of brand recognition",
    type: Factor.Weaknesses,
    priority: Priority.Medium,
    dateAdded: new Date("2026-06-11"),
  },
  {
    id: 12,
    title: "Increasing adoption of SaaS solutions",
    type: Factor.Opportunities,
    priority: Priority.High,
    dateAdded: new Date("2026-06-12"),
  },
];
