import React from "react";
import s from './MyPosts.module.css'
import Post from "./Post/Post";
import {PostType, ProfilePageType} from "../../../redux/state";

function MyPosts(props: ProfilePageType) {
    const postElement = props.posts.map((p: PostType) => {
        return <Post id={p.id} text={p.text} likes={p.likes}/>
    });

    const postInput = React.createRef<HTMLTextAreaElement>();

    const addPost = () => {
        props.addPost();
        props.updateNewPostText('');
    }

    const inputChangeHandler = () => {
        postInput.current && props.updateNewPostText(postInput.current.value);
    }

    return (
        <div className={s.posts}>
            <div className={s.add}>
                <textarea ref={postInput}
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