import LRU from 'lru-cache'
import axios from 'axios'

let api;

if (process.__API__) {
    api = process.__API__
} else {
    api = {};
    api.cachedItems = new LRU({
        max: 10000,
        maxAge: 1000 * 60 * 15
    });
    process.__API__ = api
}

const axiosDefault = axios.create();

export {
    api,
    axiosDefault
}