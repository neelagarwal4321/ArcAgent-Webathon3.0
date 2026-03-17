import agents from '../data/agents.json';

export function getAgents() {
  return agents;
}

export function getAgentBySlug(slug) {
  return agents.find((a) => a.slug === slug) || null;
}

export function getAgentSlugs() {
  return agents.map((a) => a.slug);
}
