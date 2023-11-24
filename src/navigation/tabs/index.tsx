import * as React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Home, Cart, Profile, Favorites} from '@views';
import options from '@options';
const Tab = createBottomTabNavigator();

function Tabs() {
  return (
    <Tab.Navigator screenOptions={options}>
      <Tab.Screen name="Main" component={Home} />
      <Tab.Screen name="Cart" component={Cart} />
      <Tab.Screen name="Favorites" component={Favorites} />
      <Tab.Screen name="Profile" component={Profile} />
    </Tab.Navigator>
  );
}
export default Tabs;
