console.log("My node app");

var passenger = {
  name: "passenger 1",
  email: "passenger@gmail.com",
  age: 45,
  phone: [123456789, 0987654321],
};

console.log(passenger)

var res = JSON.stringify(passenger); // cause we need to send the object to the server so we have to stringify it
// {"name":"passenger 1","email":"passenger@gmail.com","age":45,"phone":[123456789,987654321]}
console.log(res)

var json = `{"name":"passenger 1","email":"passenger@gmail.com","age":45,"phone":[123456789,987654321]}`
var result = JSON.parse(json) // converting it back to JSON format
console.log(result)

// The response we get from api call is called promisee