import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";
import ProductCard from "./productcard";
import Navbar from "./navbar";
import CartList from "./cartlist";



function App() {
  const [products, setProduct] = useState([
    {
      id: 1,
      title: "Product 1",
      description: "example",
      price: 50,
    },
    {
      id: 2,
      title: "Product 2",
      description: "example",
      price: 80,
    },
    {
      id: 3,
      title: "Product 3",
      description: "example",
      price: 100,
    },
  ]);

  const [cartItems, setCartItem] = useState([]);
  const [total, setTotal] = useState(0);

  let addToCart = (id, quantity) => {
    let product = products.find((obj) => obj.id == id);
    product.qty = quantity;
    setCartItem([...cartItems, product]);
    setTotal(total+product.price);
  }

  let removeItem = (id) => {
    let result = window.confirm("Are you sure do you want to remove?");
    if (result) {
      let cartIndex = cartItems.findIndex((obj) => obj.id == id);
      setTotal(total - cartItems[cartIndex].price);
      cartItems.splice(cartIndex, 1);
      setCartItem([...cartItems]);
    }
  };
  
  const [qty,setQty] = useState(0);

  let increaseQty = (id) => {

    let curEl = products.find((obj) => obj.id==id );
    
    let incqty = setQty(qty+1);
    setTotal(total+curEl.price);
    // console.log(total);
    console.log(qty);
  };

  let decreaseQty = (id) => {
    let currentEle = products.find( (obj)=> obj.id==id);
   
    setQty(qty-1);
    // setTotal(total-(parseInt(qty)*currentEle.price));
  
  };

  return (
    <>
      <Navbar></Navbar>
      <div className="container-fluid" style={{ marginTop: "70px" }}>
        <div className="row">
          <div className="col-lg-9">
            <div className="row">
              {products.map((product) => {
                return <ProductCard data={product} handleCart={addToCart} />;
              })}
            </div>
          </div>
          <div className="col-lg-3">
            <ol class="list-group list-group-numbered">
              {CartList.length == 0 ? <h3>No items in cart</h3> : null}
              {cartItems.map((item) => {
                return <CartList handleRemove={removeItem} data={item} increQty={increaseQty} decreQty={decreaseQty} />;
              })}
              <h1>Total - Rs {total}</h1>
            </ol>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
