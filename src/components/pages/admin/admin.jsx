export default function Admin() {
    return (
        <div className="container" style={{marginBottom:"29px", marginTop:"10px"}}>
            <div className="wrapper" >
                <div style={{width:"100%", textAlign:"center", fontSize:"30px"}}><h4>Hello Admin Name</h4></div>
                <div style={{ margin: 20 }}>
                    <div style={{ display: "flex", justifyContent: "space-between" }}>
                        <div className="col-md-3 admin_card_hover" style={{ width: "23%" }}>
                            <a href="/add_product" style={{ color: "black" }}>
                                <div
                                    style={{
                                        border: "1px solid #ccc",
                                        borderRadius: 8,
                                        padding: 20,
                                        textAlign: "center",
                                        cursor: "pointer"
                                    }}
                                >
                                    <i className="bi bi-plus-square" style={{ color: "#ec407a", fontSize: "3rem", marginBottom: 10 }} />
                                    <h4>Add Product</h4>
                                    --------
                                </div>
                            </a>
                        </div>
                        <div className="col-md-3 admin_card_hover" style={{ width: "23%" }}>
                            <a href="/all_products" style={{ color: "black" }}>
                                <div
                                    style={{
                                        border: "1px solid #ccc",
                                        borderRadius: 8,
                                        padding: 20,
                                        textAlign: "center",
                                        cursor: "pointer"
                                    }}
                                >
                                    <i className="bi bi-box-seam" style={{ color: "#ec407a", fontSize: "3rem", marginBottom: 10 }} />
                                    <h4>All Products</h4>
                                    --------
                                </div>
                            </a>
                        </div>
                        <div className="col-md-3 admin_card_hover" style={{ width: "23%" }}>
                            <a href="/oders_list" style={{ color: "black" }}>
                                <div
                                    style={{
                                        border: "1px solid #ccc",
                                        borderRadius: 8,
                                        padding: 20,
                                        textAlign: "center",
                                        cursor: "pointer"
                                    }}
                                >
                                    <i className="bi bi-list-check" style={{ color: "#ec407a", fontSize: "3rem", marginBottom: 10 }} />
                                    <h4>Oder List</h4>
                                    --------
                                </div>
                            </a>
                        </div>
                        <div className="col-md-3 admin_card_hover" style={{ width: "23%"}}>
                            <a href="/message" style={{ color: "black" }}>
                                <div
                                    style={{
                                        border: "1px solid #ccc",
                                        borderRadius: 8,
                                        padding: 20,
                                        textAlign: "center",
                                        cursor: "pointer"
                                    }}
                                >
                                    <i className="bi bi-chat-dots" style={{ color: "#ec407a", fontSize: "3rem", marginBottom: 10 }} />
                                    <h4>Messages</h4>
                                    --------
                                </div>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div >

    )
}