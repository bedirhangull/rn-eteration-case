import React from "react";
import { ListCardContainer, InfoContainer, PriceText, ProductName, ButtonWrapper, CountText, FunctionRight, FunctionLeft, CountWrapper } from './style'
import { PlusIcon as PlusIcon, MinusIcon as MinusIcon } from "react-native-heroicons/solid";

interface IListCard {
    productName: string
    price: number 
    increment: () => void
    decrement: () => void
    count: number
}

const ListCard = (props: IListCard) => {

    const { productName, price, increment, decrement, count } = props;

    return (
        <ListCardContainer testID="list-card-container">
            <InfoContainer>
                <ProductName testID="product-name">{productName}</ProductName>
                <PriceText testID="price-text">{price}</PriceText>
            </InfoContainer>
            <ButtonWrapper>
                <FunctionLeft onPress={increment} testID="plus-button">
                    <PlusIcon
                        height={24}
                        width={24}
                        color="gray"
                    />
                </FunctionLeft>
                <CountWrapper testID="count-wrapper">
                    <CountText testID="count-text">{count}</CountText>
                </CountWrapper>
                <FunctionRight onPress={decrement} testID="minus-button">
                    <MinusIcon
                        height={24}
                        width={24}
                        color="gray"
                    />
                </FunctionRight>
            </ButtonWrapper>
        </ListCardContainer>
    )
}

export default ListCard;
