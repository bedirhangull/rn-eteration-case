import styled from "styled-components/native";

const Container = styled.SafeAreaView<{ theme: ITheme }>`
  flex: 1;
  background-color: ${(props) => props.theme.colors.white};
`;

const Wrapper = styled.View<{ theme: ITheme }>`
  padding: ${(props) => props.theme.spacing.m};
  flex: 1;
`;

const PriceContainer = styled.View`
    flex-direction: row;
`

const TotalContainer = styled.View`
    flex-direction: column;
    margin-right: auto;
`

const PriceText = styled.Text<{theme: ITheme}>`
    color: ${props => props.theme.colors.black};
    font-weight: ${props => props.theme.fonts.bold};
    font-size: ${props => props.theme.fontSizes.xl};
`

const TotalText = styled.Text<{theme: ITheme}>`
    color: ${props => props.theme.colors.main};
    font-weight: ${props => props.theme.fonts.regular};
    font-size: ${props => props.theme.fontSizes.l}
`

export { Container, Wrapper, PriceContainer, TotalContainer, PriceText, TotalText };
