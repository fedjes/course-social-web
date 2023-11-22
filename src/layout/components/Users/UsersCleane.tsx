import React, { FC } from 'react'
import { styled } from 'styled-components'
import userAva from '../../assets/images/users-vector-icon-png_260862.jpg'
import { usersTypeWithLocation } from '../../../redux/state'
import { NavLink } from 'react-router-dom'
import axios from 'axios'

type UsersCleanePropsType = {
    currentPage: number
    users: usersTypeWithLocation[]
    unfollow: (userId: number) => void
    follow: (userId: number) => void
    pageSize: number
    userCount: number
    onPageHandler: (el: number) => void

}

export const UsersCleane: FC<UsersCleanePropsType> = ({
    currentPage, users, unfollow, follow, pageSize, userCount, onPageHandler
}) => {

    const pagesCount = Math.ceil(userCount / pageSize);
    const pages = [];
    for (let i = 1; i < pagesCount; i++) {
        pages.push(i)
    }

    return (
        <div>
            <div>
                {/* add class for selected page , in map if currentPage === el ? style : ''     <span className={currentPage === el ? StyledSpan : ''}>{el}</span>*/}
                {pages.map(el => el === currentPage
                    ? <StyledSpan onClick={() => onPageHandler(el)}>{el}</StyledSpan>
                    : <StyledSpanDefoult onClick={() => { onPageHandler(el) }}>{el}</StyledSpanDefoult>)}
            </div>
            {
                users.map(el => <div key={el.id} >
                    <span>
                        <div>
                            <NavLink to={'/Profile/' + el.id}>
                                <img src={el.photos.small !== null ? el.photos.small : userAva} alt="imgUser" />
                            </NavLink>
                        </div>
                        <div>
                            {el.followed
                                ? <button onClick={() => {
                                    axios.delete(`https://social-network.samuraijs.com/api/1.0/follow/${el.id}`,  
                                    { withCredentials: true, headers: { "API-KEY": "5f160901-a2cd-44d6-9b0d-6d132ba4437d" } })
                                        .then(response => {
                                            debugger
                                            if (response.data.resultCode === 0) {
                                                unfollow(el.id)
                                            }
                                        })
                                }}>отписаться</button>
                                : <button onClick={() => {
                                    axios.post(`https://social-network.samuraijs.com/api/1.0/follow/${el.id}`, {}, 
                                    { withCredentials: true, headers: { "API-KEY": "5f160901-a2cd-44d6-9b0d-6d132ba4437d" } })
                                        .then(response => {
                                            debugger
                                             if (response.data.resultCode === 0) {
                                                follow(el.id)
                                             }
                                        })
                                }}>подписаться</button>}
                        </div>
                    </span>
                    <span>
                        <span>
                            <div>{el.name}</div>
                            <div>{el.status}</div>
                        </span>
                        <span>
                            <div>{'el.location.city'}</div>
                            <div>{'el.location.country'}</div>
                        </span>
                    </span>
                </div>)
            }
        </div >
    )
}


const StyledSpan = styled.span`
    font-weight: bold;
    cursor: pointer;
`
const StyledSpanDefoult = styled.span`
cursor: pointer;
    
`