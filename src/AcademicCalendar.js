import React from 'react';
import './AcademicCalendar.css';

const AcademicCalendar = () => {
const calendarData = [
    { event: 'Start of Semester', date: 'January 8, 2024' },
    { event: 'Mid-Semester Break', date: 'March 18-22, 2024' },
    { event: 'Last Date to Register for Courses', date: 'January 12, 2024' },
    { event: 'Midterm Exams', date: 'March 25-30, 2024' },
    { event: 'Final Exam Registration', date: 'April 10, 2024' },
    { event: 'Final Exams', date: 'May 15-25, 2024' },
    { event: 'Project Submission Deadline', date: 'May 10, 2024' },
    { event: 'End of Semester', date: 'May 31, 2024' },
    { event: 'Summer Break', date: 'June 1-July 31, 2024' }
];

return (
    <div className="calendar-container">
    <h2>Academic Calendar</h2>
    <table>
        <thead>
        <tr>
            <th>Event</th>
            <th>Date</th>
        </tr>
        </thead>
        <tbody>
        {calendarData.map((item, index) => (
            <tr key={index}>
            <td>{item.event}</td>
            <td>{item.date}</td>
            </tr>
        ))}
        </tbody>
    </table>
    </div>
);
};

export default AcademicCalendar;
