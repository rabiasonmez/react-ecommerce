import React from 'react';
import { Link } from "react-router-dom";

const ProductCard = (props) => {
    const { id, title, detail } = props;
    return (
       
            <div class="single_ads_card mt-30" key={id}>
                <div class="ads_card_image">
                    <img src={`https://picsum.photos/id/${id}/400/200`} alt="ads" />
                </div>
                <div class="ads_card_content">
                    <div class="meta d-flex justify-content-between">
                        <p>Gadgets</p>
                    </div>
                    <h4 class="title"><Link to={`/products/${id}`} className="btn btn-primary">{title}</Link></h4>
                    <p><i class="far fa-map"></i>{detail}</p>
                    <div class="ads_price_date d-flex justify-content-between">
                        <span class="price">$129.00</span>
                        <span class="date">25 Jan, 2023</span>
                    </div>
                    
                </div>
            </div>
    );
}
export default ProductCard;