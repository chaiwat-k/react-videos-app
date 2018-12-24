import axios from 'axios';

const KEY = 'AIzaSyC5zQPcdWZxfoeuC3bWezXsIAvpqDnd-ys';

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params: {
        part: 'snippet',
        maxResults: 5,
        key: KEY
    }
});