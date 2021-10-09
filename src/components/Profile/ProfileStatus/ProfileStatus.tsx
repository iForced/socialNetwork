import React from 'react';
import {AppStateType} from "../../../redux/reduxStore";
import {connect} from "react-redux";
import {UserProfileType} from "../../../redux/profileReducer";

type MapStateToPropsType = {
    userProfile: UserProfileType | null
    profileStatus: string
}

class ProfileStatus extends React.Component<MapStateToPropsType> {
    state = {
        editMode: false
    }
    editModeOn() {
        this.setState({
            editMode: true
        })
    }
    editModeOff() {
        this.setState({
            editMode: false
        })
    }

    render() {
        return (
            <div>
                {
                    this.state.editMode
                        ? <input value={this.props.profileStatus} autoFocus onBlur={this.editModeOff.bind(this)}/>
                        : <span onDoubleClick={this.editModeOn.bind(this)}>{this.props.profileStatus}</span>
                }
            </div>
        );
    }
}

const mapStateToProps = (state: AppStateType): MapStateToPropsType => {
    return {
        userProfile: state.profilePage.userProfile,
        profileStatus: state.profilePage.profileStatus
    }
}

export default connect(mapStateToProps)(ProfileStatus);