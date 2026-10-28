import { describe, it, expect, vi } from 'vitest';
import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { App } from '../../src/app/App';

// Mock Recharts ResponsiveContainer to render in jsdom test runner
vi.mock('recharts', async () => {
  const original = await vi.importActual<any>('recharts');
  return {
    ...original,
    ResponsiveContainer: ({ children }: any) => <div style={{ width: 500, height: 300 }}>{children}</div>,
  };
});

describe('App Layout & Navigation Integration', () => {
  it('should render candidate name and executive overview on initial mount', () => {
    render(<App />);

    expect(screen.getAllByText('Aman Kumar Ranjan').length).toBeGreaterThan(0);
    expect(screen.getByText('Verified Portfolio Metrics')).toBeInTheDocument();
    expect(screen.getByText('Total Projects')).toBeInTheDocument();
  });

  it('should switch views when navigation tab is clicked', () => {
    render(<App />);

    // Click on "Projects" in sidebar
    const projectsBtn = screen.getByRole('button', { name: /Projects 15/i });
    fireEvent.click(projectsBtn);

    expect(screen.getByText('Technical Project Catalog')).toBeInTheDocument();

    // Click on "Evidence & Audit" in sidebar
    const evidenceBtn = screen.getByRole('button', { name: /Evidence & Audit/i });
    fireEvent.click(evidenceBtn);

    expect(screen.getByText('Evidence Verification Center')).toBeInTheDocument();
    expect(screen.getByText('Zero-Fabrication Engineering Standard')).toBeInTheDocument();
  });

  it('should navigate to the dedicated Profile & Logo page and display photo & brand details', () => {
    render(<App />);

    // Click on "Profile & Brand Logo" in sidebar
    const profileBtn = screen.getByRole('button', { name: /Profile & Brand Logo/i });
    fireEvent.click(profileBtn);

    expect(screen.getByText('Profile, Identity & Personal Brand')).toBeInTheDocument();
    expect(screen.getByText('AKR Monogram (Aman Kumar Ranjan)')).toBeInTheDocument();
    expect(screen.getByText('230103001')).toBeInTheDocument();
    expect(screen.getByText('Verified Candidate Photo')).toBeInTheDocument();
  });

  it('should toggle Day and Night theme mode', () => {
    render(<App />);

    // Find the theme toggle button in the header
    const toggleBtn = screen.getByRole('button', { name: /toggle theme mode/i });
    expect(toggleBtn).toBeInTheDocument();

    // Default is light (Day Mode). Clicking should toggle to Night mode
    fireEvent.click(toggleBtn);
    expect(document.documentElement.classList.contains('dark')).toBe(true);

    // Clicking again should toggle back to Day mode
    fireEvent.click(toggleBtn);
    expect(document.documentElement.classList.contains('dark')).toBe(false);
  });

  it('should open and close project detail modal when project card is clicked', () => {
    render(<App />);

    // Navigate to projects view
    const projectsBtn = screen.getByRole('button', { name: /Projects 15/i });
    fireEvent.click(projectsBtn);

    // Click on JAL-SETU project card
    const projectCardTitle = screen.getByText('JAL-SETU: Seasonal Groundwater Level Forecasting');
    fireEvent.click(projectCardTitle);

    // Modal should be open
    expect(screen.getByRole('dialog')).toBeInTheDocument();
    expect(screen.getByText('Project Overview & Problem Statement')).toBeInTheDocument();
    expect(screen.getByText('Confirmed Technologies & Tools')).toBeInTheDocument();

    // Close modal via close button
    const closeBtn = screen.getByLabelText('Close dialog');
    fireEvent.click(closeBtn);

    expect(screen.queryByRole('dialog')).not.toBeInTheDocument();
  });
});
