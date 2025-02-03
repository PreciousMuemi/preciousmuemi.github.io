import React from 'react';

const Hero = () => {
  return (


<div className="bg-midnight-blue text-white min-h-screen">
      
<section className="cta-section py-10">
  <div className="container mx-auto px-4">
    <div className="flex flex-wrap items-center">
      <div className="w-full md:w-1/2 mb-8 md:mb-0">
        <h2 className="text-3xl font-bold">|| Welcome to my Portfolio ||</h2>
        <h4 className="text-xl mt-2">Software Engineer.</h4>
        <h1 className="text-4xl mt-4">
          <span className="icon">
            <i className="fas fa-hand-rock"></i>
            <span className="wave"></span>
          </span>
          Hello there. I'm <span className="text-yellow-400">CYNTHIA MUEMI</span>
          <h2 className="text-white-50 mt-2">
          Multidisciplinary Tech Innovator
          </h2>
        </h1>
        <div className="mt-6">
          <a
            href="/static/files/Newton-Maina-Resume(2024).pdf"
            className="bg-yellow-400 text-black py-2 px-4 rounded mr-4"
            target="_blank"
            rel="noopener noreferrer"
          >
            View Resume
          </a>
          <a href="/portfolio" className="bg-yellow-400 text-black py-2 px-4 rounded">
            View Projects
          </a>
        </div>
      </div>
      <div className="w-full md:w-1/2">
        <div className="framing">
          <div className="any-frame">
            <video
              autoPlay
              loop
              muted
              className="img-fluid opacity-70 rounded"
            >
              <source src="/static/images/animation-1.webm" type="video/webm" />
            </video>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
</div>
);
};
export default Hero;