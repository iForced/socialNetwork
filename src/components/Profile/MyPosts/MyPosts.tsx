import React from "react";
import s from './MyPosts.module.css'
import Post from "./Post/Post";
import {MyPostsPropsType} from "./MyPostsContainer";
import {PostType} from "../../../redux/profileReducer";
import {Field, InjectedFormProps, reduxForm} from "redux-form";

type AddPostFormDataType = {
    postText: string
}

function MyPosts(props: MyPostsPropsType) {
    const postElement = props.posts.map((p: PostType) => {
        return <Post key={p.id} id={p.id} text={p.text} likes={p.likes}/>
    });

    const postInput = React.createRef<HTMLTextAreaElement>();

    const addPost = (values: AddPostFormDataType) => {
        props.addPost(values.postText)
    }

    return (
        <div className={s.posts}>
            <AddPostReduxForm onSubmit={addPost} />
            {postElement}
        </div>
    )
}

function AddPostForm(props: InjectedFormProps<AddPostFormDataType>) {


    return (
        <form className={s.add} onSubmit={props.handleSubmit}>
                <Field
                    name={'postText'}
                    component={'textarea'}
                    placeholder={"Add new post"}
                />
            <button>Add post</button>
        </form>
    );
}

const AddPostReduxForm = reduxForm<AddPostFormDataType>({form: 'profileAddPost'})(AddPostForm)

export default MyPosts;