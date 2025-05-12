import React from 'react';

export function Partners() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">
          Our Trusted Partners
        </h2>
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          <div className="p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <img className="h-16 mx-auto" src="partnerLogos/aws.svg" alt="AWS" />
            </div>
            <div className="p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <img className="h-16 mx-auto" src="partnerLogos/Microsoft_Azure.svg" alt="Microsoft Azure" />
            </div>
            <div className="p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <img className="h-16 mx-auto" src="partnerLogos/commercetools-logo.svg" alt="Commercetools" />
            </div>
            <div className="p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <img className="h-16 mx-auto" src="partnerLogos/shopify.svg" alt="Shopify" />
            </div>
            <div className="p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <img className="h-16 mx-auto" src="partnerLogos/sap-hybris-logo.png" alt="SAP Hybris" />
            </div>
            <div className="p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <img className="h-16 mx-auto" src="partnerLogos/klaviyo.svg" alt="Klaviyo" />
            </div>
            <div className="p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <img className="h-16 mx-auto" src="partnerLogos/sendgrid.svg" alt="Sendgrid" />
            </div>
            <div className="p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <img className="h-16 mx-auto" src="partnerLogos/emarsys-logo.png" alt="Emarsys" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 