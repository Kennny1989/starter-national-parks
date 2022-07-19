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

            /*const main = document.querySelector("main");
            const park = main.querySelector(".park-display");
            main.removeChild(park);*/

            const firstBtn = document.querySelector("button");
            firstBtn.addEventListener("click", (event) => {
                console.log("You clicked the button", event);
            });

            firstBtn.addEventListener("click", (event) => {
                console.log(event.target);
            });

            // Select all the buttons for all the parks
            
          
            
            
// function for sorting by name
    const sortByName = (parkA, parkB) => {
    const parkAName = parkA.querySelector("h2").innerText;
    const parkBName = parkB.querySelector("h2").innerText;
    if (parkAName < parkBName) {
      return -1;
    } else if (parkAName > parkBName) {
      return 1;
    } else {
      return 0;
    }
  };
  
  // function for sorting by rating
  const sortByRating = (parkA, parkB) => {
    const parkARating = parseFloat(
      parkA.querySelector(".rating-display > .value").innerText
    );
    const parkBRating = parseFloat(
      parkB.querySelector(".rating-display > .value").innerText
    );
    return parkBRating - parkARating;
  };
  
  // function for handling the nameSorter click
  const nameSorterClickHandler = (event) => {
    event.preventDefault();

  
    // 1.  get the main element
    const main = document.querySelector("main");
  
    // 2. get the list of parks
    const parksList = main.querySelectorAll(".park-display");
  
    // 3. empty the main
    main.innerHTML = "";
  
    // 4. create an array
    const parksArray = Array.from(parksList);
  
    // 5. sort the array
    parksArray.sort(sortByName);
  
    // 6. Insert each park into the DOM
    parksArray.forEach((park) => {
      main.appendChild(park);
    });
  };
  
  // function to handle the ratingSorter click
  const ratingSorterClickHandler = (event) => {
    event.preventDefault();
  
    // 1.  get the main element
    const main = document.querySelector("main");
  
    // 2. get the list of parks
    const parksList = main.querySelectorAll(".park-display");
  
    // 3. empty the main
    main.innerHTML = "";
  
    // 4. create an array
    const parksArray = Array.from(parksList);
  
    // 5. sort the array
    parksArray.sort(sortByRating);
  
    // 6. Insert each park into the DOM
    parksArray.forEach((park) => {
      main.appendChild(park);
    });
  };
  
  // the point where all the code starts
  const main = () => {
    // select the nameSorter link
    const nameSorter = document.querySelector("#name-sorter");
  
    // add an event listener
    nameSorter.addEventListener("click", nameSorterClickHandler);
  
    // select the ratingSorter link
    const ratingSorter = document.querySelector("#rating-sorter");
  
    // add an event listener
    ratingSorter.addEventListener("click", ratingSorterClickHandler);
  }

  // select all the buttons for all the parks
  const allBtns = document.querySelectorAll(".rate-button");

  // iterate the list of buttons and add an event handler to each
  allBtns.forEach((btn) => {
    btn.addEventListener("click", (event) => {
        console.log(event.target.parentNode);
    });
  });

  window.addEventListener("DOMContentLoaded", main);