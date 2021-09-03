// 1. obtener ruta
const fs = require("fs");
const path = require("path");
const markdownLinkExtractor = require("markdown-link-extractor");
const axios = require("axios");

const linkExtractor = (dataFile, pathInitial) => {
      const links = markdownLinkExtractor(dataFile, true).filter(
        (link) => link.href.includes("https://") || link.href.includes("http://")
      );
       let arrayLinks = [];
        links.forEach((link) => {
          const objectLinks = {
            file: pathInitial,
            link: link.href,
            text: link.text,
          };
          arrayLinks.push(objectLinks);
         
        });
        return arrayLinks; 

};

const  readFile = (filePath) => {
   readFilePromise(filePath).then((data) => {
    linkExtractor(data,filePath);
})
};

const dirFile = (doc) => {
  const fileExt = path.extname(doc.toLowerCase());
  const mdExt = ".md";
  if (fileExt === mdExt) {
   readFile(doc)

  } else {
    console.error("no es md");
  }
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

const dirFolder = (dirPath) => {
  const pathFolder = dirPath;
  readFolderPromise(pathFolder)
    .then((files) => {
      files.forEach((file) => {
        const fullPath = path.join(pathFolder, file);
        documentOrFolder(fullPath);
        console.log(fullPath);
      });
    })
    .catch((err) => {
      console.log("could not find directory " + pathFolder);
    });
};

const documentOrFolder = (routeDirection) => {
  return new Promise((resolve, reject) => {
    fs.stat(routeDirection, (error, stats) => {
      results = [];
      if (error) {
        reject(error);
      }
      if (stats.isDirectory()) {
        resolve(dirFolder(routeDirection));
      } else if (stats.isFile()) {
        resolve(dirFile(routeDirection) 
        
        );
      }
    });
  });
};
// documentOrFolder(routeDirection);

module.exports = { documentOrFolder };
