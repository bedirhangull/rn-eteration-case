import '@testing-library/jest-native/extend-expect'; 

import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import Button from '../src/components/button/Button';
import { ThemeProvider } from 'styled-components/native';
import theme from '../src/style/theme/theme';

describe('Button Component', () => {
  const mockOnPress = jest.fn();

  test('renders correctly with default props', () => {
    const { getByText, getByTestId } = render(
      <ThemeProvider theme={theme}>
        <Button onPress={mockOnPress} buttonText="Click me" />
      </ThemeProvider>
    );

    const button = getByText('Click me');
    const buttonWrapper = getByTestId('button-wrapper');

    expect(button).toBeTruthy();
    expect(buttonWrapper).toBeTruthy();
  });

  test('calls onPress when button is pressed', () => {
    const { getByText } = render(
      <ThemeProvider theme={theme}>
        <Button onPress={mockOnPress} buttonText="Click me" />
      </ThemeProvider>
    );

    const button = getByText('Click me');

    fireEvent.press(button);

    expect(mockOnPress).toHaveBeenCalledTimes(1);
  });

  test('renders with blue color when buttonColor is "blue"', () => {
    const { getByTestId } = render(
      <ThemeProvider theme={theme}>
        <Button onPress={mockOnPress} buttonText="Click me" buttonColor="blue" />
      </ThemeProvider>
    );

    const buttonWrapper = getByTestId('button-wrapper');

    expect(buttonWrapper).toHaveStyle({ backgroundColor: '#2A59FE' });

  });

  afterEach(() => {
    jest.clearAllMocks();
  });
});
