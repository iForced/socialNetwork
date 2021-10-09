import axios from "axios";

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
                .get(`users?page=${currentPage}&count=${usersPerPage}`)
                .then(response => response.data)
        },
        followUser(id: number) {
            return axiosInstance
                .post(`follow/${id}`)
        },
        unFollowUser(id: number) {
            return axiosInstance
                .delete(`follow/${id}`)
        }
    }
}
export const authAPI = () => {
    return {
        me() {
            return axiosInstance
                .get('auth/me')
        }
    }
}
export const profileAPI = () => {
    return {
        getProfile(id: string) {
            return axiosInstance
                .get(`profile/${id}`)
        },
        getStatus(id: string) {
            return axiosInstance
                .get(`profile/status/${id}`)
        }
    }
}
