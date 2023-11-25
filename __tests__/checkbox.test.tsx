import '@testing-library/jest-native/extend-expect';
import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import Checkbox from '../src/components/Checkbox';
import { ThemeProvider } from 'styled-components/native';
import theme from '../src/style/theme/theme';

describe('Checkbox Component', () => {
  const mockOnChange = jest.fn();

  test('renders correctly with default props', () => {
    const { getByText, getByTestId } = render(
      <ThemeProvider theme={theme}>
        <Checkbox label="Test Checkbox" checked={false} onChange={mockOnChange} />
      </ThemeProvider>
    );

    const checkboxLabel = getByText('Test Checkbox');
    const checkboxContainer = getByTestId('checkbox-wrapper');

    expect(checkboxLabel).toBeTruthy();
    expect(checkboxContainer).toBeTruthy();
  });

  test('calls onChange when checkbox is pressed', () => {
    const { getByText } = render(
      <ThemeProvider theme={theme}>
        <Checkbox label="Test Checkbox" checked={false} onChange={mockOnChange} />
      </ThemeProvider>
    );

    const checkboxLabel = getByText('Test Checkbox');

    fireEvent.press(checkboxLabel);

    expect(mockOnChange).toHaveBeenCalledTimes(1);
  });

  test('renders with custom color when checked', () => {
    const { getByTestId } = render(
      <ThemeProvider theme={theme}>
        <Checkbox label="Test Checkbox" checked={true} onChange={mockOnChange} />
      </ThemeProvider>
    );

    const checkboxContainer = getByTestId('checkbox-wrapper');
    const checkMark = getByTestId('check-mark');

    expect(checkboxContainer).toHaveStyle({ borderColor: '#00FF00' });
    expect(checkMark).toHaveStyle({ backgroundColor: '#00FF00' });
  });

  afterEach(() => {
    jest.clearAllMocks();
  });
});
