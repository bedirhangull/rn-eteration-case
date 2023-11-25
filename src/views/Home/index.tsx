import React, { useState } from 'react';
import {useSelector} from 'react-redux';
import {RootState} from '../../store/store';
import {Button, Checkbox,RadioGroup} from '@components';
import { View } from 'react-native'

const Home = () => {

  const [checked, setChecked] = useState<boolean>(false);

  const [selectedValue, setSelectedValue] = useState(null);

  const handleRadioChange = (value: any) => {
    setSelectedValue(value);
  };

  const radioItems = [
    { label: 'Option 1', value: 'option1' },
    { label: 'Option 2', value: 'option2' },
    { label: 'Option 3', value: 'option3' },
  ];

  return (
    <View style={{marginTop: 30}}>
      <Button onPress={() => console.log('Bedirhan')} borderRadius buttonText='Selamlar miller naber' />
      <Checkbox onChange={() => setChecked(!checked)} label='Tamamlandi' checked={checked} />
      <RadioGroup items={radioItems} selectedValue={selectedValue} onChange={handleRadioChange} />
    </View>
  );
};

export default Home;
