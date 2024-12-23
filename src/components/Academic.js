import React, { useEffect, useState } from 'react';
import './Academic.css';

const Solutions = () => {
    const [solutionsData, setSolutionsData] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            const response = await fetch('/content.json');
            const data = await response.json();
            setSolutionsData(data.academics);
        };

        fetchData();
    }, []);

    if (!solutionsData.length) return <div>Loading...</div>; // Handle loading state

    return (
        <section id="solutions" className="solutions-section">
            <h1>Foreign Language Solution</h1>
            <div className="solutions-list">
                {solutionsData.map((solution, index) => (
                    <div key={index} className="solution-item">
                        <img src={`${process.env.PUBLIC_URL}/${solution.image}`} alt={solution.title} className="solution-image" />
                        <h2>{solution.title}</h2>
                        <p>{solution.description}</p>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Solutions;
