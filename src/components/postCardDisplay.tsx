import React from 'react'
import IPost from '../interfaces/IPost'
import PostCardBodyRow from './postCardBodyRow';

const postCardDisplay: React.FC<{ post: IPost }> = ({ post }) => {

    return (
        <main className="container-fluid p-5">
            <div className="container">
                <PostCardBodyRow post={post} />
            </div>
        </main>
    )
}

export default postCardDisplay