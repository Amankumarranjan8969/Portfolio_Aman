import { describe, it, expect } from 'vitest';
import { projectsData } from '../../src/data/projects';
import { credentialsData } from '../../src/data/credentials';
import { publicationsData } from '../../src/data/publications';
import { candidateProfile } from '../../src/data/profile';
import { seasonalGroundwaterMetrics, aqiBenchmarkMetrics } from '../../src/data/researchMetrics';

describe('Data Integrity & Evidence Standards', () => {
  it('should have all 15 audited projects with complete required schemas', () => {
    expect(projectsData.length).toBe(15);

    projectsData.forEach((project) => {
      expect(project.id).toBeTruthy();
      expect(project.title).toBeTruthy();
      expect(project.shortSummary).toBeTruthy();
      expect(project.problemStatement).toBeTruthy();
      expect(project.myContribution).toBeTruthy();
      expect(project.technologies.length).toBeGreaterThan(0);
      expect(project.setupInstructions.length).toBeGreaterThan(0);
      expect(project.supportingEvidence).toBeTruthy();
      expect(project.lastReviewedDate).toBeTruthy();
      expect(['Verified', 'In Progress', 'Experimental', 'Needs Verification', 'Planned']).toContain(project.status);
      expect(['ai-ml', 'engineering-iot', 'software', 'research']).toContain(project.category);
    });
  });

  it('should have verified credentials with authentic roll numbers and dates', () => {
    expect(credentialsData.length).toBeGreaterThanOrEqual(10);

    const dataMining = credentialsData.find((c) => c.credentialId === 'NPTEL26CS58S667100046');
    expect(dataMining).toBeDefined();
    expect(dataMining?.status).toBe('Verified');
    expect(dataMining?.score).toContain('75%');

    const pythonCert = credentialsData.find((c) => c.credentialId === 'NPTEL26CS80S467100069');
    expect(pythonCert).toBeDefined();
    expect(pythonCert?.status).toBe('Verified');
    expect(pythonCert?.score).toContain('63%');

    const voiceAi = credentialsData.find((c) => c.credentialId === 'SDMEL0335');
    expect(voiceAi).toBeDefined();
    expect(voiceAi?.status).toBe('Verified');
    expect(voiceAi?.verificationUrl).toContain('sdmel2025.vercel.app');
  });

  it('should compute dashboard counts purely from authentic records', () => {
    const verifiedProjects = projectsData.filter((p) => p.status === 'Verified').length;
    const inProgressProjects = projectsData.filter((p) => p.status === 'In Progress' || p.status === 'Experimental').length;
    const needsVerificationProjects = projectsData.filter((p) => p.status === 'Needs Verification').length;

    expect(verifiedProjects).toBe(10);
    expect(inProgressProjects).toBe(4); // SLM, Punpun digital twin, Blue alert, Portfolio
    expect(needsVerificationProjects).toBe(1); // FitMove
    expect(verifiedProjects + inProgressProjects + needsVerificationProjects).toBe(projectsData.length);
  });

  it('should contain authentic empirical research metrics from NIH Roorkee dissertation', () => {
    expect(seasonalGroundwaterMetrics.length).toBeGreaterThan(20);

    // Cubist Post-Monsoon top performer
    const cubistPostMonsoon = seasonalGroundwaterMetrics.find(
      (m) => m.season === 'Post-Monsoon' && m.model === 'Cubist'
    );
    expect(cubistPostMonsoon).toBeDefined();
    expect(cubistPostMonsoon?.r2).toBe(0.9467);
    expect(cubistPostMonsoon?.rmse).toBe(2.6328);
    expect(cubistPostMonsoon?.mae).toBe(1.8326);
    expect(cubistPostMonsoon?.wi).toBe(0.9851);
  });

  it('should contain verified CSIR-CBRI AQI SuperBlend metrics', () => {
    const superBlend = aqiBenchmarkMetrics.find((m) => m.model.includes('SuperBlend'));
    expect(superBlend).toBeDefined();
    expect(superBlend?.testR2).toBe(0.9180);
    expect(superBlend?.testRMSE).toBe(7.2997);
  });

  it('should have authentic candidate profile without placeholder contact details', () => {
    expect(candidateProfile.name).toBe('Aman Kumar Ranjan');
    expect(candidateProfile.contact.email).toBe('amankumar89669@gmail.com');
    expect(candidateProfile.contact.githubUsername).toBe('Amankumarranjan8969');
    expect(candidateProfile.education.enrolmentNo).toBe('230103001');
    expect(candidateProfile.education.institution).toBe('Haridwar University');
  });
});
