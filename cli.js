//hacer funcion que esta en el video 
// crear las condciones segun los argumentos
// //
const { searchLinks, documentOrFolder } = require('./index.js');
const path = require("path");
const routeDirection = path.resolve(process.argv[2]);
const option = process.argv[3];

if (option == '--validate') {
    validate = true;
    console.log(validate);
}

// const mdLinks = (routeDirection, option) =>{
//     return new Promise((res, reject) => {
//         if(option === false ){
//             (documentOrFolder(routeDirection));
//         }else if(option === true){
//             searchLinks(routeDirection).then(res => res(res))
//         }
//         reject(error)
//     })
// }
// mdLinks(routeDirection, option).then(res => console.log(res))
searchLinks(routeDirection)
  .then((res) => console.log(res))
  .catch((err) => console.log(err));

// const mdLinks = (routeDirection) = {
//     return  new Promise ((resolve, reject) => {
//         if (optionOne === false && optionTwo === false) {
//             documentOrFolder(routeDirection);
//         } else if (optionOne === true && optionTwo === false) {
//             documentOrFolder(routeDirection);
//             validateMDlink();
        
//     })
// };
// const mdLinks = (routeDirection) ={
//     return new Promise(()) 
