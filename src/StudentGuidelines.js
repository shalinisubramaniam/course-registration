import React from 'react';
import './StudentGuidelines.css';

const StudentGuidelines = () => {
return (
    <div className="guidelines-container">
    <h2>Student Guidelines</h2>
    <ul>
    <li>
    <strong>Code of Conduct:</strong> Maintain discipline and follow all the rules set by the institution. Respect faculty members, peers, and administrative staff. No form of bullying, harassment, or discrimination will be tolerated.
    </li>
    <li>
    <strong>Attendance Requirements:</strong> A minimum of 75% attendance is mandatory for each subject. Regular attendance is crucial for academic success. Medical leaves will be considered only with valid documentation.
    </li>
    <li>
    <strong>Examination Guidelines:</strong> Follow all instructions during exams. Cheating, plagiarism, or any form of misconduct will result in disciplinary action. Carry your college ID and admit card to the examination hall.
        </li>
        <li>
        <strong>Assignment Submission:</strong> Submit assignments on time. Late submissions will incur penalties unless prior permission is granted.
        </li>
        <li>
    <strong>Library Usage:</strong> Adhere to the library rules. Return books on or before the due date to avoid fines. Maintain silence inside the library.
        </li>
        <li>
    <strong>Lab Conduct:</strong> Follow lab safety protocols at all times. Handle lab equipment with care and responsibility.
        </li>
    </ul>
    </div>
);
};

export default StudentGuidelines;
