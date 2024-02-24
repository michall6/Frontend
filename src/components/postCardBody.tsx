import React, { useState } from 'react'
import IPost from '../interfaces/IPost'
import { FaInfoCircle } from 'react-icons/fa'

const postCardBody: React.FC<{ post: IPost }> = ({ post }) => {
    const [displayMore, setdisplayMore] = useState(false)

    const buttonStyle = {
        backgroundColor: ' rgba(178, 206, 107, 0.608)',
        color: 'white',
        border: 'none',
        padding: '10px 20px',
        fontSize: '16px',
        cursor: 'pointer',
        transition: 'background-color 0.3s ease',
    };

    return (
        <div className="card-body">
            {displayMore && <>
                < div className='text-start'>
                    < h5 className='text-start my-2 '> {post.selftext}</h5>
                </div>
            </>}
            <br />

            {!displayMore && <button style={buttonStyle}
                onClick={() => { setdisplayMore(true) }}>
                <h2><FaInfoCircle /> More Info</h2>
            </button> }

            {displayMore && <button style={buttonStyle}
                onClick={() => { setdisplayMore(false) }}>
                <h2><FaInfoCircle /> Less Info</h2>
            </button>}
        </div>
    )
}

export default postCardBody