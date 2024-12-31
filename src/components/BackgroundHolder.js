import React from 'react';
import './BackgroundHolder.scss';

export default function BackgroundHolder({ darkMode }) {
    return (
        <div className={`background-holder ${darkMode ? "dark" : ""}`}/>
    );
}