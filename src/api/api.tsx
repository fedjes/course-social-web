import axios from "axios";
import { GetProfileType } from "../layout/components/Profile/ProfileContainer";
import { HeaderContainerType } from "../layout/components/Header/HeaderContainer";
import { ResponseAuthType } from "../redux/auth-reducer";


const innstance = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    // headers: { "API-KEY": "5f160901-a2cd-44d6-9b0d-6d132ba4437d" }
})

export const userApi = {
    getUsers(currentPage: number = 1, pageSize: number = 5) {
        return innstance.get(`users?page=${currentPage}&count=${pageSize}`)
            .then(response => {
                return response.data
            })
    },
    unfollow(userId: number) {
        return innstance.delete(`follow/${userId}`).then(response => response.data)
    },

    follow(userId: number) {
        return innstance.post(`follow/${userId}`).then(response => response.data)
    },
    getProfile(userIdNew:string) {
       return innstance.get<GetProfileType>(`profile/${userIdNew}`)
    }
} 

export const authApi = {
    getMe() {
        return innstance.get<ResponseAuthType>(`auth/me`)
    }
}