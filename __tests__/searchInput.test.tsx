import '@testing-library/jest-native/extend-expect';
import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import { ThemeProvider } from 'styled-components/native';
import SearchInput from '../src/components/SearchInput';
import theme from '../src/style/theme/theme';

describe('SearchInput Component', () => {
  const mockOnChangeText = jest.fn();

  test('calls onChangeText when input value changes', () => {
    const { getByTestId } = render(
      <ThemeProvider theme={theme}>
        <SearchInput onChangeText={mockOnChangeText} placeholder="Search" />
      </ThemeProvider>
    );

    const input = getByTestId('search-input');
    fireEvent.changeText(input, 'test');

    expect(mockOnChangeText).toHaveBeenCalledWith('test');
  });

  test('renders with the provided placeholder', () => {
    const { getByPlaceholderText } = render(
      <ThemeProvider theme={theme}>
        <SearchInput onChangeText={mockOnChangeText} placeholder="Search" />
      </ThemeProvider>
    );

    const input = getByPlaceholderText('Search');
    expect(input).toBeTruthy();
  });

  afterEach(() => {
    jest.clearAllMocks();
  });
});
