const axios = require('axios');
const jsdom = require('jsdom');
const { JSDOM } = jsdom;

const httpAdapter = require('axios/lib/adapters/http');
const fs = require('fs');

const INPUT = 'http://www.gutenberg.org/files/59906/59906-h/59906-h.htm';

axios.get(INPUT)
    .then((response) => {
        const dom = new JSDOM(response.data);
        process(dom.window.document.querySelector("body").textContent);
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
            //save
            // console.log('['+body.substr(startIndex,lengthBodies)+']');
            result[index++] = toJson(body, startIndex, lengthBodies);
            //save
            startIndex = a+1;
            lengthBodies = 0; //reset lengthBodies to 0;
            uniqueBodies.clear();
        }
        if(a>= body.length){
            break;
        }
        
    }

    // console.log(result);
    // save process
    return result;
}

function toJson(body, index, length){
    return {
        "pangram" : body.substr(index,length),
        "index": index,
        "length": length
        }
}

// console.log("012345".substr(2,1));

// console.log(process('Abcdefghijklmnopaohfasdfsadfsad asdfsadfsaopjas asdfsadfjsdafsdfjs asdfsadfpsafhqrstuvwxyz Pack my box with five dozen liquor jugs five boxing wizards jump quickly at it The_quick_brown_fox_jumps_over_the_lazy_dog 124 2342323 2343242 #$#$^#$%#'));