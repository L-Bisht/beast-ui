import { describe, it, expect } from 'vitest';
import '@testing-library/jest-dom';
import { render, screen, fireEvent } from '@testing-library/react';
import { CodeDemo } from './CodeDemo';

describe('CodeDemo', () => {
  it('renders the live component provided as children', () => {
    render(
      <CodeDemo code="const x = 1;">
        <button data-testid="live-demo">Click me</button>
      </CodeDemo>
    );

    expect(screen.getByTestId('live-demo')).toBeInTheDocument();
  });

  it('hides the source code by default', () => {
    const sourceCode = 'const x = "secret_code";';
    render(
      <CodeDemo code={sourceCode}>
        <div>Demo</div>
      </CodeDemo>
    );

    expect(screen.queryByText(sourceCode)).not.toBeInTheDocument();
  });

  it('shows the source code when the toggle button is clicked', async () => {
    const sourceCode = 'const y = "visible_code";';
    const { container } = render(
      <CodeDemo code={sourceCode}>
        <div>Demo</div>
      </CodeDemo>
    );

    const toggleButton = screen.getByRole('button', { name: /show code/i });
    fireEvent.click(toggleButton);

    const sourceContainer = container.querySelector('.code-demo-source');
    expect(sourceContainer).toBeInTheDocument();
  });

  it('highlights the syntax of the source code', async () => {
    const sourceCode = 'const z = 10;';
    const { container } = render(
      <CodeDemo code={sourceCode}>
        <div>Demo</div>
      </CodeDemo>
    );

    const toggleButton = screen.getByRole('button', { name: /show code/i });
    fireEvent.click(toggleButton);

    // After clicking show code, there should be multiple span elements
    // indicating that prism-react-renderer has tokenized the string
    await screen.findByText(/const/);
    
    // We expect the text to be broken down into token spans
    const tokenSpans = container.querySelectorAll('.token');
    expect(tokenSpans.length).toBeGreaterThan(0);
  });
});
