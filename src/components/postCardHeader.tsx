import React from 'react'
import IPost from '../interfaces/IPost'
const postCardHeader: React.FC<{ post: IPost }> = ({ post }) => {

    return (
        <div className="container">
            <h2 className='text-start fs-5 col-9'> Title : {post.title}</h2>
            <h5 className=" pt-3 mt-3"> Sentiment:  {post.sentiment}</h5>
        </div>
    )
}

export default postCardHeader