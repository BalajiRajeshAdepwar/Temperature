import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  increase,
  decrease,
  removeItem,
  calculateTotal,
  clearCart,
} from "./Tasks/Redux-toolkit/reducerSlice";
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  const dispatch = useDispatch();
  const { cart, total, totalItems } = useSelector((state) => state.cart);
  const [showResetModal, setShowResetModal] = useState(false); 

  useEffect(() => {
    dispatch(calculateTotal());
  }, [cart, dispatch]);

  const handleClearCart = () => {
    setShowResetModal(true); 
  };

  const confirmResetCart = () => {
    dispatch(clearCart()); // Clear the cart
    setShowResetModal(false);
  };

  const cancelResetCart = () => {
    setShowResetModal(false); 
  };

  return (
    <div className="App">
      <div className="container mt-5">
        <h3 className="text-center">Shopping Cart</h3>
        <div className="text-end mb-3">
          <strong>
            <i className="bi-cart-fill" style={{ fontSize: '1.5rem', marginRight: '2px' }}></i>
            {totalItems}
          </strong>
        </div>
        <div className="cart-items">
          {cart.map((item) => (
            <div key={item.id} className="cart-item row align-items-center mb-3">
              {/* Left Side: Item Details */}
              <div className="col-md-6 d-flex align-items-center">
                <img src={item.img} alt={item.title} className="item-image me-3" />
                <div>
                  <h5 className="item-title mb-0">{item.title}</h5>
                  <p className="item-price mb-1">Price: ${Number(item.price).toFixed(2)}</p>
                  <button
                    className="btn btn-remove p-0 text-danger"
                    onClick={() => dispatch(removeItem(item.id))}
                  >
                    Remove
                  </button>
                </div>
              </div>
              {/* Right Side: Quantity Controls */}
              <div className="col-md-6 d-flex justify-content-end align-items-center">
                <div className="quantity-control">
                  <button
                    className="btn btn-secondary btn-sm"
                    onClick={() => dispatch(decrease(item.id))}
                  >
                    -
                  </button>
                  <span className="quantity mx-2">{item.amount || 0}</span>
                  <button
                    className="btn btn-secondary btn-sm"
                    onClick={() => dispatch(increase(item.id))}
                  >
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

      {/* Reset Cart Confirmation Modal */}
      <div className={`modal fade ${showResetModal ? 'show' : ''}`} style={{ display: showResetModal ? 'block' : 'none' }} tabIndex="-1">
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">Confirm Reset</h5>
              <button type="button" className="btn-close" onClick={cancelResetCart}></button>
            </div>
            <div className="modal-body">
              Are you sure you want to reset all item quantities?
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-secondary" onClick={cancelResetCart}>
                Cancel
              </button>
              <button type="button" className="btn btn-danger" onClick={confirmResetCart}>
                Confirm
              </button>
            </div>
          </div>
        </div>
      </div>
      {/* Modal Backdrop */}
      {showResetModal && <div className="modal-backdrop fade show"></div>}
    </div>
  );
}

export default App;