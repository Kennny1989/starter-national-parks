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

const list = document.querySelectorAll(".description-display");
    Array.prototype.forEach.call(list, function (element) {
        console.log(element);
    });

const allRatings = document.querySelectorAll(".rating-display");
    for(let element of allRatings.values()){
        console.log(element);
    }

    const descriptions = document.querySelectorAll(".description-display");
        for(let desc of descriptions.values()){
            let content = desc.innerText;

            if(content.length > 250){
                content = content.slice(0, 250);
                content = content + '<a href="#">...</a>';
            }
            
            desc.innerHTML = content;
        }

        const ratings = document.querySelectorAll(".rating-display .value");
            for(let rating of ratings){
                let ratingValue = parseFloat(rating.innerText);
                
                if(ratingValue > 4.7){
                    rating.classList.add("high-rating");
                    rating.classList.remove("value");
                }
            }

            const parks = document.querySelectorAll(".park-display");
            const numberParks = parks.length;
            const newElement = document.createElement("div");
            newElement.innerText = `${numberParks} exciting parks to visit`;
            newElement.classList.add("header-statement");
            
            const header = document.querySelector("header");
            header.appendChild(newElement);

            const main = document.querySelector("main");
            const park = main.querySelector(".park-display");
            main.removeChild(park);
