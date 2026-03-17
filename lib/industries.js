import industries from '../data/industries.json';

export function getIndustries() { return industries; }
export function getIndustryById(id) { return industries.find((i) => i.id === id) || null; }
