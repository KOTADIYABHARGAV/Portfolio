import React from 'react';
import PropTypes from 'prop-types';

const BlurBlob = ({ position, size }) => {
    const { top, left } = position;
    const { width, height } = size;

    return (
        <div
            className="absolute z-10 pointer-events-none"
            style={{
                top,
                left,
                width,
                height,
                transform: 'translate(-50%, -50%)',
            }}
        >
            <div className="w-full h-full bg-purple-500 rounded-full opacity-40 blur-3xl animate-blob"></div>
        </div>
    );
};

BlurBlob.propTypes = {
    position: PropTypes.shape({
        top: PropTypes.string.isRequired,
        left: PropTypes.string.isRequired,
    }).isRequired,
    size: PropTypes.shape({
        width: PropTypes.string.isRequired,
        height: PropTypes.string.isRequired,
    }).isRequired,
};

export default BlurBlob;
