import React from 'react';
import ProductCard from "./ProductCard";
import products from "../../data/products.json";
import Search from "../Search";

const Products = (props) => {
    const productItems = products.results.filter(item => item.isActive).map((item) => (
        <div class="col-lg-3 col-sm-6" key={item.id}>
            <ProductCard id={item.id} title={item.title} detail={item.detail} isActive={item.isActive} />
        </div>
    ))
    return (
        <>
            <div className="container">

                <div className="row">
                    <Search />
                    <hr /></div>

                <div className="row">
                    {productItems}</div>
            </div>
        </>
    );
}
export default Products;