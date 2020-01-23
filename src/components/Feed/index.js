import React from 'react'
import Users from '../Users'
import Posts from '../Posts'


const Feed = () => {
    return (
        <div className="container feed">
            <Posts />
            <Users />
        </div>
    )
}

export default Feed;