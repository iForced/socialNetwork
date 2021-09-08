import React from "react";
import s from './MyPosts.module.css'
import Post from "./Post/Post";
import {MyPostsPropsType} from "./MyPostsContainer";
import {PostType} from "../../../redux/profileReducer";

function MyPosts(props: MyPostsPropsType) {
    const postElement = props.posts.map((p: PostType) => {
        return <Post key={p.id} id={p.id} text={p.text} likes={p.likes}/>
    });

    const postInput = React.createRef<HTMLTextAreaElement>();

    const addPost = () => {
        props.addPost()
    }

    const inputChangeHandler = () => {
        props.updatePostText(postInput.current?.value)
    }

    return (
        <div className={s.posts}>
            <div className={s.add}>
                <textarea
                    ref={postInput}
                    onInput={inputChangeHandler}
                    value={props.newPostText}
                    placeholder={"Add new post"}
                />
                <button onClick={addPost}>Add post</button>
            </div>
            {postElement}
        </div>
    )
}

export default MyPosts;