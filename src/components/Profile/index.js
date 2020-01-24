import React, { Component } from 'react'
import User from '../Users/User'
import Palette from '../Palette'

const Profile = () => {
    return (
        <div className="container profile">
            <User
                src='https://www.meme-arsenal.com/memes/82978a56d445cc3f46d122c539055a24.jpg'
                alt='User'
                name='John Snow'
            />
            <Palette />
        </div>
    )
}

export default Profile;