import './contactStyle.css';
import React from 'react';

// ... (import dan kode lainnya)

const Contact = () => {
    return (
      <section className="contact_section" id="idContact">
        <h2 className="section-title">Contact</h2>
  
        <div className="contact_container bd-grid">
          <div className="contact_combined"> {/* Kontainer baru untuk contact_info dan contact_form */}
            <div className="contact_info">
              <h3 className="contact_subtitle">Name</h3>
              <span className="contact_text">Raka Ibnu Firdaus</span>
  
              <h3 className="contact_subtitle">EMAIL</h3>
              <span className="contact_text">rakaibnu38@gmail.com</span>
  
              <h3 className="contact_subtitle">PHONE</h3>
              <span className="contact_text">+62 877 4786 7296</span>
            </div>
  
            <form action="" className="contact_form">
              <div className="contact_inputs">
                <input type="text" id="name" placeholder="Name" className="contact_input" />
                <input type="email" id="email" placeholder="Email" className="contact_input" />
              </div>
  
              <textarea
                type="pesan"
                id="pesan"
                cols="0"
                rows="5"
                className="contact_input"
                placeholder="Enter message here..."
              ></textarea>
  
              <input
                type="submit"
                value="Sent"
                className="contact_button"
                onClick={() => alert('Message Has Been Sent!')}
              />
            </form>
          </div>
        </div>
      </section>
    );
  };
  
  export default Contact;
  