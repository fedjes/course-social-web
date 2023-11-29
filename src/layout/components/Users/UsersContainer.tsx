import React from 'react'
import { connect } from 'react-redux';

import { folowAC, unfolowAC, setMoreUsersAC, setCurrentPageAC, setUsersCountAC, toogleFetchingAC, toogleIsFollowingProgressAC, getUsersTC, unfollowTC, followTC } from '../../../redux/users-reducer';
import { usersTypeWithLocation } from '../../../redux/state';
import { RootStateType, StoreDispatch, store } from '../../../redux/redux-store';

import { UsersCleane } from './UsersCleane';
import styled, { keyframes } from 'styled-components';
import { userApi } from '../../../api/api';


type UsersPageType = {
    unfollow: (userId: number) => void
    follow: (userId: number) => void
    setCurrentPage: (currentPage: number) => void
    users: usersTypeWithLocation[]
    userCount: number
    pageSize: number
    currentPage: number
    isFetching: boolean
    toogleFollowing: (userId: number, isFollowing: boolean) => void
    followingInProgress: number[]
    getUsersTC: (currentPage: number, pageSize: number) => void
    followTC: (userId: number) => void
    unfollowTC: (userId: number) => void
}

class UsserContainer extends React.Component<UsersPageType> {
    componentDidMount() {
        this.props.getUsersTC(this.props.currentPage, this.props.pageSize)
    }
    onPageHandler = (el: number) => {
        this.props.getUsersTC(el, this.props.pageSize)
    }

    render() {
        const { users, unfollow, follow, userCount, pageSize, currentPage, isFetching, toogleFollowing, followingInProgress, followTC, unfollowTC } = this.props;

        return (
            <>
                {isFetching ? <Loader /> : null}
                <UsersCleane users={users}
                    userCount={userCount}
                    pageSize={pageSize}
                    currentPage={currentPage}
                    follow={followTC}
                    unfollow={unfollowTC}
                    onPageHandler={this.onPageHandler}
                    toogleFollowing={toogleFollowing}
                    followingInProgress={followingInProgress}
                    
                />
            </>
        )
    }
}




const mapStateToProps = (state: RootStateType) => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        userCount: state.usersPage.userCount,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching,
        followingInProgress: state.usersPage.followingInProgress

    }
}

// const mapDispatchToProps = (dispatch: StoreDispatch) => {
//     return {
//         follow: (userId: number) => { dispatch(folowAC(userId)) },
//         unfollow: (userId: number) => { dispatch(unfolowAC(userId)) },
//         setUsersAll: (users: usersTypeWithLocation[]) => { dispatch(setMoreUsersAC(users)) },
//         setCurrentPage: (currentPage: number) => { dispatch(setCurrentPageAC(currentPage)) },
//         setUsersCount: (totalCount: number) => { dispatch(setUsersCountAC(totalCount)) },
//         toogleFetching: (isFetching: boolean) => { dispatch(toogleFetchingAC(isFetching)) },
//     }
// }

export const UsersContainer = connect(mapStateToProps, {
    follow: folowAC,
    unfollow: unfolowAC,
    // setUsersAll: setMoreUsersAC,
    setCurrentPage: setCurrentPageAC,
    // setUsersCount: setUsersCountAC,
    // toogleFetching: toogleFetchingAC,
    toogleFollowing: toogleIsFollowingProgressAC,
    unfollowTC,
    followTC,
    getUsersTC
})(UsserContainer);   //Users


export const rotate360 = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`;

export const Loader = styled.div`
  width: 108px;
  height: 108px;
  border: 4px solid purple;
  border-bottom: none;
  border-radius: 50%; 
  animation: ${rotate360} 1s infinite;
`;

