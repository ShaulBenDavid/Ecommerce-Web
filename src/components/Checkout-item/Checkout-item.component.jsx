import { useContext } from 'react';

import { CartContext } from '../../Context/cart.context';

import {
  CheckoutItemContainer,
  ImageContainer,
  BaseSpan,
  Quantity,
  Arrow,
  Value,
  RemoveButton,
} from './checkout-item.styles';

const CheckoutItem = ({ cartItem }) => {

    const { deleteItemToCart, addItemToCart, removeItemToCart } = useContext(CartContext);

    const { imageUrl, name, quantity, price } = cartItem;

    const handleDeleteItem = () => deleteItemToCart(cartItem);
    const handleRemoveItem = () => removeItemToCart(cartItem);
    const handleAddItem = () => addItemToCart(cartItem);

    return (
        <CheckoutItemContainer>
          <ImageContainer>
            <img src={imageUrl} alt={`${name}`} />
          </ImageContainer>
          <BaseSpan> {name} </BaseSpan>
          <Quantity>
            <Arrow onClick={handleRemoveItem}>&#10094;</Arrow>
            <Value>{quantity}</Value>
            <Arrow onClick={handleAddItem}>&#10095;</Arrow>
          </Quantity>
          <BaseSpan> {price}</BaseSpan>
          <RemoveButton onClick={handleDeleteItem}>&#10005;</RemoveButton>
        </CheckoutItemContainer>
      );
    };
    
    export default CheckoutItem;