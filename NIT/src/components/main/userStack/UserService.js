import AxiosInstance from "../../../helpers/AxiosInstance";


export const register = async (username, password) => {
    const body = { username, password };
    const response = await AxiosInstance().post('/user/register', body);
    return response;
}

export const login = async (username, password) => {
    const body = { username, password };
    const response = await AxiosInstance().post('/user/login', body);
    console.log(response);
    return response;
}

export const updateInfomation = async (email) => {
    const response = await AxiosInstance().post(`/user/request-reset/{email}`, email);
    return response;
}

export const getProfileById = async (id) => {
    const response = await AxiosInstance().get(`/user/${id}/profile`);
    return response;
}

export const requestPasswordReset = async (email) => {
    const response = await AxiosInstance().post(`/user/request-reset/${email}`);
    return response;
}

export const changePassword = async (username, oldPassword, newPassword) => {
    const response = await AxiosInstance().put(`/user/change-password/${username}`, { oldPassword, newPassword });
    return response;
}

export const sendReport = async (id, reason, confirm, createDate, users, news) => {
    const body = { id, reason, confirm, createDate, users, news };
    const response = await AxiosInstance().post('/report/send-report', body);
    return response;
}
