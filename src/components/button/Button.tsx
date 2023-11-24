import React from 'react';
import { ButtonWrapper, ButtonText } from './style';
import { View } from 'react-native';

interface IButton {
    borderRadius?: boolean,
    buttonColor?: 'blue' | 'gray',
    onPress: () => void,
    buttonText: string
    textFamily?: 'bold' | 'regular',
    buttonTextSize?: 's' | 'lg'
}

const Button = (props: IButton) => {

    const { borderRadius = true, buttonColor = 'blue', onPress, buttonText, textFamily = 'bold', buttonTextSize = 's' } = props;

    return (
        <ButtonWrapper testID='button-wrapper' onPress={onPress} $buttonColor={buttonColor} $borderRadius={borderRadius}>
            <ButtonText
                $textType={textFamily}
                $buttonTextSize={buttonTextSize}>
                {buttonText}
            </ButtonText>
        </ButtonWrapper>
    )
}

export default Button;