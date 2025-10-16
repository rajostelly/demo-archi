import { create } from "zustand";

interface StoreState {
  count: number;
  text: string;
  inc: () => void;
}

const useStore = create<StoreState>((set) => ({
  count: 1,
  text: "Hello",
  inc: () => set((state: StoreState) => ({ count: state.count + 1 })),
}));

export { useStore };
