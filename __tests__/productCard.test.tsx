import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import { ThemeProvider } from 'styled-components/native';
import theme from '../src/style/theme/theme';
import ProductCard from '../src/components/ProductCard';

describe('ProductCard Component', () => {
  const mockOnPress = jest.fn();
  const mockAddFav = jest.fn();

  test('calls onPress when card is pressed', () => {
    const { getByTestId } = render(
      <ThemeProvider theme={theme}>
        <ProductCard
          productImage="sample_image_url"
          fav={false}
          price="10"
          productName="Sample Product"
          onPress={mockOnPress}
          addFav={mockAddFav}
        />
      </ThemeProvider>
    );

    const cardContainer = getByTestId('card-container');
    fireEvent.press(cardContainer);

    expect(mockOnPress).toHaveBeenCalledTimes(1);
  });

  test('calls addFav when favorite icon is pressed', () => {
    const { getByTestId } = render(
      <ThemeProvider theme={theme}>
        <ProductCard
          productImage="sample_image_url"
          fav={false}
          price="10"
          productName="Sample Product"
          onPress={mockOnPress}
          addFav={mockAddFav}
        />
      </ThemeProvider>
    );

    const favWrapper = getByTestId('fav-wrapper');
    fireEvent.press(favWrapper);

    expect(mockAddFav).toHaveBeenCalledTimes(1);
  });

  afterEach(() => {
    jest.clearAllMocks();
  });
});
