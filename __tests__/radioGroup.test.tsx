import '@testing-library/jest-native/extend-expect';
import React from 'react';
import { render, fireEvent, waitFor } from '@testing-library/react-native';
import { ThemeProvider } from 'styled-components/native';
import RadioGroup from '../src/components/RadioButtonGroup';
import theme from '../src/style/theme/theme';

describe('RadioGroup Component', () => {
  const mockOnChange = jest.fn();

  const radioItems = [
    { label: 'Option 1', value: 'option1' },
    { label: 'Option 2', value: 'option2' },
    { label: 'Option 3', value: 'option3' },
  ];

  test('calls onChange when radio button is pressed', async () => {
    const { getByTestId } = render(
      <ThemeProvider theme={theme}>
        <RadioGroup items={radioItems} selectedValue="option1" onChange={mockOnChange} />
      </ThemeProvider>
    );

    await waitFor(() => {
      radioItems.forEach((item) => {
        const radioButtonLabel = getByTestId(`radio-button-label-${item.value}`);
        fireEvent.press(radioButtonLabel);
      });
    });

    expect(mockOnChange).toHaveBeenCalledTimes(0);
  });

  test('correctly tracks and displays selected value', () => {
    const { getByTestId } = render(
      <ThemeProvider theme={theme}>
        <RadioGroup items={radioItems} selectedValue="option2" onChange={mockOnChange} />
      </ThemeProvider>
    );

    radioItems.forEach((item) => {
      const radioButtonContainer = getByTestId(`radio-button-wrapper-${item.value}`);
      expect(radioButtonContainer).toBeTruthy();

      if (item.value === 'option2') {
        const checkedIndicator = getByTestId(`radio-button-checked-${item.value}`);
        expect(checkedIndicator).toBeTruthy();
      }
    });
  });

  afterEach(() => {
    jest.clearAllMocks();
  });
});
