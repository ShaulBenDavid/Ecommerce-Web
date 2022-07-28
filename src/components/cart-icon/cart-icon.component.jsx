import { useSelector, useDispatch } from "react-redux";

import { ReactComponent as ShoppingIcon } from "../../assets/shopping-bag.svg";

import {
  cartIsOpenSelector,
  cartCountSelector,
} from "../../store/cart/cart.selector";
import { setIsCartOpen } from "../../store/cart/cart.action";

import { CartIconContainer, ItemCount } from "./cart-icon.styles";

const CartIcon = () => {
  const isCartOpen = useSelector(cartIsOpenSelector);
  const countItems = useSelector(cartCountSelector);
  const dispatch = useDispatch();

  const toggleIsCartOpen = () => dispatch(setIsCartOpen(!isCartOpen));

  return (
    <CartIconContainer onClick={toggleIsCartOpen}>
      <ShoppingIcon className="shopping-icon" />
      <ItemCount>{countItems}</ItemCount>
    </CartIconContainer>
  );
};

export default CartIcon;
