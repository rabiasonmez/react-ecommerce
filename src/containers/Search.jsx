import React, { useRef, useEffect, useState } from 'react'
import { useLocation, useHistory } from "react-router-dom";
import ProductCard from "./product/ProductCard";
import products from "../data/products.json";

const Search = (props) => {
    const location = useLocation();
    const history = useHistory();

    const params = new URLSearchParams(location.search);
    const q = params.get("q");

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
        <>
            <form className="my-3" onSubmit={handleForm}>
                <div className="form-group">
                    <label htmlFor="search">Product Search</label>
                    <div className=" row">
                        <div className="col-sm-9">
                            <input
                                name="q"
                                type="text"
                                className="form-control"
                                id="search"
                                ref={inputValue}
                                placeholder="Enter search keyword" />
                        </div>
                        <button type="submit" onClick={handleForm} className="btn btn-primary col-md-3">Search</button>
                    </div></div>
            </form>
            <div className="row">
                {searchResult}
            </div>
        </>
    );
}
export default Search;