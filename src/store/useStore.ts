import { create } from 'zustand';

interface Farm {
  id: string;
  name: string;
}

// Livestock category types for cattle
type CattleCategory = 'Bull' | 'Yearling Bull' | 'Cow' | 'Heifer' | 'Calf';
type LivestockCategory = CattleCategory;

interface Livestock {
  id: string;
  livestockId: string;
  species: 'Cattle';
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
  userRole: 'admin' | 'veterinarian' | 'farm_manager' | 'viewer' | null;
  userEmail: string | null;
  addFarm: (farm: Farm) => void;
  addLivestock: (livestock: Livestock) => void;
  setUserRole: (role: 'admin' | 'veterinarian' | 'farm_manager' | 'viewer', email: string) => void;
  clearUser: () => void;
}

export const useStore = create<StoreState>((set) => ({
  farms: [],
  userRole: (localStorage.getItem('userRole') as 'admin' | 'veterinarian' | 'farm_manager' | 'viewer' | null) || null,
  userEmail: localStorage.getItem('userEmail') || null,
  livestock: [
    // Sample Cattle
    {
      id: 'C-001',
      livestockId: 'C-001',
      species: 'Cattle',
      breed: 'Brahman',
      category: 'Bull',
      sex: 'Male',
      dateOfBirth: '2021-03-15',
      birthWeight: 35,
      currentWeight: 650,
      colorMarkings: 'Red with white face',
      status: 'Active',
      isNewborn: false,
      hasBred: true,
      isPurchased: false,
      bodyConditionScore: 4,
      healthStatus: 'Healthy',
    },
    {
      id: 'C-002',
      livestockId: 'C-002',
      species: 'Cattle',
      breed: 'Native/Carabao',
      category: 'Cow',
      sex: 'Female',
      dateOfBirth: '2020-07-22',
      birthWeight: 30,
      currentWeight: 520,
      colorMarkings: 'Black',
      status: 'Active',
      isNewborn: false,
      hasBred: true,
      isPurchased: false,
      bodyConditionScore: 3.5,
      healthStatus: 'Healthy',
    },
    {
      id: 'C-003',
      livestockId: 'C-003',
      species: 'Cattle',
      breed: 'Crossbreed',
      category: 'Heifer',
      sex: 'Female',
      dateOfBirth: '2023-05-10',
      birthWeight: 32,
      currentWeight: 380,
      colorMarkings: 'Brown and white patches',
      status: 'Active',
      isNewborn: false,
      hasBred: false,
      isPurchased: false,
      bodyConditionScore: 3,
      healthStatus: 'Healthy',
    },
    // Offspring examples with parent relationships
    {
      id: 'C-004',
      livestockId: 'C-004',
      species: 'Cattle',
      breed: 'Brahman',
      category: 'Calf',
      sex: 'Male',
      dateOfBirth: '2024-10-15',
      birthWeight: 38,
      currentWeight: 95,
      colorMarkings: 'Red with white face',
      status: 'Active',
      isNewborn: true,
      damId: 'C-002', // Mother
      sireId: 'C-001', // Father
      hasBred: false,
      isPurchased: false,
      bodyConditionScore: 3,
      healthStatus: 'Healthy',
    },
    // Offspring for A-001 (the mock profile)
    {
      id: 'A-002',
      livestockId: 'A-002',
      species: 'Cattle',
      breed: 'Holstein',
      category: 'Calf',
      sex: 'Female',
      dateOfBirth: '2024-10-22',
      birthWeight: 38.5,
      currentWeight: 92,
      colorMarkings: 'Black and white spots',
      status: 'Active',
      isNewborn: true,
      damId: 'A-001', // Mother is A-001
      sireId: 'B-045',
      hasBred: false,
      isPurchased: false,
      bodyConditionScore: 3,
      healthStatus: 'Healthy',
    },
    {
      id: 'A-003',
      livestockId: 'A-003',
      species: 'Cattle',
      breed: 'Holstein',
      category: 'Calf',
      sex: 'Male',
      dateOfBirth: '2023-09-10',
      birthWeight: 40,
      currentWeight: 285,
      colorMarkings: 'Black and white patches',
      status: 'Active',
      isNewborn: false,
      damId: 'A-001', // Mother is A-001
      sireId: 'B-032',
      hasBred: false,
      isPurchased: false,
      bodyConditionScore: 3.5,
      healthStatus: 'Healthy',
    },
  ],
  addFarm: (farm) => set((state) => ({ farms: [...state.farms, farm] })),
  addLivestock: (livestock) => set((state) => ({ livestock: [...state.livestock, livestock] })),
  setUserRole: (role, email) => {
    localStorage.setItem('userRole', role);
    localStorage.setItem('userEmail', email);
    set({ userRole: role, userEmail: email });
  },
  clearUser: () => {
    localStorage.removeItem('userRole');
    localStorage.removeItem('userEmail');
    set({ userRole: null, userEmail: null });
  },
}));
