import React, { useState } from "react";
import "./AddProduct.css";

function AddProduct({ setProducts }) {
  const [title, setTitle] = useState("");
  const [price, setPrice] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();

    // Create a new product object
    const newProduct = { title, price };

    // Add the new product to the products state
    setProducts((prevProducts) => [newProduct, ...prevProducts]);

    // Clear the form
    setTitle("");
    setPrice("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Title:
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />
      </label>
      <label>
        Price:
        <input
          type="number"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
          required
        />
      </label>
      <input type="submit" value="Add Product" />
    </form>
  );
}

export default AddProduct;
