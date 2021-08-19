import React from "react";
import s from './Dialog.module.css'
import {DialogType} from "../../../redux/store";
import { NavLink } from "react-router-dom";

function Dialog(props: DialogType) {
    return (
        <div className={s.dialogs_item}>
            <NavLink to={'/messages/' + props.id} activeClassName={s.active}>{props.name}</NavLink>
        </div>
    )
}

export default Dialog;