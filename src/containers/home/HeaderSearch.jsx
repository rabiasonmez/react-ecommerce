import React from 'react';

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
                <div className="header_search">
                    <form action="#" className="row">
                        <div className="search_form mt-15 col-sm-10">
                            <input type="text" placeholder="Type Your Keyword" />
                        </div>
                        <div className="search_btn mt-15 col-sm-2">
                            <button className="main-btn">Search</button>
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
        </div>
    );
}
export default HeaderSearch;