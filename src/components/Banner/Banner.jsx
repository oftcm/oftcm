import React from 'react';
import "./Banner.scss";

const Banner = () => {
  return (
    <div className="slider-wrapper relative" id="slider-1851130405">
      <div
        className="slider slider-nav-circle slider-nav-large slider-nav-light slider-style-normal"
        data-flickity-options='{
            "cellAlign": "center",
            "imagesLoaded": true,
            "lazyLoad": 1,
            "freeScroll": false,
            "wrapAround": true,
            "autoPlay": false,
            "pauseAutoPlayOnHover": false,
            "prevNextButtons": true,
            "contain": true,
            "adaptiveHeight": true,
            "dragThreshold": 10,
            "percentPosition": true,
            "pageDots": false,
            "rightToLeft": false,
            "draggable": true,
            "selectedAttraction": 0.1,
            "parallax": 0,
            "friction": 0.6
          }'
      >
        <div className="banner has-hover" id="banner-154701534">
          <div className="banner-inner fill">
            <div className="banner-bg fill">
              <div className="bg fill bg-fill"></div>
            </div>
            <div className="banner-layers container">
              <div className="fill banner-link"></div>
              <div
                id="text-box-1138880014"
                className="text-box banner-layer x50 md-x5 lg-x5 y10 md-y50 lg-y50 res-text"
              >
                <div className="text box-shadow-1">
                  <div className="text-inner text-left">
                    <h6>Offist Telecom</h6>
                    <h3 className="uppercase">
                      <strong>Worldwide connectivity with a local power</strong>
                    </h3>
                    <p>
                      Increase your competitiveness by taking advantage of our local direct routes
                      and global reach.<br />
                      Get highest quality of service at competitive pricing.<br />
                      Direct lines to all GSM operators around the world.<br />
                      DID, SMS, International Roaming Services and more
                    </p>
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

export default Banner;
