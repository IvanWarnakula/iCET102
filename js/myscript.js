console.log("Ivan Fernando");

/// var, let, const

var name ="FERNANDO";
console.log(name+" is My Name");

// functions -method
 function print(){
    console.log("Print called..");
 }

 // function calling statement
 print();

 fetch('https://jsonplaceholder.typicode.com/posts/1', {
  method: 'PUT',
  body: JSON.stringify({
    id: 1,
    title: 'foo',
    body: 'bar',
    userId: 1,
  }),
  headers: {
    'Content-type': 'application/json; charset=UTF-8',
  },
})
  .then((response) => response.json())
  .then((json) => console.log(json));