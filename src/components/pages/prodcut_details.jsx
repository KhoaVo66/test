import ChangeImage from "../script_handle/index_scripts/product_detail";
import ProductIncrement from "../script_handle/index_scripts/product_increment";
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link, useParams } from 'react-router-dom';


const ProductDetail = () => {
    const { id } = useParams();
    const [products, setProduct] = useState(null);
  
    useEffect(() => {
      // Fetch the product details from the server
      axios.get(`https://web-shopping.onrender.com/products/${id}`)
        .then(response => setProduct(response.data))
        .catch(error => console.error('Error fetching product details:', error));
    }, [id]);
  
    if (!products) {
      return <div>Loading...</div>;
    }
    return (
        <div className="container">
            <div className="wrapper">
                <div className="wishlist-nav">
                    <div className="contact-title">
                        <div className="contact-fix">
                            <Link to="/home">Home</Link>
                            &nbsp;/&nbsp;
                            <p>{products.product_name}</p>
                        </div>
                    </div>
                    <div className="product-wrap">
                        <ChangeImage />
                        <div className="product-content">
                            <h2>{products.product_name}</h2>
                            <nav className="pro-nav-st">
                                <div className="product-ct-star">
                                    <i className="bi bi-star-fill" />
                                    <i className="bi bi-star-fill" />
                                    <i className="bi bi-star-fill" />
                                    <i className="bi bi-star-fill" />
                                    <i className="bi bi-star-fill" />
                                </div>
                                <span>|</span>
                                <p>in stock: {products.stock_number}</p>
                            </nav>
                            <h1>${products.price}</h1>
                            <p>
                               {products.deciption}
                            </p>
                            <hr />
                            <div className="product-nb">
                                <nav>
                                    <ProductIncrement maxIncrement={products.stock_number} />
                                    <Link to="#">
                                        <button className="pro-btn" type="button">
                                            Buy Now
                                        </button>
                                    </Link>
                                </nav>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default ProductDetail