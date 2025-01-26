import { useState } from "react";

function PrintProds() {
  const products = [
    { id: 1, title: "alma", number: 6 },
    { id: 2, title: "armud", number: 2 },
    { id: 3, title: "heyva", number: 8 },
    { id: 4, title: "nar ", number: 6 },
    { id: 5, title: "alca", number: 2 }
  ];

  const [productList, setProductList] = useState(products);
  const [shoppingCart, setShoppingCart] = useState([]);
  const [cartVisible, setCartVisible] = useState(false);

  const toggleCartDisplay = () => {
    setCartVisible(prevState => !prevState);
  };

  const removeProductFromList = (productId) => {
    const updatedProducts = productList.filter(product => product.id !== productId);
    setProductList(updatedProducts);
  };

  const addProductToCart = (productId) => {
    const selectedProduct = productList.find(product => product.id === productId);
    if (selectedProduct) {
      setShoppingCart(prevCart => [...prevCart, selectedProduct]);
    }
  };

  const renderCart = () => (
    <div>
      <strong>Your Cart</strong>
      <ul>
        {shoppingCart.length === 0 ? (
          <h4>Your cart is empty!</h4>
        ) : (
          shoppingCart.map(item => (
            <li key={item.id}>
              <strong>{item.title}</strong> <span>{item.storage}GB</span>
            </li>
          ))
        )}
      </ul>
      <hr />
    </div>
  );

  return (
    <div>
      <button onClick={toggleCartDisplay} style={{ width: "200px" }}>
        Cart
      </button>
      {cartVisible && renderCart()}
      <ul>
        {productList.map(product => (
          <li key={product.id}>
            <strong>{product.title}</strong> <span>{product.storage}GB</span>
            <button onClick={() => removeProductFromList(product.id)}>Remove</button>
            <button onClick={() => addProductToCart(product.id)}>Add to Cart</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default PrintProds;
