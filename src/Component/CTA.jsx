import React from 'react';

const CTASection = () => {
  return (
    <section className="cta-section py-10">
    <div className="container mx-auto px-4">
      <div className="flex flex-wrap justify-center">
        <div className="w-full md:w-1/4 text-center mb-8">
          <div className="counter-stat">
            <i className="fas fa-user-md text-4xl"></i>
            <span className="counter text-3xl font-bold">80</span>+
            <p>Code Commits</p>
          </div>
        </div>
        <div className="w-full md:w-1/4 text-center mb-8">
          <div className="counter-stat">
            <i className="fas fa-flag text-4xl"></i>
            <span className="counter text-3xl font-bold">50</span>+
            <p>Happy People</p>
          </div>
        </div>
        <div className="w-full md:w-1/4 text-center mb-8">
          <div className="counter-stat">
            <i className="fas fa-trophy text-4xl"></i>
            <span className="counter text-3xl font-bold">10</span>+
            <p>Completed Projects</p>
          </div>
        </div>
        <div className="w-full md:w-1/4 text-center mb-8">
          <div className="counter-stat">
            <i className="fas fa-globe text-4xl"></i>
            <span className="counter text-3xl font-bold">3</span>+
            <p>Years Of Experience</p>
          </div>
        </div>
      </div>
    </div>
  </section>

  
  );
};

export default CTASection;
