// @vitest-environment jsdom

import '@testing-library/jest-dom';

import { fireEvent, render, screen } from '@testing-library/react';

import SimpleAppChecklistAndTests from './SimpleAppChecklistAndTests';

export const bookListInitialState = [
  { id: 1, title: 'Pierwsza książka', author: 'Jan Kowalski' },
  { id: 2, title: 'Druga książka', author: 'Adam Nowak' },
];

describe('SimpleAppChecklistAndTests', () => {
  //Dodaj testy komponentów weryfikujące poprawne działanie komponentów. Dodawanie i usuwanie pozycji powinno być odwzorowywane w interfejsie użytkownika.

  test('renders app checklist', () => {
    render(<SimpleAppChecklistAndTests bookList={bookListInitialState} />);
    const linkElement = screen.getByText(/Simple App Checklist and Tests/i);
    expect(linkElement).toBeInTheDocument();
  });

  test('removeListElement', () => {
    const { getAllByText } = render(
      <SimpleAppChecklistAndTests bookList={bookListInitialState} />
    );
    const removeButton = getAllByText('Delete');
    fireEvent.click(removeButton[0]);
    const removeButton2 = getAllByText('Delete');
    expect(removeButton2.length).toBe(1);
  });

  test('addListElement', () => {
    const { getByLabelText, getByText } = render(
      <SimpleAppChecklistAndTests bookList={bookListInitialState} />
    );
    const titleInput = getByLabelText('Title');
    const authorInput = getByLabelText('Author');

    fireEvent.change(titleInput, { target: { value: 'Trzecia książka' } });
    fireEvent.change(authorInput, { target: { value: 'Adam Kowalski' } });

    const addButton = getByText('Dodaj książkę');
    fireEvent.click(addButton);

    expect(getByText('Trzecia książka - Adam Kowalski')).toBeInTheDocument();
  });
});
