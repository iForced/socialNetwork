import React, {ChangeEvent} from 'react';

type PropsType = {
    profileStatus: string
    updateProfileStatus: (status: string) => void
}

class ProfileStatus extends React.Component<PropsType> {
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

    componentDidUpdate(prevProps: Readonly<PropsType>, prevState: Readonly<{}>) {
        if (prevProps.profileStatus !== this.props.profileStatus) {
            this.setState({
                status: this.props.profileStatus
            })
        }
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