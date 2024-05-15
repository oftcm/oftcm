import AboutUsSection from "../../components/AboutUsSection/AboutUsSection";
import Banner from "../../components/Banner/Banner";
import ContactSection from "../../components/ContactSection/ContactSection";
import DIDServicesSection from "../../components/DIDServicesSection/DIDServicesSection";
import SMSServicesSection from "../../components/SMSServicesSection/SMSServicesSection";
import ServiceSection from "../../components/ServiceSection/ServiceSection";
import WhatWeDoSection from "../../components/WhatWeDoSection/WhatWeDoSection";
import WholesaleVoiceSection from "../../components/WholesaleVoiceSection/WholesaleVoiceSection";

export const MainPage = () => {
  return (
    <main id="main">
        <div id="content" role="main" className="content-area">
          <Banner />

          <ServiceSection />

          <AboutUsSection />

          <WhatWeDoSection />

          <WholesaleVoiceSection />

          <DIDServicesSection />

          <SMSServicesSection />

          <ContactSection />
        </div>
      </main>
  )
};
