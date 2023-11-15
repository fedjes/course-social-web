import React, { FC } from 'react'
import { styled } from 'styled-components'
import userAva from '../../assets/images/users-vector-icon-png_260862.jpg'
import { usersTypeWithLocation } from '../../../redux/state'

type UsersCleanePropsType = {
    currentPage:number
    users: usersTypeWithLocation[]
    unfollow: (userId: number) => void
    follow: (userId: number) => void
    pageSize: number
    userCount: number
    onPageHandler:(el:number)=>void
}

export const UsersCleane:FC<UsersCleanePropsType> = ({
     currentPage, users, unfollow, follow, pageSize,userCount ,onPageHandler
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
                        ? <StyledSpan onClick={()=>onPageHandler(el) }>{el}</StyledSpan>
                        : <StyledSpanDefoult onClick={() => { onPageHandler(el) }}>{el}</StyledSpanDefoult>)}
                </div>
                {
                    users.map(el => <div key={el.id} >
                        <span>
                            <div>
                                <img src={el.photos.small !== null ? el.photos.small : userAva} alt="imgUser" />
                            </div>
                            <div>
                                {el.folowed
                                    ? <button onClick={() => { unfollow(el.id) }}>unfollow</button>
                                    : <button onClick={() => { follow(el.id) }}>follow</button>}
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