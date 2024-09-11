import React from 'react';
import './Regulations.css'; // Import the CSS file

const Regulations = () => {
const regulationsList = [
    '2022 Regulation',
    'Other Languages',
    '2024 Regulation',
    '2021 Regulation',
    '2018 Regulation',
    'Previous Academic and Curriculum',
];

const departmentsBE = [
    'Biomedical Engineering',
    'Civil Engineering',
    'Computer Science & Design',
    'Computer Science & Engineering',
    'Electrical & Electronics Engineering',
    'Electronics & Communication Engineering',
    'Electronics & Instrumentation Engineering',
    'Information Science & Engineering',
    'Mechanical Engineering',
    'Mechatronics Engineering',
  ];

  const departmentsBTech = [
    'Agricultural Engineering',
    'Artificial Intelligence and Data Science',
    'Artificial Intelligence and Machine Learning',
    'Biotechnology',
    'Computer Science & Business Systems',
    'Computer Technology',
    'Food Technology',
    'Fashion Technology',
    'Information Technology',
    'Textile Technology',
  ];

  return (
    <div className="regulations-page">
      <div className="regulations-sidebar">
        <h3>Regulations Menu</h3>
        <ul>
          {regulationsList.map((regulation, index) => (
            <li key={index}><a href={`#${regulation.split(' ').join('-').toLowerCase()}`}>{regulation}</a></li>
          ))}
        </ul>
      </div>
      
      <div className="regulations-content">
        <h2 id="2022-regulation">2022 Regulation</h2>
        
        <h3>Bachelor of Engineering (UG)</h3>
        <table>
          <thead>
            <tr>
              <th>Department</th>
              {Array.from({ length: 8 }, (_, i) => <th key={i}>Semester {i + 1}</th>)}
            </tr>
          </thead>
          <tbody>
            {departmentsBE.map((dept, index) => (
              <tr key={index}>
                <td>{dept}</td>
                {Array.from({ length: 8 }, (_, i) => <td key={i} className={`semester${i + 1}`}>Semester {i + 1}</td>)}
              </tr>
            ))}
          </tbody>
        </table>

        <h3>Bachelor of Technology (UG)</h3>
        <table>
          <thead>
            <tr>
              <th>Department</th>
              {Array.from({ length: 8 }, (_, i) => <th key={i}>Semester {i + 1}</th>)}
            </tr>
          </thead>
          <tbody>
            {departmentsBTech.map((dept, index) => (
              <tr key={index}>
                <td>{dept}</td>
                {Array.from({ length: 8 }, (_, i) => <td key={i} className={`semester${i + 1}`}>Semester {i + 1}</td>)}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Regulations;
