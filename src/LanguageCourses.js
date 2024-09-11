import React, { useState } from 'react';
import './LanguageCourses.css';

const languageCoursesData = [
    { title: 'German', description: 'Learn the German language and explore the culture of Germany.', link: '/german' },
    { title: 'Spanish', description: 'Master the Spanish language and delve into the rich Hispanic culture.', link: '/spanish' },
    { title: 'Hindi', description: 'Gain proficiency in Hindi and understand the linguistic diversity of India.', link: '/hindi' },
    { title: 'Japanese', description: 'Study the Japanese language and get insights into Japanese traditions.', link: '/japanese' },
];

const LanguageCourses = () => {
    const [selectedCourse, setSelectedCourse] = useState(null);

    const handleExploreClick = (course) => {
        setSelectedCourse(course);
    };

    const closeModal = () => {
        setSelectedCourse(null);
    };

    return (
        <div className="language-courses-section">
            <h2>Language Courses</h2>
            <div className="language-courses-grid">
                {languageCoursesData.map((course, index) => (
                    <div key={index} className="language-course-card">
                        <h3>{course.title}</h3>
                        <p>{course.description}</p>
                        <button onClick={() => handleExploreClick(course)} className="language-course-link">
                            Explore {course.title}
                        </button>
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
                                Student Name:
                                <input type="text" required />
                            </label>
                            <label>
                                Email ID:
                                <input type="email" required />
                            </label>
                            <label>
                                Interested:
                                <select>
                                    <option value="interested">Interested</option>
                                    <option value="not-interested">Not Interested</option>
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

export default LanguageCourses;
