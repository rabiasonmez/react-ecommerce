import Home from "../containers/Home";
import About from "../containers/About";
import Products from "../containers/product/Products";
import Contact from "../containers/Contact";
import NotFound from "../containers/base/NotFound"
import ProductDetail from "../containers/product/ProductDetail";
import Search from "../containers/Search";

export const links = [
    { link: "/", title: "Home", component: Home, isExact: true, isLink: true },
    { link: "/search", title: "Search", component: Search, isExact: false, isLink: false },
    { link: "/about-us", title: "About Us", component: About, isExact: false, isLink: true },
    { link: "/products", title: "Products", component: Products, isExact: true, isLink: true },
    { link: "/products/:productID", title: "Products", component: ProductDetail, isExact: false, isLink: false },
    { link: "/contact", title: "Contact Us", component: Contact, isExact: false, isLink: true },
    { link: "/404", title: "404", component: NotFound, isExact: false, isLink: false }
    
]