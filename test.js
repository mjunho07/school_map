function getToday(){
    var date = new Date();
    var year = date.getFullYear();
    var month = ("0" + (1 + date.getMonth())).slice(-2);
    var day = ("0" + date.getDate()).slice(-2);

    return year + month + day;
}

async function main() {
    let i;
    const response = await fetch(`https://open.neis.go.kr/hub/hisTimetable?ATPT_OFCDC_SC_CODE=J10&SD_SCHUL_CODE=7530629&ALL_TI_YMD=${getToday()}&DDDEP_NM=컴퓨터소프트웨어과&GRADE=3&CLASS_NM=9&Type=json&Key=d3343083782d4681922efb5889452f48`);
    const obj = await response.json();
    for(i = 0;i < obj.hisTimetable[1].row.length;i++)
    {
        console.log(obj.hisTimetable[1].row[i].ITRT_CNTNT);
    }
  }

  main().catch(console.error);