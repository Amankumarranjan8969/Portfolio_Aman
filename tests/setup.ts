import '@testing-library/jest-dom';
import { vi } from 'vitest';

// JSDOM doesn't implement window.scrollTo by default
Object.defineProperty(window, 'scrollTo', {
  value: vi.fn(),
  writable: true,
});
