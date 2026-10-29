import { describe, it, expect } from 'vitest';
import { projectsData } from '../../src/data/projects';
import { ProjectCategory, ProjectEvidenceStatus } from '../../src/types/project';

describe('Project Search & Multi-Filter Logic', () => {
  it('should filter projects correctly by category', () => {
    const aiProjects = projectsData.filter((p) => p.category === 'ai-ml');
    expect(aiProjects.length).toBeGreaterThan(0);
    aiProjects.forEach((p) => expect(p.category).toBe('ai-ml'));

    const researchProjects = projectsData.filter((p) => p.category === 'research');
    expect(researchProjects.length).toBeGreaterThan(0);
    researchProjects.forEach((p) => expect(p.category).toBe('research'));

    const iotProjects = projectsData.filter((p) => p.category === 'engineering-iot');
    expect(iotProjects.length).toBeGreaterThan(0);
    expect(iotProjects.some((p) => p.id === 'hydrosense-iot-water-monitoring')).toBe(true);

    const softwareProjects = projectsData.filter((p) => p.category === 'software');
    expect(softwareProjects.length).toBeGreaterThan(0);
    expect(softwareProjects.some((p) => p.id === 'grandmaster-arena-chess-platform')).toBe(true);
  });

  it('should filter projects by verified evidence status', () => {
    const verified = projectsData.filter((p) => p.status === 'Verified');
    expect(verified.length).toBe(11);

    const inProgress = projectsData.filter((p) => p.status === 'In Progress');
    expect(inProgress.some((p) => p.id === 'self-learning-small-language-model')).toBe(true);

    const needsVerification = projectsData.filter((p) => p.status === 'Needs Verification');
    expect(needsVerification.some((p) => p.id === 'fitmove-fitness-analytics-dashboard')).toBe(true);
  });

  it('should match search queries against title, technologies, and problem statement', () => {
    const query = 'CatBoost'.toLowerCase();
    const matches = projectsData.filter((p) =>
      p.title.toLowerCase().includes(query) ||
      p.technologies.some((t) => t.toLowerCase().includes(query)) ||
      p.shortSummary.toLowerCase().includes(query)
    );

    expect(matches.length).toBeGreaterThan(0);
    expect(matches.some((p) => p.id === 'naya-pani-groundwater-forecasting')).toBe(true);
    expect(matches.some((p) => p.id === 'csir-cbri-hybrid-aqi-prediction')).toBe(true);
  });

  it('should correctly handle empty search results without throwing errors', () => {
    const query = 'xyzNonExistentAlgorithm999'.toLowerCase();
    const matches = projectsData.filter((p) =>
      p.title.toLowerCase().includes(query) ||
      p.technologies.some((t) => t.toLowerCase().includes(query))
    );

    expect(matches.length).toBe(0);
  });
});
