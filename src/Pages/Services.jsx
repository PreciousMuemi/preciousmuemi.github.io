import React from 'react';

const ServicesPage = () => {
  const servicesDetails = [
    {
      title: "UI and UX Design",
      description: "Creating intuitive and visually appealing user interfaces that enhance user experience and engagement.",
      details: [
        "Responsive Design",
        "User-Centered Approach",
        "Wireframing and Prototyping",
        "Design System Development"
      ]
    },
    {
      title: "Web Development",
      description: "Building robust, scalable, and performant web applications using modern technologies.",
      details: [
        "Frontend Development",
        "Backend Integration",
        "RESTful API Development",
        "Single Page Applications"
      ]
    },
    {
      title: "Quality Assurance",
      description: "Ensuring software quality through comprehensive testing and validation strategies.",
      details: [
        "Manual Testing",
        "Automated Testing",
        "Performance Testing",
        "Bug Tracking and Reporting"
      ]
    },
    {
      title: "Collaboration",
      description: "Facilitating effective communication and teamwork in software development projects.",
      details: [
        "Agile Methodologies",
        "Cross-Functional Team Coordination",
        "Version Control",
        "Code Reviews"
      ]
    },
    {
      title: "Consultancy",
      description: "Providing expert guidance and strategic solutions for technology challenges.",
      details: [
        "Technology Stack Recommendations",
        "Architecture Design",
        "Performance Optimization",
        "Technical Problem Solving"
      ]
    }
  ];

  return (
    <div className="services-page bg-gray-900 min-h-screen py-16">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-center text-white mb-12">My Professional Services</h1>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {servicesDetails.map((service, index) => (
            <div 
              key={index} 
              className="service-card bg-gray-800 p-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <h2 className="text-2xl font-semibold text-yellow-400 mb-4">{service.title}</h2>
              <p className="text-gray-300 mb-4">{service.description}</p>
              
              <ul className="text-gray-400 space-y-2">
                {service.details.map((detail, detailIndex) => (
                  <li key={detailIndex} className="flex items-center">
                    <svg 
                      className="w-4 h-4 mr-2 text-yellow-400" 
                      fill="currentColor" 
                      viewBox="0 0 20 20"
                    >
                      <path 
                        fillRule="evenodd" 
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" 
                        clipRule="evenodd" 
                      />
                    </svg>
                    {detail}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
        <a
                href="/contact"
                className="btn btn-primary inline-block mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
              >
                Get a quote..
              </a>
        </div>
      </div>
    </div>
  );
};

export default ServicesPage;
