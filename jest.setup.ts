import '@testing-library/jest-dom';

// Mock IntersectionObserver
class IntersectionObserver {
  observe = jest.fn();
  unobserve = jest.fn();
  disconnect = jest.fn();
}

Object.defineProperty(window, 'IntersectionObserver', {
  writable: true,
  configurable: true,
  value: IntersectionObserver,
});

Object.defineProperty(global, 'IntersectionObserver', {
  writable: true,
  configurable: true,
  value: IntersectionObserver,
});

// Mock Next.js dynamic imports
jest.mock('next/dynamic', () => ({
  __esModule: true,
  default: () => {
    return function Mock() {
      return 'MockedComponent';
    };
  },
}));

// Mock Lucide React icons
jest.mock('lucide-react', () => ({
  __esModule: true,
  ...jest.requireActual('lucide-react'),
  ExternalLink: () => 'ExternalLink',
  Star: () => 'Star',
  DollarSign: () => 'DollarSign',
  Users: () => 'Users',
  Zap: () => 'Zap',
  CheckCircle: () => 'CheckCircle',
  Search: () => 'Search',
  Filter: () => 'Filter',
  Grid: () => 'Grid',
  List: () => 'List',
}));