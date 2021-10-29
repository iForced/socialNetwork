import React from 'react';
import s from './Login.module.css'
import {reduxForm, Field, InjectedFormProps} from "redux-form";
import {Input} from "../../common/FormControl";
import {fieldRequired} from "../../utils/validators";
import {connect} from "react-redux";
import {loginThunk} from "../../redux/authReducer";

type FormDataType = {
    email: string
    password: string
    rememberMe: boolean
}
type MapDispatchToProsType = {
    loginThunk: (email: string, password: string, rememberMe: boolean) => void
}

function Login(props: MapDispatchToProsType) {
    const onFormSubmit = (formData: FormDataType) => {
        props.loginThunk(formData.email, formData.password, formData.rememberMe)
    }

    return (
        <div>
            <h1>Login</h1>
            <LoginReduxForm onSubmit={onFormSubmit} />
        </div>
    )
}

function LoginForm(props: InjectedFormProps<FormDataType>) {
    return (
        <form className={s.form} onSubmit={props.handleSubmit}>
            <Field component={Input} name={'email'} placeholder={'Enter email'} type={'text'} validate={[fieldRequired]} />
            <Field component={Input} name={'password'} placeholder={'Enter password'} type={'password'} validate={[fieldRequired]} />
            <Field component={Input} name={'rememberMe'} type={'checkbox'} /> Remember me
            <button>Log in</button>
        </form>
    );
}

const LoginReduxForm = reduxForm<FormDataType>({form: 'login'})(LoginForm)

export default connect(null, {loginThunk})(Login);
