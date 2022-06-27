import { useContext } from 'react';
import { CartContext } from '../../Context/cart.context';

import './checkout-item.styles.scss';



const CheckoutItem = ({ cartItem }) => {

    const { deleteItemToCart, addItemToCart, removeItemToCart } = useContext(CartContext);

    const { imageUrl, name, quantity, price } = cartItem;

    const handleDeleteItem = () => deleteItemToCart(cartItem);
    const handleRemoveItem = () => removeItemToCart(cartItem);
    const handleAddItem = () => addItemToCart(cartItem);

    return (
        <div className='checkout-item-container'>
            <div className='image-container '>
                <img src={imageUrl} alt={name} />
            </div>
            <span className='name'>{name}</span>
            <span className='quantity'>
                <div className='arrow' onClick={handleRemoveItem}>
                    &#10094;
                </div>
                <span className='value'>{quantity}</span>
                <div className='arrow' onClick={handleAddItem}>
                    &#10095;
                </div>
            </span>
            <span className='price'>{price}</span>
            <span className='remove-button' onClick={handleDeleteItem}>
                &#10005;
            </span>
        </div>
    );
}

export default CheckoutItem;