import { Link } from "react-router-dom";

export default function Cart() {
    return (
        <div className="container">
            <div className="wrapper">
                <div className="wishlist-nav">
                    <div className="contact-title">
                        <div className="contact-fix">
                            <Link to="/home">Home</Link>
                            &nbsp;/&nbsp;
                            <p>Cart</p>
                        </div>
                    </div>
                    <div className="cart-wrap">
                        <table>
                            <thead>
                                <tr>
                                    <th>Product picture</th>
                                    <th>Name product</th>
                                    <th>Price</th>
                                    <th>Quantity</th>
                                    <th>Subtotal</th>
                                    <th>Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td className="cart-img">
                                        <img src="./assets/images/product-1a.png" alt="img" />
                                    </td>
                                    <td className="cart-text webkit-text">HAVIT HV-G92 Gamepad</td>
                                    <td className="cart-text">$160</td>
                                    <td className="cart-adjust">
                                        <input type="number" min={1} defaultValue={1} />
                                    </td>
                                    <td className="cart-text">$160</td>
                                    <td>
                                        <Link to="#">
                                            <button>
                                                <i className="bi bi-trash3" />
                                            </button>
                                        </Link>
                                    </td>
                                </tr>
                                <tr>
                                    <td className="cart-img">
                                        <img src="./assets/images/product-1a.png" alt="img" />
                                    </td>
                                    <td className="cart-text webkit-text">HAVIT HV-G92 Gamepad</td>
                                    <td className="cart-text">$160</td>
                                    <td className="cart-adjust">
                                        <input type="number" min={1} defaultValue={1} />
                                    </td>
                                    <td className="cart-text">$160</td>
                                    <td>
                                        <Link to="#">
                                            <button>
                                                <i className="bi bi-trash3" />
                                            </button>
                                        </Link>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                        <div className="cart-synthetic">
                            <h4>
                                Total number of products: <span>2</span> product
                            </h4>
                            <button className="remove-all" type="button">
                                Remove all
                            </button>
                        </div>
                        <div className="cart-pay">
                            <div className="cart-pay__body">
                                <div className="cart-poin">
                                    <p>Total cost of goods:</p> <span>$240</span>
                                </div>
                                <div className="cart-poin">
                                    <p>Transport fee:</p> <span>$4</span>
                                </div>
                                <div className="cart-poin">
                                    <p>Discount code (if any):</p> <span>$0</span>
                                </div>
                                <div className="cart-poin">
                                    <p>Total payment:</p> <span>$244</span>
                                </div>
                            </div>
                            <div className="cart-footer">
                                <p>
                                Pressing 'Place Order' implies that you agree to comply with {" "}
                                    <Link>Exclusive's Terms and Conditions.</Link>
                                </p>
                                <Link to="/checkout">
                                    <button className="order-cart" type="button">
                                        Proceed to payment
                                    </button>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}