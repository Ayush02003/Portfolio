// import React from "react";
import {
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
  FaLinkedin,
} from "react-icons/fa";
const ContactSection = () => {
  const handleSubmit = (e) => {
    e.preventDefault();

    const email = e.target.email.value;
    const message = e.target.message.value;

    const gmailLink = `https://mail.google.com/mail/?view=cm&fs=1&to=patelayush11102003@gmail.com&su=Portfolio Contact from ${email}&body=${message}`;

    window.open(gmailLink, "_blank");
  };
  const contactInfo = [
    {
      id: 1,
      icon: FaEnvelope,
      title: "Email",
      value: "patelayush11102003@gmail.com",
      link: null,
    },
    {
      id: 2,
      icon: FaPhone,
      title: "Phone",
      value: "+91 7359575117",
      link: null,
    },
    {
      id: 3,
      icon: FaLinkedin,
      title: "LinkedIn",
      value: "Ayush Patel",
      link: "https://www.linkedin.com/in/ayush-patel-336942218/",
    },
    {
      id: 4,
      icon: FaMapMarkerAlt,
      title: "Location",
      value: "Gujarat, India",
      link: null,
    },
  ];

  return (
    <section className="py-20 bg-gray-900" id="contact">
      <div className="container mx-auto px-4 max-w-7xl">
        {/* Heading */}
        <div className=" mb-12">
          <h2 className="text-3xl md:text-5xl font-extrabold text-white mb-2">
            Let's Connect...
          </h2>

          <div className="w-28 h-1 bg-primary  mt-2 rounded-2xl"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Contact Information */}
          <div>
            <p className="text-gray-400 mb-8 font-medium leading-relaxed">
              Have an idea, opportunity, or just want to connect? Feel free to
              reach out, I’m always open to discussing new ideas and
              collaborations.
            </p>

            <div className="space-y-6">
              {contactInfo.map((info) => {
                const Icon = info.icon;

                return (
                  <div key={info.id} className="flex items-center gap-4 group">
                    <div
                      className="w-10 h-10 rounded-full bg-primary/10 
                      flex items-center justify-center 
                      group-hover:bg-primary/20 transition-colors"
                    >
                      <Icon size={18} className="text-primary" />
                    </div>

                    <div>
                      <h4 className="text-white font-medium text-sm">
                        {info.title}
                      </h4>

                      {info.link ? (
                        <a
                          href={info.link}
                          className="text-gray-400 text-sm 
                          hover:text-primary transition-colors"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          {info.value}
                        </a>
                      ) : (
                        <p className="text-gray-400 text-sm">{info.value}</p>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-gray-800 rounded-lg p-6">
            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <label
                  htmlFor="email"
                  className="text-white block mb-2 text-sm font-medium"
                >
                  Email
                </label>

                <input
                  type="email"
                  id="email"
                  placeholder="your@email.com"
                  required
                  className="w-full px-4 py-3 bg-gray-700 
                  border border-gray-600 rounded-lg text-white 
                  text-sm focus:outline-none 
                  focus:border-primary transition-colors"
                />
              </div>

              <div className="mb-6">
                <label
                  htmlFor="message"
                  className="text-white block mb-2 text-sm font-medium"
                >
                  Message
                </label>

                <textarea
                  id="message"
                  rows="4"
                  placeholder="Your Message..."
                  required
                  className="w-full px-4 py-2 bg-gray-700 
                  border border-gray-600 rounded-lg text-white 
                  text-sm focus:outline-none 
                  focus:border-primary transition-colors"
                />
              </div>

              <button
                type="submit"
                className="w-full px-6 py-2.5 bg-primary 
                text-white rounded-lg font-medium 
                hover:bg-primary/80 transition-colors"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
