import React, { useState } from "react";
import { FlatList } from "react-native";
import {
  Container,
  SectionContainer,
  SectionText,
  CheckBoxContainer,
} from "./style";
import { Checkbox, RadioGroup, SearchInput } from "@components";

interface IFilterLayout {
  sortOption: string;
  onChange: (value: string) => void;
  data: ProductType[];
  
  //for filter
  selectedBrands: string[];
  selectedModels: string[];
  
  //filter functions
  onBrandSelect: (brand: string) => void;
  onModelSelect: (model: string) => void;
}

const FilterLayout = (props: IFilterLayout) => {

  const { sortOption, onChange, data, selectedBrands, onBrandSelect, selectedModels, onModelSelect } = props;
  const [brandSearch, setBrandSearch] = useState<string>('');
  const [modelSearch, setModelSearch] = useState<string>('');

  const items = [
    { label: "Old to New", value: "oldToNew" },
    { label: "New to Old", value: "newToOld" },
    { label: "Price Low to High", value: "priceHighToLow" },
    { label: "Price High to Low", value: "priceLowToHigh" },
  ];

  const toggleBrand = (brand: string) => {
    onBrandSelect(brand);
  };

  const toggleModel = (model: string) => {
    onModelSelect(model);
  };

  const filteredBrands = data.filter(
    (item) =>
      item.brand &&
      item.brand.toLowerCase().includes(brandSearch.toLowerCase())
  );

  const filteredModels = data.filter(
    (item) =>
      item.model &&
      item.model.toLowerCase().includes(modelSearch.toLowerCase())
  );

  const renderItem = ({ item }: { item: ProductType }) => (
    <CheckBoxContainer>
      <Checkbox
        checked={selectedBrands.includes(item.brand || "")}
        label={item.brand || ""}
        onChange={() => toggleBrand(item.brand || "")}
      />
    </CheckBoxContainer>
  );

  const renderItemModel = ({ item }: { item: ProductType }) => (
    <CheckBoxContainer>
      <Checkbox
        checked={selectedModels.includes(item.model || "")} // Corrected line
        label={item.model || ""}
        onChange={() => toggleModel(item.model || "")} // Corrected line
      />
    </CheckBoxContainer>
  );
   

  return (
    <Container>
      <SectionContainer>
        <SectionText>Sort By</SectionText>
        <RadioGroup items={items} selectedValue={sortOption} onChange={onChange} />
      </SectionContainer>
      <SectionContainer>
        <SectionText>Brand</SectionText>
        <SearchInput
          placeholder="Search brand"
          onChangeText={(text) => setBrandSearch(text)}
        />
        <FlatList
          data={filteredBrands}
          keyExtractor={(item) => item.id.toString()}
          renderItem={renderItem}
        />
      </SectionContainer>
      <SectionContainer>
        <SectionText>Model</SectionText>
        <SearchInput
          placeholder="Search model"
          onChangeText={(text) => setModelSearch(text)}
        />
        <FlatList
          data={filteredModels}
          keyExtractor={(item) => item.id.toString()}
          renderItem={renderItemModel}
        />
      </SectionContainer>
    </Container>
  );
};

export default FilterLayout;
