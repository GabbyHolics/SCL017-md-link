//Como primer reto, puedes tratar de leer un solo archivo con una ruta fija e 
//imprimir su contenido en la consola con un console.log.

// leer archivo
const fs = require('fs')
const path = require('path')

const documentDirection = process.argv[2]

const file = fs.readFile(documentDirection, 'utf8' , (err, data) => {
  if (err) {
    console.error(err)
    return
  }
  console.log(data)
})
console.log(file)

// tipo de dato

const typePath = path.extname(documentDirection)
console.log(typePath);

// Intenta imprimir en consola la lista de archivos en una carpeta.
const folder = process.argv[2];
    fs.readdir(folder, (err,files) => {
        files.forEach(file => {
            console.log(file); 
        });
    });

//Une dos rutas
const unionPath = path.join(folder,'folder2');
console.log(unionPath);

// recorrer todo y hacer una funcion que tenga todos los links. 
// recursividad 
function reverse (str) {
  if (str === "") {
      return "";
  } else {
      return reverse(str.substr(1)) + str.charAt(0);
  }
}

let reverseStringIs = reverse('freeCodeCamp');
console.log(reverseStringIs)

