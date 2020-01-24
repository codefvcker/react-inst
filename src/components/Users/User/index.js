import React from 'react'

const User = ({ min, src, alt, name }) => {
    return (
        <a href="#" className={min ? 'user min' : 'user'}>
            <img src={src} alt={alt}></img>
            <div>{name}</div>
        </a>
    )
}

export default User;