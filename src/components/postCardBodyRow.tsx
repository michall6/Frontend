import React from 'react'
import IPost from '../interfaces/IPost'
import PostCardBody from './postCardBody'
import PostCardHeader from './postCardHeader'

const PostCardBodyRow: React.FC<{ post: IPost }> = ({ post }) => {

    return (
        <div className="row justify-content-between d-flex w-10 ">
       <PostCardHeader post={post}/>
        <div className="box box1 col-md-4 mb-5" data-aos="fade-up" data-aos-duration="700" >
            <PostCardBody post={post} />
        </div>
    </div>

    )
}

export default PostCardBodyRow