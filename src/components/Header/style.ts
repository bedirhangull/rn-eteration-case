import styled from "styled-components/native";

const HeaderContainer = styled.View<{theme: ITheme}>`
    padding: 12px;
    background-color: ${props => props.theme.colors.white};
    flex-direction: row;
`

const HeaderTitle = styled.Text<{theme: ITheme}>`
    margin-left: 8px;
    color: ${props => props.theme.colors.black};
    font-size: ${props => props.theme.fontSizes.xl};
    font-weight: ${props => props.theme.fonts.bold};
`

const HeaderButton = styled.TouchableOpacity`
    height: 32px;
    widht: 32px;
`

export {HeaderContainer,HeaderTitle, HeaderButton};