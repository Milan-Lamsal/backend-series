require('dotenv').config()
const express = require('express')
// import express from 'express

const app = express()
const port = 4000

const GithubData = {
    "login": "Milan-Lamsal",
    "id": 182302304,
    "node_id": "U_kgDOCt22YA",
    "avatar_url": "https://avatars.githubusercontent.com/u/182302304?v=4",
    "gravatar_id": "",
    "url": "https://api.github.com/users/Milan-Lamsal",
    "html_url": "https://github.com/Milan-Lamsal",
    "followers_url": "https://api.github.com/users/Milan-Lamsal/followers",
    "following_url": "https://api.github.com/users/Milan-Lamsal/following{/other_user}",
    "gists_url": "https://api.github.com/users/Milan-Lamsal/gists{/gist_id}",
    "starred_url": "https://api.github.com/users/Milan-Lamsal/starred{/owner}{/repo}",
    "subscriptions_url": "https://api.github.com/users/Milan-Lamsal/subscriptions",
    "organizations_url": "https://api.github.com/users/Milan-Lamsal/orgs",
    "repos_url": "https://api.github.com/users/Milan-Lamsal/repos",
    "events_url": "https://api.github.com/users/Milan-Lamsal/events{/privacy}",
    "received_events_url": "https://api.github.com/users/Milan-Lamsal/received_events",
    "type": "User",
    "user_view_type": "public",
    "site_admin": false,
    "name": "Milan Lamsal",
    "company": null,
    "blog": "",
    "location": null,
    "email": null,
    "hireable": null,
    "bio": null,
    "twitter_username": null,
    "public_repos": 20,
    "public_gists": 0,
    "followers": 0,
    "following": 9,
    "created_at": "2024-09-20T23:32:04Z",
    "updated_at": "2025-03-24T16:21:40Z"
}

app.get('/', (req, res) => { // get request, call back , if req then res hello world 
    res.send('Hello World!')
})
app.get('/twitter', (req, res) => { // get request
    res.send('Milanlamsal.twitter')
})
app.get('/login', (req, res) => {
    res.send(`<h1>Welcome to Loging </h1>`)
})
app.get('/Facebook', (req, res) => {
    res.send("<h2>Welcom to Facebook</h2>")
})
app.get('/githubdata', (req, res) => {
    // res.send(GithubData); // Will return JSON but `Content-Type` is not explicitly set
    res.json(GithubData) // Ensures JSON response and sets `Content-Type: application/json`
})

app.listen(process.env.Port, () => {
    console.log(`Example app listening on port ${port}`)
})
