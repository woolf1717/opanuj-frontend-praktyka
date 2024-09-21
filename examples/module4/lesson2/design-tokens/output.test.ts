import {
  ButtonTextColor,
  ColorAliasForeground1,
  ColorGlobalGrey14,
} from './dist/js/tokens';
import { describe, expect, test } from 'vitest';

describe('Design Tokens library output', () => {
  test('should have a color.global.grey.14 token', () => {
    expect(ColorGlobalGrey14).toBeDefined();
    // expect(ColorGlobalGrey14).toBe('#212121');
  });

  test('should have a button.text.color token', () => {
    expect(ButtonTextColor).toBeDefined();
    // expect(ButtonTextColor).toBe('#212121');
  });
});
