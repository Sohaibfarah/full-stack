import React from "react";
import { motion } from "framer-motion";
import { useState } from 'react';
import "./Vision.css";

function Vision() {
    const [currentIndex, setCurrentIndex] = useState(0);

    // Define the items array here
    const items = [
        "Item 1",
        "Item 2",
        "Item 3",
        "Item 4",
    ];

    const nextItem = () => {
        setCurrentIndex((currentIndex + 1) % items.length);
    };

    const prevItem = () => {
        setCurrentIndex((currentIndex - 1 + items.length) % items.length);
    };

    return (
        <div className="vision-container">
            <h1 className="vision-title">Our Vision</h1>
            <div className="vision-content">
                <p>
                    Our vision is to create a platform that provides comprehensive information about scholarships from around the world. We aim to empower students by making the process of finding and applying for scholarships as seamless as possible.
                </p>
                <p>
                    With our app, students will be able to explore a wide range of scholarship opportunities, including academic scholarships, grants, fellowships, and more. Our goal is to make higher education accessible to everyone by connecting students with the resources they need to achieve their academic and career goals.
                </p>
                <p>
                    We believe that education is the key to unlocking individual potential and driving positive change in the world. By facilitating access to scholarships, we strive to support students in pursuing their dreams and making a meaningful impact in their communities and beyond.
                </p>
            </div>
            
        </div>
    );
}

export default Vision;
