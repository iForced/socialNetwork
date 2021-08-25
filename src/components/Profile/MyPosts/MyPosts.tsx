import React from "react";
import s from './MyPosts.module.css'
import Post from "./Post/Post";
import {ActionType, PostType} from "../../../redux/store";

type PropsType = {
    posts: Array<PostType>
    newPostText: string
    dispatch: (action: { type: ActionType, text?: string }) => void
}

function MyPosts(props: PropsType) {
    const postElement = props.posts.map((p: PostType) => {
        return <Post key={p.id} id={p.id} text={p.text} likes={p.likes}/>
    });

    const postInput = React.createRef<HTMLTextAreaElement>();

    const addPost = () => {
        props.dispatch({type: "ADD-POST"})
        props.dispatch({type: "UPDATE-POST-TEXT", text: ''})
    }

    const inputChangeHandler = () => {
        props.dispatch({type: "UPDATE-POST-TEXT", text: postInput.current?.value})
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