import React, { useState, useEffect } from 'react';
import { TabKey, Sidebar } from '../components/common/Sidebar';
import { Header } from '../components/common/Header';
import { Footer } from '../components/common/Footer';
import { ProjectDetailModal } from '../features/projects/ProjectDetailModal';

// Features
import { DashboardView } from '../features/dashboard/DashboardView';
import { ProjectsView } from '../features/projects/ProjectsView';
import { ResearchView } from '../features/research/ResearchView';
import { EngineeringView } from '../features/engineering/EngineeringView';
import { SoftwareView } from '../features/software/SoftwareView';
import { CredentialsView } from '../features/credentials/CredentialsView';
import { ExperienceView } from '../features/experience/ExperienceView';
import { GithubView } from '../features/github/GithubView';
import { PublicationsView } from '../features/publications/PublicationsView';
import { ResumeView } from '../features/resume/ResumeView';
import { ContactView } from '../features/contact/ContactView';
import { EvidenceView } from '../features/evidence/EvidenceView';

// Data
import { projectsData } from '../data/projects';
import { credentialsData } from '../data/credentials';
import { publicationsData } from '../data/publications';
import { Project } from '../types/project';

export const App: React.FC = () => {
  const [activeTab, setActiveTab] = useState<TabKey>('overview');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Sync with URL hash for GitHub Pages deep linking
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.replace('#', '') as TabKey;
      const validTabs: TabKey[] = [
        'overview',
        'projects',
        'ai-ml',
        'engineering-iot',
        'software',
        'certificates',
        'experience',
        'github',
        'publications',
        'resume',
        'contact',
        'evidence',
      ];
      if (validTabs.includes(hash)) {
        setActiveTab(hash);
      }
    };

    handleHashChange();
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const handleSelectTab = (tab: TabKey) => {
    setActiveTab(tab);
    window.location.hash = tab;
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleNavigateToEvidence = () => {
    handleSelectTab('evidence');
  };

  const renderActiveView = () => {
    switch (activeTab) {
      case 'overview':
        return (
          <DashboardView
            projects={projectsData}
            credentials={credentialsData}
            publications={publicationsData}
            onSelectProject={setSelectedProject}
            onNavigateTab={(tab) => handleSelectTab(tab as TabKey)}
          />
        );
      case 'projects':
        return (
          <ProjectsView
            projects={projectsData}
            onSelectProject={setSelectedProject}
          />
        );
      case 'ai-ml':
        return <ResearchView />;
      case 'engineering-iot':
        return <EngineeringView />;
      case 'software':
        return (
          <SoftwareView
            projects={projectsData}
            onSelectProject={setSelectedProject}
          />
        );
      case 'certificates':
        return <CredentialsView credentials={credentialsData} />;
      case 'experience':
        return <ExperienceView />;
      case 'github':
        return <GithubView />;
      case 'publications':
        return <PublicationsView />;
      case 'resume':
        return <ResumeView />;
      case 'contact':
        return <ContactView />;
      case 'evidence':
        return <EvidenceView />;
      default:
        return (
          <DashboardView
            projects={projectsData}
            credentials={credentialsData}
            publications={publicationsData}
            onSelectProject={setSelectedProject}
            onNavigateTab={(tab) => handleSelectTab(tab as TabKey)}
          />
        );
    }
  };

  return (
    <div className="min-h-screen bg-[#0B0F19] text-slate-100 flex flex-col md:flex-row antialiased selection:bg-cyan-500/20 selection:text-cyan-200">
      {/* Sidebar Navigation */}
      <Sidebar
        activeTab={activeTab}
        onSelectTab={handleSelectTab}
        isOpenMobile={isMobileMenuOpen}
        onCloseMobile={() => setIsMobileMenuOpen(false)}
        projectCount={projectsData.length}
        credentialCount={credentialsData.length}
      />

      {/* Main Content Area */}
      <div className="flex-1 flex flex-col min-w-0">
        <Header
          activeTab={activeTab}
          onOpenMobile={() => setIsMobileMenuOpen(true)}
          onNavigateToEvidence={handleNavigateToEvidence}
        />

        <main className="flex-1 p-4 sm:p-8 max-w-7xl w-full mx-auto">
          {renderActiveView()}
        </main>

        <Footer onNavigateToEvidence={handleNavigateToEvidence} />
      </div>

      {/* Project Detail Modal */}
      <ProjectDetailModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </div>
  );
};
