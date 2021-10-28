import React from 'react';
import s from './Login.module.css'
import {reduxForm, Field, InjectedFormProps} from "redux-form";
import {Input} from "../../common/FormControl";
import {fieldRequired, maxLengthCreator} from "../../utils/validators";

type FormDataType = {
    login: string
    password: string
    rememberMe: boolean
}

const maxLength10 = maxLengthCreator(10)

function Login() {
    const onFormSubmit = (formData: FormDataType) => {
        console.log(formData)
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
            <Field component={Input} name={'login'} placeholder={'Enter login'} type={'text'} validate={[fieldRequired, maxLength10]} />
            <Field component={Input} name={'password'} placeholder={'Enter password'} type={'text'} validate={[fieldRequired, maxLength10]} />
            <Field component={Input} name={'rememberMe'} type={'checkbox'} validate={[fieldRequired, maxLength10]} /> Remember me
            <button>Log in</button>
        </form>
    );
}

const LoginReduxForm = reduxForm<FormDataType>({form: 'login'})(LoginForm)

export default Login;
