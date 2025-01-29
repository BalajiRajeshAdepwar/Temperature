import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  increase,
  decrease,
  calculateTotal,
  clearCart,
} from "./Tasks/Redux-toolkit/reducerSlice";
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  const dispatch = useDispatch();
  const { cart, total, totalItems } = useSelector((state) => state.cart);

  useEffect(() => {
    dispatch(calculateTotal());
  }, [cart, dispatch]);

  const handleClearCart = () => {
    if (window.confirm("Are you sure you want to reset all item quantities?")) {
      dispatch(clearCart());
    }
  };

  return (
    <div className="App">
      <div className="container mt-5">
        <h3 className="text-center">Shopping Cart</h3>
        <div className="text-end mb-3">
          <strong>Selected Items: {totalItems}</strong>
        </div>
        <div className="row">
          {cart.map((item) => (
            <div key={item.id} className="col-md-3 mb-4">
              <div className="card h-100 text-center">
                <img src={item.img} className="card-img-top" alt={item.title} />
                <div className="card-body">
                  <h5 className="card-title">{item.title}</h5>
                  <p className="card-text">Price: ${Number(item.price).toFixed(2)}</p>
                </div>
                <div className="quantity-control">
                  <button className="btn btn-secondary btn-sm" onClick={() => dispatch(decrease(item.id))}>
                    -
                  </button>
                  <span className="quantity">{item.amount || 0}</span>
                  <button className="btn btn-secondary btn-sm" onClick={() => dispatch(increase(item.id))}>
                    +
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="text-end mt-4">
          <strong>Total: ${total.toFixed(2)}</strong>
        </div>
        <button className="btn btn-warning w-100 mt-3" onClick={handleClearCart}>
          Reset Cart
        </button>
      </div>
    </div>
  );
}

export default App;
