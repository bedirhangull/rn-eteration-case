import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import { ThemeProvider } from 'styled-components/native';
import theme from '../src/style/theme/theme';
import ListCard from '../src/components/ListCard';

describe('ListCard Component', () => {
  const mockIncrement = jest.fn();
  const mockDecrement = jest.fn();

  test('calls increment when plus icon is pressed', () => {
    const { getByTestId } = render(
      <ThemeProvider theme={theme}>
        <ListCard productName="Sample Product" price={10} increment={mockIncrement} decrement={mockDecrement} count={1} />
      </ThemeProvider>
    );

    const plusIcon = getByTestId('plus-button');
    fireEvent.press(plusIcon);

    expect(mockIncrement).toHaveBeenCalledTimes(1);
  });

  test('calls decrement when minus icon is pressed', () => {
    const { getByTestId } = render(
      <ThemeProvider theme={theme}>
        <ListCard productName="Sample Product" price={10} increment={mockIncrement} decrement={mockDecrement} count={1} />
      </ThemeProvider>
    );

    const minusIcon = getByTestId('minus-button');
    fireEvent.press(minusIcon);

    expect(mockDecrement).toHaveBeenCalledTimes(1);
  });

  afterEach(() => {
    jest.clearAllMocks();
  });
});
