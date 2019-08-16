import React, {Component} from 'react';
import {string, object} from 'prop-types';

class UserPost extends Component{
    render(){
        return (
            <div className="user-post-container">
                <div className="user-post-header">
                    <div className="user-post-portrait">
                        <img src={this.props.userPortrait} />
                    </div>
                </div>
                <div className="user-post-content">
                    <div className="user-post-displayname">
                        <span>{this.props.username}</span>
                    </div>
                    <div className="user-post-description">
                        <p>{this.props.text}</p>
                    </div>
                    <div className="user-post-image">
                        <img src={this.props.imgSrc} />
                    </div>
                </div>
            </div>
        )
    }
}

export default UserPost;

UserPost.propTypes = {
    imgSrc: string.isRequired,
    username: string.isRequired,
    userPortrait: string,
    text: string
}