import React, { FC, useEffect } from "react"
import { UsersType, usersTypeWithLocation } from "../../../redux/state"
import  axios from "axios"
import userAva from '../../assets/images/users-vector-icon-png_260862.jpg'


type UsersPageType = {
    unfollow: (userId: number) => void
    follow: (userId: number) => void
    setUsersAll: (users: usersTypeWithLocation[]) => void
    users: usersTypeWithLocation[]
}

export const Users: React.FC<UsersPageType> = ({ unfollow, follow, setUsersAll, users }) => {
    const getUsers = () => {
        if(users.length === 0) {
            axios.get('https://social-network.samuraijs.com/api/1.0/users').then(response=>{
                setUsersAll(response.data.items)
           })
        }
       }
    useEffect(()=>{   
    //     axios.get('https://social-network.samuraijs.com/api/1.0/users').then(response=>{
    //         setUsersAll(response.data.items)
    //    })
    
       
        // setUsersAll(    [
        //     { id: 1, photoUrl: url, folowed: false, fullName: 'fedjes kat', status: 'its test status ', location: { city: 'minsk', country: 'belarus' } },
        //     { id: 2, photoUrl: url, folowed: false, fullName: 'felis h', status: 'its test status ', location: { city: 'minsk', country: 'belarus' } },
        //     { id: 3, photoUrl: url, folowed: false, fullName: 'merlo r', status: 'its test status ', location: { city: 'moscow', country: 'russia' } },
        //     { id: 4, photoUrl: url, folowed: false, fullName: 'it inc', status: 'its test status ', location: { city: 'minsk', country: 'belarus' } },
        //     {
        //         id: 5,
        //         photoUrl: url,
        //         folowed: false, 
        //         fullName: 'den denielse', 
        //         status: 'its test status ', 
        //         location: { city: 'kiev', country: 'ukraine' }
        //     },
        // ])
    },[])
   
   
    return (
        <div>
            <button onClick={getUsers}>Get users</button>
            {users.map(el => <div key={el.id} >
                <span>
                    <div>
                        <img src={el.photos.small !== null ? el.photos.small : userAva} alt="imgUser" />
                    </div>
                    <div>
                        {el.folowed 
                        ? <button onClick={()=>{unfollow(el.id)}}>unfollow</button> 
                        : <button onClick={()=>{follow(el.id)}}>follow</button>}
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
            </div>)}
        </div>
    )
}