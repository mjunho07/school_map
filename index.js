//get = 서버에서 정보를 가져오는
//post = 서버에 정보를 보내는

import express from 'express';
import nunjucks from 'nunjucks';
import bodyParser from 'body-parser';
// import { dirname } from 'path';
// import path from 'path'
// import fs from 'fs'
// import { stringify } from 'querystring';
import mongoose from 'mongoose';


const app = express();

const __dirname = path.resolve();

// body parser set
app.use(bodyParser.urlencoded({ extended: false })); // express 기본 모듈 사용
app.use(bodyParser.json());

// view engine set
app.set('view engine', 'html'); // main.html -> main(.html)

// nunjucks
nunjucks.configure('views', {
    watch: true, // html 파일이 수정될 경우, 다시 반영 후 렌더링
    express: app
})

const {Schema} = mongoose

// mongoose connect
mongoose
    .connect('mongodb+srv://mjh0317:mjhjunho0317mmm7@cluster0.zuq3l.mongodb.net/school_map') // /<> 해당 데이터베이스에 연결됨
    .then(() => console.log('DB interface'))
    .catch(e => console.error(e))


//mongose set
const WritingSchema = new Schema({
    title: String,
    contents: String,
    date: {
        type: Date,
        default: Date.now,
    }
})

const Writing = mongoose.model('Writing', WritingSchema)


app.listen(3000, () => {
    console.log('Server is running');
});