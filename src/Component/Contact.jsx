// Contact.jsx
import React, { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  });

  const [successMessage, setSuccessMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const steps = [
    { icon: MessageCircle, text: "Contact me" },
    { icon: Book, text: "Give me the project" },
    { icon: CheckCircle, text: "Allow me to do the job" },
    { icon: DollarSign, text: "Make your payment" }
  ];
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    // Example: setSuccessMessage('Your message has been sent!');
  };

  return (
    <div className="container mx-auto py-5">
      <section className="intro-section text-center mb-10">
        <div className="big-circle bg-gray-200 rounded-full w-32 h-32 mx-auto flex items-center justify-center mb-4">
          <div className="small-circle bg-gray-400 rounded-full w-16 h-16"></div>
        </div>
        <div className="retext">
          <h1 className="text-2xl font-bold">-Let's Talk Business-</h1>
        </div>
      </section>
      <hr className="my-8" />

      <div className="flex flex-wrap -mx-4">
        <div className="w-full md:w-1/2 px-4 mb-8 md:mb-0">
          <div className="framing-1">
            <div className="any-frame-1">
              <video
                autoPlay
                loop
                muted
                playsInline
                preload="auto"
                className="img-fluid opacity-70"
              >
                <source src="/static/images/animation-3.webm" type="video/webm" />
              </video>
            </div>
          </div>
        </div>

        <div className="w-full md:w-1/2 px-4">
          {successMessage ? (
            <div id="thank-you-message" className="text-center mt-4">
              <h2 className="text-xl font-bold">Thanks {formData.name}!</h2>
              <p className="text-success">|| Message received ||</p>
              <p>I have received your email and will respond shortly...</p>
              <p>Looking forward to engaging with you soon.</p>
              <p className="text-success">You will be redirected in 15 seconds</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="contact-form mt-2">
              {errorMessage && <p className="text-red-500">{errorMessage}</p>}
              <div className="flex flex-wrap -mx-2">
                <div className="w-full lg:w-1/2 px-2 mb-4">
                  <label htmlFor="name" className="block font-semibold mb-1">
                    Full Name:
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="form-controller w-full px-3 py-2 border rounded"
                    placeholder="ex: Kevin Doe"
                    required
                  />
                </div>
                <div className="w-full lg:w-1/2 px-2 mb-4">
                  <label htmlFor="email" className="block font-semibold mb-1">
                    Email:
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="form-controller w-full px-3 py-2 border rounded"
                    placeholder="ex: kevindoe@gmail.com"
                    required
                  />
                </div>
              </div>
              <div className="mb-4">
                <label htmlFor="phone" className="block font-semibold mb-1">
                  Phone:
                </label>
                <input
                  type="text"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="form-controller w-full px-3 py-2 border rounded"
                  placeholder="ex: +254 700 000 000"
                  required
                />
              </div>
              <div className="mb-4">
                <label htmlFor="subject" className="block font-semibold mb-1">
                  Subject:
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  className="form-controller w-full px-3 py-2 border rounded"
                  placeholder="Ex: Inquiry on a short term project"
                  required
                />
              </div>
              <div className="mb-4">
                <label htmlFor="message" className="block font-semibold mb-1">
                  Message:
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  className="form-controller w-full px-3 py-2 border rounded"
                  rows="5"
                  placeholder="Your Message"
                  required
                ></textarea>
              </div>
              <button
                type="submit"
                className="btn btn-primary inline-block mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
              >
                Send Message
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};

export default Contact;
