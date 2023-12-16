import { Share } from "react-native";
import AxiosInstance from "../../../helpers/AxiosInstance";


// Lấy danh sách bản tin
export const getAllNews = async ()  => {
    try {
        const response = await AxiosInstance().get('/news/list-news');
        return response;
    }
    catch (error) {
        console.log(error);
    }
} 


export const getNewsCommentCount = async (newsId) => {
    try {
        const response = await AxiosInstance().get('/news/'+ newsId + '/comment-count');
        return response;
    }
    catch (error) {
        console.log(error);
    }
}

export const getNewsLikeCount = async (likeId) => {
    try {
        const response = await AxiosInstance().get('/news/'+ likeId +'/like-count');
        return response;
    }
    catch (error) {
        console.log(error);
    }
}


// like
export const like = async (newsId) => {
    try {
        const response = await AxiosInstance().get('/like/send-like');
        return response;
    }
    catch (error) {
        console.log(error);
    }
}

export const unlike = async (likeId) => {
    try {
        const response = await AxiosInstance().get('/like/un-liked/'+ likeId );
        return response;
    }
    catch (error) {
        console.log(error);
    }
}

// Comment
export const getComment = async () => {
    try {
        const response = await AxiosInstance().get('/comment/list-comment');
        return response;
    }
    catch (error) {
        console.log(error);
    }
}

export const sendComment = async (content, newsId) => {
    try {
        const response = await AxiosInstance().post('/comment/send-comment', { content, newsId });
        return response;
    }
    catch (error) {
        console.log(error);
    }
}

export const deleteComment = async (id) => {
    try {
        const response = await AxiosInstance().delete(`/comment/delete-comment/${id}`);
        return response;
    }
    catch (error) {
        console.log(error);
    }
}

export const editComment = async (id, content) => {
    try {
        const response = await AxiosInstance().put(`/comment/edit-comment/${id}`, { content });
        return response;
    }
    catch (error) {
        console.log(error);
    }
}

// export const getNewsByCategory = async (categoryId) => {
//     try {
//         const response = await AxiosInstance().get(`/news/${categoryId}/list-news`);
//         return response;
//     }
//     catch (error) {
//         console.log(error);
//     }
// }







// export const createNews = async (title, content, image = null) => {
//     try {
//         const response = await AxiosInstance().post('/articles', { title, content, image });
//         return response;
//     }
//     catch (error) {
//         console.log(error);
//     }
// }

// export const getNewsById = async (id) => {
//     try {
//         const response = await AxiosInstance().get(`/articles/${id}/detail`);
//         return response;
//     }
//     catch (error) {
//         console.log(error);
//     }
// }

// export const uploadImage = async (form) => {
//     try {
//         const response = await AxiosInstance('multipart/form-data').post('/media/upload', form);
//         return response;
//     }
//     catch (error) {
//         console.log(error);
//     }
// }

// export const deleteNews = async (id) => {
//     try {
//         const response = await AxiosInstance().delete(`/articles/${id}/delete`);
//         return response;
//     }
//     catch (error) {
//         console.log(error);
//     }
// }

// export const searchNews = async (keyword) => {
//     try {
//         const response = await AxiosInstance().get(`/articles/search?title=${keyword}`);
//         return response;
//     }
//     catch (error) {
//         console.log(error);
//     }
// }

// export const shareNews = async ({
//     message = 'React Native | A framework for building native apps using React',
//     title = 'React Native',
//     onShared = () => { }
// }) => {
//     try {
//         const result = await Share.share({ message, title }, {
//             dialogTitle: 'Chia sẻ bài viết'
//         });
//         if (result.action === Share.sharedAction) {
//             onShared();
//         } else if (result.action === Share.dismissedAction) {
//             // dismissed
//         }
//     } catch (error) {
//         console.error(error.message);
//     }
// }