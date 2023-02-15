setInterval(()=>{
    d = new Date();
    htime = d.getHours();
    hminute = d.getMinutes();
    hsecond = d.getSeconds();
    hrotation = 30*htime + hminute/2 + hsecond/120;
    mrotation = 6*hminute + hsecond/10;
    srotation = 6*hsecond;

    hour.style.transform = `rotate(${hrotation}deg)`;
    minute.style.transform = `rotate(${mrotation}deg)`;
    second.style.transform = `rotate(${srotation}deg)`;
},1000)