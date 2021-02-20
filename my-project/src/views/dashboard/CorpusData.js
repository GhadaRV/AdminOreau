//Récupération de la liste des enregistrements acceptés

const apiUrl = 'http://localhost:3001/enregistrement-accepter';
let acceptedRecords = [];



fetch(apiUrl)
  .then((response) => response.json())
  .then((data) => {
    data.map(entry => {
      return acceptedRecords.push(entry);
    });
  });

fetch(apiUrl).then((response) => response.json())
  .then((data) => console.log('This is your data', data),);


console.log('This is your acceptedRecords data', acceptedRecords);


export default acceptedRecords
