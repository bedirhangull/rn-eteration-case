import styled from "styled-components/native";

const Container = styled.View<{ theme: ITheme }>`
  flex: 1;
  background-color: ${(props) => props.theme.colors.white};
  padding: ${props => props.theme.spacing.m}
`;

const ImageContainer = styled.View<{ theme: ITheme }>``;

const Image = styled.Image`
  width: 100%;
  height: 300px;
`;

const FavWrapper = styled.TouchableOpacity`
  position: absolute;
  top: 0;
  right: 0;
  z-index: 1;
  margin: 8px;
  height: 24px;
  width: 24px;
`;

const DescriptionContainer = styled.View`
  margin-vertical: ${props => props.theme.spacing.m};
  margin-bottom: auto;
`;

const DescriptionText = styled.Text<{ theme: ITheme }>`
  color: ${(props) => props.theme.colors.black};
  font-weight: ${(props) => props.theme.fonts.regular};
  font-size: ${(props) => props.theme.fontSizes.m};
`;

const PriceContainer = styled.View<{theme: ITheme}>`
  flex-direction: row;
  margin-top: ${props => props.theme.spacing.m};
`;

const TotalContainer = styled.View<{theme: ITheme}>`
  flex-direction: column;
  margin-right: auto;
`;

const PriceText = styled.Text<{ theme: ITheme }>`
  color: ${(props) => props.theme.colors.black};
  font-weight: ${(props) => props.theme.fonts.bold};
  font-size: ${(props) => props.theme.fontSizes.xl};
`;

const TotalText = styled.Text<{ theme: ITheme }>`
  color: ${(props) => props.theme.colors.main};
  font-weight: ${(props) => props.theme.fonts.regular};
  font-size: ${(props) => props.theme.fontSizes.l};
`;

const ScrollView = styled.ScrollView<{theme: ITheme}>`
  background-color: ${props => props.theme.colors.white}
`

export {
  Container,
  ImageContainer,
  Image,
  FavWrapper,
  DescriptionContainer,
  DescriptionText,
  PriceContainer,
  TotalContainer,
  TotalText,
  PriceText,
  ScrollView
};
