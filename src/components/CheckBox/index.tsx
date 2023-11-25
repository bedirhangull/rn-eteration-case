import React from "react";
import { CheckBoxWrapper, CheckboxContainer, CheckMark, LabelText } from './style';

interface ICheckBox {
    label: string;
    checked: boolean;
    onChange: () => void;
}

const Checkbox = (props: ICheckBox) => {

    const { label, checked, onChange } = props;

    return (
        <CheckBoxWrapper testID="checkbox-wrapper">
            <CheckboxContainer checked={props.checked} onPress={onChange}>
                {checked && <CheckMark testID="check-mark" />}
            </CheckboxContainer>
            <LabelText>{label}</LabelText>
        </CheckBoxWrapper>
    )
}

export default Checkbox;