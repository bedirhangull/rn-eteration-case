import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import { ThemeProvider } from 'styled-components/native';
import theme from '../src/style/theme/theme';
import Header from '../src/components/Header';
import { MagnifyingGlassIcon as MagnifyingGlassIcon } from "react-native-heroicons/solid";

describe('Header Component', () => {
    const mockHeaderFunction = jest.fn();

    test('calls headerFunction when header button is pressed', () => {
        const { getByTestId } = render(
            <ThemeProvider theme={theme}>
                <Header icon={<MockIcon />} headerTitle="Sample Header" headerFunction={mockHeaderFunction} />
            </ThemeProvider>
        );

        const headerButton = getByTestId('header-button');
        fireEvent.press(headerButton);

        expect(mockHeaderFunction).toHaveBeenCalledTimes(1);
    });

    afterEach(() => {
        jest.clearAllMocks();
    });
});

const MockIcon: React.FC = () => <MagnifyingGlassIcon
    height={24}
    width={24}
    color="gray"
    testID="magnifying-glass-icon"
/>;
