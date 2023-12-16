import React, { useState, useContext, createContext } from 'react'
import { getAllNews } from './NewsService';
import { New3 } from './Screens/data';

export const NewsContext = createContext();

export const NewsProvider = (props) => {
    const { children } = props;

    const [listNews, setListNews] = useState([]);


    const setListNewsData = async () => {
        try {
            const res = await getAllNews();
            setListNews(res);
            // console.log(res);

            return res;
        } catch (error) {
            console.log(error);
        }
        return false;
    }

    const getListNews =  () => {
        return listNews;
    }


    return (
        <NewsContext.Provider
            value={{ listNews, setListNews, getListNews, setListNewsData}}> 
            {children}
        </NewsContext.Provider>
    )
}
