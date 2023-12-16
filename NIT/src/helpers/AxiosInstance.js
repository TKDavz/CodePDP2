import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';

const AxiosInstance = (contentType = 'application/json') => {
    const axiosInstance = axios.create({
        // baseURL: 'http://localhost:8080/api/'
        baseURL: 'http://172.16.79.27:8080/api/'
    });

    axiosInstance.interceptors.request.use(
        async (config) => {
            // const token = await AsyncStorage.getItem('token');
            config.headers = {
                // 'Authorization': `Bearer ${token}`,
                'Accept': 'application/json',
                'Content-Type': contentType
            }
            return config;
        },
        err => Promise.reject(err)
    );

    axiosInstance.interceptors.response.use(
        res => res.data,
        err => Promise.reject(err)
    );
    return axiosInstance;
};

export default AxiosInstance;