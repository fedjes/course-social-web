import React from 'react'
import { Profile } from './Profile'
import axios from 'axios'
import { RootStateType } from '../../../redux/redux-store'
import { setUsersProfileAC } from '../../../redux/profile-reducer'
import { connect } from 'react-redux'
import { PhotoType } from '../../../redux/state'
import { RouteComponentProps, withRouter } from 'react-router-dom'


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
    setUsersProfile: (profile: GetProfileType) => void
    profile: GetProfileType | null
}



class ProfileContainer extends React.Component<ProfileContainerType & RouteComponentProps<{ userId: string }>> {

    componentDidMount() {
        let userIdNew = this.props.match.params.userId
        if (!userIdNew) {
            userIdNew = '2'
        }
        console.log(userIdNew);
        
        axios.get<GetProfileType>(`https://social-network.samuraijs.com/api/1.0/profile/${userIdNew}`)
            .then(response => {
                this.props.setUsersProfile(response.data)
            })
    }
    render() {
        return (
            <Profile {...this.props} />
        )
    }

}

let mapStateToProps = (state: RootStateType) => ({
    profile: state.profilePage.profile
})


const WithRouterProfileContainer = withRouter(ProfileContainer)

export default connect(mapStateToProps, {
    setUsersProfile: setUsersProfileAC,
})(WithRouterProfileContainer);