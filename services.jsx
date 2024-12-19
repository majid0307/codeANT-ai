import React from "react";
import "./Services.css";

function Services() {
  const services = [
    {
      title: "AI-Driven Code Quality",
      description: "Leverage the power of AI to analyze and improve your codebase, ensuring high-quality standards.",
    },
    {
      title: "Security Enhancements",
      description: "Detect vulnerabilities and apply AI-driven fixes to make your applications safer and more secure.",
    },
    {
      title: "Automation Solutions",
      description: "Streamline repetitive coding tasks with our automation tools, saving time and reducing errors.",
    },
    {
      title: "Real-Time Collaboration",
      description: "Enable seamless collaboration among your development team with our integrated tools.",
    },
  ];

  return (
    <div className="services">
      <h2>Our Services</h2>
      <div className="service-cards">
        {services.map((service, index) => (
          <div className="card" key={index}>
            <h3>{service.title}</h3>
            <p>{service.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Services;
