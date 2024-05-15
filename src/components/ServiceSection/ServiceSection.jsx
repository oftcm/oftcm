import React from 'react';
import { service } from '../../consts';
import { ServiceColumn } from '../ServiceColumn/ServiceColumn';

const ServiceSection = () => {
  return (
    <section className="section" id="section_1188656434">
      <div className="section-content relative">
        <div className="row row-large align-center row-divided" id="row-1465645699">
          {service.map(ser => (
            <ServiceColumn
              key={ser.id}
              title={ser.title}
              description={ser.description}
            />
          ))}
        </div>
      </div>

      <style>
        {`
          #section_1188656434 {
            padding-top: 30px;
            padding-bottom: 30px;
            background-color: rgb(255, 255, 255);
          }
        `}
      </style>
    </section>
  );
};

export default ServiceSection;
