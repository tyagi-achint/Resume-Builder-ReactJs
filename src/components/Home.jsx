import React from 'react'
import { Link } from 'react-router-dom';

export default function Home() {
    return (
        <div id='homePage'>
            <h1 >
                Swift Resume Creation:
                <br />Effortless and Fast
            </h1>

            <Link to='/newpage' className='createResume'>
                Create
            </Link>


        </div>
    )
}
