const express = require('express');
const cors = require('cors');
const app = express();
const port = 5000;

app.use(cors());

const scholarships = [
    { name: "Harvard University", image: "../src/assets/go.webp", des: "A prestigious university in Cambridge, MA.", dead: "2024" },
    { name: "Stanford University", image: "../src/assets/add.jpg", des: "A leading research university in Stanford, CA.", dead: "2025" },
    { name: "Massachusetts Institute of Technology", image: "../src/assets/vot.jpg", des: "A world-renowned institute in Cambridge, MA.", dead: "2024" },
    { name: "California Institute of Technology", image: "../src/assets/add.jpg", des: "A private research university in Pasadena, CA.", dead: "2025" },
    { name: "University of Oxford", image: "../src/assets/go.webp", des: "An ancient university in Oxford, England.", dead: "2024" },
    { name: "University of Cambridge", image: "../src/assets/vot.jpg", des: "A historic university in Cambridge, England.", dead: "2025" },
    { name: "University of Chicago", image: "../src/assets/go.webp", des: "A leading university in Chicago, IL.", dead: "2024" },
    { name: "Princeton University", image: "../src/assets/add.jpg", des: "An Ivy League university in Princeton, NJ.", dead: "2025" },
    { name: "Yale University", image: "../src/assets/vot.jpg", des: "A prestigious university in New Haven, CT.", dead: "2024" },
    { name: "Columbia University", image: "../src/assets/add.jpg", des: "An Ivy League university in New York City, NY.", dead: "2025" },
];

app.get('/scholarships', (req, res) => {
    res.json(scholarships);
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
