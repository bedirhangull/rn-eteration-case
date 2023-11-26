import styled from "styled-components/native";

const Container = styled.SafeAreaView<{ theme: ITheme }>`
  background-color: ${props => props.theme.colors.white};
`;

const Wrapper = styled.View<{ theme: ITheme }>`
  padding: ${(props) => props.theme.spacing.m};
`;

const FilterContainer = styled.View<{theme: ITheme}>`
  flex-direction: row;
  align-items: center;
  margin-vertical: ${props => props.theme.spacing.m}
`;

const FilterText = styled.Text<{ theme: ITheme }>`
  font-size: ${props => props.theme.fontSizes.xl};
  font-weight: ${(props) => props.theme.fonts.regular};
  color: ${(props) => props.theme.colors.black};
  margin-right: auto;
`;

export { Container, Wrapper, FilterText, FilterContainer };
