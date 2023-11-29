import React from 'react'
import { Profile } from './Profile'
import { RootStateType } from '../../../redux/redux-store'
import { connect } from 'react-redux'
import { PhotoType } from '../../../redux/state'
import {  RouteComponentProps, withRouter } from 'react-router-dom'
import { getUserProfileTC } from '../../../redux/profile-reducer'
import { withAuthRedirect } from '../../../hoc/withAuthRedirect'



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
    profile: GetProfileType | null
    // isAuth: boolean | null
}



class ProfileContainer extends React.Component<ProfileContainerType & RouteComponentProps<{ userId: string }>> {

    componentDidMount() {
        let userIdNew = this.props.match.params.userId
        if (!userIdNew) {
            userIdNew = '2'
        }
        this.props.getUserProfileTC(userIdNew)
        // userApi.getProfile(userIdNew)
        //     .then(response => {
        //         this.props.setUsersProfile(response.data)
        //     })
    }
    render() {
        return (
            <Profile {...this.props} />
        )
    }

}

let authRedirectComponent = withAuthRedirect(ProfileContainer);

let mapStateToProps = (state: RootStateType) => ({
    profile: state.profilePage.profile
})


const WithRouterProfileContainer = withRouter<ProfileContainerType & RouteComponentProps<{ userId: string }>,any>(authRedirectComponent)

export default connect(mapStateToProps, {
    // setUsersProfile: setUsersProfileAC,
    getUserProfileTC
})(WithRouterProfileContainer);