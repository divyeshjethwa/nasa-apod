import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css'

export default function Home() {
    return (
        <div className='link'>
            <Link to="/nasaphoto">See into the stars!</Link>
        </div>
    )
}