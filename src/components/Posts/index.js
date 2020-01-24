import React, { Component } from 'react'
// import Post from './Post'
import User from '../Users/User'
import InstaService from '../../services/instaService'
import ErrorMessage from '../Error'


export default class Posts extends Component {

    state = {
        posts: [],
        error: false
    }

    componentDidMount() {
        this.updatePosts()
    }

    InstaService = new InstaService();

    updatePosts() {
        this.InstaService.getAllPosts()
            .then(this.onPostsLoaded)
            .catch(this.onError)
    }

    onPostsLoaded = (posts) => {
        this.setState({
            posts,
            error: false
        })
        console.log(posts)
    }

    onError = () => {
        this.setState({
            error: true
        })
        console.log('Owibka')
    }

    renderItems(arr) {
        return arr.map(item => {
            let { name, altname, photo, src, alt, descr, id } = item

            return (
                <div key={id} className="post">
                    <User
                        src={photo}
                        alt={alt}
                        min
                        name={name}
                    />
                    <img src={src} alt={alt}></img>
                    <div className="post__name">
                        {name}
                    </div>
                    <div className="post__descr">
                        {descr}
                    </div>
                </div>
            )
        })
    }

    render() {
        const { error, posts } = this.state

        const items = this.renderItems(posts)
        return (
            <div className="left" >
                {error ? < ErrorMessage /> : items}
            </div>
        )
    }
}


