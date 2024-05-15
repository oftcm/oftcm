import React from 'react';
import "./SMSServicesSection.scss";

const SMSServicesSection = () => {
  return (
    <section className="section" id="section_642716362">
      <div className="bg section-bg fill bg-fill bg-loaded">
        <div className="section-bg-overlay absolute fill" style={{ backgroundColor: 'rgba(255, 255, 255, 0.85)' }}></div>
      </div>

      <div className="section-content relative">
        <div className="row row-large align-middle" id="row-1749101620">
          <div className="col medium-7 small-12 large-7">
            <div className="col-inner text-left">
              <h2 className="uppercase">SMS Services</h2>
              <p>
                <span lang="en-US">
                  SMS is the most effective, non-intrusive and cost-effective way to communicate with customers. With the Offist Telecom SMS Service, you
                  can reach your customers instantaneously, dramatically increasing engagement with them wherever they are, whenever you need.
                </span>
              </p>
              <p>
                <span lang="en-US">
                  Our smart messaging platform is designed to deliver the results that organizations are seeking from their mobile messaging activities. Our
                  text messaging service for business ensures that your business is sending exactly the right messages in the perfect context and at the most
                  opportune time. It ensures that they are sending exactly the right messages in the perfect context and at the most opportune time.
                </span>
              </p>
            </div>
          </div>
          <div className="col medium-5 small-12 large-5">
            <div className="col-inner">
              <div className="img has-hover x md-x lg-x y md-y lg-y" id="image_1138748791">
                <div className="img-inner box-shadow-2 dark">
                  <img
                    width="340"
                    height="158"
                    src="https://offisttelecom.com/wp-content/uploads/2023/04/Service-03.png"
                    className="attachment-large size-large"
                    alt=""
                    decoding="async"
                    loading="lazy"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SMSServicesSection;
