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

app.listen(port, ()=> console.log(`Listening on port ${port}`));

