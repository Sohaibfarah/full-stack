import React, { useEffect, useState } from "react";
import axios from "axios";
import Scholarship from "./scholarship";
import "./Vision.css";
const About = () => {
  const [scholarships, setScholarships] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:5000/scholarships')
      .then(response => {
        setScholarships(response.data);
      })
      .catch(error => {
        console.error("There was an error fetching the scholarships!", error);
      });
  }, []);

  return (
    <div className="scholarships-all">
            {scholarships.map((scholarship) => (
        <Scholarship key={scholarship.name} {...scholarship} />
      ))}
    </div>


  );
};

export default About;
