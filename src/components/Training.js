import React, { useEffect, useState } from 'react';
import './Training.css'; // Add your styles here

const Training = () => {
    const [trainingPrograms, setTrainingPrograms] = useState([]);
    const [heading, setHeading] = useState('');

    useEffect(() => {
        const fetchData = async () => {
            const response = await fetch('/content.json');
            const data = await response.json();
            setTrainingPrograms(data.training.programs);
            setHeading(data.training.heading);
        };

        fetchData();
    }, []);

    if (trainingPrograms.length === 0) return <div>Loading...</div>; // Handle loading state

    return (
        <section className="training-section">
            <h1>{heading}</h1>
            <div className="training-list">
                {trainingPrograms.map((program, index) => (
                    <div key={index} className="training-item">
                        <img src={`${process.env.PUBLIC_URL}/${program.image}`} alt={program.title} className="training-image" />
                        <h2>{program.title}</h2>
                        <p>{program.description}</p>
                        <p><strong>Duration:</strong> {program.duration}</p>
                        <p><strong>Prerequisites:</strong> {program.prerequisites}</p>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Training;
