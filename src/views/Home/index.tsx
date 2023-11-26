//ui
import React, { useEffect, useState } from 'react';
import { FlatList, ActivityIndicator } from 'react-native';
import { Container, FilterContainer, FilterText, Wrapper } from './style';
import { Button, Header, SearchInput, ProductCard, FilterModal } from '@components';
import { FilterLayout } from '../../layout/index';
import moment from 'moment';

//state managment
import { useSelector, useDispatch } from 'react-redux';
import { fetchProducts } from '@store/products/productsSlice';
import { addToCart } from '@store/cart/cartSlice';
import { RootState } from '@store/store';
import { addToFavorites, removeFromFavorites } from '@store/fav/favoriteSlice'

const Home = () => {
  
  const dispatch = useDispatch<any>();

  const [page, setPage] = useState<number>(0);
  const [displayProducts, setDisplayProducts] = useState<ProductType[]>([]);
  const [showActivityIndicator, setShowActivityIndicator] = useState<boolean>(false);
  const [modalOpen, setModalOpen] = useState<boolean>(false);
  const [sortOption, setSortOption] = useState<string>('');
  
  const [search, setSearch] = useState<string>('');
  const [selectedBrands, setSelectedBrands] = useState<string[]>([]);
  const [selectedModels, setSelectedModels] = useState<string[]>([]);

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  const products: Array<ProductType> = useSelector((state: RootState) => state.products.productData);
  const favorites = useSelector((state: RootState) => state.fav.favorites);

  useEffect(() => {
    setDisplayProducts(products.slice(0, 12));
  }, [products]);

  //favorite product feature
  const isInFavorites = (product: ProductType): boolean => {
    const isFavorite = favorites.some((favProduct) => {
      return favProduct.id === product.id;
    });
    return isFavorite;
  };
  
  const handleFavorite = (product: ProductType) => {
    const isFavorite = isInFavorites(product);
    if (isFavorite) {
      dispatch(removeFromFavorites(product));
    } else {
      dispatch(addToFavorites(product));
    }
  };
  
  const renderItem = (product: ProductType) => (
    <ProductCard
      addFav={() => handleFavorite(product)}
      onPress={() => dispatch(addToCart(product))}
      id={product.id}
      price={product.price}
      productImage={product.image}
      productName={product.name}
      fav={isInFavorites(product)} 
    />
  );

  const handleLoadMore = () => {
    setShowActivityIndicator(true);
    setPage((prevPage) => prevPage + 1);
  
    const newDisplayProducts = [
      ...displayProducts,
      ...products.slice(page * 12, (page + 1) * 12),
    ];
  
    setDisplayProducts(newDisplayProducts);
  
    setShowActivityIndicator(false);
  };
  

  const applySortAndFilter = () => {
    let filteredAndSortedProducts = [...products];
  
    // Filter by search text
    if (search.trim() !== '') {
      filteredAndSortedProducts = filteredAndSortedProducts.filter((product) =>
        product.name.toLowerCase().includes(search.toLowerCase())
      );
    }
  
    // Filter by selected brands
    if (selectedBrands.length > 0) {
      filteredAndSortedProducts = filteredAndSortedProducts.filter((product) =>
        selectedBrands.includes(product.brand || '')
      );
    }
  
    // Filter by selected models
    if (selectedModels.length > 0) {
      filteredAndSortedProducts = filteredAndSortedProducts.filter((product) =>
        selectedModels.includes(product.model || '')
      );
    }
  
    // Sort features
    switch (sortOption) {
      //old to new
      case 'oldToNew':
        filteredAndSortedProducts.sort((a, b) => +moment(a.date) - +moment(b.date));
        break;
      //new to old
      case 'newToOld':
        filteredAndSortedProducts.sort((a, b) => +moment(b.date) - +moment(a.date));
        break;
      //price high to low
      case 'priceHighToLow':
        filteredAndSortedProducts.sort((a, b) => a.price - b.price);
        break;
      //price low to high
      case 'priceLowToHigh':
        filteredAndSortedProducts.sort((a, b) => b.price - a.price);
        break;
      default:
        break;
    }
  
    return filteredAndSortedProducts;
  };
  
  const handleSortChange = (value: string) => {
    setSortOption(value);
  };

  const handleBrandSelection = (brand: string) => {
    if (selectedBrands.includes(brand)) {
      setSelectedBrands((prevBrands) =>
        prevBrands.filter((selectedBrand) => selectedBrand !== brand)
      );
    } else {
      setSelectedBrands((prevBrands) => [...prevBrands, brand]);
    }
  };

  const handleModelSelection = (model: string) => {
    if (selectedModels.includes(model)) {
      setSelectedModels((prevModels) =>
        prevModels.filter((selectedModel) => selectedModel !== model)
      );
    } else {
      setSelectedModels((prevModels) => [...prevModels, model]);
    }
  };

  return (
    <Container>
      <Header headerTitle='E-market' />
      <FilterModal
        context={
          <FilterLayout
            sortOption={sortOption}
            onChange={handleSortChange}
            data={products}
            selectedBrands={selectedBrands}
            onBrandSelect={handleBrandSelection}
            selectedModels={selectedModels} 
            onModelSelect={handleModelSelection}
          />
        }
        open={modalOpen}
        closeModal={() => setModalOpen(false)}
      />
      <Wrapper>
        <SearchInput onChangeText={(text) => setSearch(text)} placeholder='Search' />
        <FilterContainer>
          <FilterText>Filters:</FilterText>
          <Button onPress={() => setModalOpen(true)} buttonText='Select Filter' buttonColor='gray' borderRadius={false} textColor='black' />
        </FilterContainer>
        <FlatList
          data={applySortAndFilter()}
          numColumns={2}
          renderItem={({ item }) => renderItem(item)}
          keyExtractor={(item) => item.id.toString()}
          onEndReached={handleLoadMore}
          onEndReachedThreshold={0.1}
          ListFooterComponent={() => showActivityIndicator && <ActivityIndicator size='large' color='black' />}
        />
      </Wrapper>
    </Container>
  );
};

export default Home;
