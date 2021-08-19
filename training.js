//Como primer reto, puedes tratar de leer un solo archivo con una ruta fija e 
//imprimir su contenido en la consola con un console.log.

// leer archivo
const fs = require('fs')
const path = require('path')

const documentDirection = 'pedro.md'

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
const folder = '/Users/Gabbyholics/Desktop/SCL017-md-link/folder1';
    fs.readdir(folder, (err,files) => {
        files.forEach(file => {
            console.log(file); 
        });
    });

//Une dos rutas
const folder2 = '/Users/Gabbyholics/Desktop/SCL017-md-link/folder1/folder2'
const unionPath = path.join(folder,folder2);
console.log(unionPath);

// recorrer todo y hacer una funcion que tenga todos los links. 

// seguir trabanajndo con el parametro
