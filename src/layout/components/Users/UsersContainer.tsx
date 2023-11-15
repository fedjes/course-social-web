import React from 'react'
import { connect } from 'react-redux';

import { folowAC, unfolowAC, setMoreUsersAC, setCurrentPageAC, setUsersCountAC } from '../../../redux/users-reducer';
import { usersTypeWithLocation } from '../../../redux/state';
import { RootStateType, StoreDispatch, store } from '../../../redux/redux-store';

import axios from 'axios';
import { UsersCleane } from './UsersCleane';


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

}

class UsserContainer extends React.Component<UsersPageType> {
    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
            .then(response => {
                this.props.setUsersAll(response.data.items)
                this.props.setUsersCount(response.data.totalCount)
            })
    }
    onPageHandler = (el:number) => {
        this.props.setCurrentPage(el);
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${el}&count=${this.props.pageSize}`)
            .then(response => {
                this.props.setUsersAll(response.data.items)
            })
    }
    // getUsers = () => {
    // const { setUsersAll } = this.props
    // if (this.props.users.length === 0) {
    //     axios.get('https://social-network.samuraijs.com/api/1.0/users').then(response => {
    //         setUsersAll(response.data.items)
    //     })
    // }
    //}
    render() {
        const { users, unfollow, follow, userCount, pageSize, currentPage } = this.props;
        // const pagesCount = Math.ceil(userCount / pageSize);
        // const pages = [];
        // for (let i = 1; i < pagesCount; i++) {
        //     pages.push(i)
        // }
        return (
            <UsersCleane users={users} userCount={userCount} pageSize={pageSize} currentPage={currentPage} follow={follow} unfollow={unfollow} onPageHandler={this.onPageHandler}/>
            // <div>
            //     <div>
            //         {/* add class for selected page , in map if currentPage === el ? style : ''     <span className={currentPage === el ? StyledSpan : ''}>{el}</span>*/}
            //         {pages.map(el => el === currentPage
            //             ? <StyledSpan onClick={()=>this.onPageHandler(el) }>{el}</StyledSpan>
            //             : <StyledSpanDefoult onClick={() => { this.onPageHandler(el) }}>{el}</StyledSpanDefoult>)}
            //     </div>
            //     {
            //         users.map(el => <div key={el.id} >
            //             <span>
            //                 <div>
            //                     <img src={el.photos.small !== null ? el.photos.small : userAva} alt="imgUser" />
            //                 </div>
            //                 <div>
            //                     {el.folowed
            //                         ? <button onClick={() => { unfollow(el.id) }}>unfollow</button>
            //                         : <button onClick={() => { follow(el.id) }}>follow</button>}
            //                 </div>
            //             </span>
            //             <span>
            //                 <span>
            //                     <div>{el.name}</div>
            //                     <div>{el.status}</div>
            //                 </span>
            //                 <span>
            //                     <div>{'el.location.city'}</div>
            //                     <div>{'el.location.country'}</div>
            //                 </span>
            //             </span>
            //         </div>)
            //     }
            // </div >
        )
    }
}




const mapStateToProps = (state: RootStateType) => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        userCount: state.usersPage.userCount,
        currentPage: state.usersPage.currentPage
    }
}

const mapDispatchToProps = (dispatch: StoreDispatch) => {
    return {
        follow: (userId: number) => { dispatch(folowAC(userId)) },
        unfollow: (userId: number) => { dispatch(unfolowAC(userId)) },
        setUsersAll: (users: usersTypeWithLocation[]) => { dispatch(setMoreUsersAC(users)) },
        setCurrentPage: (currentPage:number)=>{dispatch(setCurrentPageAC(currentPage))},
        setUsersCount: (totalCount:number)=>{dispatch(setUsersCountAC(totalCount))}
    }
}

export const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(UsserContainer);   //Users



