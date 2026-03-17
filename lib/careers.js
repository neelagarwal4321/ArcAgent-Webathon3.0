import careers from '../data/careers.json';

export function getCareers() { return careers; }
export function getCareersByDepartment(dept) {
  if (!dept || dept === 'All') return careers;
  return careers.filter((c) => c.department === dept);
}
export function getDepartments() {
  return ['All', ...new Set(careers.map((c) => c.department))];
}
