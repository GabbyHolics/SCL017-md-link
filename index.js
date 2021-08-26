// 1. obtener ruta
const fs = require("fs");
const path = require("path");
const routeDirection = path.resolve(process.argv[2]);
// 2. reconocer que es un archivo o documento
const typeFolderAndDocument = () => {
  return new Promise((resolve, reject) => {
    fs.stat(routeDirection, (error, stats) => {
      results = [];
      if (error) {
        reject(error)
        return error;
      }
      if (stats.isDirectory()) {
          resolve(dirFolder(routeDirection));
      } else if (stats.isFile()) {
        resolve(dirFile(routeDirection));
      }
    });
  });
};
typeFolderAndDocument();
// leer
const dirFolder = (dirPath) => {
  const pathFolder = dirPath;
  readFolderPromise(pathFolder)
    .then((files) => {
      files.forEach((file) => {
        const fullPath = path.join(pathFolder, file);
        typeFolderAndDocument(fullPath);
        console.log(fullPath)
      });
    })
    .catch((err) => {
      console.log("could not find directory " + pathFolder);
    });
};

const readFolderPromise = (filePath) => {
  return new Promise((resolve, reject) => {
    fs.readdir(filePath, (err, files) => {
      if (err) {
        reject(err);
      } else {
        resolve(files);
      }
    });
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
  readFilePromise(filePath).then((data) => {
    console.log(data);
  });
};

const readFilePromise = (filePath) => {
  return new Promise((resolve, reject) => {
    fs.readFile(filePath, "utf8", (err, data) => {
      if (err) {
        reject(err);
      } else {
        resolve(data);
      }
    });
  });
};

//   console.log(file);

// 4

// Crea una funcion que tenga una condicion primero de verificar si es un archivo valido si es valido
// si es una carpeta que recorra la carpeta y vea si tiene un archivo md/ si es un archivo verificar si es archivo md.
//Si no cumple ninguno de los casos mandar un error.
//Si cumple leer el documento y su contenido

module.exports = () => {};
