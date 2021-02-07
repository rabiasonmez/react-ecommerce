import React from 'react';
import Search from "../Search"

const HeaderSearch = (props) => {
    return (
        <div className="header_content bg_cover">
            <div className="container">
                <div className="row">
                    <div className="col-lg-10">
                        <div className="content_wrapper">
                            <h3 className="title">You're Search Your Product</h3>
                            <p>Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                          
                        </div>
                    </div>
                </div>
                <Search />
            </div>
        </div>
    );
}
export default HeaderSearch;
