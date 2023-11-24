// style.ts
import styled from "styled-components/native";

const ButtonWrapper = styled.TouchableOpacity<{$borderRadius: boolean; $buttonColor: 'blue' | 'gray' ;theme: ITheme}>`
    border-radius: ${props => props.$borderRadius ? '4px' : '0px'};
    padding-vertical: 12px;
    padding-horizontal: 18px;
    background-color: ${props => props.$buttonColor == 'blue' ? props.theme.colors.main : props.theme.colors.gray} 
`

const ButtonText = styled.Text<{$buttonTextSize: 's' | 'lg'; theme: ITheme; $textType: 'bold' | 'regular'}>`
    font-size: ${props => props.$buttonTextSize == 's' ? props.theme.fontSizes.l : props.theme.fontSizes.xl};
    color: ${props => props.theme.colors.white};
    font-weight: ${props => props.$textType == 'bold' ? props.theme.fonts.bold : props.theme.fonts.regular};
    text-align: center;
`

export {ButtonWrapper, ButtonText};
