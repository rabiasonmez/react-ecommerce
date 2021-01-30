import React from 'react';
import products from "../../data/products.json";
import { useParams, Link } from "react-router-dom";

const ProductDetail = (props) => {
    const params = useParams();
    const { id, title, detail } = products.results.filter(item => item.id === parseInt(params.productID))[0];
    return (
        <div className={"container"}>
            <nav aria-label="breadcrumb" className="bg-light border-1 rounded p-3 my-2">
                <ol class="breadcrumb mb-0">
                    <li class="breadcrumb-item">
                        <Link to="/">Home</Link></li>
                    <li class="breadcrumb-item"> <Link to="/products">
                        Products  </Link></li>
                    <li class="breadcrumb-item active"> {title}</li>
                </ol>
            </nav>
            <div class="card" key={id}>
                <img variant="top" src={`https://picsum.photos/id/${id}/400/200`} />
                <div className="card-body">
                    <div className="card-title">{title}</div>
                    <div>
                        {detail}
                    </div>
                </div>
            </div>
        </div>
    );
}
export default ProductDetail;