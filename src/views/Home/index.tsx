import React from 'react';
import {useSelector} from 'react-redux';
import {RootState} from '../../store/store';
import {Button} from '@components';
import { View } from 'react-native'
const Home = () => {
  const count = useSelector((state: RootState) => state.count.value);

  return (
    <View style={{marginTop: 30}}>
      <Button onPress={() => console.log('Bedirhan')} borderRadius buttonText='Selamlar miller naber' />
    </View>
  );
};

export default Home;
