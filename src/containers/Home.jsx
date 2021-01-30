import React from "react";
import HeaderSearch from './home/HeaderSearch';
import Categories from './home/Categories';
import WhyChooseUs from './home/WhyChooseUs';
const Home = (props) => {
    return (
        <>
        <HeaderSearch />        
        <Categories />
        <WhyChooseUs />
        </>
    );
}
export default Home;