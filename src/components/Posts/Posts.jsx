

import { useLoaderData } from 'react-router-dom';
import Post from '../Post/Post';
import './Posts.css'

const Posts = () => {
    const posts = useLoaderData()

    return (
        <div>
            <h2>Posts: {posts.length}</h2>
            <div className='post-container'>
                {
                    posts.map(post => <Post key={posts.id} post={post}></Post>)
                }
            </div>
        </div>
    );
};

export default Posts;