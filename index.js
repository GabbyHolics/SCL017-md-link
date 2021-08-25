// 1. obtener ruta
const fs = require("fs");
const path = require("path");
const routeDirection = path.resolve(process.argv[2]);
// 2. reconocer que es un archivo o documento
const typeFolderAndDocument = () => {
    fs.stat(routeDirection, (error, stats) => {
        results = [];
            if (error) {
                console.warn('route invalid')
            return(error);
            } if (stats.isDirectory()) {
                folder(routeDirection)
                console.log("es un archivo")
                console.log(routeDirection)
            } else if (routeDirection) {
                results.push(routeDirection)
            }
        return results = file ();
    }
)};
typeFolderAndDocument()
// ller 
const folder = () => {
    fs.readdir(routeDirection, (err, files) => {
       if(err){
            console.warn('No hay archivos')
        }else if(files){
            files.forEach((file) => {
            console.log(file);
            })
        }
    });
}
const file = () =>{
    fs.readFile(routeDirection, "utf8", (err, data) => {
    if (err) {
        console.error(err)
    }// 3. necesito saber su extencion
    else if (routeDirection){ 
        const fileExt = path.extname(routeDirection.toLowerCase());
        const mdExt = '.md';
        return fileExt === mdExt;
    }
    console.log(data);
  });
}
  console.log(file);

// const isArgMdFile = () => {
//     const fileExt = path.extname(routeDirection.toLowerCase());
//     const mdExt = '.md';
//     return fileExt === mdExt;
//   };


//
// 4

// Crea una funcion que tenga una condicion primero de verificar si es un archivo valido si es valido
// si es una carpeta que recorra la carpeta y vea si tiene un archivo md/ si es un archivo verificar si es archivo md.
//Si no cumple ninguno de los casos mandar un error.
//Si cumple leer el documento y su contenido

// module.exports = () => {
//     // recorrer todo y hacer una funcion que tenga todos los links.
//     }
