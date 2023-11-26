import React from 'react';
import { FlatList } from 'react-native';
import { Container } from './style';
import { ProductCard } from '@components';

import { useSelector, useDispatch } from 'react-redux';
import { addToCart } from '@store/cart/cartSlice';
import { RootState } from '@store/store';

const Favorites = ({ navigation, route }: { navigation: any; route: any }) => {

  const dispatch = useDispatch();
  const favorites = useSelector((state: RootState) => state.fav.favorites);

  const goToProductDetails = (product: ProductType) => {
    navigation.navigate('Details', { product })
  }

  const renderItem = (product: ProductType) => (
    <ProductCard
      goToDetail={(() => goToProductDetails(product))}
      onPress={() => dispatch(addToCart(product))}
      id={product.id}
      price={product.price}
      productImage={product.image}
      productName={product.name}
      fav={true}
    />
  );

  return (
    <Container>
        <FlatList
          data={favorites}
          numColumns={2}
          renderItem={({ item }) => renderItem(item)}
          keyExtractor={(item) => item.id.toString()}
          onEndReachedThreshold={0.1}
        />
    </Container>
  );
};

export default Favorites;
