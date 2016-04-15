import axios from 'axios'

export function getPosts (){
    return axios.get(`http://localhost:8080/api/blogData`)
        .then(function (data) {
            return data;
        })
        .catch(function (data) {
            return data
        });

};

export function getUserInfo (id) {
    return axios.get(`http://localhost:8080/api/userInfo/${id}`)
        .then(function (data) {
            return data;
        })
        .catch(function (data) {
            return data
        });

};

export function  usersBlogData () {
    return axios.get(`http://localhost:8080/api/usersBlogData`)
        .then(function (data) {
            return data;
        })
        .catch(function (data) {
            return data
        });

};


