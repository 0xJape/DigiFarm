import { create } from 'zustand';

interface Farm {
  id: string;
  name: string;
}

// Livestock category types by species
type GoatCategory = 'Buck' | 'Buckling' | 'Doe' | 'Maiden Doe' | 'Kid';
type SheepCategory = 'Ram' | 'Ewe' | 'Maiden Ewe' | 'Lamb';
type CattleCategory = 'Bull' | 'Yearling Bull' | 'Cow' | 'Heifer' | 'Calf';
type LivestockCategory = GoatCategory | SheepCategory | CattleCategory;

interface Livestock {
  id: string;
  livestockId: string;
  species: 'Cattle' | 'Goat' | 'Sheep';
  breed: string;
  category: LivestockCategory;
  sex: 'Male' | 'Female';
  dateOfBirth: string;
  birthWeight: number;
  currentWeight: number;
  colorMarkings?: string;
  status: 'Active' | 'Sold' | 'Culled' | 'Deceased';
  notes?: string;
  
  // New fields for categorization
  isNewborn: boolean;
  damId?: string; // Mother's livestock ID (for newborns)
  sireId?: string; // Father's livestock ID (for newborns)
  hasBred: boolean; // For females (determines Maiden vs Doe/Ewe/Cow)
  
  // Newborn-specific health assessment
  birthComplications?: string; // Birth complications (e.g., dystocia, weak, premature)
  newbornBodyConditionScore?: number; // BCS at birth
  newbornHealthAssessment?: string; // Initial health assessment notes for newborns
  
  // Purchase information
  isPurchased: boolean;
  sellerName?: string;
  sellerContact?: string;
  sellerAddress?: string;
  purchaseDate?: string;
  purchasePrice?: number;
  
  // Physical assessment
  bodyConditionScore?: number;
  healthStatus?: string;
  assessmentNotes?: string;
}

interface StoreState {
  farms: Farm[];
  livestock: Livestock[];
  addFarm: (farm: Farm) => void;
  addLivestock: (livestock: Livestock) => void;
}

export const useStore = create<StoreState>((set) => ({
  farms: [],
  livestock: [],
  addFarm: (farm) => set((state) => ({ farms: [...state.farms, farm] })),
  addLivestock: (livestock) => set((state) => ({ livestock: [...state.livestock, livestock] })),
}));
