import React from 'react';
import { TouchableOpacity, View } from 'react-native';
import { RadioButton, RadioButtonText, RadioButtonWrapper, RadioGroupContainer, RadioButtonChecked } from './style';

type RadioGroupItem = {
  label: string;
  value: any;
};

type RadioGroupProps = {
  items: RadioGroupItem[];
  selectedValue: any;
  onChange: (value: any) => void;
};

const RadioGroup: React.FC<RadioGroupProps> = ({ items, selectedValue, onChange }) => {
  return (
    <RadioGroupContainer testID="radio-group-container">
      {items.map((item) => (
        <RadioButtonWrapper key={item.value} testID={`radio-button-wrapper-${item.value}`}>
          <RadioButton
            onPress={() => onChange(item.value)}
            style={{
                borderColor: selectedValue === item.value ? '#2A59FE' : '#000',
            }}
            testID={`radio-button-${item.value}`}
          >
            {selectedValue === item.value && <RadioButtonChecked testID={`radio-button-checked-${item.value}`} />}
          </RadioButton>
          <RadioButtonText testID={`radio-button-label-${item.value}`}>{item.label}</RadioButtonText>
        </RadioButtonWrapper>
      ))}
    </RadioGroupContainer>
  );
};

export default RadioGroup;
