import React from 'react'

const Contact = (props) => {
  return (

    <section class="contact_page pt-120 pb-120">
      <div class="container">
        <div class="contact_map">
          <div class="gmap_canvas">
            <iframe id="gmap_canvas" src="https://maps.google.com/maps?q=Mission%20District%2C%20San%20Francisco%2C%20CA%2C%20USA&t=&z=13&ie=UTF8&iwloc=&output=embed" frameborder="0" scrolling="no" marginheight="0" marginwidth="0"></iframe>
          </div>
        </div>
        <div class="row">
          <div class="col-lg-8">
            <div class="contact_form mt-30">
              <div class="contact_title">
                <h5 class="title">Send Message Us </h5>
              </div>
              <form id="contact-form" action="assets/contact.php" method="post">
                <div class="contact_form_wrapper">
                  <div class="row">
                    <div class="col-md-6">
                      <div class="single_form">
                        <input type="text" name="name" placeholder="Name" />
                        <i class="fas fa-user"></i>
                      </div>
                    </div>
                    <div class="col-md-6">
                      <div class="single_form">
                        <input type="email" name="email" placeholder="Email" />
                        <i class="fas fa-envelope"></i>
                      </div>
                    </div>
                    <div class="col-md-12">
                      <div class="single_form">
                        <input type="text" name="subject" placeholder="Subject" />
                        <i class="far fa-i-cursor"></i>
                      </div>
                    </div>
                    <div class="col-md-12">
                      <div class="single_form">
                        <textarea name="message" placeholder="Message"></textarea>
                        <i class="fas fa-edit"></i>
                      </div>
                    </div>
                    <p class="form-message"></p>
                    <div class="col-md-12">
                      <div class="single_form">
                        <button class="main-btn">Sand Message</button>
                      </div>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
          <div class="col-lg-4">
            <div class="contact_info">
              <div class="contact_title mt-30">
                <h5 class="title">Get In Touch</h5>
              </div>
              <p>Lorem Ipsum Is simply dummy text of the printing and typesetting Industry. Lorem Ipsum has been the Industry's</p>

              <div class="single_info d-flex">
                <div class="info_icon">
                  <i class="far fa-map"></i>
                </div>
                <div class="info_content media-body">
                  <p>Level 13, 2 Ellzabeth St, Lorem Ipsum Is simply dummy text</p>
                </div>
              </div>
              <div class="single_info d-flex">
                <div class="info_icon">
                  <i class="fas fa-phone"></i>
                </div>
                <div class="info_content media-body">
                  <p>+88 0123456789</p>
                  <p>+88 0123456789</p>
                </div>
              </div>
              <div class="single_info d-flex">
                <div class="info_icon">
                  <i class="fas fa-envelope-open-text"></i>
                </div>
                <div class="info_content media-body">
                  <p>info@classified.com</p>
                  <p>info.classified@gmail..com</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

  );
}
export default Contact;