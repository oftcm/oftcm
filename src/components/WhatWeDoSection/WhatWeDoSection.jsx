import React, { useState, useEffect } from 'react';
import "./WhatWeDoSection.scss";
import styled from 'styled-components';

const StyledSection = styled.section`
  padding-block: 20px !important;
  padding-inline: 10px !important;
  padding-bottom: -20px !important;
  margin-bottom: 30px !important;

    background-color: rgb(247 247 247) !important;
`;

const WhatWeDoSection = () => {
  const [isLoading, setIsLoading] = useState(true);

  const stopLoader = () => {
    setIsLoading(false);
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      stopLoader();
    }, 500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <StyledSection id="section_1375173675">
    <div className="bg section-bg fill bg-fill bg-loaded">
      {isLoading && <div className="loading-spin dark large centered"></div>}
      <div className="absolute fill"></div>
      <div className="is-border"></div>
    </div>

    <div className="section-content relative">
      <div className="row row-large align-middle" id="row-1387699587">
        <div className="col small-12 large-12">
          <div className="col-inner text-left">
            <span className="scroll-to" data-label="Scroll to: #products" data-bullet="true" data-link="#products" data-title="Products">
              <a name="products"></a>
            </span>
            <h2 className="uppercase">What we do?</h2>
            <p>
              <span lang="en-US">
                We specialize in Wholesale Voice, SMS marketing, DID Services and more to our clients; and define our services by high quality and competitive pricing. Our wholesale voice
                offers premium CLI traffic terminated via TDM and dedicated IP connections directly to end networks and is not rerouted through other carriers thus providing highest quality
                at competitive rates.
              </span>
            </p>
            <p style={{ padding: "0px", margin: "0px" }}>
              <span lang="en-US">
                Having direct national interconnections through an established POP in every country, Offist Telecom ensures full stability and flawless connectivity for all of your traffic.
              </span>
            </p>
          </div>
        </div>
      </div>
    </div>
  </StyledSection>
  );
};

export default WhatWeDoSection;
