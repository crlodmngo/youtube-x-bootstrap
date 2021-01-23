import axios from 'axios';
const key = 'AIzaSyAwOK6Lqkc4Lm01Xr3QSiKb6tpAWicv1kM';

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params: {
        part : 'snippet',
        maxResults: 5,
        key: key,
    }
});