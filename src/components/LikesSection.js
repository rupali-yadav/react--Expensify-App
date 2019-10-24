import React from "react";
import {connect} from 'react-redux';

const LikesSection = (props) => (
    <div className="facebookSectionContainer">
        <h2>My wall Information</h2>
        <h3>total posts: {props.postsList.length}</h3> 
    {
        props.postsList &&
        props.postsList.map((post,index)=>{
            return <div key={post.id}>
                        <h2>post-{index+1}</h2>
                        <h3>Likes: {post.likesCount}</h3>    
                        <h3>Comments: {post.comments.length}</h3>
                    </div> 
        })
    }
        
    </div>
);
const mapStateToProps=(state)=>{
    return{
        totalPosts: state.jioFacebook.postsCount,
        postsList:state.jioFacebook.postList
    }
}
export default connect(mapStateToProps)(LikesSection);