import axios from 'axios';

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3?',
    params: {
        part: 'snippet',
        maxResult: 3,
        key: '[AIzaSyDGHw996gMiKDqpPWFOEORpYEodS3ADfSM]', 
        // AIzaSyDGHw996gMiKDqpPWFOEORpYEodS3ADfSM

    }
})