import React from "react";
import BannerTwo from "../../common/Banner/BannerTwo";
import "./contact.css";
function Contact() {
  return (
    <section className="contact_main">
      <div className="container">
        <BannerTwo
          title={"Want to know more"}
          desc="Lorem ipsum dolor sit amet consectetur adipisicing elit, Lorem ipsum dolor"
        />
        <div className="contact_section">
          <h2>
            We're a team of makers, thinkers, explorers and theatre singers.
          </h2>
          <form>
            <div className="row">
              <div className="col-md-6">
                <div className="input_fields">
                  <input type="text" placeholder="Full Name" />
                </div>
              </div>
              <div className="col-md-6">
                <div className="input_fields">
                  <input type="text" placeholder="Email Address..." />
                </div>
              </div>
              <div className="col-md-12">
                <div className="input_fields">
                  <textarea placeholder="Message..." />
                </div>
              </div>
              <div className="col-md-12">
                <div className="input_fields button_input_fields">
                  <button>Contact Us</button>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}

export default Contact;
