import React, { useRef, useEffect, useState } from 'react'
import { useLocation, useHistory } from "react-router-dom";
import ProductCard from "./product/ProductCard";
import products from "../data/products.json";

const Search = (props) => {
    const location = useLocation();
    const history = useHistory();

    const params = new URLSearchParams(location.search);
    const q = params.get("q");
    console.log("params : ", q);
    //const [inputValue, steInputValue] = useState(q ? q : "");
    const inputValue = useRef();
    const [searchResult, setSearchResult] = useState([]);

    useEffect(() => {
        if (q) {
            inputValue.current.value = q;
            const searchedProducts = products.results.filter(
                item => item.title.toLowerCase().includes(q.toLowerCase())
            ).map((item) => (
                <div className={"mb-3 col-sm-3"} key={item.id}>
                    <ProductCard id={item.id} title={item.title} detail={item.detail} isActive={item.isActive} />
                </div>
            ))
            setSearchResult(searchedProducts);
        }
    }, [q])

    const handleForm = (event) => {
        event.preventDefault();
        history.push(`/search?q=${inputValue.current.value}`);
    }

    return (
        <div className="container">
            <div className="row">
                <div className="header_search col-sm-12">
                    <form className="row" onSubmit={handleForm}>
                        <div className="search_form mt-15 col-sm-10">
                            <input name="q"
                                type="text"
                                className="form-control"
                                id="search"
                                ref={inputValue}
                                placeholder="Type Your Keyword" />
                        </div>
                        <div className="search_btn mt-15 col-sm-2">
                            <button type="submit" onClick={handleForm} className="main-btn">Search</button>
                        </div>
                    </form>
                    <div className="header_keyword d-sm-flex">
                        <span className="title">Trending Keywords:</span>
                        <ul className="tags media-body">
                            <li><a href="#">Camera</a></li>
                            <li><a href="#">Mobile</a></li>
                            <li><a href="#">DSLR</a></li>
                            <li><a href="#">Packet</a></li>
                            <li><a href="#">Dress</a></li>
                            <li><a href="#">Shirt</a></li>
                            <li><a href="#">Pant</a></li>
                            <li><a href="#">Shoe</a></li>
                            <li><a href="#">Table</a></li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="row">
                {searchResult}
            </div>
        </div>
    );
}
export default Search;