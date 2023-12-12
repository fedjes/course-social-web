import React, { ChangeEvent } from 'react'

type ProfuleStatusType = {
    status: string
    updateStatus: (status: string) => void
}


export class ProfileStatus extends React.Component<ProfuleStatusType>{

    state = {
        edditMode: false,
        status: this.props.status
    }
    activeteEdditMode = () => {
        this.setState({
            edditMode: true
        })
    }
    deactiveteEdditMode = () => {
        this.setState({
            edditMode: false
        })
        this.props.updateStatus(this.state.status)
    }
    onStatusChange = (e: ChangeEvent<HTMLInputElement>) => {
        this.setState({
            status: e.currentTarget.value
        })
    }
    componentDidUpdate(prevProps: Readonly<ProfuleStatusType>, prevState: Readonly<{}>, snapshot?: any): void {
        if(prevProps.status !== this.props.status ) {
            this.setState({
                status: this.props.status
            })
        }
    }

    render() {
        return (
            <div>
                {!this.state.edditMode
                    ? <div><span onDoubleClick={this.activeteEdditMode}>{this.props.status}</span></div>
                    : <input onChange={this.onStatusChange} autoFocus={true} onBlur={this.deactiveteEdditMode} value={this.state.status} />}
            </div>
        )
    }
}