/**
 * Helper functions for cattle categorization based on age, gender, and breeding history
 */

type CattleCategory = 'Bull' | 'Yearling Bull' | 'Cow' | 'Heifer' | 'Calf';

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
 * Get cattle category based on gender, age, and breeding history
 */
export function getCategory(
  gender: 'Male' | 'Female',
  ageInMonths: number,
  hasBred: boolean,
  isNewborn: boolean
): CattleCategory {
  // If newborn, return Calf
  if (isNewborn) {
    return 'Calf';
  }
  
  // Cattle categorization
  if (gender === 'Male') {
    if (ageInMonths < 12) return 'Calf';
    if (ageInMonths >= 12 && ageInMonths < 24) return 'Yearling Bull';
    return 'Bull';
  } else {
    if (ageInMonths < 12) return 'Calf';
    return hasBred ? 'Cow' : 'Heifer';
  }
}

/**
 * Get available categories for cattle
 */
export function getCategoriesBySpecies(): string[] {
  return ['Bull', 'Yearling Bull', 'Cow', 'Heifer', 'Calf'];
}
