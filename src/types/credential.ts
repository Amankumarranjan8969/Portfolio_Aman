export type CredentialType = 
  | 'Certification' 
  | 'Course' 
  | 'Degree' 
  | 'Award' 
  | 'Conference';

export type CredentialVerificationStatus = 
  | 'Verified' 
  | 'Document Provided' 
  | 'Needs Verification' 
  | 'Expired' 
  | 'Unable to verify';

export interface Credential {
  id: string;
  title: string;
  issuingOrg: string;
  credentialType: CredentialType;
  issueDate: string;
  credentialId?: string;
  verificationUrl?: string;
  status: CredentialVerificationStatus;
  score?: string;
  credits?: number;
  notes: string;
  evidenceSource: string;
  verificationDate: string;
}
