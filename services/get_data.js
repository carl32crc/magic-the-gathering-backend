'use strict'

const XMLHttpRequest = require('w3c-xmlhttprequest').XMLHttpRequest;

const getData = (method, url) => {
    
    return new Promise( (resolve, reject) => {

        let xhr = new XMLHttpRequest()

        xhr.open(method, url, true)

        xhr.responseType = 'json';
        xhr.addEventListener('load', function() {

          const data = xhr.response;
          resolve(data)

        }, false);

        xhr.send()
    })
}

module.exports = getData