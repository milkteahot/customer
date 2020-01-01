const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = process.env.PORT || 5000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.get('/api/customers', (req,res)=>{
    res.send([
            {
            'id' : 1,
            'image' : 'https://placeimg.com/64/64/4',
            'name' : '포카칩',
            'birthday' : '901222',
            'gender' : '남자',
            'job' : '대학생'
            },
            {
              'id' : 2,
              'image' : 'https://placeimg.com/64/64/2',
              'name' : '푸푸우',
              'birthday' : '990322',
              'gender' : '여자',
              'job' : '대학생'
              },
              {
                'id' : 3,
                'image' : 'https://placeimg.com/64/64/3',
                'name' : '보노보노',
                'birthday' : '981212',
                'gender' : '여자',
                'job' : '대학생'
                }
            ]);
});

app.get('/getMyPosts/1', (req,res)=> {
  res.send([
    
        {"_id":"5e0c99c0c11a0b23a15ccb39","like_count":0,"comment_count":0
        ,"title":"오늘은1월1일","text":"0101"
        ,"created_at":"2020-01-01T13:08:16.572Z"
        ,"isLike":false,"isClip":false}
        ,{"_id":"5e0064ba527dc9944cb45e6a","like_count":0,"comment_count":0
        ,"title":"첫번째 글 test","text":"test"
        ,"created_at":"2019-12-23T06:54:50.048Z"
        ,"isLike":false,"isClip":false}
      ]);
});

app.listen(port, ()=> console.log(`Listening on port ${port}`));

