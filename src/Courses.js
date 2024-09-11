import React, { useState } from 'react';
import './Courses.css';

const coursesData = [
    { title: 'Elective Courses', description: 'Explore a variety of electives to complement your core curriculum.', link: '/elective-courses' },
    { title: 'One Credit Courses', description: 'Short-term courses offering one credit to enhance your knowledge.', link: '/one-credit-courses' },
    { title: 'Honors Courses', description: 'Advanced courses for high-achieving students seeking academic challenges.', link: '/honors-courses' },
    { title: 'Minors Courses', description: 'Courses to help you pursue a secondary field of study.', link: '/minors-courses' },
];

const Courses = () => {
    const [selectedCourse, setSelectedCourse] = useState(null);

    const handleExploreClick = (course) => {
        setSelectedCourse(course);
    };

    const closeModal = () => {
        setSelectedCourse(null);
    };

    return (
        <div className="courses-section">
            <h2>Courses</h2>
            <div className="courses-grid">
                {coursesData.map((course, index) => (
                    <div key={index} className="course-card">
                        <h3>{course.title}</h3>
                        <p>{course.description}</p>
                        <button onClick={() => handleExploreClick(course)} className="course-link">Explore {course.title}</button>
                    </div>
                ))}
            </div>

            {selectedCourse && (
                <div className="modal">
                    <div className="modal-content">
                        <span className="close-button" onClick={closeModal}>&times;</span>
                        <h2>Register for {selectedCourse.title}</h2>
                        <form className="registration-form">
                            <label>
                                Name:
                                <input type="text" name="name" required />
                            </label>
                            <label>
                                Email ID:
                                <input type="email" name="email" required />
                            </label>
                            <label>
                                Eligibility:
                                <select name="eligibility" required>
                                    <option value="">Select eligibility</option>
                                    <option value="eligible">Eligible</option>
                                    <option value="not-eligible">Not Eligible</option>
                                </select>
                            </label>
                            <button type="submit" className="register-button">Register</button>
                        </form>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Courses;
