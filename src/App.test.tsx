import { fireEvent, render, screen } from '@testing-library/react';
import App from './App';

describe('Application Test', () => {
  test('Render checking', () => {
    render(<App />);
    const headEl = screen.getByText(/Vending Machine/i);
    expect(headEl).toBeTruthy();
  });
  test('On buttonClick, check if amount is entered or not', () => {
    const { container } = render(<App />);
    const inputEl = container.querySelector('.amout-paid');
    const buttonEl = container.querySelector('.pay-btn');

    fireEvent.click(buttonEl);
    expect(inputEl).not.toBe('');
  });
});
