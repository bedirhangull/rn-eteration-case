import styled from "styled-components/native";

const InputContainer = styled.View<{theme: ITheme}>`
    background-color: ${props => props.theme.colors.lightGray};
    flex-direction: row;
    align-items: center;
    padding: 12px;
    border-radius: 8px;
`

const Input = styled.TextInput<{theme: ITheme}>`
    padding: 0px;
    margin-left: 8px;
    font-weight: ${props => props.theme.fonts.bold};
    font-size: ${props => props.theme.fontSizes.l}
`

export {InputContainer, Input};