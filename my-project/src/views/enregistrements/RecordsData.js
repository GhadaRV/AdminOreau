
const apiUrl = 'http://localhost:3001/enregistrement-brut';
let recordsData = [];



fetch(apiUrl)
  .then((response) => response.json())
  .then((data) => {
    data.map(entry => {
      return recordsData.push(entry);
    });
  });

fetch(apiUrl).then((response) => response.json())
  .then((data) => console.log('This is your data', data),);


console.log('This is your recordsData', recordsData);

export default recordsData
