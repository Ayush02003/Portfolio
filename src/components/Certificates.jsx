import { Award, Calendar, ExternalLink, ShieldCheck } from "lucide-react";
// import React from 'react'
import genAICertificate from "../assets/Certificate/Gen AI Certificate.pdf";
import deepLearningCertificate from "../assets/Certificate/Deep Learning.pdf";
import adsCertificate from "../assets/Certificate/Advanced Distributed Systems.pdf";
const Certificates = () => {
  const certifications = [
    {
      id: 1,
      title: "Generative AI with Large Language Models",
      issuer: "DeepLearning.AI / AWS",
      date: "Feb 2026",
      link: genAICertificate,
      desc: "Learned generative AI concepts, large language models, prompt engineering, and real-world AI applications.",
    },
    {
      id: 2,
      title: "Deep Learning",
      issuer: "NPTEL / IIT Madras",
      date: "Jan-Apr 2024",
      link: deepLearningCertificate,
      desc: "Explored neural networks, deep learning architectures, model training, and artificial intelligence concepts.",
    },
    {
      id: 3,
      title: "Advanced Distributed Systems",
      issuer: "NPTEL / IIT Madras",
      date: "Jul-Oct 2023",
      link: adsCertificate,
      desc: "Studied distributed computing, system architectures, communication models, and scalable system design concepts.",
    },
  ];
  return (
    <section className="text-white py-20" id="certificates">
      <div className="max-w-8xl mx-auto px-6 lg:px-16">
        <div className="mb-16">
          <p className="text-primary text-sm uppercase tracking-widest mb-2 font-semibold">
            Achivements
          </p>
          <h2 className="text-4xl md:test-5xl font-extrabold text-white">
            Certifications...
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {certifications.map((cert) => (
            <div
              key={cert.id}
              data-aos="zoom-in"
              className="group relative bg-[#19243d] border border-[#1f1641] 
  p-6 rounded-2xl transition-all duration-300
  hover:border-primary/50 
  hover:shadow-[0_0_20px_-5px_rgba(6,162,194,0.2)]
  flex flex-col h-full"
            >
              <div className="absolute -top-4 -right-4 bg-primary p-3 rounded-xl shadow-lg transform group-hover:rotate-12 transition-transform">
                <Award className="text-white " size={24} />
              </div>
              <div className="flex items-center gap-4 mb-4 text-xs text-gray-400">
                <span className="flex items-center gap-1">
                  <ShieldCheck size={14} className="text-primary" />
                  {cert.issuer}
                </span>
                <span className="flex items-center gap-1">
                  <Calendar size={14} />
                  {cert.date}
                </span>
              </div>
              <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors">
                {cert.title}
              </h3>
              <p className="text-gray-400 text-sm mb-6 flex-grow">
                {cert.desc}
              </p>
              <a
                href={cert.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm font-medium text-primary hover:text-cyan-300 transition-colors duration-300"
              >
                View Certificate <ExternalLink size={14} />
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certificates;
