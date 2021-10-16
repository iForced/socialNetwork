import React from 'react';

type MapStateToPropsType = {
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

export default ProfileStatus