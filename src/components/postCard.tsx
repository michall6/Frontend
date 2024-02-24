import React, { useEffect, useState } from 'react'
import IPost from '../interfaces/IPost'
import PostCardDisplay from './postCardDisplay';

const PostCard: React.FC<{ post: IPost }> = ({ post }) => {
    const [sentiment, setSentiment] = useState("")
    const getSentiment = (sentiment_code: string): void => {
        switch (sentiment_code) {
            case "POSITIVE":
                setSentiment("POSITIVE")
    
                break;
            case "NEGATIVE":
                setSentiment("NEGATIVE")
                break;
            case "NETURAL":
                setSentiment("NETURAL")
                break;
        }
    }

    useEffect(() => {
        getSentiment(post.sentiment)
    }, [sentiment])

    return (
        <PostCardDisplay post={post}  />
    )
}

export default PostCard