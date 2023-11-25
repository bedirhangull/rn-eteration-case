import styled from "styled-components/native";

const ListCardContainer = styled.View`
  flex-direction: row;
`;

const InfoContainer = styled.View``;

const ProductName = styled.Text<{ theme: ITheme }>`
  color: ${(props) => props.theme.colors.black};
  font-size: ${(props) => props.theme.fontSizes.l};
`;

const PriceText = styled.Text<{ theme: ITheme }>`
  color: ${(props) => props.theme.colors.main};
  font-size: ${(props) => props.theme.fontSizes.m};
`;

const ButtonWrapper = styled.View`
  margin-left: auto;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

const FunctionRight = styled.TouchableOpacity<{ theme: ITheme }>`
  background-color: ${(props) => props.theme.colors.gray};
  padding: 8px;
  border-top-right-radius: 4px;
  border-bottom-right-radius: 4px;
  height: 36px;
  width: 36px;
  justify-content: center;
  align-items: center;
`;

const FunctionLeft = styled.TouchableOpacity<{ theme: ITheme }>`
  background-color: ${(props) => props.theme.colors.gray};
  padding: 8px;
  border-top-left-radius: 4px;
  border-bottom-left-radius: 4px;
  height: 36px;
  width: 36px;
  justify-content: center;
  align-items: center;
`;

const CountWrapper = styled.View<{ theme: ITheme }>`
  background-color: ${(props) => props.theme.colors.main};
  padding: 8px;
  height: 48px;
  width: 48px;
  justify-content: center;
  align-items: center;
`;

const CountText = styled.Text<{theme: ITheme}>`
  color: ${props => props.theme.colors.white};
  font-size: ${props => props.theme.fontSizes.xl};
`

export {
  ListCardContainer,
  InfoContainer,
  ProductName,
  PriceText,
  ButtonWrapper,
  FunctionRight,
  FunctionLeft,
  CountWrapper,
  CountText
};
