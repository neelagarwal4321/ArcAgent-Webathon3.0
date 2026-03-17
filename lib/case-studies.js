import caseStudies from '../data/case-studies.json';

export function getCaseStudies() { return caseStudies; }
export function getCaseStudyById(id) { return caseStudies.find((c) => c.id === id) || null; }
