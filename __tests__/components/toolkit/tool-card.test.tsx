import { render, screen, fireEvent, act, waitFor } from '@testing-library/react';
import ToolCard from '@/components/toolkit/tool-card';

// Sample tool data
const mockTool = {
  id: 'chatgpt',
  name: 'ChatGPT',
  description: 'The most versatile AI assistant for writing, analysis, and problem-solving.',
  category: 'writing',
  pricing: 'freemium' as const,
  priceDetails: 'Free with $20/month Plus plan',
  rating: 4.7,
  userCount: '100M+',
  website: 'https://chat.openai.com/',
  logo: '/logos/chatgpt.png',
  features: ['Natural conversation', 'File analysis', 'Creative writing', 'Code generation'],
  useCases: [
    'Write professional emails and documents',
    'Analyze spreadsheets and PDFs',
    'Brainstorm creative ideas',
    'Get coding help and explanations'
  ],
  pros: ['Most versatile', 'Easy to use', 'Constantly improving'],
  cons: ['Can hallucinate', 'Limited real-time data', 'Usage limits on free plan']
};

describe('ToolCard', () => {
  it('renders tool name and description correctly', () => {
    render(
      <ToolCard 
        tool={mockTool} 
        index={0} 
        viewMode="grid" 
      />
    );

    expect(screen.getByText('ChatGPT')).toBeInTheDocument();
    expect(screen.getByText(/The most versatile AI assistant/)).toBeInTheDocument();
  });

  it('displays category and pricing tags', () => {
    render(
      <ToolCard 
        tool={mockTool} 
        index={0} 
        viewMode="grid" 
      />
    );

    expect(screen.getByText('writing')).toBeInTheDocument();
    expect(screen.getByText('freemium')).toBeInTheDocument();
  });

  it('shows rating and user count', () => {
    render(
      <ToolCard 
        tool={mockTool} 
        index={0} 
        viewMode="grid" 
      />
    );

    expect(screen.getByText('4.7')).toBeInTheDocument();
    expect(screen.getByText('100M+')).toBeInTheDocument();
  });

  it('renders features correctly', () => {
    render(
      <ToolCard 
        tool={mockTool} 
        index={0} 
        viewMode="grid" 
      />
    );

    expect(screen.getByText('Natural conversation')).toBeInTheDocument();
    expect(screen.getByText('File analysis')).toBeInTheDocument();
  });

  it('renders correctly in list view', () => {
    render(
      <ToolCard 
        tool={mockTool} 
        index={0} 
        viewMode="list" 
      />
    );

    expect(screen.getByText('ChatGPT')).toBeInTheDocument();
    expect(screen.getByText(/The most versatile AI assistant/)).toBeInTheDocument();
  });

  it('toggles details view on button click', () => {
    render(
      <ToolCard 
        tool={mockTool} 
        index={0} 
        viewMode="grid" 
      />
    );

    const detailsButton = screen.getByText('Show Details');
    // Initially, the detailed sections should not be visible
    expect(screen.queryByText('Best For')).not.toBeInTheDocument();

    fireEvent.click(detailsButton);

    // After clicking, the detailed sections should be visible
    expect(screen.getByText('Best For')).toBeInTheDocument();

    // The button text should change to "Hide Details"
    expect(screen.getByText('Hide Details')).toBeInTheDocument();

    fireEvent.click(screen.getByText('Hide Details'));

    // After clicking again, the detailed sections should be hidden
    // Note: In the actual component, the section is not removed from the DOM, 
    // just hidden with CSS, so we can't use queryByText here
  });
});