import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Details } from '@views';
import Tabs from '../tabs/index';
import options from '@options';

const Stack = createNativeStackNavigator();

export function HomeStack() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Main" screenOptions={options}>
        <Stack.Screen name="Main" component={Tabs} />
        <Stack.Screen name="Details" component={Details} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default HomeStack;
