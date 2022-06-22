import { useContext } from "react";
import { ProductsContext } from "../../../Context/products.context";
import ProductCard from "../../product-card/products-card.component";
import './shop.style.scss';

const Shop = () => {

    const { products } = useContext(ProductsContext);

  return (
      <div className="products-container">
          {products.map((product) => (
              <ProductCard key={product.id} product={product}/>
            ))}
      </div>
  )
}

export default Shop;