const express = require('express');
const app = express();
const PORT = 3001;

const CalClass = require('./utilities/calculator');
const {POSTS} = require('./utilities/data');
const {GET_LIST_WITH_USER_ID, GET_LIST_WITH_POST_ID} = require('./utilities/handle-func');

app.get('/', (req, res) => {
    return res.json({ message: 'Hello everybody'})
})

app.get('/hello-world', (req, res) => {
    return res.json({
        message: 'Hello world!'
    })
})

//Get Calculator
app.get('/cal/:cal/:numberA/:numberB', (req, res) => {
    const { cal, numberA, numberB} = req.params;
    if(isNaN(numberA) || isNaN(numberB))
        res.json({ message: 'param_not_valid'})
    let cal1 = new CalClass(cal.toUpperCase(), numberA, numberB);
    let resultCal = cal1._getResultCal();
    res.json(resultCal);
})

//Get list posts
app.get('/posts', (req, res) => {
    res.json({POSTS});
})

//Get list with userId
app.get('/posts/:userID', (req, res) =>{
    const {userID} = req.params;
    let postsWithUserId = GET_LIST_WITH_USER_ID(POSTS, userID);
    res.json({postsWithUserId});
})

//Get list with postId
app.get('/post/:postID', (req, res) => {
    const {postID} = req.params;
    let postWithPostId = GET_LIST_WITH_POST_ID(POSTS, postID);
    res.json({postWithPostId});
}) 

app.listen(PORT, () => console.log(`Server started at port ${PORT}`));