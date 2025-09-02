import Header from '@/widgets/Header';
import { render, screen } from '@testing-library/react';
import { describe, expect, test } from 'vitest';

describe('Header', () => {
  test('renders nav buttons', () => {
    render(<Header></Header>);
    expect(screen.getAllByRole('button').length).toBe(2);
  });
});
