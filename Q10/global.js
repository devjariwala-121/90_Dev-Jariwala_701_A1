console.log("File Name: ",__filename);
console.log("Dictionary Name: ",__dirname);
console.log("Welcome to NodeJS Global Objects");
console.log("Node Version: ",process.version);
console.log("Platform: ",process.platform);

setTimeout(()=>{
    console.log("This message will print in 2 Sec.");
}, 2000);

let cnt = 0;
const time = setInterval(()=>{
    cnt++;
    console.log("Counter: ",cnt);
    if(cnt === 5)
    {
        clearInterval(time);
        console.log("Interval Stopped");
    }
},1000);




