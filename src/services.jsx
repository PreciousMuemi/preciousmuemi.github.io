// Services.jsx
import React from 'react';

const Services = ({ services }) => {
  return (
    <div className="container mx-auto py-5">
      <section className="intro-section text-center mb-10">
        <div className="big-circle bg-gray-200 rounded-full w-32 h-32 mx-auto flex items-center justify-center mb-4">
          <div className="small-circle bg-gray-400 rounded-full w-16 h-16"></div>
        </div>
        <div className="retext">
          <h1 className="text-2xl font-bold">- Services Offered -</h1>
        </div>
      </section>
      <hr className="mb-10" />

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {services.map((service) => (
          <div key={service.id} className="service-item bg-white p-6 rounded-lg shadow-md">
            <div className="service-icon text-4xl mb-4">
              <i className={service.icon}></i>
            </div>
            <div className="service-content">
              <h3 className="text-xl font-semibold mb-2">{service.name}</h3>
              <p className="text-gray-700 mb-4">{service.description}</p>
              <a
                href="/contact"
                className="btn btn-primary inline-block mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
              >
                Get a quote..
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;
