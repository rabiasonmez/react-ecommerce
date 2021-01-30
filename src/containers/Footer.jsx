import React from 'react';
import { Link } from 'react-router-dom';

const Footer = (props) => {
    return (
        <>
            <footer class="footer_area">
                <div class="footer_widget pt-70 pb-120">
                    <div class="container">
                        <div class="row">
                            <div class="col-lg-3 col-sm-6">
                                <div class="footer_link mt-45">
                                    <h5 class="footer_title">Company</h5>
                                    <ul class="link">
                                        <li><a href="#">Home</a></li>
                                        <li><a href="#">About Us</a></li>
                                        <li><a href="#">Our Factories</a></li>
                                        <li><a href="#">Mission and Strategy</a></li>
                                        <li><a href="#">Profitable Actions</a></li>
                                    </ul>
                                </div>
                            </div>
                            <div class="col-lg-3 col-sm-6">
                                <div class="footer_link mt-45">
                                    <h5 class="footer_title">How to Sell Fast</h5>
                                    <ul class="link">
                                        <li><a href="#">Selling TIps</a></li>
                                        <li><a href="#">Buy and Sell Quickly</a></li>
                                        <li><a href="#">Membership</a></li>
                                        <li><a href="#">Banner Advertising</a></li>
                                        <li><a href="#">Promote Your Ad</a></li>
                                    </ul>
                                </div>
                            </div>
                            <div class="col-lg-3 col-sm-6">
                                <div class="footer_link mt-45">
                                    <h5 class="footer_title">Information</h5>
                                    <ul class="link">
                                        <li><a href="#">Company & Contact Info</a></li>
                                        <li><a href="#">Blog & Articles</a></li>
                                        <li><a href="#">Sitemap</a></li>
                                        <li><a href="#">Terms of Service</a></li>
                                        <li><a href="#">Privacy Policy</a></li>
                                    </ul>
                                </div>
                            </div>
                            <div class="col-lg-3 col-sm-6">
                                <div class="footer_link mt-45">
                                    <h5 class="footer_title">Help & Support</h5>
                                    <ul class="link">
                                        <li><a href="#">Live Chat</a></li>
                                        <li><a href="#">FAQ</a></li>
                                        <li><a href="#">How to Stay Safe</a></li>
                                        <li><a href="#">Terms & Conditions</a></li>
                                        <li><a href="#">Contact Us</a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="footer_copyright pt-15 pb-30">
                    <div class="container">
                        <div class="footer_copyright_wrapper text-center d-sm-flex justify-content-between align-items-center">
                            <div class="copyright mt-15">
                                <p>Designed and Developed by <a href="" rel="nofollow"></a></p>
                            </div>
                            <div class="payment mt-15">
                                <ul>
                                    <li><a href="#"><img src="http://firmadukkani.com/odev/project-2/images/icon/payment-method1.jpg" alt="payment" /></a></li>
                                    <li><a href="#"><img src="http://firmadukkani.com/odev/project-2/images/icon/payment-method2.jpg" alt="payment" /></a></li>
                                    <li><a href="#"><img src="http://firmadukkani.com/odev/project-2/images/icon/payment-method3.jpg" alt="payment" /></a></li>
                                    <li><a href="#"><img src="http://firmadukkani.com/odev/project-2/images/icon/payment-method4.jpg" alt="payment" /></a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>

            <a href="#" class="back-to-top"><i class="fa fa-angle-up"></i></a>
        </>
    );
}

export default Footer;