
const apiUrl = 'http://localhost:3001/users';
let usersData = [];

let newUsers = [];


fetch(apiUrl)
  .then((response) => response.json())
  .then((data) => {
    data.map(entry => {
      return usersData.push(entry);
    });
  });


var t = new Date()
var today = t.getFullYear() + '-' + (t.getMonth() + 1) + '-' + t.getDate();
var arrayLength = usersData.length;
console.log('ttttttttttttttttttt', arrayLength);
for (var i = 0; i < arrayLength; i++) {
  //var mysqlDate = new Date(usersData[i].date_insription);
  var mysqlDate = new Date("2021-02-17T08:46:25.000Z");

  var now = mysqlDate.getFullYear() + '-' + (mysqlDate.getMonth() + 1) + '-' + mysqlDate.getDate();
  console.log(now);
  if (now === today) {
    newUsers.push(usersData[1]);
  }
}

console.log('This is your new users list', newUsers);


export default newUsers
