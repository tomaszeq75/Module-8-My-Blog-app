// const { response } = require("express");

const API_URL = "http://localhost:3000/api/posts";
// const API_URL = "http://localhost:3000/api/posts/1581461442206";
const API_BASE_URL = "http://localhost:3000/";

window.onload = () => {
    getPosts();
};

const getPosts = () => {
    fetch(API_URL, {
        method: "GET",
    })
        .then((response) => {
            return response.json();
        })
        .then((data) => {
            return buildPosts(data);
        });
};

const buildPosts = (blogPosts) => {
    console.log(blogPosts);
};
