import styled from "styled-components/native";

const ModalContainer = styled.View<{theme: ITheme}>`
    flex: 1;
    background-color: ${props => props.theme.colors.white}
`

const FilterModal = styled.Modal``

export {ModalContainer, FilterModal}