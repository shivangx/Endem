// LocationSection.js
import React from 'react';

const LocationSection = () => {
    return (
        <div className="location-section">
            {/* Your location information goes here */}
            <div className="map-container">
                <iframe
                    title="Google Maps"
                    width="600"
                    height="450"
                    loading="lazy"
                    allowFullScreen
                    frameBorder="0"
                    src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d7071.292115531734!2d77.59963270000002!3d27.604500900000005!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sin!4v1702538651751!5m2!1sen!2sin"
                    aria-hidden="false"
                ></iframe>
            </div>
            <p>GLA University, Mathura</p>
        </div>
    );
};

export default LocationSection;
