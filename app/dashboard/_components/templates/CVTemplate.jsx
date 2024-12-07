// components/CVTemplate.js
import React from 'react';

const CVTemplate = ({ data }) => {
  return (
    <div className="max-w-2xl mx-auto p-6 bg-white shadow-md rounded-lg">
      <header className="text-center mb-6">
        <h1 className="text-3xl font-bold">{data.name}</h1>
        <p className="text-gray-600">{data.profession}</p>
      </header>
      <section className="mb-6">
        <h2 className="text-xl font-semibold">Contact Information</h2>
        <p>{data.email}</p>
        <p>{data.phone}</p>
      </section>
      <section className="mb-6">
        <h2 className="text-xl font-semibold">Experience</h2>
        {data.experience.map((job, index) => (
          <div key={index} className="mb-4">
            <h3 className="font-bold">{job.title}</h3>
            <p className="text-gray-600">{job.company}</p>
            <p>{job.duration}</p>
            <p>{job.description}</p>
          </div>
        ))}
      </section>
      <section>
        <h2 className="text-xl font-semibold">Education</h2>
        {data.education.map((edu, index) => (
          <div key={index} className="mb-4">
            <h3 className="font-bold">{edu.degree}</h3>
            <p className="text-gray-600">{edu.institution}</p>
            <p>{edu.year}</p>
          </div>
        ))}
      </section>
    </div>
  );
};

export default CVTemplate;
