function getSecondsSinceStartofDay(){
    var now = new Date();
    return now.getSeconds() + now.getMinutes() * 60 + now.getHours() * 3600;
}

setInterval( function() {
    var time = getSecondsSinceStartofDay();
    var hour = Math.floor(time/3600);
    var minute = Math.floor((time%3600)/60);
    var second = (time%3600)%60;
    var secondTransform = "rotate("+((second*6)+180) + "deg)";
    var minuteTransform = "rotate("+((minute*6)+180) + "deg)";
    var hourTransform = "rotate("+((hour*30)-180+((minute/60)*30)) + "deg)";
    document.querySelector("#hour").style.transform = hourTransform;
    document.querySelector("#minute").style.transform = minuteTransform;
    document.querySelector("#second").style.transform = secondTransform;
}, 1000);
