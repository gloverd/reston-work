function startTime() {
    var timeSlot = ["timeBar","timeBar1"];
    var timeBar;
    var today=new Date();
    var h=today.getHours();
    var m=today.getMinutes();
    var s=today.getSeconds();
    m = checkTime(m);
    s = checkTime(s);
    //document.getElementById('txt').innerHTML = h+":"+m+":"+s;
    var t = setTimeout(function(){startTime()},500);
    
    var curwidth = document.getElementById('timeTable').clientWidth;
    var curheight = document.getElementById('timeTable').clientHeight;

    if (h==7 || h==10 || h==12) {timeBar = 0};
    if (h == 16 || h==17 || h==20 || h==22) {timeBar = 1};
    
    timeBar = 0;

    //just get it going all the time for now
    //timeBar = 0;

    var x_left = 98;
    var x_right = 500;


    if (curwidth<450) {
        x_left = 60;
        x_right = curwidth-35; //account for padding
        curheight = curheight - 97;
        document.getElementById(timeSlot[timeBar]).style.top = "29px";
        
        document.getElementById(timeSlot[timeBar]).style.height = curheight+"px";
    }

    var x_cur = ((x_right-x_left)/60)*m;
    x_cur = x_cur + x_left;

    document.getElementById(timeSlot[timeBar]).style.display = "block";
    document.getElementById(timeSlot[timeBar]).style.left = x_cur+"px";}

function checkTime(i) {
    if (i<10) {i = "0" + i};  // add zero in front of numbers < 10
    return i;
}
