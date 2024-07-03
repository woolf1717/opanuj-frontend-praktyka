// @vitest-environment jsdom

import '@testing-library/jest-dom';

import { render, screen } from '@testing-library/react';

import SimpleAppChecklistAndTests from './SimpleAppChecklistAndTests';

test('renders app checklist', () => {
  render(<SimpleAppChecklistAndTests />);
  const linkElement = screen.getByText(/Simple App Checklist and Tests/i);
  expect(linkElement).toBeInTheDocument();
});
