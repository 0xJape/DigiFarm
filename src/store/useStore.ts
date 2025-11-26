import { create } from 'zustand';

interface Farm {
  id: string;
  name: string;
}

interface StoreState {
  farms: Farm[];
  addFarm: (farm: Farm) => void;
}

export const useStore = create<StoreState>((set) => ({
  farms: [],
  addFarm: (farm) => set((state) => ({ farms: [...state.farms, farm] })),
}));
