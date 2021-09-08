import React from "react";
import s from './Post.module.css'
import avatar from './../../../../logo.svg'
import {PostType} from "../../../../redux/profileReducer";

function Post(props: PostType) {
    return (
        <div className={s.post}>
            <div className={s.avatar}>
                <img src={avatar} alt={"avatar"}/>
            </div>
            <div className={s.content}>
                <p>{props.text}</p>
                <button>like ({props.likes})</button>
            </div>
        </div>
    )
}

export default Post;