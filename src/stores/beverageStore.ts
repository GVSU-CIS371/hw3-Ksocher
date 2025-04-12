import { defineStore } from "pinia";
import {
  BaseBeverageType,
  CreamerType,
  SyrupType,
  BeverageType,
} from "../types/beverage";
import tempretures from "../data/tempretures.json";
import db from "../firebase.ts";
import {
  collection,
  getDocs,
} from "firebase/firestore";

export const useBeverageStore = defineStore("BeverageStore", {
  state: () => ({
    temps: tempretures,
    currentTemp: tempretures[0],
    bases: [] as BaseBeverageType[],
    currentBase: null as BaseBeverageType | null,
    syrups: [] as SyrupType[],
    currentSyrup: null as SyrupType | null,
    creamers: [] as CreamerType[],
    currentCreamer: null as CreamerType | null,
    beverages: [] as BeverageType[],
    currentBeverage: null as BeverageType | null,
    currentName: "",
  }),

  actions: {
    async init() {
      const basesSnapshot = await getDocs(collection(db, "bases"));
      const creamersSnapshot = await getDocs(collection(db, "creamers"));
      const syrupsSnapshot = await getDocs(collection(db, "syrups"));

      this.bases = basesSnapshot.docs.map((doc) => doc.data() as BaseBeverageType);
      this.creamers = creamersSnapshot.docs.map((doc) => doc.data() as CreamerType);
      this.syrups = syrupsSnapshot.docs.map((doc) => doc.data() as SyrupType);

      this.currentBase = this.bases[0] || null;
      this.currentCreamer = this.creamers[0] || null;
      this.currentSyrup = this.syrups[0] || null;
    },
    makeBeverage() {},

    showBeverage() {},
  },
});
