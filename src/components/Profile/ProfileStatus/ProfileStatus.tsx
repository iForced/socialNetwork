import React, {ChangeEvent} from 'react';

type MapStateToPropsType = {
    profileStatus: string
    updateProfileStatus: (status: string) => void
}

class ProfileStatus extends React.Component<MapStateToPropsType> {
    state = {
        editMode: false,
        status: this.props.profileStatus
    }
    editModeOn = () => {
        this.setState({
            editMode: true
        })
    }
    editModeOff = () => {
        this.setState({
            editMode: false
        })
        this.props.updateProfileStatus(this.state.status)
    }
    // TODO не перерисовывается компонет при смене статуса. Статус сетается в редакс стейт
    onChangeStatus = (e: ChangeEvent<HTMLInputElement>) => {
        this.setState({
            status: e.currentTarget.value
        })
    }

    render() {
        return (
            <div>
                {
                    this.state.editMode
                        ? <input
                            value={this.state.status}
                            autoFocus
                            onBlur={this.editModeOff}
                            onChange={this.onChangeStatus}
                        />
                        : <span onDoubleClick={this.editModeOn}>{this.props.profileStatus}</span>
                }
            </div>
        );
    }
}

export default ProfileStatus