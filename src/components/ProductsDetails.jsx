import { Link, useParams } from "react-router-dom";
import productsArr from "../data/products.json";

function ProductDetails() {
  const { productId } = useParams();
  const product = productsArr.find(
    (productObj) => productObj.id === parseInt(productId)
  );

  return (
    <div className="ProductDetails">
      <h1>{product.name}</h1>
      {product.image ? (
        <img src={product.image} />
      ) : (
        <img src="https://dummyimage.com/182x268/ffffff/000000" />
      )}
      <p>Price: {product.price}</p>
      <p>Description: {product.description}</p>
      <div>
        {product.categories &&
          product.categories.map((category) => (
            <span className="badge">{category}</span>
          ))}
      </div>
      <p>
        <Link to="/">Back to Products</Link>
      </p>
    </div>
  );
}

export default ProductDetails;
