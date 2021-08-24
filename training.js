//Como primer reto, puedes tratar de leer un solo archivo con una ruta fija e
//imprimir su contenido en la consola con un console.log.

// leer archivo
const fs = require("fs");
const path = require("path");
console.log(process.argv);
const documentDirection = path.resolve(process.argv[2]);

const file = fs.readFile(documentDirection, "utf8", (err, data) => {
  if (err) {
    console.error(err);
    return;
  }
  console.log(data);
});
console.log(file);

// tipo de dato
const typePath = path.extname(documentDirection);
console.log(typePath);

// Intenta imprimir en consola la lista de archivos en una carpeta.
fs.readdir(folder, (err, files) => {
  files.forEach((file) => {
    console.log(file);
  });
});

//Une dos rutas
const unionPath = path.join(documentDirection, "folder2");
console.log(unionPath);

// recorrer todo y hacer una funcion que tenga todos los links.
// recursividad
// Node.js program to demonstrate the
// fs.stat() method

// Import the filesystem module
const fs = require('fs');

// Getting information for a file
fs.stat("example_file.txt", (error, stats) => {
if (error) {
	console.log(error);
}
else {
	console.log("Stats object for: example_file.txt");
	console.log(stats);

	// Using methods of the Stats object
	console.log("Path is file:", stats.isFile());
	console.log("Path is directory:", stats.isDirectory());
}
});

// Getting information for a directory
fs.stat("example_directory.txt", (error, stats) => {
if (error) {
	console.log(error);
}
else {
	console.log("Stats object for: example_directory.txt");
	console.log(stats);

	// Using methods of the Stats object
	console.log("Path is file:", stats.isFile());
	console.log("Path is directory:", stats.isDirectory());
}
});
