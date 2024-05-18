import React, { useEffect, useState } from 'react';
import "./Banner.scss";
import styled from 'styled-components';

const BannerWrapper = styled.div`
  height: auto;

  @media (max-width: 767px) {
    height: 620px !important;
  }

  .banner-inner {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100%;
  }

  .text-box {
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;

const Banner = () => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const getStyles = () => {
    if (windowWidth < 600) {
      return {
        maxWidth: "300px",
        heigth: "600px !important",
      };
    }
  };

  return (
    <div className="banner slider-wrapper relative" id="slider-1851130405">
        <BannerWrapper className="banner has-hover" id="banner-154701534">
          <div className="banner-inner fill">
            <div className="banner-bg fill">
              <div className="bg fill bg-fill"></div>
            </div>
            <div className="banner-layers container">
              <div className="fill banner-link"></div>
              <div
                id="text-box-1138880014"
                className="text-box banner-layer md-x5 lg-x5 y10 md-y50 lg-y50 res-text"
                style={getStyles()}
              >
                <div className="text box-shadow-1">
                  <div className="text-inner text-left">
                    <h6>Offist Telecom</h6>
                    <h3 className="uppercase">
                      <strong>Worldwide connectivity with a local power</strong>
                    </h3>
                    <p style={{ fontSize: "17px" }}>
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
        </BannerWrapper>
    </div>
  );
};

export default Banner;
