import React from 'react';
import { FlatList } from 'react-native';
import { Container, Wrapper, PriceContainer, PriceText, TotalContainer, TotalText } from './style';
import { Header, ListCard, Button } from '@components';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '@store/store';
import { decrementQuantity, incrementQuantity } from '@store/cart/cartSlice';

const Cart = () => {
  const dispatch = useDispatch();
  const cart = useSelector((state: RootState) => state.cart);

  const renderItem = (product: ProductType) => (
    <ListCard
      decrement={() => dispatch(decrementQuantity(product))}
      increment={() => dispatch(incrementQuantity(product))}
      count={product.quantity}
      productName={product.name}
      price={product.price}
    />
  );

  const calculateTotalPrice = (): number => {
    return cart.reduce((total: number, product: ProductType) => total + product.quantity * product.price, 0);
  };

  return (
    <Container>
      <Header headerTitle='E-market' />
      <Wrapper>
        <FlatList
          data={cart}
          renderItem={({ item }) => renderItem(item)}
          keyExtractor={(item) => item.id.toString()}
        />
        <PriceContainer>
          <TotalContainer>
            <TotalText>Total:</TotalText>
            <PriceText>{calculateTotalPrice().toFixed(2)} ₺</PriceText>
          </TotalContainer>
          <Button textColor='white' borderRadius buttonText='Complete' onPress={() => console.log('completed')} />
        </PriceContainer>
      </Wrapper>
    </Container>
  );
};

export default Cart;
