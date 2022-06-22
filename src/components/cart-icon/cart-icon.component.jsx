import { useContext } from 'react';
import { CartContext } from '../../Context/cart.context';
import { ReactComponent as CartImage } from '../../assets/shopping-bag.svg';

import './cart-icon.styles.scss';

const CartIcon = () => {
    const { isCartOpen, setIsCartOpen } = useContext(CartContext);

    const toggleIsCartOpen = () => {
        setIsCartOpen(!isCartOpen);
    };

    return (
        <div className='cart-icon-container' onClick={() => toggleIsCartOpen()}>
            <CartImage className='shopping-icon' />
            <span className='item-count'>0</span>
        </div>
    );
}

export default CartIcon;