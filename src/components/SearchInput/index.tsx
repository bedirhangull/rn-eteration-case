import React from 'react';
import { InputContainer, Input } from './style';
import { MagnifyingGlassIcon as MagnifyingGlassIcon } from "react-native-heroicons/solid";

interface ISearchInput {
  onChangeText: (text: string) => void;
  placeholder: string;
}

const SearchInput = (props: ISearchInput) => {
  const { onChangeText, placeholder } = props;

  return (
    <InputContainer testID="search-input-container">
      <MagnifyingGlassIcon
        height={24}
        width={24}
        color="gray"
        testID="magnifying-glass-icon"
      />
      <Input
        onChangeText={onChangeText}
        placeholder={placeholder}
        testID="search-input"
      />
    </InputContainer>
  );
};

export default SearchInput;
