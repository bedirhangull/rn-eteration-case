import React, { useState } from 'react';
import {useSelector} from 'react-redux';
import {RootState} from '../../store/store';
import {Button, Checkbox} from '@components';
import { View } from 'react-native'

const Home = () => {

  const [checked, setChecked] = useState<boolean>(false);

  return (
    <View style={{marginTop: 30}}>
      <Button onPress={() => console.log('Bedirhan')} borderRadius buttonText='Selamlar miller naber' />
      <Checkbox onChange={() => setChecked(!checked)} label='Tamamlandi' checked={checked} />
    </View>
  );
};

export default Home;
