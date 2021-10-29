import axios from "axios";
import {UserType} from "../redux/usersReducer";
import {UserProfileType} from "../redux/profileReducer";

type CommonResponseType<T = {}> = {
    resultCode: number
    messages: Array<string>
    data: T
}
type UsersResponseType = {
    items: Array<UserType>
    totalCount: number
    error: string
}

const axiosInstance = axios.create({
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    withCredentials: true,
    headers: {
        'API-KEY': 'ade1566d-0e8e-48e7-bd8d-2867a98c2f5f'
    }
})

export const usersAPI = () => {
    return {
        getUsers(currentPage: number, usersPerPage: number) {
            return axiosInstance
                .get<UsersResponseType>(`users?page=${currentPage}&count=${usersPerPage}`)
                .then(response => response.data)
        },
        followUser(id: number) {
            return axiosInstance
                .post<CommonResponseType>(`follow/${id}`)
        },
        unFollowUser(id: number) {
            return axiosInstance
                .delete<CommonResponseType>(`follow/${id}`)
        }
    }
}
export const authAPI = () => {
    return {
        me() {
            return axiosInstance
                .get<CommonResponseType<{id: number, email: string, login: string}>>('auth/me')
        },
        login(email: string, password: string, rememberMe: boolean) {
            return axiosInstance
                .post<CommonResponseType<{userId: number}>>('auth/login', {email, password, rememberMe})
        },
        logout() {
            return axiosInstance
                .delete<CommonResponseType>('auth/login')
        }
    }
}
export const profileAPI = () => {
    return {
        getProfile(id: number) {
            return axiosInstance
                .get<UserProfileType>(`profile/${id}`)
        },
        getStatus(id: number) {
            return axiosInstance
                .get<string>(`profile/status/${id}`)
        },
        updateStatus(status: string) {
            return axiosInstance
                .put<CommonResponseType>(`profile/status`, {status})
        }
    }
}
