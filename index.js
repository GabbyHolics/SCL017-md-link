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

const readFile = (filePath) => {
  return new Promise((resolve) => {
    readFilePromise(filePath).then((data) =>
      resolve(linkExtractor(data, filePath))
    );
  });
};

const dirFile = (doc) => {
  return new Promise((resolve, reject) => {
    try {
      const fileExt = path.extname(doc.toLowerCase());
      const mdExt = ".md";
      if (fileExt === mdExt) {
        readFile(doc).then((links) => resolve(links));
      } else {
        console.error("no es md");
      }
    } catch (error) {
      reject(error);
    }
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
// retornar el result 
const dirFolder = (dirPath) => {
  const pathFolder = dirPath;
  readFolderPromise(pathFolder)
    .then((files) => {
      files.forEach((file) => {
        const fullPath = path.join(pathFolder, file);
        documentOrFolder(fullPath).then((res) => console.log( 'hola' + res));
      });
    })
    .catch((err) => {
      console.log(err);
    });
};

const documentOrFolder = (routeDirection) => {
  return new Promise((resolve, reject) => {
    fs.stat(routeDirection, (error, stats) => {
      if (error) {
        reject(error);
      }
      if (stats.isDirectory()) {
        resolve(dirFolder(routeDirection));
      } else if (stats.isFile()) {
        dirFile(routeDirection).then((links) => resolve(links));
      }
    });
  });
};
// let promises = new promises

const getStatusLinks = (routeDirection) => {
  return new Promise((res) => {
    return axios
      .get(routeDirection.link)
      .then((response) => {
        routeDirection.status = response.status;
        if (response.status === 200) {
          routeDirection.ok = response.statusText;
        }
        res(routeDirection);
      })
      .catch((error) => {
        routeDirection.status === 404;
        routeDirection.ok = "fail";
        res(routeDirection);
      });
  });
};
const searchLinks = (routeDirection) => {
  const promiseArray = [];
  return new Promise((res, reject) => {
    documentOrFolder(routeDirection)
      .then((links) => {
        links.map((link) => {
          promiseArray.push(getStatusLinks(link));
        });
        Promise.all(promiseArray)
          .then((result) => res(result))
          .catch((err) => console.log(err)); // pormises .all
      })
      .catch((error) => {
        reject(error);
      });
  });
};

const mdLinks = (routeDirection, options = { validate: false }) => {
  return new Promise((res, reject) => {
    try {
      if (!options.validate) {
        documentOrFolder(routeDirection).then(arrayLinksData => res(arrayLinksData));
      } else if (options.validate) {
        searchLinks(routeDirection).then((validateLinks) => res(validateLinks));
      }
    } catch (error) {
      reject(error);
    }
  });
};
// documentOrFolder(routeDirection).then(link => console.log(link)) ;

module.exports = {
  mdLinks,
  searchLinks,
  getStatusLinks,
  documentOrFolder,
};
