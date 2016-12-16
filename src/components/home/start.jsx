import React from 'react'
import { Link } from 'react-router'

const Start = () => (
    <div>

        {
            document.title = 'Start'
        }
        
        <h2>Welcome to Questionnaire</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rerum, deserunt, possimus. Odio corrupti quae ea aliquid nostrum similique impedit veniam sed molestias, voluptatem sint, culpa nemo. Odio, eos cumque dolores?</p>
        <Link to="/questions">Start</Link>

    </div>
)

export default Start