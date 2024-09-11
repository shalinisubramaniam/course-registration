import React from 'react';
import './Departments.css'; // Import the CSS file

// Import the images from the images folder
import cse from './images/cse.png';
import eee from './images/eee.png';
import ise from './images/ise.png';
import ece from './images/ece.png';
import aids from './images/aids.png';
import aiml from './images/aiml.png';
import it from './images/it.png';
import bme from './images/bme.png';
import ct from './images/ct.png';
import biotech from './images/biotech.png';
import csbs from './images/csbs.png';
import fashion from './images/fashion.png';
import mech from './images/mech.png';
import food from './images/food.png';
import mtrs from './images/mtrs.png';
import eie from './images/eie.png';
import agri from './images/agri.png';
import textile from './images/textile.png';
import csd from './images/csd.png';
import civil from './images/civil.png';

const departments = [
  {
    name: 'Computer Science',
    description: 'Explore the world of computing and technology.',
    image: cse
  },
  {
    name: 'Electrical Engineering',
    description: 'Learn about electrical systems and circuits.',
    image: eee
  },
  {
    name: 'Information Science',
    description: 'Explore the world of computing and technology.',
    image: ise
  },
  {
    name: 'Electronics Engineering',
    description: 'Learn about electronic or embedded systems and circuits.',
    image: ece
  },
  {
    name: 'Artificial Intelligence and Data Science',
    description: 'Explore the world of AI along with Data Science.',
    image: aids
  },
  {
    name: 'Artificial Intelligence and Machine Learning',
    description: 'Learn about the world of AI along with Machine Learning.',
    image: aiml
  },
  {
    name: 'Information Technology',
    description: 'Learn about the world of Information Technology.',
    image: it
  },
  {
    name: 'Biomedical Engineering',
    description: 'Learn about the world of Biomedical Engineering.',
    image: bme
  },
  {
    name: 'Computer Technology',
    description: 'Learn about the world of Computer Technology.',
    image: ct
  },
  {
    name: 'Biotechnology',
    description: 'Learn about the world of Biotechnology.',
    image: biotech
  },
  {
    name: 'Computer Science & Business Systems',
    description: 'Learn about the world of Computer Science & Business Systems.',
    image: csbs
  },
  {
    name: 'Fashion Technology',
    description: 'Learn about the world of Fashion Technology.',
    image: fashion
  },
  {
    name: 'Mechanical Engineering',
    description: 'Learn about the world of Mechanical Engineering.',
    image: mech
  },
  {
    name: 'Food Technology',
    description: 'Learn about the world of Food Technology.',
    image: food
  },
  {
    name: 'Mechatronics Engineering',
    description: 'Learn about the world of Mechatronics Engineering.',
    image: mtrs
  },
  {
    name: 'Electronics & Instrumentation Engineering',
    description: 'Learn about the world of Electronics & Instrumentation Engineering.',
    image: eie
  },
  {
    name: 'Agricultural Engineering',
    description: 'Learn about the world of AI along with Machine Learning.',
    image: agri
  },
  {
    name: 'Textile Technology',
    description: 'Learn about the world of Textile Technology.',
    image: textile
  },
  {
    name: 'Computer Science & Design',
    description: 'Learn about the world of Computer Science & Design.',
    image: csd
  },
  {
    name: 'Civil Engineering',
    description: 'Learn about the world of Civil Engineering.',
    image: civil
  },

];

function Departments() {
  return (
    <div className="departments-section">
      <h2>DEPARTMENTS</h2>
      <div className="departments-grid">
        {departments.map((dept, index) => (
          <div key={index} className="department-card">
            <img src={dept.image} alt={dept.name} />
            <h3>{dept.name}</h3>
            <p>{dept.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Departments;
