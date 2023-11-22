import React from 'react'
import { connect } from 'react-redux';

import { folowAC, unfolowAC, setMoreUsersAC, setCurrentPageAC, setUsersCountAC, toogleFetchingAC } from '../../../redux/users-reducer';
import { usersTypeWithLocation } from '../../../redux/state';
import { RootStateType, StoreDispatch, store } from '../../../redux/redux-store';

import { UsersCleane } from './UsersCleane';
import styled, { keyframes } from 'styled-components';
import {userApi } from '../../../api/api';


type UsersPageType = {
    unfollow: (userId: number) => void
    follow: (userId: number) => void
    setUsersAll: (users: usersTypeWithLocation[]) => void
    setCurrentPage: (currentPage: number) => void
    setUsersCount: (totalCount: number) => void
    users: usersTypeWithLocation[]
    userCount: number
    pageSize: number
    currentPage: number
    isFetching: boolean
    toogleFetching: (isFetching: boolean) => void
}

class UsserContainer extends React.Component<UsersPageType> {
    componentDidMount() {
        this.props.toogleFetching(true)
        userApi.getUsers(this.props.currentPage, this.props.pageSize)
            .then(data => {
                debugger
                this.props.toogleFetching(false)
                this.props.setUsersAll(data.items)
                this.props.setUsersCount(data.totalCount)
            })
    }
    onPageHandler = (el: number) => {
        this.props.setCurrentPage(el);
        this.props.toogleFetching(true);
        userApi.getUsers(el, this.props.pageSize)
            .then(data => {
                this.props.toogleFetching(false)
                this.props.setUsersAll(data.items)
            })
    }

    render() {
        const { users, unfollow, follow, userCount, pageSize, currentPage, isFetching } = this.props;
       
        return (
            <>
                {isFetching ? <Loader /> : null}
                <UsersCleane users={users}
                    userCount={userCount}
                    pageSize={pageSize}
                    currentPage={currentPage}
                    follow={follow}
                    unfollow={unfollow}
                    onPageHandler={this.onPageHandler}
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
        isFetching: state.usersPage.isFetching
        
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

export const UsersContainer = connect(mapStateToProps,{
    follow: folowAC,
    unfollow: unfolowAC,
    setUsersAll: setMoreUsersAC,
    setCurrentPage: setCurrentPageAC,
    setUsersCount: setUsersCountAC,
    toogleFetching: toogleFetchingAC,
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

