import axios from 'axios';
const key = 'AIzaSyB50QmARosExYPS9vnFploTbs1-AAfUAg0';

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params: {
        part : 'snippet',
        maxResults: 5,
        key: key,
    }
});