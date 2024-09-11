import React from 'react';
import './Sidebar.css';

const Sidebar = ({ onSelect }) => {
  return (
    <div className="sidebar">
      <h2>   DASHBOARD</h2>
      <ul>
        <li onClick={() => onSelect('home')}>Home</li>
        <li onClick={() => onSelect('departments')}>Departments</li>
        <li onClick={() => onSelect('regulations')}>Regulations</li>
        <li onClick={() => onSelect('courses')}>Courses</li>
        <li onClick={() => onSelect('coe')}>CoE Activities</li>
        <li onClick={() => onSelect('guidelines')}>Student Guidelines</li>
        <li onClick={() => onSelect('calendar')}>Academic Calendar</li>
        <li onClick={() => onSelect('languages')}>Language Courses</li>
        <li onClick={() => onSelect('logout')}>Logout</li>
      </ul>
    </div>
  );
};

export default Sidebar;
