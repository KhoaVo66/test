// import PaginationComponent from "../../script_handle/index_scripts/whishlist_pagechange";
import { useEffect, useState } from "react";
import axios from 'axios';
import { Link } from "react-router-dom";

export default function MonthSalePage() {
    const [products, setProducts] = useState([]);
    // const [currentPage, setCurrentPage] = useState(1);
    const currentPage = 1;
    const [productsPerPage] = useState(12);

    useEffect(() => {
        axios.get('https://web-shopping.onrender.com/products')
            .then(response => setProducts(response.data))
            .catch(err => console.log(err))
    }, []);

    const indexOfLastProduct = currentPage * productsPerPage;
    const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
    const currentProducts = products.slice(indexOfFirstProduct, indexOfLastProduct);
    return (
        <div className="container">
            <div className="wrapper" style={{ display: "flex" }}>
                <div className="wishlist-nav">
                    <div className="contact-title">
                        <div className="contact-fix">
                            <Link href="/home">Home</Link>
                            &nbsp;/&nbsp;
                            <p>Month sale</p>
                        </div>
                    </div>
                    <div className="wishlist-wrap">
                        <div className="wishlist-list">
                            {currentProducts
                                .filter(product => product.sale_type === "month")
                                .map(product => (
                                    <div className="product-item" key={product._id}>
                                        <Link to={`/detail/${product._id}`}>
                                            <div className="product-item__img">
                                                <img src={product.product_image} alt="product-img" />
                                                <button className="add-cart" type="button">
                                                    Add To Cart
                                                </button>
                                            </div>
                                            <h4 className="product-name webkit-text">{product.product_name}</h4>
                                        </Link>
                                        <div className="product-price">
                                            <span id="price-new">${product.price - product.price * product.sales / 100}</span>
                                            <span id="price-old">${product.price}</span>
                                        </div>
                                        <div className="product-action">
                                            <i className="bx bx-map-pin" />
                                            <span>{product.storage_address}</span>
                                        </div>
                                        <div className="discount">-{product.sales}%</div>
                                        <div className="product-tools">
                                            <button className="product-tl__button" type="button">
                                                <i className="bx bx-heart" />
                                            </button>
                                            <button
                                                className="product-tl__button product-button__eye"
                                                type="button"
                                            >
                                                <Link to={`/detail/${product._id}`} style={{ color: "black" }}><i className="bi bi-eye"></i></Link>
                                            </button>
                                        </div>
                                    </div>
                                ))}
                        </div>
                        {/* pagination - phân trang */}
                        {/* <PaginationComponent /> */}
                    </div>
                </div>
            </div>
        </div>
    );
}
