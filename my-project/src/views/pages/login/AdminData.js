
const apiUrl = 'http://localhost:3001/administrateur/admins';

let adminData = [];



fetch(apiUrl)
  .then((response) => response.json())
  .then((data) => {
    data.map(entry => {
      return adminData.push(entry);
    });
  });

fetch(apiUrl).then((response) => response.json())
  .then((data) => console.log('This is your data', data),);


console.log('This is your adminData', adminData);



export default adminData
