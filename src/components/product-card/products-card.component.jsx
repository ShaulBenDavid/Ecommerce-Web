import Button from "../button/button.component";
import "./product-card.styles.scss";

import { useContext } from "react";
import { CartContext } from "../../Context/cart.context";

const ProductCard = ({ product }) => {
  const { addItemToCart } = useContext(CartContext);
  const { imageUrl, name, price } = product;

  const addProductToCard = () => addItemToCart(product);

  return (
    <div className="product-card-container">
      <img src={imageUrl} alt={name} />
      <div className="footer">
        <span className="name">{name}</span>
        <span className="price">{price}</span>
      </div>
      <Button buttonType="inverted" onClick={addProductToCard}>
        Add to cart
      </Button>
    </div>
  );
};

export default ProductCard;
