import styled from 'styled-components/native';

const StyledView = styled.View`
  margin-top: 12px;
  background-color: papayawhip;
`;

const Title = styled.Text<{theme: ITheme}>`
  font-weight: ${props => props.theme.fonts.bold};
  color: ${props => props.theme.colors.favColor};
`;
export {Title, StyledView};
