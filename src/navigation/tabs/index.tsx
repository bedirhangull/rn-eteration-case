import * as React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Home, Cart, Profile, Favorites } from '@views';
import { HomeIcon, ShoppingCartIcon, StarIcon,UserIcon } from "react-native-heroicons/solid";
import options from '@options';
import { useSelector } from 'react-redux';
import { RootState } from '@store/store';

const Tab = createBottomTabNavigator();

function Tabs() {

  const cart: Array<ProductType> = useSelector((state: RootState) => state.cart);

  return (
    <Tab.Navigator screenOptions={options}>
      <Tab.Screen name="Home" component={Home} options={{
        tabBarIcon: () => {
          return (
            <HomeIcon height={24} width={24} color='black' />
          )
        }
      }} />
      <Tab.Screen name="Cart" component={Cart} options={{
        tabBarIcon: () => {
          return (
            <ShoppingCartIcon height={24} width={24} color='black' />
          )
        },
        tabBarBadge: cart.length !== 0 ? cart.length : undefined 
      }} />
      <Tab.Screen name="Favorites" component={Favorites} options={{
        tabBarIcon: () => {
          return (
            <StarIcon height={24} width={24} color='black' />
          )
        }
      }} />
      <Tab.Screen name="Profile" component={Profile} options={{
        tabBarIcon: () => {
          return (
            <UserIcon height={24} width={24} color='black' />
          )
        }
      }} />
    </Tab.Navigator>
  );
}
export default Tabs;
