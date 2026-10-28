export type ExperienceType = 
  | 'Research Internship' 
  | 'Industrial Internship' 
  | 'Academic Program' 
  | 'Honor & Competition';

export interface Experience {
  id: string;
  role: string;
  organization: string;
  location: string;
  period: string;
  type: ExperienceType;
  supervisors?: string[];
  description: string;
  contributions: string[];
  skills: string[];
  verifiedEvidence: string;
  status: 'Verified' | 'Document Provided' | 'Needs Verification';
}
