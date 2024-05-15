import React from 'react';

const ContactSection = () => {
  return (
    <div className="message-box relative dark" style={{ paddingTop: '36px', paddingBottom: '36px' }}>
      <div className="message-box-bg-image bg-fill fill"></div>
      <div className="message-box-bg-overlay bg-fill fill" style={{ backgroundColor: 'rgb(56, 130, 25)' }}></div>
      <div className="container relative">
        <div className="inner last-reset">
          <div className="row align-middle" id="row-607674444">
            <div className="col small-12 large-12">
              <div className="col-inner">
                <span className="scroll-to" data-label="Scroll to: #contact" data-bullet="true" data-link="#contact" data-title="Contact">
                  <a name="contact"></a>
                </span>
                <div className="row" id="row-908334399">
                  <div className="col medium-6 small-12 large-6">
                    <div className="col-inner">
                      <p style={{ textAlign: 'center' }}>
                        <span style={{ fontSize: '120%' }}>
                          <strong>OFFIST TELECOMMUNICATIONS SERVICES LTD</strong>
                        </span>
                      </p>
                      <p style={{ textAlign: 'center' }}>DEMSA ACCOUNTS 278 LANGHAM ROAD</p>
                      <p style={{ textAlign: 'center' }}>
                        <strong>LONDON</strong>
                      </p>
                      <p style={{ textAlign: 'center' }}>ENGLAND N15 3NP</p>
                      <p style={{ textAlign: 'center' }}>
                        <strong style={{ marginRight: "5px" }}>Phone:</strong>
                        <a href="tel:+447418355132">+44 (7) 418355132</a>
                      </p>
                      <p style={{ textAlign: 'center' }}>
                        <strong style={{ marginRight: "5px" }}>Email:</strong>
                        <a href="mailto:info@offist.online">info@offist.online</a>
                      </p>
                      <p style={{ textAlign: 'center' }}>
                        <strong>BUSINESS HOURS</strong>
                      </p>
                      <p style={{ textAlign: 'center' }}>Monday – Friday : 9am to 6pm</p>
                      <p style={{ textAlign: 'center' }}>Saturday/Sunday: Off</p>
                    </div>
                  </div>
                  <div className="col medium-6 small-12 large-6">
                    <div className="col-inner">
                      <p>
                        <iframe
                          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2478.774189867082!2d-0.10533442421754345!3d51.59070180461558!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4876195eb2a88003%3A0x7cec490a6b3b7468!2sDemsa%20Accounts!5e0!3m2!1str!2str!4v1682447974805!5m2!1str!2str"
                          width="100%"
                          height="450"
                          style={{ border: '0' }}
                          allowFullScreen=""
                          loading="lazy"
                          title="Google Map"
                          referrerPolicy="no-referrer-when-downgrade"
                        ></iframe>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactSection;
