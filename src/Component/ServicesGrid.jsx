import React from 'react';
import { Link } from 'react-router-dom';
const ServicesGrid = () => {
  return (
    <section className="services-section py-10">
      <div className="container mx-auto px-4">
        <h2 className="text-center text-2xl font-bold mb-8">My Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="small-service-item text-center bg-white text-black p-6 rounded-lg shadow-md">
            <h4 className="text-xl font-semibold">UI and UX Design</h4>
          </div>
          <div className="small-service-item text-center bg-white text-black p-6 rounded-lg shadow-md">
            <h4 className="text-xl font-semibold">Web Development</h4>
          </div>
          <div className="small-service-item text-center bg-white text-black p-6 rounded-lg shadow-md">
            <h4 className="text-xl font-semibold">Quality Assurance</h4>
          </div>
          <div className="small-service-item text-center bg-white text-black p-6 rounded-lg shadow-md">
            <h4 className="text-xl font-semibold">Collaboration</h4>
          </div>
          <div className="small-service-item text-center bg-white text-black p-6 rounded-lg shadow-md">
            <h4 className="text-xl font-semibold">Consultancy</h4>
          </div>
        </div>
        <div className="text-center mt-8">
        <Link 
            to="/services" 
            className="bg-yellow-400 text-black py-2 px-4 rounded"
          >
            More About My Services
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ServicesGrid;
