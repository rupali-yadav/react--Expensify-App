import React from 'react';
import {
    connect
} from 'react-redux';
import UserProfileDetails from "./UserProfileDetails";
import JioFacebookPostsList from './JioFacebookPostsList';
import LikesSection from "./LikesSection";
import { createPost, showUserDetails } from "../actions/jioFacebook";
class JioFacebookPage extends React.Component{
    handleCreatePost = ()=>{
        this.props.dispatch(createPost(this.state.NewPostDescription));
         this.setState(() => ({
             NewPostDescription: ""
         }));
    }
    handleCreatePostInput=(e)=>{
        const desc= e.target.value;
        this.setState(()=>({
            NewPostDescription: desc
        }));
    }
    handleProfilePic =()=>{
        this.props.dispatch(showUserDetails(!this.props.showUserDetailsTab));
    }
    state={
        NewPostDescription:"",
    };
    render(){
        return(
            <div className="jioFacebookPageContainer"> 
                <div className="pageHeader">
                    <h3>Welcome to ABC</h3>
                    <div className="headerActions">
                        <div className="profilePicContainer" onClick={this.handleProfilePic}>
                            <span></span>
                            <p>{this.props.userDetails.name}</p>
                        </div>
                        <div className="home">home</div>
                    </div>
                    

                    {
                        this.props.showUserDetailsTab &&
                        <div className="UserDetailsPopUp">
                            <UserProfileDetails />
                        </div>
                    }
                </div>
                
                <div className="jioFacebookPageContentWrapper">
                    <div className="leftContentContainer">
                        <div className="createPostContainer">
                            <span>Create Post</span>
                            <div className="creatPostInput">
                                <input 
                                    type = "text"
                                    placeholder = "Write something here..."
                                    onChange={this.handleCreatePostInput} 
                                    value={this.state.NewPostDescription} 
                                />
                            <button onClick={this.handleCreatePost}>post</button>
                            </div>
                        </div>
                        <div className="allSectionsContainer">
                            <JioFacebookPostsList />
                        </div>
                    </div>
                    <div className="rightContentContainer">
                            <LikesSection />
                    </div>
                </div>
                
            </div>
        )
    }
}

const mapStateToProps=(state)=>{
 return {
     userDetails: state.jioFacebook.userDetails,
     showUserDetailsTab:state.jioFacebook.showUserDetailsTab
 }
}
// when you want to access dispatch() you connect 
// to the store and the store makes it available for the components in the props
export default connect(mapStateToProps)(JioFacebookPage);