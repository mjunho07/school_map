//get = 서버에서 정보를 가져오는
//post = 서버에 정보를 보내는

import express from 'express';
import nunjucks from 'nunjucks';
import bodyParser from 'body-parser';
// import { dirname } from 'path';
import path from 'path'
// import fs from 'fs'
// import { stringify } from 'querystring';
import mongoose from 'mongoose';

function getToday(){
    var date = new Date();
    var year = date.getFullYear();
    var month = ("0" + (1 + date.getMonth())).slice(-2);
    var day = ("0" + date.getDate()).slice(-2);

    return year + month + day;
}
async function api() {
    let i;
    const response = await fetch(`https://open.neis.go.kr/hub/hisTimetable?ATPT_OFCDC_SC_CODE=J10&SD_SCHUL_CODE=7530629&ALL_TI_YMD=${getToday()}&DDDEP_NM=컴퓨터소프트웨어과&GRADE=3&CLASS_NM=9&Type=json&Key=d3343083782d4681922efb5889452f48`);
    const obj = await response.json();
    let classList = [];
    try{
        for(i = 0;i < obj.hisTimetable[1].row.length;i++)
            {
                classList.push([obj.hisTimetable[1].row[i].ITRT_CNTNT, i + 1]);
            }
            return classList;
    }
    catch(err)
    {
        return;
    }
    
}

const app = express();

const __dirname = path.resolve();

// body parser set
app.use(bodyParser.urlencoded({ extended: false })); // express 기본 모듈 사용
app.use(bodyParser.json());

app.use(express.static('public'));


// view engine set
app.set('view engine', 'html'); // main.html -> main(.html)

// nunjucks
nunjucks.configure('views', {
    watch: true, // html 파일이 수정될 경우, 다시 반영 후 렌더링
    express: app
})

// const {Schema} = mongoose;

// // mongoose connect
// mongoose
//     .connect('mongodb+srv://mjh0317:mjhjunho0317mmm7@cluster0.zuq3l.mongodb.net/school_map') // /<> 해당 데이터베이스에 연결됨
//     .then(() => console.log('DB interface'))
//     .catch(e => console.error(e))


// //mongose set
// const WritingSchema = new Schema({
//     title: String,
//     contents: String,
//     date: {
//         type: Date,
//         default: Date.now,
//     }
// })

// const Writing = mongoose.model('Writing', WritingSchema)


app.get('/',async (req, res)=>{
    res.render('index',{list:await api()});

})

app.listen(3000, () => {
    console.log('Server is running');
});