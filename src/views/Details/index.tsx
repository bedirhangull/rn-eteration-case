import React from 'react';
import { StyleSheet } from 'react-native';
import { Button } from '@components';
import { Container, Image, ImageContainer, ScrollView, FavWrapper, DescriptionContainer, DescriptionText, TotalContainer, TotalText, PriceContainer, PriceText } from './style';
import { Header } from '@components';
import { RouteProp } from '@react-navigation/native';
import { RootStackParamList } from './types';
import { ArrowLeftIcon as ArrowLeftIcon, StarIcon as StarIcon } from "react-native-heroicons/solid";

import { useDispatch } from 'react-redux';
import { addToCart } from '@store/cart/cartSlice'

type DetailsScreenRouteProp = RouteProp<RootStackParamList, 'Details'>;

interface DetailsProps {
  route: DetailsScreenRouteProp;
  navigation: any;
}

const Details: React.FC<DetailsProps> = ({ route, navigation }) => {

  const dispatch = useDispatch();

  const { product, isFavorite } = route.params;
  const { favIcon } = styles;

  const backToHome = () => { navigation.navigate('Home') };
  
  return (
    <ScrollView>
      <Container>
        <Header headerFunction={backToHome} icon={<ArrowLeftIcon height={24} width={24} color='black' />} headerTitle={product.name} />
        <ImageContainer>
          <FavWrapper testID="fav-wrapper">
            <StarIcon style={favIcon} color={isFavorite ? 'orange' : 'white'} testID="star-icon" />
          </FavWrapper>
          <Image source={{ uri: product.image }} />
        </ImageContainer>
        <DescriptionContainer>
          <DescriptionText>{product.description}</DescriptionText>
        </DescriptionContainer>
        <PriceContainer>
          <TotalContainer>
            <TotalText>Total:</TotalText>
            <PriceText>{product.price} ₺</PriceText>
          </TotalContainer>
          <Button textColor='white' textFamily='regular' borderRadius buttonText='Add to Cart' onPress={() => dispatch(addToCart(product))} />
        </PriceContainer>
      </Container>
    </ScrollView>
  );
};



const styles = StyleSheet.create({
  favIcon: {
    height: 24,
    width: 24,
  }
})

export default Details;
