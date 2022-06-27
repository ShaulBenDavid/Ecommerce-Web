import { useContext } from 'react';
import { CartContext } from '../../Context/cart.context';
import { ReactComponent as CartImage } from '../../assets/shopping-bag.svg';

import './cart-icon.styles.scss';

const CartIcon = () => {
    const { isCartOpen, setIsCartOpen, countItems } = useContext(CartContext);

    const toggleIsCartOpen = () => {
        setIsCartOpen(!isCartOpen);
    };

    return (
        <div className='cart-icon-container' onClick={() => toggleIsCartOpen()}>
            <CartImage className='shopping-icon' />
            <span className='item-count'>{countItems}</span>
        </div>
    );
}

export default CartIcon;