import { RouteProp } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';

type DetailsScreenParams = {
  product: ProductType;
  isFavorite: boolean;
};

export type RootStackParamList = {
  Details: DetailsScreenParams;
};

export type DetailsScreenNavigationProp = StackNavigationProp<RootStackParamList, 'Details'>;
export type DetailsScreenRouteProp = RouteProp<RootStackParamList, 'Details'>;