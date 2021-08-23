setInterval(clock, 1000); // 1s se load ham clocl mot lan


function clock(){
    const date = new Date();
    let hour = date.getHours();
    if(hour < 10)   hour = '0' + hour;  
    let minute = date.getMinutes();
    if(minute < 10) minute = '0' + minute;
    let second = date.getSeconds();
    if(second < 10) second = '0' + second;

    document.getElementById('hour').innerHTML = hour;
    document.getElementById('minute').innerHTML = minute;
    document.getElementById('second').innerHTML = second;
}