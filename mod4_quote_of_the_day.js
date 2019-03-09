/* eslint-disable no-console */
var fs = require('fs');

function quote_of_the_day() {
    let _fileToRead = 'mod4_quotes_of_the_day.json';
    let _citas = [];
    fs.readFile(
        _fileToRead,
        'utf8',
        function (err, data) {
            if (data) {
                //console.log(data);
                _citas = JSON.parse(data);
                if (_citas.length > 0) {
                    // console.log(`Se han encontrado ${_numCitas} citas:`);
                    // _citas.forEach((miCita, indice) => console.log(indice, miCita));
                    console.log("quote_of_the_day:");
                    let indice = (Math.floor(Math.random() *_citas.length)).toFixed(0);
                    console.log(_citas[indice]);                    
                } else {
                    console.log( `Se ha leido el fichero ${_fileToRead}, pero no se han encontrado citas.`);
                }
            } else {
                console.log(`Se ha producido un error leyendo el fichero ${_fileToRead}: ${err}`);
                //throw err;
            }
        }
    );
} 

/* 
function quote_of_the_day() {
    let _fileToRead = './tests/mod4_quotes_of_the_day.json';
    let _citas = [];
    let _citascargadas = false;
    let _numCitas = 0;
    fs.readFile(_fileToRead,
        'ascii',
        function (err, data) {
            if (data) {
                //console.log(data);
                _citas = JSON.parse(data);
                if (_citas.length > 0) {
                    _citascargadas = true;
                    _numCitas = _citas.length;
                    // console.log(`Se han encontrado ${_numCitas} citas:`);
                    // _citas.forEach((miCita, indice) => console.log(indice, miCita));
                } else {
                    throw `Se ha leido el fichero ${_fileToRead}, pero no se han encontrado citas.`;
                }
            } else {
                throw `Se ha producido un error leyendo el fichero ${_fileToRead}: ${err}`;
                //throw err;
            }
        }
    );

    return (function () {
        if (_citascargadas) {
            let indice = (Math.floor(Math.random() *_numCitas)).toFixed(0);
            return _citas[indice];
        }
    });

} 
*/

exports.quote_of_the_day = quote_of_the_day;