// About.jsx
import React from 'react';

const About = () => {
  return (
    <div className="bg-midnight-blue text-white min-h-screen">
      {/* About Section */}
      <section className="about-section py-10">
        <div className="container mx-auto px-4">
          <section className="intro-section text-center mb-10">
            <div className="big-circle bg-gray-200 rounded-full w-32 h-32 mx-auto flex items-center justify-center mb-4">
              <div className="small-circle bg-gray-400 rounded-full w-16 h-16"></div>
            </div>
            <div className="retext">
              <h1 className="text-3xl font-bold">-Learn More About Me-</h1>
            </div>
          </section>
          <hr className="my-8" />

          {/* Biography Section */}
          <div className="biography-section flex flex-wrap items-center mb-10">
            <div className="w-full md:w-1/2 mb-8 md:mb-0">
              <div className="about-frame">
                <img
                  src="/static/images/About_me.jpg"
                  alt="about me"
                  className="img-fluid rounded shadow"
                />
              </div>
            </div>
            <div className="w-full md:w-1/2">
              <div className="biography-text text-center">
                <h1 className="text-2xl font-bold">Who's Cynthia?</h1>
                <div className="flex justify-center items-center mt-3">
                  <div className="line bg-gray-400 h-px w-16"></div>
                  <div className="diamond bg-yellow-400 mx-3 w-4 h-4"></div>
                  <div className="line bg-gray-400 h-px w-16"></div>
                </div>
                <p className="mt-4 text-lg">
                  Currently a 4th-year student at St Paul's University. My stronghold lies in Python and
                  Django, focusing on building high-performance applications. With a strong aptitude
                  for identifying and solving real-world problems through code, I am eager to
                  contribute to dynamic teams and leverage opportunities to drive success. Actively
                  involved in several tech communities, including Google Developer Student Club, AWS
                  Community, African Ruby Community (ARC), and other innovation clubs and societies
                  at the university. I am flexible with working hours and committed to continuous
                  learning and professional growth.
                </p>

                <div className="skills mt-5">
                  <h1 className="text-2xl font-bold">Skills & Interests</h1>
                  <div className="flex flex-wrap justify-center mt-4 space-x-2">
                    <span className="bg-yellow-400 text-black py-2 px-4 rounded mb-3">
                      <i className="fas fa-wordpress"></i> Wordpress
                    </span>
                    <span className="bg-yellow-400 text-black py-2 px-4 rounded mb-3">
                      <i className="fab fa-aws"></i> Amazon WS
                    </span>
                    <span className="bg-yellow-400 text-black py-2 px-4 rounded mb-3">
                      <i className="fas fa-network-wired"></i> Networking
                    </span>
                    <span className="bg-yellow-400 text-black py-2 px-4 rounded mb-3">
                      <i className="fab fa-figma"></i> Figma DS
                    </span>
                    <span className="bg-yellow-400 text-black py-2 px-4 rounded mb-3">
                      <i className="fas fa-palette"></i> UI/UX DS
                    </span>
                    <span className="bg-yellow-400 text-black py-2 px-4 rounded mb-3">
                      <i className="fas fa-laptop-code"></i> Web DS/Dev
                    </span>
                    <span className="bg-yellow-400 text-black py-2 px-4 rounded mb-3">
                      <i className="fas fa-martini-glass-citrus"></i> AI & ML
                    </span>
                    <span className="bg-yellow-400 text-black py-2 px-4 rounded mb-3">
                      <i className="fas fa-briefcase-clock"></i> Blockchain
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Education Section */}
          <div className="education-section mb-10">
            <hr className="my-8" />
            <div className="text-center mb-8">
              <h1 className="text-2xl font-bold">
                <span>
                  <i className="fas fa-graduation-cap"></i>
                </span>{' '}
                || EDUCATION
              </h1>
              <div className="flex justify-center items-center mt-3">
                <div className="line bg-gray-400 h-px w-16"></div>
                <div className="diamond bg-yellow-400 mx-3 w-4 h-4"></div>
                <div className="line bg-gray-400 h-px w-16"></div>
              </div>
              <p className="mt-4 text-lg">
                In addition to my formal education at St Paul's University, I actively explore new
                technologies and develop innovative software solutions. Currently, I am deepening my
                knowledge in Cloud Architecture (AWS), Data Structures and Algorithms (DSA),
                Artificial Intelligence, and Blockchain technology. I also pursue UI/UX design, web
                development, and blog writing as a hobby and freelance side projects, which helps me
                stay engaged with diverse technological trends and enhance my skill set.
              </p>
            </div>

            <div className="flex flex-wrap justify-center">
              <div className="w-full md:w-1/2 mb-8">
                <p className="text-lg font-bold">2017 - 2024</p>
                <div className="listings">
                  <div className="mb-4">
                    <i className="fas fa-caret-right"></i>
                    <h2 className="text-xl font-semibold">Professional Certificates</h2>
                    <ul className="list-disc ml-6">
                      <li>
                        <h5>Amazon Web Services (AWS) Cloud Practitioner | KCA University - May 2024-Sep 2024</h5>
                      </li>
                      <li>
                        <h5>Web Development | Emobilis Institute Westlands - Sep 2023-Dec 2023 (Graduated on Jul-27th-2024)</h5>
                      </li>
                      <li>
                        <h5>Cisco Certified Network Associate (CCNA) | KCA University - May 2022 - Oct 2022</h5>
                      </li>
                    </ul>
                  </div>

                  <div className="mb-4">
                    <i className="fas fa-caret-right"></i>
                    <h2 className="text-xl font-semibold">Higher Education</h2>
                    <ul className="list-disc ml-6">
                      <li>
                        <h5>Bachelor's Degree</h5>
                        <p>Bachelors Software Development |St Paul's University | Sep 2021-Nov 2025</p>
                      </li>
                    </ul>
                  </div>

                  <div className="mb-4">
                    <i className="fas fa-caret-right"></i>
                    <h2 className="text-xl font-semibold">High School Studies</h2>
                    <ul className="list-disc ml-6">
                      <li>
                        <h5>KCSE Examination</h5>
                        <p>Completion Certificate | Gatero Girls Highschool| Jan 2017-Apr 2021</p>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Experience Section */}
          <div className="experience-section mb-10">
            <hr className="my-8" />
            <div className="text-center mb-8">
              <h1 className="text-2xl font-bold">MY EXPERIENCE</h1>
              <div className="flex justify-center items-center mt-3">
                <div className="line bg-gray-400 h-px w-16"></div>
                <div className="diamond bg-yellow-400 mx-3 w-4 h-4"></div>
                <div className="line bg-gray-400 h-px w-16"></div>
              </div>
            </div>

            <div className="flex flex-wrap justify-center">
              <div className="w-full md:w-1/2 mb-8">
                <h1 className="text-lg font-bold">2022-2025</h1>
                <div className="btn-group flex justify-center mb-8">
                  <button
                    className="bg-yellow-400 text-black py-2 px-4 rounded mb-3 mr-2"
                    onClick={() => showContent('general')}
                  >
                    General
                  </button>
                  <button
                    className="bg-yellow-400 text-black py-2 px-4 rounded mb-3 mr-2"
                    onClick={() => showContent('voluntary')}
                  >
                    Voluntary
                  </button>
                  <button
                    className="bg-yellow-400 text-black py-2 px-4 rounded mb-3"
                    onClick={() => showContent('hired')}
                  >
                    Placement
                  </button>
                </div>

                <div className="content" id="general">
                  <div className="visual text-center mb-4">
                    <p className="visual-text text-xl font-bold">|| General - Work Experience ||</p>
                  </div>
                  <p className="text-lg">
                    <span>
                      <i className="fas fa-caret-right"></i>
                    </span>
                    <small> Industrial Electoral And Boundaries Commission (IEBC) </small>
                  </p>
                  <p className="text-light">Clerk Assistant || August - 2022</p>
                  <p>
                    In this role, I supported the electoral process by assisting with the management
                    of voter registration, updating and maintaining electoral records, and ensuring
                    smooth operations during elections. My duties included verifying voter
                    information, preparing and organizing election materials, and providing
                    logistical support on election day.
                  </p>

                  <div className="mt-8">
                    <p className="text-lg">
                      <span>
                        <i className="fas fa-caret-right"></i>
                      </span>
                      <small> Crystal Computers Limited</small>
                    </p>
                    <p className="text-light">Receptionist & Tutor || May - September 2023</p>
                    <p>
                      As a receptionist, I handled a variety of online cyber services, including
                      managing client inquiries, scheduling appointments, and providing support for
                      computer-related issues. In addition, I served as a tutor, teaching Microsoft
                      Office packages to students, which involved preparing lesson plans, delivering
                      instructions, and assisting students with their coursework.
                    </p>
                  </div>
                </div>

                <div className="content hidden" id="voluntary">
                  <div className="visual text-center mb-4">
                    <p className="visual-text text-xl font-bold">|| Voluntary - Work Experience ||</p>
                  </div>
                  <p className="text-lg">
                    <span>
                      <i className="fas fa-caret-right"></i>
                    </span>
                    <small> Kiambu High School Alumni Foundation</small>
                  </p>
                  <p className="text-light">IT Support & Maintenance || June 2024 - Current </p>
                  <p>
                    In this volunteer role, I work alongside a team to address IT issues within the
                    alumni organization. My primary responsibilities include maintaining and updating
                    the organization's social media platforms and overseeing the functionality of
                    their new website, khsaf.org. This involves troubleshooting technical problems,
                    ensuring website security, and managing content updates to enhance online
                    engagement and support the foundation's activities.
                  </p>
                </div>

                <div className="content hidden" id="hired">
                  <div className="visual text-center mb-4">
                    <p className="visual-text text-xl font-bold">|| Hired Basis - Work Experience ||</p>
                  </div>
                  <p className="text-lg">
                    <span>
                      <i className="fas fa-caret-right"></i>
                    </span>
                    <small> Coming Soon</small>
                  </p>
                  <p className="text-light">Random Hired Job || Some Month-Some Month 2024</p>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                    incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis
                    nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;