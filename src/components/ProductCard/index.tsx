import React from "react";
import { CardContainer, ProductImage, PriceText, ProductContainer, ProductText, ImageContainer, ButtonWrapper, FavWrapper} from './style';
import { StarIcon as StarIcon } from "react-native-heroicons/solid";
import { Button } from "@components";
import { StyleSheet } from "react-native";

interface IProductCard {
    id: string
    productImage: string
    addFav?: () => void
    fav?: boolean
    onPress: () => void
    price: number 
    productName: string
    goToDetail: () => void
}

const ProductCard = (props: IProductCard) => {

    const { productImage, fav, price, productName, onPress, addFav, goToDetail} = props;
    const { favIcon } = styles;

    return (
        <CardContainer onPress={goToDetail} testID="card-container">
            <ImageContainer>
                <FavWrapper testID="fav-wrapper" onPress={addFav}>
                    <StarIcon style={favIcon} color={fav ? 'orange' : 'white'} testID="star-icon" />
                </FavWrapper>
                <ProductImage source={{ uri: productImage }} testID="product-image" />
            </ImageContainer>
            <ProductContainer>
                <PriceText testID="price-text">{price} ₺</PriceText>
                <ProductText numberOfLines={1} ellipsizeMode="tail" testID="product-text">{productName}</ProductText>
                <ButtonWrapper>
                    <Button textColor="white" textFamily='regular' onPress={onPress} buttonText="Add to Cart" />
                </ButtonWrapper>
            </ProductContainer>
        </CardContainer>
    )
}

const styles = StyleSheet.create({
    favIcon: {
        height: 24,
        width: 24,
    }
})

export default ProductCard;
