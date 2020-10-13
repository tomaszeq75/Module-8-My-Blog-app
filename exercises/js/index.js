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
    let blogPostsContent = "";
    for (const blogPost of blogPosts) {
        const postDate = new Date(parseInt(blogPost.added_date)).toLocaleDateString();
        const postImage = `${API_BASE_URL}${blogPost.post_image}`;
        const postLink = `/Module-8-My-Blog-app/exercises/post.html?id=${blogPost.id}`; // oryginalnie było od /post.html..
        blogPostsContent += `
        <a class="post-link" href="${postLink}">
            <div class="post">
                <div class="post-image" style="background-image: url(${postImage})"></div>
                <div class="post-content">
                    <div class="post-date">${postDate}</div>
                    <div class="post-title">
                        <h3>${blogPost.title}</h3>
                    </div>
                    <div class="post-text">
                        ${blogPost.content}
                    </div>
                </div>
            </div>
        </a>    
        `;
    }

    document.querySelector(".main-container").innerHTML = blogPostsContent;
};
