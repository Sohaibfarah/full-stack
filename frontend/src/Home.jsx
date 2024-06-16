import React, { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import axios from "axios";
import imge1 from "../src/assets/go.webp";
import imge2 from "../src/assets/add.jpg";
import imge3 from "../src/assets/vot.jpg";
import './style.css';
import Scholarship from "./scholarship";
import "./Vision.css"

// Map the image strings to actual image imports
const imageMap = {
  imge1: imge1,
  imge2: imge2,
  imge3: imge3
};

function Home() {
    const [currentIndex, setCurrentIndex] = useState(0);

    // Define the items array here
    const items = [
        "Item 1",
        "Item 2",
        "Item 3",
        "Item 4",
        "Item 5",
    ];

    const nextItem = () => {
        setCurrentIndex((currentIndex + 1) % items.length);
    };

    const prevItem = () => {
        setCurrentIndex((currentIndex - 1 + items.length) % items.length);
    };
    const universities = [
        "Harvard University",
        "Stanford University",
        "Massachusetts Institute of Technology",
        "California Institute of Technology",
        "University of Oxford",
        "University of Cambridge",
        "University of Chicago",
        "Princeton University",
        "Yale University",
        "Columbia University",
    ];
    
    const [inputValue, setInputValue] = useState('');
    const [suggestions, setSuggestions] = useState([]);
    const [scholarships, setScholarships] = useState([]);
    const [width, setWidth] = useState(0);
    const caro = useRef();

    useEffect(() => {
        axios.get('http://localhost:5000/scholarships')
          .then(response => {
            setScholarships(response.data);
          })
          .catch(error => {
            console.error("There was an error fetching the scholarships!", error);
          });
      }, []);



    const handleInputChange = (e) => {
        const value = e.target.value;
        setInputValue(value);
        if (value) {
            const filteredSuggestions = universities.filter(university =>
                university.toLowerCase().includes(value.toLowerCase())
            );
            setSuggestions(filteredSuggestions);
        } else {
            setSuggestions([]);
        }
    };

    const handleSuggestionClick = (suggestion) => {
        setInputValue(suggestion);
        setSuggestions([]);
    };

    return (
        <div className="all">
            <div className="search">
                <button>Search</button>
                <input
                    type="text"
                    value={inputValue}
                    onChange={handleInputChange}
                    placeholder="Type a university name"
                    className="input"
                />
                {suggestions.length > 0 && (
                    <div className="suggestions">
                        {suggestions.map((suggestion, index) => (
                            <div
                                key={index}
                                className="suggestion"
                                onClick={() => handleSuggestionClick(suggestion)}
                            >
                                {suggestion}
                            </div>
                        ))}
                    </div>
                )}
            </div>
                <h2 style={{textAlign: "center", width: "100%", margin: "10px",}}>Recently</h2>
                <div className="carousel">
                <div className="carousel-container">
                    <motion.div
                        className="carousel-items"
                        animate={{ x: -currentIndex * 100 + '%' }}
                        transition={{ duration: 0.5 }}
                        style={{
                            display: 'flex',
                        }}
                    >
                        {items.map((item, index) => (
                            <div className="carousel-item" key={index}>
                                <div className="full">
                                    
                                    {scholarships.slice(currentIndex, currentIndex + 1).map((scholarship) => (
                                    <Scholarship key={scholarship.name} {...scholarship} />
      ))}
                                </div>
                            </div>
                        ))}
                    </motion.div>
                </div>
                <div className="buttonss">
                <button onClick={nextItem}>Next</button>
                <button onClick={prevItem}>Previous</button>
                </div>
                
            </div>

            <div className="rec-two">
                <h2>Top view</h2>
                {scholarships.slice(0, 5).map((scholarship) => (
                    <Scholarship key={scholarship.name} {...scholarship} />
                ))}
            </div>
        </div>
    );
}

export default Home;
