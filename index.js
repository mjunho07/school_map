//get = 서버에서 정보를 가져오는
//post = 서버에 정보를 보내는

import express from 'express';
import nunjucks from 'nunjucks';
import bodyParser from 'body-parser';
import path from 'path';
import https from 'https';
import fs from 'fs';
// import pool from './database/mariadb.js';

// const conn = await pool.getConnection();
// const locationAllRow = await conn.query('SELECT * FROM locations');
// conn.release();



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


function getToday(){
    const date = new Date();
    const year = date.getFullYear();
    const month = ("0" + (1 + date.getMonth())).slice(-2);
    const day = ("0" + date.getDate()).slice(-2);

    return year + month + day;
}
async function api() {
    let i;
    const response = await fetch(`https://open.neis.go.kr/hub/hisTimetable?ATPT_OFCDC_SC_CODE=J10&SD_SCHUL_CODE=7530629&ALL_TI_YMD=${getToday()}&GRADE=3&CLASS_NM=9&Type=json&Key=2d0963ab6b6642fbb940a0b264882678`);
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


app.post('/search-location-click', async (req, res)=>{
    const clickedId = req.body.id;

    for(const locationRow of locationAllRow)
    {
        if(locationRow.id == clickedId)
        {
            
            res.json(locationRow);
            break;
            
        }
    }
});

app.post('/search', async (req, res)=>{
    
    const searchString = req.body.searching;
    
    const conn = await pool.getConnection();
    const rows = await conn.query(`
        SELECT DISTINCT locations.id, locations.location_name, locations.detail FROM keywords 
        JOIN locations ON keywords.location_name = locations.location_name 
        WHERE keywords.keyword LIKE "%${searchString}%"
        `);
    conn.release();
    res.json(rows);
});


app.get('/',async (req, res)=>{
    const resultList = await api();
    res.render('index',{list:resultList});

});

app.listen(3000, () => {
    console.log('Server is running 80');
});

// const options = {
//         key: fs.readFileSync('/etc/letsencrypt/live/web309.duckdns.org/privkey.pem'),
//         cert: fs.readFileSync('/etc/letsencrypt/live/web309.duckdns.org/fullchain.pem')

// };
// https.createServer(options, app).listen(3030, ()=>{
//         console.log('Server is running 443');

// });



