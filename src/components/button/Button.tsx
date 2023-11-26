import React from 'react';
import { ButtonWrapper, ButtonText } from './style';
import { View } from 'react-native';

interface IButton {
    borderRadius?: boolean,
    buttonColor?: 'blue' | 'gray',
    onPress: () => void,
    buttonText: string
    textFamily?: 'bold' | 'regular',
    buttonTextSize?: 's' | 'lg',
    textColor?: string
}

const Button = (props: IButton) => {

    const { borderRadius = true, buttonColor = 'blue', onPress, buttonText, textFamily = 'bold', buttonTextSize = 's', textColor = 'blue' } = props;

    return (
        <ButtonWrapper testID='button-wrapper' onPress={onPress} $buttonColor={buttonColor} $borderRadius={borderRadius}>
            <ButtonText
                $textColor={textColor}
                $textType={textFamily}
                $buttonTextSize={buttonTextSize}>
                {buttonText}
            </ButtonText>
        </ButtonWrapper>
    )
}

export default Button;