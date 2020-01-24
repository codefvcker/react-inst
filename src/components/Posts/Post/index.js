import React from 'react'
import User from '../../Users/User'

const Post = ({ src, alt }) => {
    return (
        <div className="post">
            <User
                src='https://www.meme-arsenal.com/memes/82978a56d445cc3f46d122c539055a24.jpg'
                alt='User'
                name='John Snow'
                min
            />
            <img src={src} alt={alt}></img>
            <div className="post__name">
                some acc
            </div>
            <div className="post__descr">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            </div>
        </div>
    )
}

export default Post;