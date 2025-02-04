import React from 'react';
import videoSrc from '../Images/76b71ce525aa40e6c141ebfa4876fda8.mp4';

const ServiceSection = () => {
  return (
    <section className="interactive-section py-10">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap items-center">
            <div className="w-full md:w-1/2 mb-8 md:mb-0">
              <div className="framing">
                <div className="any-frame">
                <video
  autoPlay
  loop
  muted
  className="img-fluid opacity-70 rounded"
>
  <source src={videoSrc} type="video/mp4" />
</video>
                </div>
              </div>
            </div>
            <div className="w-full md:w-1/2">
              <div className="service-offering">
                <h1 className="text-3xl font-bold">Hi there!</h1>
                <h5 className="mt-4 text-lg">
                  Are you looking for:
                  <span className="block mt-2">
                    A promising UI/UX design?...,
                    A flexible developed web interface?...,
                    Splendid Quality Assurance?...,
                    A long-term contract or collaboration with a seasoned professional?...
                  </span>
                </h5>
                <h5 className="mt-4 text-white-50">
                  <i className="fas fa-cogs"></i>...As an innovative software engineer, I am deeply committed to collaboration and dedicated to crafting seamless solutions and services.
                  <br />
                  <i className="fas fa-cogs"></i>...With a relentless drive for excellence, I am constantly seeking to push the boundaries of technology to deliver cutting-edge solutions that exceed expectations.
                  <br />
                  <i className="fas fa-cogs"></i>...By fostering a culture of cooperation and open communication, I thrive on working closely with clients and team members alike to understand their needs and create tailored solutions that address their unique challenges.
                  <br />
                  <i className="fas fa-cogs"></i>...Together, let's embark on a journey towards innovation and excellence, where every step we take is guided by a shared vision of creating impactful and transformative solutions.
                </h5>
                <div className="mt-6">
                  <a href="/about" className="bg-yellow-400 text-black py-2 px-4 rounded">
                    More about me...?
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
  );
};

export default ServiceSection;
