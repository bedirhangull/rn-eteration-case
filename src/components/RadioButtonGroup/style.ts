import styled from 'styled-components/native'

const RadioGroupContainer = styled.View`
  margin-vertical: 10px;
`;

const RadioButtonWrapper = styled.View`
  flex-direction: row;
  align-items: center;
  margin-vertical: 5px;
`;

const RadioButton = styled.TouchableOpacity`
  width: 24px;
  height: 24px;
  border-radius: 12px;
  border-width: 2px;
  justify-content: center;
  align-items: center;
  margin-right: 8px;
`;

const RadioButtonText = styled.Text<{theme: ITheme}>`
  font-size: ${props => props.theme.fontSizes.l};
`;

const RadioButtonChecked = styled.View<{theme: ITheme}>`
  width: 12px;
  height: 12px;
  background-color: ${props => props.theme.colors.main};
  border-radius: 6px;
`;

export {RadioGroupContainer,RadioButtonWrapper,RadioButton,RadioButtonText,RadioButtonChecked};