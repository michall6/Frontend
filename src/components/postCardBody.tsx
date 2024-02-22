import React, { useState } from 'react'
import IPost from '../interfaces/IPost'

const PostCard: React.FC<{ post: IPost }> = ({ post }) => {
    const [sentiment] = useState("")
    const [displayMore] = useState(false)

    return (
        <div className="card-body">
            <h5 className='  text-start my-2 '>{post.selftext}</h5>
            {displayMore && <>
                <div className='text-start'>
                    <h5 className=" pt-3 mt-3">Sentiment:  {sentiment}</h5>
                </div>
            </>}
        </div>
    )
}

export default PostCard