import React from 'react'
import { Profile } from './Profile'
import { RootStateType } from '../../../redux/redux-store'
import { connect } from 'react-redux'
import { PhotoType } from '../../../redux/state'
import {  RouteComponentProps, withRouter } from 'react-router-dom'
import { getStatusTC, getUserProfileTC } from '../../../redux/profile-reducer'
import { withAuthRedirect } from '../../../hoc/withAuthRedirect'
import { compose } from 'redux'
import { updateStatusTC } from './../../../redux/profile-reducer';




type ContactType = {
    github: string | null
    vk: string | null
    facebook: string | null
    instagram: string | null
    twitter: string | null
    website: string | null
    youtube: string | null
    mainLink: string | null
}

export type GetProfileType = {
    aboutMe: string
    userId: number
    lookingForAJob: boolean
    lookingForAJobDescription: string
    fullName: string
    contacts: ContactType
    photos: PhotoType
}

export type ProfileContainerType = {
    // setUsersProfile: (profile: GetProfileType) => void
    getUserProfileTC: (userId: string) => void
    getStatusTC: (userId: string) => void
    profile: GetProfileType | null
    // isAuth: boolean | null
    status: string
    updateStatusTC: (status: string) => void
}



class ProfileContainer extends React.Component<ProfileContainerType & RouteComponentProps<{ userId: string }>> {

    componentDidMount() {
        let userIdNew = this.props.match.params.userId
        if (!userIdNew) {
            userIdNew = '30115'
        }
        this.props.getUserProfileTC(userIdNew)
        // userApi.getProfile(userIdNew)
        //     .then(response => {
        //         this.props.setUsersProfile(response.data)
        //     })
        this.props.getStatusTC(userIdNew)
    }
    render() {
        
        return (
            <Profile {...this.props} />
        )
    }

}

// let authRedirectComponent = withAuthRedirect(ProfileContainer);

let mapStateToProps = (state: RootStateType) => ({
    profile: state.profilePage.profile,
    status: state.profilePage.status
})

export default compose<React.ComponentType>(
    connect(mapStateToProps, {
        // setUsersProfile: setUsersProfileAC,
        getUserProfileTC,
        getStatusTC,
        updateStatusTC
    }),
    withRouter,
    withAuthRedirect,
    )(ProfileContainer)
// const WithRouterProfileContainer = withRouter<ProfileContainerType & RouteComponentProps<{ userId: string }>,any>(authRedirectComponent)

// export default connect(mapStateToProps, {
//     // setUsersProfile: setUsersProfileAC,
//     getUserProfileTC
// })(WithRouterProfileContainer);