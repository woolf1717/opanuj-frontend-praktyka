import { describe, expect, test } from 'vitest';

import { formValidator } from './validator';

describe('Form validation', () => {
  test('should return an error if first name is missing', () => {
    const errors = formValidator('', 'Doe', 30);
    expect(errors).toContain('First name is required');
  });

  test('should return an error if last name is missing', () => {
    const errors = formValidator('John', '', 30);
    expect(errors).toContain('Last name is required');
  });

  test('should return an error if age is negative', () => {
    const errors = formValidator('John', 'Doe', -1);
    expect(errors).toContain('Age must be a positive number');
  });
  // Dodaj scenariusz zakładający przekazanie poprawnych danych.

  test('should return [] if all data is correct', () => {
    const errors = formValidator('John', 'Doe', 30);
    expect(errors).toEqual([]);
  });
  //Dodaj test jednostkowy sprawdzający czy validator name i last name "mają co najmniej jeden znak" działa
  // Tu w mojej opinii nie ponieważ dany scenariusz jest już sprawdzony przez testy wyżej
  test('should retrunt last name is required if last name cointains less than one charakter', () => {
    const errors = formValidator('John', '', 30);
    expect(errors).toContain('Last name is required');
  });
  test('should throw an error if age is not a number', () => {
    expect(() => formValidator('John', 'Doe', NaN)).toThrow(
      'Age must be a number'
    );
  });
});
