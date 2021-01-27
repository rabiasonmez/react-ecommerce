import React from 'react';
import { Link } from "react-router-dom";

const ProductCard = (props) => {
    const { id, title, detail } = props;
    return (

        <div class="card" key={id}>
            <img variant="top" src={`https://picsum.photos/id/${id}/400/200`} />
            <div className="card-body">
                <div className="card-title">{title}</div>
                <div>
                    {detail}
                </div>
                <div> <Link to={`/products/${id}`} className="btn btn-primary">Detail</Link></div>
            </div>
        </div>
    );
}
export default ProductCard;