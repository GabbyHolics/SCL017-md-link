// 1. obtener ruta
const fs = require("fs");
const path = require("path");
const routeDirection = path.resolve(process.argv[2]);
// 2. reconocer que es un archivo o documento
const typeFolderAndDocument = () => {
fs.stat(routeDirection, (error, stats) => {
        if (error) {
            console.warn('route invalid')
            return(error);
        }
        if(stats.isFile()){
            isArgMdFile
            console.log("es un documento")
            console.log(routeDirection)
        }else if(stats.isDirectory()){
            console.log("es un archivo")
            console.log(routeDirection)
        }
    }
)};

const isArgMdFile = () => {
    const fileExt = path.extname(routeDirection.toLowerCase());
    const mdExt = '.md';
    return fileExt === mdExt;
  };
typeFolderAndDocument()
// if (documents) {
//     fs.readFile(routeDirection, "utf8", (err, data) => {
//       if (err) {
//         console.error(err);
//         return;
//       }
//       console.log(data);
//     });
//     console.log(file);
//   } else if (folder) {
//     fs.readdir(routeDirection, (_err, files) => {
//       files.forEach((file) => {
//         console.log(file);
//       });
//     });
//   }


// 3. necesito saber su extencion
// 4.necesito que coloque un archivo valido
// 5.leer documento.

// Crea una funcion que tenga una condicion primero de verificar si es un archivo valido si es valido
// si es una carpeta que recorra la carpeta y vea si tiene un archivo md/ si es un archivo verificar si es archivo md.
//Si no cumple ninguno de los casos mandar un error.
//Si cumple leer el documento y su contenido

// module.exports = () => {
//     // recorrer todo y hacer una funcion que tenga todos los links.
//     }
