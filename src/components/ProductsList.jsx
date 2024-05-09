import { useState } from "react";
import productsData from "../assets/products.json";
import "./Products.css";
import AddProduct from "./AddProduct/AddProduct";

function ProductList() {
  const [products, setProducts] = useState(productsData);
  const [productsToDisplay, setProductsToDisplay] = useState(products);

  const Counter = ({ productId }) => {
    const [counter, setCounter] = useState(0);

    const increaseCounter = () => {
      setCounter(counter + 1);
    };

    const decreaseCounter = () => {
      if (counter >= 1) {
        setCounter(counter - 1);
      }
    };

    const handleDelete = (productId) => {
      setProducts((prev) => {
        return prev.filter((item) => item?.id != productId);
      });
    };

    return (
      <div>
        <button className="btn-counter" onClick={decreaseCounter}>
          -
        </button>

        <span>{counter}</span>
        <button className="btn-counter" onClick={increaseCounter}>
          +
        </button>
        <button onClick={increaseCounter}>Add to Cart</button>
        <button
          className="btn-delete"
          onClick={() => {
            handleDelete(productId);
          }}
        >
          Delete
        </button>
      </div>
    );
  };
  const currentList = (productId) => {
    const newList = productsToDisplay.filter(
      (products) => products.id !== productId
    );
    setProductsToDisplay(newList);
  };

  return (
    <section className="ProductList">
      <AddProduct setProducts={setProducts} />
      {products.map((productObj) => {
        return (
          <div className="card" key={productObj.id}>
            {productObj.rating > 5 && <h3>Hot Picks</h3>}
            <img src={productObj.images} />
            <h4>{productObj.title}</h4>
            <p>Product Price: {productObj.price}</p>
            <Counter productId={productObj.id} />
          </div>
        );
      })}
    </section>
  );
}

export default ProductList;
