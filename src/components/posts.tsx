import React, {  ReactElement, useContext} from 'react'
import Loader from './loader';
import PostCard from './postCard';
import { MainContext } from '../context/mainContext';
import NoResultFoundImg from '../images/NoResultFound.jpg'


const Posts: React.FC = (): ReactElement => {
    const { isLoading, posts } = useContext(MainContext);

    return (
        <div >
            {isLoading && <Loader />}
            {!isLoading &&
                <div >
                    {posts && posts.map(post => <PostCard post={post} key={post.id}/>) } <br />
                    {posts && posts.length == 0 && <img src={NoResultFoundImg} />}
                </div>
            }
        </div>
    )


}

export default Posts