'use client';

import { Playfair_Display } from "next/font/google";

const playfair = Playfair_Display({ subsets: ["latin"] });

export function BookingSection() {
  return (
    <section className="py-20 px-4">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className={`${playfair.className} text-4xl md:text-5xl font-bold mb-6 text-[#F5F2D0]`}>
            Schedule a Consultation
          </h2>
          <p className="text-xl text-[#F5F2D0]/80 max-w-2xl mx-auto">
            Book a discussion with our experts to explore how we can help transform your digital presence
          </p>
        </div>
        <div className="max-w-4xl mx-auto">
          <iframe 
            src="https://meetings-eu1.hubspot.com/phillip-miel-media?embed=true&parentHubspotUtk=7956b3183a936cae7ca03897b908f1c0&parentPageUrl=https://miel-media-145532521.hubspotpagebuilder.eu/home1" 
            width="100%" 
            height="715" 
            data-hs-ignore="true" 
            style={{
              minWidth: "312px",
              minHeight: "615px",
              border: "none",
              borderRadius: "8px",
              backgroundColor: "#1A1A1A"
            }}
          />
        </div>
      </div>
    </section>
  );
}