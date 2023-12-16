import React, { useState, createContext } from 'react'
import { login, register } from './UserService';
import AsyncStorage from '@react-native-async-storage/async-storage';

export const UserContext = createContext();

export const UserProvider = (props) => {
    const { children } = props;
    const [user, setUser] = useState(null);
    const [likednews, setLikedNews] = useState([1, 2, 5, 9]);

    // add news to liked news
    const addLikedNews = (newsId) => {
        setLikedNews([...likednews, newsId]);
    }

    // remove news from liked news
    const removeLikedNews = (newsId) => {
        setLikedNews(likednews.filter(id => id !== newsId));
    }

    // check if news is liked
    const isLikedNews = (newsId) => {
        return likednews.includes(newsId);
    }
    
    const onRegister = async (username, password) => {
        try {
            const res = await register(username, password);
            console.log(res);
            return true;
        } catch (error) {
            console.log(error);
        }
        return false;
    }

    const onLogin = async (username, password) => {
        console.log("login");
        try {
            const res = await login(username, password);
            // console.log(res.status);
            // if (res.status === 200) {
                setUser(res);
                console.log(user);
                return true;
            // }
        } catch (error) {
            console.log(error);
        }
        return false;
    }

    return (
        <UserContext.Provider
            value={{
                user, setUser, onRegister, onLogin, likednews, addLikedNews, removeLikedNews, isLikedNews
            }}>
            {children}
        </UserContext.Provider>
    )
}
