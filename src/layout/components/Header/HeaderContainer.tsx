import React from "react"
import { NavLink, RouteComponentProps } from "react-router-dom"
import { styled } from "styled-components"
import { Header } from "./Header"
import axios from "axios"

import { RootStateType } from "../../../redux/redux-store"
import { AuthPropsType, LogOutTC, getAuthUserDataTC, setAuthUserDataAC } from "../../../redux/auth-reducer"
import { connect } from "react-redux"
import { authApi } from "../../../api/api"


export type HeaderContainerType = {
    data: AuthPropsType
    getAuthUserDataTC: () => void
    LogOutTC: () => void
}


class HeaderContainer extends React.Component<HeaderContainerType>{
    componentDidMount() {

        this.props.getAuthUserDataTC();
        // authApi.getMe()
        //     .then(response => {
        //         if (response.status === 200) {
        //             this.props.setAuthUser(response.data.data)
        //         }
        //     })
    }

    render() {
        return (
            <Header {...this.props} />
        )
    }
}


let mapStateToProps = (state: RootStateType) => {
    return {
        data: state.auth
    }
}


export default connect(mapStateToProps, { getAuthUserDataTC, LogOutTC })(HeaderContainer)