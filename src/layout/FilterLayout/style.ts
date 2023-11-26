import styled from "styled-components/native";

const Container = styled.View<{theme: ITheme}>`
    flex: 1;
    padding-horizontal: ${props => props.theme.spacing.l};
`

const SectionText = styled.Text<{theme: ITheme}>`
    color: ${props => props.theme.colors.black};
    font-size: ${(props) => props.theme.fontSizes.m};
    margin-vertical: ${props => props.theme.spacing.s};
`;

const SectionContainer = styled.View<{ theme: ITheme }>`
    flex: 1;
    border-bottom-color: ${props => props.theme.colors.black};
    border-bottom-width: 2px;
`;

const CheckBoxContainer = styled.View<{theme: ITheme}>`
    margin-vertical: ${props => props.theme.spacing.s};
`

export {Container,SectionText, SectionContainer, CheckBoxContainer};