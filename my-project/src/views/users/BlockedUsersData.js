
//Récupération de la liste des personnes bloqués ( à modifier)

const apiUrl = 'http://localhost:3001/users'; // faut changer l'url ici
let blockedUsersData = [];



fetch(apiUrl)
  .then((response) => response.json())
  .then((data) => {
    data.map(entry => {
      return blockedUsersData.push(entry);
    });
  });

fetch(apiUrl).then((response) => response.json())
  .then((data) => console.log('This is your data', data),);


console.log('This is your blockedUsersData', blockedUsersData);

export default blockedUsersData
