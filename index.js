// 1. obtener ruta
const fs = require("fs");
const path = require("path");
const routeDirection = path.resolve(process.argv[2]);
// 2. reconocer que es un archivo o documento
const typeFolderAndDocument = () => {
  fs.stat(routeDirection, (error, stats) => {
    // results = [];
    if (error) {
      console.warn("route invalid");
      return error;
    }
    if (stats.isDirectory()) {
        dirFolder(routeDirection);
      console.log("es un archivo");
      console.log(routeDirection);
    } else if (stats.isFile()) {
        dirFile(routeDirection);
    }
  });
};
typeFolderAndDocument();
// leer
const dirFolder = (path) => {
  fs.readdir(path, (err, files) => {
    if (err) {
      console.warn("No hay archivos");
    } else if (files) {
      files.forEach((file) => {
        console.log(file);
      });
    }
  });
};
// promesa
const dirFile = (doc) => {
  const fileExt = path.extname(doc.toLowerCase());
  const mdExt = ".md";
  if (fileExt === mdExt) {
    readFile(doc);
  } else {
    console.error("no es md");
  }
};

const readFile = (filePath) => {
  readFilePromise(filePath).then((data)=> {
      console.log(data)
  })
};

const readFilePromise = (filePath) => {
  return new promise ((resolve,reject) => { 
    fs.readFile(filePath, "utf8", (err, data) => {
        if (err) {
           reject(err);
        } else {
            resolve(data);
        }
        // console.log(data);
      });   
  }); 
};


//   console.log(file);


// 4

// Crea una funcion que tenga una condicion primero de verificar si es un archivo valido si es valido
// si es una carpeta que recorra la carpeta y vea si tiene un archivo md/ si es un archivo verificar si es archivo md.
//Si no cumple ninguno de los casos mandar un error.
//Si cumple leer el documento y su contenido

// module.exports = () => {
//     // recorrer todo y hacer una funcion que tenga todos los links.
//     }
