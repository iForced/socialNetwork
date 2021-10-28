import React, {DetailedHTMLProps} from 'react';
import s from './FormControl.module.css'
import {WrappedFieldProps} from "redux-form/lib/Field";

export const FormControl = (props: WrappedFieldProps & DetailedHTMLProps<any, any>) => {
    const {meta, input} = props
    return (
        <div>
            {props.children}
        </div>
    );
};

export const TextArea = (props: WrappedFieldProps & DetailedHTMLProps<any, any>) => {
    const {meta, input} = props
    return (
        <>
            <textarea {...input} {...props} className={s.textArea + ' ' + (meta.touched && meta.error && s.error)}/>
            {meta.touched && meta.error && <div className={meta.error && s.errorText}>{meta.error}</div>}
        </>
    )
}
export const Input = (props: WrappedFieldProps & DetailedHTMLProps<any, any>) => {
    const {meta, input} = props
    return (
        <>
            <input {...input} {...props} className={s.textArea + ' ' + (meta.touched && meta.error && s.error)}/>
            {meta.touched && meta.error && <div className={meta.error && s.errorText}>{meta.error}</div>}
        </>
    )
}
