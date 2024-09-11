import React, { useState } from 'react';
import Sidebar from './Sidebar'; 
import HomePage from './HomePage'; 
import Departments from './Departments'; 
import Regulations from './Regulations';
import CoEActivities from './CoEActivities';
import LanguageCourses from './LanguageCourses';
import Courses from './Courses'; 
import StudentGuidelines from './StudentGuidelines';
import AcademicCalendar from './AcademicCalendar';
import './Dashboard.css';

const Dashboard = () => {
  const [selectedPage, setSelectedPage] = useState('home');

  const renderContent = () => {
    switch (selectedPage) {
      case 'home':
        return <HomePage />;
      case 'departments':
        return <Departments />;
      case 'regulations':
        return <Regulations />;
      case 'courses':
        return <Courses />;
      case 'coe':
        return <CoEActivities />;
      case 'guidelines':
        return <StudentGuidelines />;
      case 'calendar':
        return <AcademicCalendar />;
      case 'languages':
        return <LanguageCourses />;
      case 'logout':
        return <div>Logout</div>;
      default:
        return <HomePage />;
    }
  };

  return (
    <div className="dashboard">
      <Sidebar onSelect={setSelectedPage} />
      <div className="content">
        {renderContent()}
      </div>
    </div>
  );
};

export default Dashboard;
