import React from 'react';
import "./AboutUsSection.scss";
import { Link } from 'react-router-dom';

const AboutUsSection = () => {
  return (
    <section className="section" id="section_1293148565">
      <div className="bg section-bg fill bg-fill">
        <div className="section-bg-overlay absolute fill" style={{ backgroundColor: 'rgba(255, 255, 255, 0.85)' }}></div>
        <div className="is-border" style={{ borderWidth: '1px 0px 1px 0px' }}></div>
      </div>

      <div className="section-content relative">
        <div className="row row-large align-middle" id="row-1568837545">
          <div className="col small-12 large-12">
            <div className="col-inner text-left">
              <span className="scroll-to" data-label="Scroll to: /home#about-us" data-bullet="true" data-link="/home#about-us" data-title="About Us">
                <Link name="about-us"></Link>
              </span>
              <h2 className="uppercase">Who we are?</h2>
              <p>
                <span lang="en-US">
                  Offist Telecom is a leading telecommunication solution provider, headquartered in London UK. It has currently point of presence, operations and network infrastructure installed
                  in USA, Europe and the Middle East, integrating SMS and Voice services and offering the best quality and rate, targeting International Voice & SMS Industry.
                </span>
              </p>
              <p>
                <span lang="en-US">
                  Providing the best in value, technology, and service to its customers, Offist Telecom delivers the same robust telephone system, services and features at a very affordable
                  price. Backed by its dynamic team of young engineers and marketers, Offist Telecom has quickly established itself as one of the leading Voice service providers. Today Offist
                  Telecom is one of the largest global Voice over IP wholesale carrier supporting origination and termination services to different telecommunication carriers. Our
                  interconnections with more than 160 carriers, serve customers in many countries across United Kingdom, North America, Europe, Middle East, Africa, Asia and South America all
                  of which enable us to measure and guarantee the quality of service delivered to our customers and virtual carriers at any point in time.
                </span>
              </p>
              <p>
                <span lang="en-US">
                  Compliance with market standards is an integral part of the solutions developed and offered by Offist Telecom, which in turn guarantees fast, reliable, and high-quality
                  services. Offist Telecom is committed to assisting customers worldwide with their unique needs by providing them with comprehensive, value-added solutions and professional,
                  personal service and at the same time keep the technological ethics and innovative services as our principal theme.
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUsSection;
