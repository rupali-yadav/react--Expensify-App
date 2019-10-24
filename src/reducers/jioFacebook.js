const jioFacebookReducerDefaultstate = {
    postList: [
        // {
        //     "id": "c6f73381-7942-43d8-ab46-5a86c4165a85",
        //     "description": "hi",
        //     "likesCount": 0,
        //     "commentsCount": 0,
        //     "comments": [
        //         "jo",
        //         "lo"
        //     ]
        // }
    ],
    userDetails: {
        place: "",
        description: "",
        name: "Rupali Yadav"
    },
    showUserDetailsTab: false

};
const jioFacebookReducer = (state = jioFacebookReducerDefaultstate, action) => {
    switch (action.type) {
        case "SHOW_USER_DETAILS":
            return{
                ...state,
                showUserDetailsTab: action.showUserDetailsTab
            }
        case "CREATE_POST":
            return {
                ...state,
                postList: [
                    ...state.postList,
                    action.post
                ]
            };
        case "DELETE_POST":
            const postList = state.postList.filter((post) => {
                if (post.id !== action.id)
                    return true;
            });
            return {
                ...state,
                postList: [
                    ...postList
                ]
            };
        case "EDIT_PROFILE_INFO":
            return {
                ...state,
                userDetails: {
                    ...action.updates
                }
            };
        case "LIKE":
            var newPostList = state.postList.map((post) => {
                if (post.id === action.id) {
                    post.likesCount++;
                }
                return post;
            });
            return {
                ...state,
                postList: [
                    ...newPostList
                ]
            };
        case "COMMENT":
            var newPostList = state.postList.map((post) => {
                if (post.id === action.id) {
                    // post.comments.push(action.comment);
                    let comments = post.comments.slice();
                    comments.splice(comments.length + 1, 0, action.comment);
                    post.comments.splice(0, post.comments.length, ...comments);

                }
                return post;
            });
            return {
                ...state,
                postList: [
                    ...newPostList
                ]
            };
        default:
            return state;
    }
}
export default jioFacebookReducer;