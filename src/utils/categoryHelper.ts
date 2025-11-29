/**
 * Helper functions for livestock categorization based on species, age, gender, and breeding history
 */

type GoatCategory = 'Buck' | 'Buckling' | 'Doe' | 'Maiden Doe' | 'Kid';
type SheepCategory = 'Ram' | 'Ewe' | 'Maiden Ewe' | 'Lamb';
type CattleCategory = 'Bull' | 'Yearling Bull' | 'Cow' | 'Heifer' | 'Calf';
type LivestockCategory = GoatCategory | SheepCategory | CattleCategory;

/**
 * Calculate age in months from birth date
 */
export function calculateAgeInMonths(birthDate: string): number {
  const birth = new Date(birthDate);
  const today = new Date();
  
  const yearsDiff = today.getFullYear() - birth.getFullYear();
  const monthsDiff = today.getMonth() - birth.getMonth();
  
  return yearsDiff * 12 + monthsDiff;
}

/**
 * Get livestock category based on species, gender, age, and breeding history
 */
export function getCategory(
  species: 'Cattle' | 'Goat' | 'Sheep',
  gender: 'Male' | 'Female',
  ageInMonths: number,
  hasBred: boolean,
  isNewborn: boolean
): LivestockCategory {
  // If newborn, return baby category
  if (isNewborn) {
    if (species === 'Goat') return 'Kid';
    if (species === 'Sheep') return 'Lamb';
    if (species === 'Cattle') return 'Calf';
  }
  
  // Goat categorization
  if (species === 'Goat') {
    if (gender === 'Male') {
      return ageInMonths < 12 ? 'Kid' : 'Buck';
    } else {
      if (ageInMonths < 12) return 'Kid';
      return hasBred ? 'Doe' : 'Maiden Doe';
    }
  }
  
  // Sheep categorization
  if (species === 'Sheep') {
    if (gender === 'Male') {
      return ageInMonths < 12 ? 'Lamb' : 'Ram';
    } else {
      if (ageInMonths < 12) return 'Lamb';
      return hasBred ? 'Ewe' : 'Maiden Ewe';
    }
  }
  
  // Cattle categorization
  if (species === 'Cattle') {
    if (gender === 'Male') {
      if (ageInMonths < 12) return 'Calf';
      if (ageInMonths >= 12 && ageInMonths < 24) return 'Yearling Bull';
      return 'Bull';
    } else {
      if (ageInMonths < 12) return 'Calf';
      return hasBred ? 'Cow' : 'Heifer';
    }
  }
  
  return 'Calf' as LivestockCategory; // Fallback
}

/**
 * Get available categories for a specific species
 */
export function getCategoriesBySpecies(species: 'Cattle' | 'Goat' | 'Sheep'): string[] {
  const categories: Record<string, string[]> = {
    Goat: ['Buck', 'Buckling', 'Doe', 'Maiden Doe', 'Kid'],
    Sheep: ['Ram', 'Ewe', 'Maiden Ewe', 'Lamb'],
    Cattle: ['Bull', 'Yearling Bull', 'Cow', 'Heifer', 'Calf']
  };
  
  return categories[species] || [];
}
