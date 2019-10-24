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
                    <h1>Welcome to ABC</h1>
                    <div className="profilePicContainer" onClick={this.handleProfilePic}>
                        <span></span>
                        <p>{this.props.userDetails.name}</p>
                    </div>

                    {
                        this.props.showUserDetailsTab &&
                        <div className="UserDetailsPopUp">
                            <UserProfileDetails />
                        </div>
                    }
                </div>   
                <input 
                 type = "text"
                 placeholder = "tell us how was your day"
                 onChange={this.handleCreatePostInput} 
                 value={this.state.NewPostDescription}/>
                <button onClick={this.handleCreatePost}>create post</button>
                <div className="allSectionsContainer">
                    <JioFacebookPostsList />
                    <LikesSection />
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