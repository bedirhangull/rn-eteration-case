import React, { useEffect, useState } from 'react';
import { FlatList, ActivityIndicator } from 'react-native';
import { Container, FilterContainer, FilterText, Wrapper } from './style';
import { Button, Header, SearchInput, ProductCard } from '@components';
import { useSelector, useDispatch } from 'react-redux';
import { fetchProducts } from '@store/products/productsSlice';
import { addToCart } from '@store/cart/cartSlice';
import { RootState } from '@store/store';

const Home = () => {

  const dispatch = useDispatch<any>();
  
  const [search, setSearch] = useState<string>('');
  const [page, setPage] = useState<number>(1);
  const [displayProducts, setDisplayProducts] = useState<ProductType[]>([]);
  const [showActivityIndicator, setShowActivityIndicator] = useState<boolean>(false);

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  const products: Array<ProductType> = useSelector((state: RootState) => state.products.productData);

  useEffect(() => {
    setDisplayProducts(products.slice(0, 12));
  }, [products]);

  const renderItem = (product: ProductType) => (
    <ProductCard
      addFav={() => console.log('fav added')}
      onPress={() => dispatch(addToCart(product))}
      price={product.price}
      productImage={product.image}
      productName={product.name}
    />
  );

  const handleLoadMore = () => {
    setShowActivityIndicator(true);
    setPage(page + 1);
    const nextDisplayProducts = products.slice(0, page * 12);
    setDisplayProducts(nextDisplayProducts);
    setShowActivityIndicator(false);
  };

  const filteredProducts =
    displayProducts.length > 0 &&
    displayProducts.filter((product) =>
      product.name.toLowerCase().includes(search.toLowerCase())
    );

  return (
    <Container>
      <Header headerTitle='E-market' />
      <Wrapper>
        <SearchInput onChangeText={(text) => setSearch(text)} placeholder='Search' />
        <FilterContainer>
          <FilterText>Filters:</FilterText>
          <Button onPress={() => console.log('filter')} buttonText='Select Filter' buttonColor='gray' borderRadius={false} textColor='black' />
        </FilterContainer>
        <FlatList
          data={filteredProducts || []}
          numColumns={2}
          renderItem={({ item }) => renderItem(item)} 
          keyExtractor={(item) => item.id.toString()}
          onEndReached={handleLoadMore}
          onEndReachedThreshold={0.1}
          ListFooterComponent={() => showActivityIndicator && <ActivityIndicator size="large" color="black" />}
        />
      </Wrapper>
    </Container>
  );
};

export default Home;
