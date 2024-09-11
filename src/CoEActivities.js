import React from 'react';
import './CoEActivities.css';

const CoEActivities = () => {
    return (
        <div className="coe-activities-section">
            <h1>BIT - Controller of Examinations (CoE) Activities</h1>
            <div className="contents-box">
                <h2>Contents</h2>
                <ul>
                    <li>1 Student Activities
                        <ul>
                            <li><a href="#timetable">Timetable</a></li>
                            <li><a href="#seating-arrangement">Seating Arrangement</a></li>
                            <li><a href="#malpractice-guidelines">Anna University Guidelines for Malpractice</a></li>
                        </ul>
                    </li>
                    <li>2 Faculty Activities
                        <ul>
                            <li><a href="#invigilation-duty">Invigilation Duty</a></li>
                            <li><a href="#squad-duty">Squad Duty</a></li>
                            <li><a href="#chief-superintendent">Chief Superintendent</a></li>
                        </ul>
                    </li>
                </ul>
            </div>

            <h2 id="student-activities">Student Activities</h2>
            <ul>
                <li><a href="#timetable" className="blue-link">Timetable</a></li>
                <li><a href="#seating-arrangement" className="blue-link">Seating Arrangement</a></li>
                <li><a href="#malpractice-guidelines" className="blue-link">Anna University Guidelines for Malpractice</a></li>
            </ul>

            <h2 id="faculty-activities">Faculty Activities</h2>
            <ul>
                <li><a href="#invigilation-duty" className="red-link">Invigilation Duty</a></li>
                <li><a href="#squad-duty" className="red-link">Squad Duty</a></li>
                <li><a href="#chief-superintendent" className="red-link">Chief Superintendent</a></li>
            </ul>
        </div>
    );
};

export default CoEActivities;
