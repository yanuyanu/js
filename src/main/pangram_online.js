const axios = require('axios');
const jsdom = require('jsdom');
const save = require('../repository/pangram_repository')
const { JSDOM } = jsdom;

const httpAdapter = require('axios/lib/adapters/http');
const fs = require('fs');

const INPUT = 'http://www.gutenberg.org/files/59906/59906-h/59906-h.htm';

axios.get(INPUT)
    .then((response) => {
        const dom = new JSDOM(response.data);
        const result = process(dom.window.document.querySelector("body").textContent);
        save(result);
});

/**
 * 1. Split each character
 * @param {*} body 
 */
function process(body){
    var uniqueBodies = new Set();
    var startIndex = 0;
    var lengthBodies = 0;
    var result = [];
    var index = 0;
    for(var a = 0; a<body.length; a++){
        if(body.charAt(a).match(/([a-z])(?!.*\1)/ig)){
            uniqueBodies.add(body.charAt(a).toLowerCase());
        }
        lengthBodies ++;
        if(uniqueBodies.size === 26){
            result[index++] = toJson(body, startIndex, lengthBodies);
            //save
            startIndex = a+1;
            lengthBodies = 0; //reset lengthBodies to 0;
            uniqueBodies.clear();
        }
        if(a>= body.length){
            uniqueBodies.clear();
            break;
        }
        
    }

    return result;
}

function toJson(body, index, length){
    return {
        "pangram" : body.substr(index,length),
        "index": index,
        "length": length
        }
}