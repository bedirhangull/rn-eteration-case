import styled from "styled-components/native";

const CheckBoxWrapper = styled.View`
  flex-direction: row;
  align-items: center;
`;

const CheckboxContainer = styled.TouchableOpacity<{ checked: boolean; theme: ITheme }>`
  width: 24px;
  height: 24px;
  border: 2px solid ${(props) => (props.checked ? props.theme.colors.main : "#000")};
  border-radius: 4px;
  justify-content: center;
  align-items: center;
  margin-right: 8px;
`;

const CheckMark = styled.View<{theme: ITheme}>`
  width: 12px;
  height: 12px;
  background-color: ${props => props.theme.colors.main};
  border-radius: 2px;
`;

const LabelText = styled.Text<{theme: ITheme}>`
  font-size: ${props => props.theme.fontSizes.l} ;
`;

export {CheckBoxWrapper,CheckboxContainer,CheckMark,LabelText}