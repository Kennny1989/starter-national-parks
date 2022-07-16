console.log(document);
const heading = document.querySelector("h1");
console.log(heading);
const button = document.querySelector("button");
console.log(button);
const value = document.querySelector(".value");
console.log(value);
const display = document.querySelector("div .area-display");
console.log(display);
const allButton = document.querySelectorAll("button");
console.log(allButton);
const stat = document.querySelector("div > .stat");
console.log(stat);
 const heading3List = document.querySelectorAll("h3");
    for(let element of heading3List.values()) {
        console.log(element);
    }

const divAllValue = document.querySelectorAll("div .value");
    for(let element of divAllValue.values()) {
        console.log(element);
    }

const divAllArea = document.querySelectorAll("div .area-display");
    for(let i = 0; i < divAllArea.length; i++) {
        const element = divAllArea[i];
        console.log(element);
    }

const list =document.querySelectorAll(".description-display");
    Array.prototype.forEach.call(list, function (element) {
        console.log(element);
    });
