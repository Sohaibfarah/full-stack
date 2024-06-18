import React from "react";
import PropTypes from 'prop-types';
import './style.css';

function Scholarship({ name, image, des, dead }) {
    return (
        <div className="scholarship-container">
            <div className="scholarship-name">
                <h4>{name}</h4>
            </div>
            <div className="scholarship-details">
                <div className="scholarship-description">
                    <p>{des}</p>
                </div>
                <div className="scholarship-footer">
                    <div className="scholarship-deadline">
                        <p>Deadline: {dead}</p>
                    </div>
                    <div className="scholarship-button">
                        <button>More</button>
                    </div>
                </div>
                <div className="scholarship-image">
                    <img src={image} alt={name} />
                </div>
            </div>
        </div>
    );
}

Scholarship.propTypes = {
    name: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    des: PropTypes.string.isRequired,
    dead: PropTypes.string.isRequired,
};

export default Scholarship;
