import React from 'react';
import './BackgroundHolder.css';

export default function BackgroundHolder({ darkMode }) {
    return (
        <div className={`background-holder ${darkMode ? "dark" : ""}`}/>
    );
}