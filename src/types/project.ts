export type ProjectCategory = 'ai-ml' | 'engineering-iot' | 'software' | 'research';

export type ProjectEvidenceStatus = 
  | 'Verified' 
  | 'In Progress' 
  | 'Experimental' 
  | 'Needs Verification' 
  | 'Planned';

export interface ProjectEvaluation {
  metrics: { name: string; value: string | number; ideal?: string }[];
  context: string;
  baselineComparison?: { model: string; r2?: number; rmse?: number; notes?: string }[];
}

export interface Project {
  id: string;
  title: string;
  tagline: string;
  shortSummary: string;
  category: ProjectCategory;
  status: ProjectEvidenceStatus;
  featured: boolean;
  role: string;
  period: string;
  organization?: string;
  problemStatement: string;
  objectives: string[];
  myContribution: string;
  technologies: string[];
  architectureSummary: string;
  dataSources: string[];
  methodology: string;
  implementationDetails: string[];
  evaluation: ProjectEvaluation;
  limitations: string[];
  setupInstructions: string[];
  githubUrl?: string;
  demoUrl?: string;
  reportUrl?: string;
  supportingEvidence: string;
  lastReviewedDate: string;
}
