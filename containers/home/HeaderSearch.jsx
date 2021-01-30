import React from 'react';
import Search from "../Search"

const HeaderSearch = (props) => {
    return (
        <div className="header_content bg_cover">
            <div className="container">
                <div className="row">
                    <div className="col-lg-10">
                        <div className="content_wrapper">
                            <h3 className="title">You're Using Free Version of ClassiFied</h3>
                            <p>Please, purchase full version of the template to get all pages, features and permission to use in commercial projects.</p>
                            <ul className="header_btn">
                                <li><a className="main-btn" href="https://rebrand.ly/classified-gg" rel="nofollow">Purchase Now</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
                <Search />
            </div>
        </div>
    );
}
export default HeaderSearch;