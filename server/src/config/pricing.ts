export interface PricingTier {
  id: string;
  name: string;
  price: number; // in cents
  courses: string[];
  description: string;
}

export const pricingTiers: Record<string, PricingTier> = {
  stage1: {
    id: 'stage1',
    name: '2-Day Outlier Crash Course',
    price: 295, // $2.95
    courses: ['outlier-tips', 'one-day-course'],
    description: 'Assessment format breakdown, scoring methodology, insider strategies, and quick-start guides.',
  },
  stage2: {
    id: 'stage2',
    name: 'Outlier Assessment Playbook',
    price: 395, // $3.95
    courses: ['outlier-tips', 'one-day-course'],
    description: 'Detailed scoring rubric, 12 proven strategies, common mistakes, and real examples.',
  },
  stage3: {
    id: 'stage3',
    name: 'Complete Expert Bundle',
    price: 7995, // $79.95
    courses: ['outlier-tips', 'one-day-course', 'git-expert', 'python-expert', 'english-expert'],
    description: 'Git Expert (15 modules), Python Expert (15 modules), English Expert (15 modules), Assessment Playbook, Video interview prep, and Lifetime updates.',
  },
};

export function getPricingTier(stage: string): PricingTier | null {
  return pricingTiers[stage] || null;
}
