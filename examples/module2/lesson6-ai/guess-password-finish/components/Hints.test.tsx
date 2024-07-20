// @vitest-environment jsdom

import '@testing-library/jest-dom/vitest';

import { afterEach, describe, expect, test } from 'vitest';
import { cleanup, fireEvent, render, screen } from '@testing-library/react';

import { Hints } from './Hints';

afterEach(cleanup);

describe('Hints Component', () => {
  test('renders without crashing', () => {
    render(<Hints />);
    expect(
      screen.getByText(
        'Masz problem ze zgadnięciem hasła? Skorzystaj z podpowiedzi.'
      )
    ).toBeInTheDocument();
  });

  test('initially does not show any hint', () => {
    render(<Hints />);
    expect(screen.getByTestId('hint-text').textContent).toBe('');
  });

  test('shows the first hint when the button is clicked', () => {
    render(<Hints />);
    fireEvent.click(screen.getByText('Pokaż podpowiedź'));
    expect(screen.getByTestId('hint-text').textContent).toBe(
      'Ogórek i Rick połączeni w jedno'
    );
  });

  test('cycles through hints when the button is clicked multiple times', () => {
    render(<Hints />);
    const button = screen.getByText('Pokaż podpowiedź');

    fireEvent.click(button);

    expect(screen.getByTestId('hint-text').textContent).toBe(
      'Ogórek i Rick połączeni w jedno'
    );

    fireEvent.click(button);
    expect(screen.getByTestId('hint-text').textContent).toBe(
      'Hasło to dwa słowa, drugie to imię'
    );

    fireEvent.click(button);
    expect(screen.getByTestId('hint-text').textContent).toBe(
      'Ogórek po angielsku to Pickle'
    );

    fireEvent.click(button);
    expect(screen.getByTestId('hint-text').textContent).toBe(
      'Ogórek i Rick połączeni w jedno'
    );
  });
});
