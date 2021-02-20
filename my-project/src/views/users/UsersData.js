// Fichier pour la récupération de la liste des utilisateurs à travers un Rest api url

const apiUrl = 'http://localhost:3001/users';
let usersData = [];



fetch(apiUrl)
  .then((response) => response.json())
  .then((data) => {
    data.map(entry => {
      return usersData.push(entry);
    });
  });

fetch(apiUrl).then((response) => response.json())
  .then((data) => console.log('This is your data', data),);


console.log('This is your usersData', usersData);
const test = [
  { id: 0, Nom: 'Test Value', Rôle: 'locuteur', Genre: 'femme', Pays: 'Tunisie', },
  { id: 1, Nom: 'Test Value', Rôle: 'locuteur', Genre: 'femme', Pays: 'Tunisie', }
];
console.log('This is your test', test);
/*let usersData = {};
fetch('http://localhost:3001/users')
        .then((response) => {
            return response.json();
    })
    .then((data) => {
      usersData = data;
    });
*/

/*const user ={
    nomUtilisateur : this.state.psudo,
    motDePasse : this.state.motDePasse,
    genre : this.state.genre ,
    paysDorigine : this.state.pays,
    VilleDorigine :this.state.ville,
    trncheDage :this.state.tranchedAge,
    role : "locuteur",
    langueMaternelle : "english"
    // nomUtilisateur :'Ammar',
    // motDePasse : 'mdpd',
    // genre : 'femme',
    // paysDorigine :'xxxxxx',
    // VilleDorigine :'xxxxxxx',
    // trncheDage : '25-30',
    // role :  'annotateur',
    // langueMaternelle :'Aaeza'

  }*/
/*const testUser = JSON.stringify({user})
  axios.get('http://localhost:3001/users',user).then(res => {
    console.log(res);
    console.log(res.data);
  }).catch(error => console.log(error));
*/

export default usersData
