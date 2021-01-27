import React from 'react'

const About = (props) => {
    return (
        <section className="about_area pt-70 pb-120">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-lg-4">
                        <div className="about_image bg_cover mt-50"></div>
                    </div>
                    <div className="col-lg-8">
                        <div className="about_content mt-40">
                            <h3 className="title">We Can Changes Your <span>Business.</span></h3>
                            <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor
                            invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.
                            At vero eos et accusam. et justo duo dolores et ea rebum. Stet clita kasd gubergren,
                                no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. <br /><br />
                                nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.
                                At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata. </p>
                            <div className="signechar">
                                <h6 className="name">John Smith Doe</h6>
                                <img src="http://firmadukkani.com/odev/project-2/images/signechar.png" alt="signechar" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

    );
}
export default About;