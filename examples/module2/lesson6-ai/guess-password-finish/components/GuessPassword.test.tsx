// @vitest-environment jsdom

import '@testing-library/jest-dom/vitest';

import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest';
import { cleanup, render, screen } from '@testing-library/react';

import { GuessPassword } from './GuessPassword';
import userEvent from '@testing-library/user-event';

afterEach(cleanup);

describe('(Copilot) GuessPassword', () => {
  beforeEach(() => {
    render(<GuessPassword />);
  });
  it('renders without crashing', () => {
    const passwordInput = screen.getByPlaceholderText('Wpisz hasło...');
    expect(passwordInput).toBeInTheDocument();
  });

  it('displays error message when password is incorrect', async () => {
    const passwordInput = screen.getByPlaceholderText(/wpisz hasło.../i);
    const submitButton = screen.getByRole('button', { name: /zgadnij/i });

    await userEvent.type(passwordInput, 'wrong password');
    await userEvent.click(submitButton);

    expect(screen.getByText(/niepoprawne hasło/i)).toBeInTheDocument();
  });

  it('does not display error message when password is correct', async () => {
    const correctPassword = 'pickle rick';
    const passwordInput = screen.getByPlaceholderText(/wpisz hasło.../i);
    const submitButton = screen.getByRole('button', { name: /zgadnij/i });

    await userEvent.type(passwordInput, correctPassword);
    await userEvent.click(submitButton);

    expect(screen.queryByText(/niepoprawne hasło/i)).toBeNull();
    expect(window.alert).toHaveBeenCalledWith('Brawo! Zgadłeś hasło.');
  });

  it('displays error message when password is empty', async () => {
    const passwordInput = screen.getByPlaceholderText(/wpisz hasło.../i);

    await userEvent.type(passwordInput, 'wrong password');
    expect(screen.queryByText(/niepoprawne hasło/i)).toBeNull();
  });

  it('ignores case when checking password', async () => {
    const passwordInput = screen.getByPlaceholderText(/wpisz hasło.../i);
    const submitButton = screen.getByRole('button', { name: /zgadnij/i });

    await userEvent.type(passwordInput, 'PICKLE RICK');
    await userEvent.click(submitButton);

    expect(window.alert).toHaveBeenCalledWith('Brawo! Zgadłeś hasło.');
  });
});

vi.stubGlobal('alert', vi.fn());

describe('(GPT-4) GuessPassword', () => {
  beforeEach(() => {
    render(<GuessPassword />);
  });

  it('clears the error message after inputting correct password following a mistake', async () => {
    const passwordInput = screen.getByPlaceholderText(/wpisz hasło.../i);
    const submitButton = screen.getByRole('button', { name: /zgadnij/i });

    await userEvent.type(passwordInput, 'wrong');
    await userEvent.click(submitButton);
    expect(screen.getByText(/niepoprawne hasło/i)).toBeInTheDocument();

    await userEvent.clear(passwordInput);
    await userEvent.type(passwordInput, 'pickle rick');
    await userEvent.click(submitButton);

    expect(screen.queryByText(/niepoprawne hasło/i)).toBeNull();
    expect(window.alert).toHaveBeenCalledWith('Brawo! Zgadłeś hasło.');
  });

  it('initializes with an empty input field', () => {
    const passwordInput = screen.getByPlaceholderText(/wpisz hasło.../i);
    expect(passwordInput).toHaveValue('');
  });

  it('trims the password input before validation', async () => {
    const passwordInput = screen.getByPlaceholderText(/wpisz hasło.../i);
    const submitButton = screen.getByRole('button', { name: /zgadnij/i });

    await userEvent.type(passwordInput, '  pickle rick  ');
    await userEvent.click(submitButton);

    expect(window.alert).toHaveBeenCalledWith('Brawo! Zgadłeś hasło.');
  });

  it('displays the error message only once despite multiple incorrect submissions', async () => {
    const passwordInput = screen.getByPlaceholderText(/wpisz hasło.../i);
    const submitButton = screen.getByRole('button', { name: /zgadnij/i });

    await userEvent.type(passwordInput, 'wrong password');
    await userEvent.click(submitButton);
    await userEvent.click(submitButton);

    expect(screen.queryAllByText(/niepoprawne hasło/i).length).toBe(1);
  });
});

describe('Edge cases for GuessPassword', () => {
  beforeEach(() => {
    render(<GuessPassword />);
  });

  it('displays error message for password with special characters', async () => {
    const passwordInput = screen.getByPlaceholderText(/wpisz hasło.../i);
    const submitButton = screen.getByRole('button', { name: /zgadnij/i });

    await userEvent.type(passwordInput, 'pickle rick!');
    await userEvent.click(submitButton);

    expect(screen.getByText(/niepoprawne hasło/i)).toBeInTheDocument();
  });

  it('displays error message for password with numbers', async () => {
    const passwordInput = screen.getByPlaceholderText(/wpisz hasło.../i);
    const submitButton = screen.getByRole('button', { name: /zgadnij/i });

    await userEvent.type(passwordInput, 'pickle rick123');
    await userEvent.click(submitButton);

    expect(screen.getByText(/niepoprawne hasło/i)).toBeInTheDocument();
  });

  it('displays error message for password with mixed case and special characters', async () => {
    const passwordInput = screen.getByPlaceholderText(/wpisz hasło.../i);
    const submitButton = screen.getByRole('button', { name: /zgadnij/i });

    await userEvent.type(passwordInput, 'Pickle Rick!');
    await userEvent.click(submitButton);

    expect(screen.getByText(/niepoprawne hasło/i)).toBeInTheDocument();
  });

  it('displays error message for password with leading and trailing spaces and special characters', async () => {
    const passwordInput = screen.getByPlaceholderText(/wpisz hasło.../i);
    const submitButton = screen.getByRole('button', { name: /zgadnij/i });

    await userEvent.type(passwordInput, '  pickle rick!  ');
    await userEvent.click(submitButton);

    expect(screen.getByText(/niepoprawne hasło/i)).toBeInTheDocument();
  });

  it('displays error message for password with only spaces', async () => {
    const passwordInput = screen.getByPlaceholderText(/wpisz hasło.../i);
    const submitButton = screen.getByRole('button', { name: /zgadnij/i });

    await userEvent.type(passwordInput, '     ');
    await userEvent.click(submitButton);

    expect(screen.getByText(/niepoprawne hasło/i)).toBeInTheDocument();
  });

  it('displays error message for password with non-ASCII characters', async () => {
    const passwordInput = screen.getByPlaceholderText(/wpisz hasło.../i);
    const submitButton = screen.getByRole('button', { name: /zgadnij/i });

    await userEvent.type(passwordInput, 'pickle rickñ');
    await userEvent.click(submitButton);

    expect(screen.getByText(/niepoprawne hasło/i)).toBeInTheDocument();
  });
});
