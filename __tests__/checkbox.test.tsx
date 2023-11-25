import '@testing-library/jest-native/extend-expect';
import React from 'react';
import { render, fireEvent, waitFor } from '@testing-library/react-native';
import { ThemeProvider } from 'styled-components/native';
import Checkbox from '../src/components/CheckBox';
import theme from '../src/style/theme/theme';

describe('Checkbox Component', () => {
  const mockOnChange = jest.fn();

  test('calls onChange when checkbox is pressed', () => {
    const { getByTestId } = render(
      <ThemeProvider theme={theme}>
        <Checkbox label="Test Checkbox" checked={false} onChange={mockOnChange} />
      </ThemeProvider>
    );
  
    const checkboxContainer = getByTestId('checkbox-wrapper');
    fireEvent.press(checkboxContainer);
  
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
  
    expect(checkboxContainer).toHaveStyle({ borderColor: theme.colors.main });
    expect(checkMark).toHaveStyle({ backgroundColor: theme.colors.main });
  });
  

  afterEach(() => {
    jest.clearAllMocks();
  });
});
