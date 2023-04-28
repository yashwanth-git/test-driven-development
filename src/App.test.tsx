import { fireEvent, render, screen } from '@testing-library/react';
import App from './App';

describe('Application Test', () => {
  test('Render checking', () => {
    render(<App />);
    const headEl = screen.getByText(/Vending Machine/i);
    expect(headEl).toBeTruthy();
  });
  // test('On buttonClick, check if amount is entered or not, check if option is selection', () => {
  //   const { container } = render(<App />);
  //   const inputEl = container.querySelector('.amout-paid') as HTMLInputElement;
  //   const buttonEl = container.querySelector('.pay-btn') as HTMLElement;
  //   const returnEl = container.querySelector('.return') as HTMLElement;

  //   fireEvent.click(buttonEl);
  //   expect(inputEl).not.toBe(0);
  // });
});
