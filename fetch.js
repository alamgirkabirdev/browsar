console.log(34214);
console.log(22222);
// setTimeout(() => console.log('aaaaaa'),5000);
fetch('https://jsonplaceholder.typicode.com/todos/1')
  .then(response => response.json())
  .then(json => console.log(json))
console.log(44444);
console.log(5555);
for(let i= 0; i< 100; i++){
    console.log(i);
}