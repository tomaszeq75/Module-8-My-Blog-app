/**
 * ok (Together): Create getPostIdParam to get the id of the post to use in the request later
 * ok: Complete getPost function to get post data from API
 * ok: Complete buildPost function to fill in the post data in the post.html file using ids
 */

const API_URL = "http://localhost:3000/api/posts/";
const API_BASE_URL = "http://localhost:3000/";

window.onload = () => {
    getPost();
    console.log(getPostIdParam());
}

const getPostIdParam = () => {
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    return urlParams.get('id');
}

const getPost = () => {
    const postUrl = `${API_URL}${getPostIdParam()}`
    fetch(postUrl, {
        method: 'GET'
    }).then((response) => {
        return response.json()
    }).then((data) => {
        return buildPost(data)
    })
}

const buildPost = (postData) => {
    const postDate = new Date(parseInt(postData.added_date)).toLocaleDateString()
    const postImage = `${API_BASE_URL}${postData.post_image}`;

    document.getElementById('individual-post-title').innerHTML = postData.title;
    document.getElementById('individual-post-date').innerHTML = postDate;
    document.getElementById('individual-post-content').innerHTML = postData.content;

    document.getElementsByTagName('header')[0].style.backgroundImage = `url(${postImage})`;
}