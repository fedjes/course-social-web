import React from "react"
import { NavLink, RouteComponentProps } from "react-router-dom"
import { styled } from "styled-components"
import { Header } from "./Header"
import axios from "axios"

import { RootStateType } from "../../../redux/redux-store"
import { AuthPropsType, setAuthUserDataAC } from "../../../redux/auth-reducer"
import { connect } from "react-redux"


export type HeaderContainerType = {
    data:AuthPropsType
    setAuthUser: (data:AuthPropsType) => void
    
}


class HeaderContainer extends React.Component<HeaderContainerType>{
    componentDidMount() {
        

        axios.get<HeaderContainerType>(`https://social-network.samuraijs.com/api/1.0/auth/me`, { withCredentials: true })
            .then(response => {
               if (response.status === 200) {
                   this.props.setAuthUser(response.data.data)
               } 
            })
    }

    render() {
        return (
            <Header {...this.props} />
        )
    }
}


let mapStateToProps = (state: RootStateType) => {
    return {
        data:state.auth
    }
}


export default connect(mapStateToProps, { setAuthUser: setAuthUserDataAC })(HeaderContainer)