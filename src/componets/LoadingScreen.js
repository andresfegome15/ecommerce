import React from 'react';
import "../styles/LoadinScreen.css"
const LoadingScreen = () => {
    return (
        <div className="overlay">
<div className="lds-spinner"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>
        </div>
        
    );
};

export default LoadingScreen;