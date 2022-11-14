console.log('first');
// setInterval(()=> {
//     console.log('thik thik');
// },1000);

let second = 0;
const timeId = setInterval(() => {
    // second++;
    console.log(++second);
    if(second >15){
        clearInterval(timeId);
    }
},1000);

console.log('second');