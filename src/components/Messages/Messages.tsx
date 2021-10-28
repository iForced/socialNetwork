import React from "react";
import s from './Messages.module.css'
import Dialog from "./Dialog/Dialog";
import Message from "./Message/Message";
import {DialogType, MessagesPropsType, MessageType} from "./MessagesContainer";
import {Field, InjectedFormProps, reduxForm} from "redux-form";

type FormDataType = {
    messageText: string
}

function Messages(props: MessagesPropsType) {
    const dialogElement = props.dialogs.map((d: DialogType) => {
        return <Dialog key={d.id} name={d.name} id={d.id}/>
    });
    const messageElement = props.messages.map((m: MessageType) => {
        return <Message key={m.id} text={m.text} id={m.id}/>
    });

    const messageInput = React.createRef<HTMLTextAreaElement>();

    const addMessage = (values: FormDataType) => {
        props.addMessage(values.messageText)
    }

    return (
        <div className={s.messages}>
            <div className={s.dialogs_list}>
                {dialogElement}
            </div>
            <div className={s.messages_list}>
                {messageElement}
            </div>
            <AddMessageReduxForm onSubmit={addMessage} />
        </div>
    )
}

function AddMessageForm(props: InjectedFormProps<FormDataType>) {
    return (
        <form onSubmit={props.handleSubmit}>
            <Field component={'textarea'} name={'messageText'} placeholder={'Add new message'} />
            <button>Add message</button>
        </form>
    );
}

const AddMessageReduxForm = reduxForm<FormDataType>({form: 'messagesAddMessage'})(AddMessageForm)

export default Messages;