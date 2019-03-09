/* eslint-disable no-console */
'use strict'

// Imports user module mod4-quote_of_the_day.js
let my_mod = require("./mod4_quote_of_the_day");

console.log("");
my_mod.quote_of_the_day();

let delay = ((Math.ceil(Math.random() * 5)) * 1000).toFixed(0);
setTimeout(reflexes, delay);


function reflexes() {
    // ... include code here
    console.log("\nPress return:");
    let start = new Date().getTime();
    process.stdin.on('data', function() {
        let time = new Date().getTime() - start;
        console.log("Your time is: " + time + "ms");
        process.exit();
      })

}


