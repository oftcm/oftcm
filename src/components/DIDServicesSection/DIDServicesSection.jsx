import React from 'react';
import "./DIDServicesSection.scss";

const DIDServicesSection = () => {
  return (
    <section className="section" id="section_1229553871">
      <div className="bg section-bg fill bg-fill bg-loaded">
        <div className="section-bg-overlay absolute fill" style={{ backgroundColor: 'rgba(255, 255, 255, 0.85)' }}></div>
      </div>

      <div className="section-content relative">
        <div className="row row-large align-middle" id="row-1051316524">
          <div className="col medium-5 small-12 large-5">
            <div className="col-inner">
              <div className="img has-hover x md-x lg-x y md-y lg-y" id='image_543'>
                <div className="img-inner box-shadow-2 dark">
                  <img
                    width="340"
                    height="158"
                    className="attachment-large size-large"
                    alt=""
                    decoding="async"
                    loading="lazy"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="col medium-7 small-12 large-7">
            <div className="col-inner text-left">
              <h2 className="uppercase">DID Services</h2>
              <p>
                <span lang="en-US">
                  A person can reside in any part of the world and will be able to get geographical numbers of another country so that the callers
                  from these countries have to pay for the local calls only each time they call. DID service permits calls incoming to a PBX or other
                  customer premises equipment to reach a specific station line without the assistance of an attendant. The service includes central
                  office switching equipment necessary for in-dialing from the network directly to stations associated with customer premises switching
                  equipment.
                </span>
              </p>
              <p>
                <span lang="en-US">
                  Offist Telecom offers DIDs and International SIP Trunks, combining voice and data over any broadband internet circuit, eliminating
                  the need for traditional phone service. DNS can provide a SIP to TDM gateway to create PRI or PTS line service until a PBX is
                  upgraded to a SIP trunk interface.
                </span>
              </p>
              <p>
                <span lang="en-US">
                  We are focused on meeting the national and international calling needs of businesses, call centers, and global enterprises looking to
                  have a local presence.
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DIDServicesSection;
