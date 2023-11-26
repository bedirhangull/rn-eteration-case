import styled from "styled-components/native";

const CardContainer = styled.TouchableOpacity<{ theme: ITheme }>`
  border-color: ${(props) => props.theme.colors.gray};
  border-width: 2px;
  width: 170px;
  padding: 8px;
  margin: 2px;
`;

const ProductImage = styled.Image`
  height: 150px;
  width: 150px;
`;

const ImageContainer = styled.View`
  position: relative;
`;

const PriceText = styled.Text<{ theme: ITheme }>`
  color: ${(props) => props.theme.colors.main};
  font-size: ${(props) => props.theme.fontSizes.l};
  margin-vertical: 4px;
`;

const ProductText = styled.Text<{ theme: ITheme }>`
  color: ${(props) => props.theme.colors.black};
  font-size: ${(props) => props.theme.fontSizes.l};
  margin-vertical: 4px;
`;

const ButtonWrapper = styled.View<{ theme: ITheme }>`
  margin-vertical: ${(props) => props.theme.spacing.s};
`;

const FavWrapper = styled.TouchableOpacity`
    position: absolute;
    top: 0;
    right: 0;
    zIndex: 1;
    margin: 4px;
    height: 24px;
    width: 24px;
`;

const ProductContainer = styled.View``;

export {
  CardContainer,
  ProductImage,
  PriceText,
  ProductContainer,
  ProductText,
  ImageContainer,
  ButtonWrapper,
  FavWrapper,
};
