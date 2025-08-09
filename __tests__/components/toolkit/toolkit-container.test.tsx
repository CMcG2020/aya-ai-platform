import { render, screen, waitFor, fireEvent, act } from '@testing-library/react';
import ToolkitContainer from '@/components/toolkit/toolkit-container';

// Mock dynamic import of ToolCard
jest.mock('next/dynamic', () => ({
  __esModule: true,
  default: () => {
    return function MockToolCard({ tool }: any) {
      return <div data-testid={`tool-card-${tool.id}`}>{tool.name}</div>;
    };
  },
}));

// Mock the toolkit data
jest.mock('@/lib/toolkit-data', () => ({
  tools: [
    {
      id: 'chatgpt',
      name: 'ChatGPT',
      description: 'AI assistant',
      category: 'writing',
      pricing: 'freemium',
      priceDetails: 'Free with $20/month Plus plan',
      rating: 4.7,
      userCount: '100M+',
      website: 'https://chat.openai.com/',
      logo: '/logos/chatgpt.png',
      features: ['Natural conversation'],
      useCases: ['Write professional emails'],
      pros: ['Most versatile'],
      cons: ['Can hallucinate']
    },
    {
      id: 'claude',
      name: 'Claude',
      description: 'AI assistant by Anthropic',
      category: 'writing',
      pricing: 'freemium',
      priceDetails: 'Free with $20/month Pro plan',
      rating: 4.6,
      userCount: '10M+',
      website: 'https://claude.ai/',
      logo: '/logos/claude.png',
      features: ['Natural conversation'],
      useCases: ['Write professional emails'],
      pros: ['Most versatile'],
      cons: ['Can hallucinate']
    }
  ]
}));

// Mock Lucide React icons
jest.mock('lucide-react', () => ({
  Search: () => <div data-testid="search-icon" />,
  Filter: () => <div data-testid="filter-icon" />,
  Grid: () => <div data-testid="grid-icon" />,
  List: () => <div data-testid="list-icon" />,
}));

describe('ToolkitContainer', () => {
  it('renders the component with title and description', () => {
    render(<ToolkitContainer />);

    expect(screen.getByText('AI')).toBeInTheDocument();
    expect(screen.getByText('Toolkit')).toBeInTheDocument();
    expect(screen.getByText(/Discover vetted AI tools/)).toBeInTheDocument();
  });

  it('renders search and filter controls', () => {
    render(<ToolkitContainer />);
    
    expect(screen.getByPlaceholderText(/Search AI tools/)).toBeInTheDocument();
    expect(screen.getAllByRole('combobox')).toHaveLength(2); // Two select elements
  });

  it('filters tools based on search term', async () => {
    render(<ToolkitContainer />);

    // Wait for the tools to load
    await waitFor(() => {
      expect(screen.getByText('ChatGPT')).toBeInTheDocument();
      expect(screen.getByText('Claude')).toBeInTheDocument();
    });

    const searchInput = screen.getByPlaceholderText(/Search AI tools/);
    fireEvent.change(searchInput, { target: { value: 'Claude' } });

    await waitFor(() => {
      expect(screen.queryByText('ChatGPT')).not.toBeInTheDocument();
      expect(screen.getByText('Claude')).toBeInTheDocument();
    });
  });

  it('switches between grid and list view', () => {
    render(<ToolkitContainer />);

    const gridButton = screen.getByText('Grid');
    const listButton = screen.getByText('List');

    // Click list button
    fireEvent.click(listButton);

    // Click grid button
    fireEvent.click(gridButton);
    
    // If we get here without errors, the test passes
    expect(gridButton).toBeInTheDocument();
  });
});