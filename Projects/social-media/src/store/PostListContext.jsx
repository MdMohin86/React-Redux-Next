import { act, useReducer } from "react";
import { createContext } from "react";

export const PostList = createContext({
    postList : [],
    addPost : () => {},
    deletePost : () => {}
})

let postListReducer = (currPostList, action) => {
    let newPostList = currPostList;
    if(action.type === "DELETE_POST"){
        newPostList = currPostList.filter((post) => post.id !== action.payload.postId)
    }else if(action.type === "ADD_POST"){
        newPostList = [action.payload, ...currPostList]
    }
    return newPostList;
}

const PostListProvider = ({children}) => {

    const [postList , dispatchPostList] = useReducer(postListReducer, DEFAULT_POST_LIST);

    const addPost = (userId, postTitle, postBody, reaction, tags) => {
        console.log(` ${userId} ${postTitle} ${postBody} ${reaction} ${tags}`);
        dispatchPostList({
            type: "ADD_POST",
            payload: {
                id: Date.now,
                title: postTitle,
                body: postBody,
                reactions: reaction,
                userId: userId,
                tags: tags,
            }
        })
    };

    const deletePost = (postId) => {
        console.log(`You deleted the product whose id is ${postId}`)
        dispatchPostList({
            type:"DELETE_POST",
            payload: {
                postId
            }
        })
    }

    return <PostList.Provider value = {{
        postList, 
        addPost,
        deletePost
    }}>

        {children}
    </PostList.Provider>


}
const DEFAULT_POST_LIST = [
    {
        id: '1',
        title: 'I woke up in the morning',
        body: 'Everyday I wake up in the to make fulfill my dreams and to obey Allah"s order which is really must thing to do in our life',
        reactions: 3,
        userId: 'user-9',
        tags: ['Sunrise','Morning','Holiday'],
    },
    {
        id: '2',
        title: 'Going for the Trip',
        body: 'Guys we are going for the trip with my family who all are my best frieds and I really love to go with them',
        reactions: 37,
        userId: 'user-7',
        tags: ['Vacation','Trip','Holiday'],
    },
    {
        id: '3',
        title: 'Going to the gym',
        body: 'As after a long time of thinking today I am going for the Gym to body building and I hope I will do it persistently',
        reactions: 43,
        userId: 'user-2',
        tags: ['Gym','Body Building','Biceps'],
    }
]

export default PostListProvider 
