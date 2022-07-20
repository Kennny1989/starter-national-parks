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



  //FORM-Starter//
  function validateExists(value){
    return value && value.trim();
}

function validateForm(formData){
    const errors = {};

    // Check if name was entered
  if (!validateExists(formData.get("name"))) {
    errors.name = "Please enter a name";
  }

  //check if rating was entered
  if(!validateExists(formData.get("rating"))) {
    errors.rating = "Please enter a rating";
  } else {
    //check if rating is a number
    if(!validateExists(formData.get("rating"))) {
        errors.rating = "Rating must be a number";
    }else{
        //because it is a number convert it
        const rating = number.parseFloat(formData.get("rating"));
        //check that rating is between 1-5, inclusive
        if(!validateRange(rating, 1, 5)) {
            errors.rating = "Rating must be between 1-5 inclusive";
        }
    }
  }

  //check if description was entered
  if(!validateExists(formData.get("description"))) {
    errors.description = "Please enter a description";
  }

  //check if established date was entered
  if(!validateExists(formData.get("established"))) {
    errors.established = "Please enter a date";
  }

  //check if area was entered
  if(!validateExists(formData.get("area"))) {
    errors.area = "Please enter area of the Park";
  }

  //check if location date was entered
  if(!validateExists(formData.get("location"))) {
    errors.location = "Please enter the location of the park;"
  }
  return errors;
}

const submitHandler = (event) => {
    event.preventDefault();

    const form = event.target;
    const formData = new FormData(form);

    const errors = validateForm(formData);

    //clear all previous errors
    const errorElements = document.querySelectorAll(".error");
    for(let element of errorElements) {
        element.style.display = "none";
    }

    //Display any new errors
    Object.keys(errors).forEach((key) => {
        // Find the specific error element
        const errorElement = document.querySelector(`#${key}-form .error`);
        errorElement.innerHTML = errors[key];
        errorElement.style.display = "block";
      });
    };



    // If there are no errors
if (!Object.keys(errors).length) {
    // Create a new element
    const parkSection = document.createElement("section");
  
    // Add the park class
    parkSection.classList.add("park-display");
  
    // Construct the HTML for this element
    const content = `
      <h2>${formData.get("name")}</h2>
      <div class="location-display">${formData.get("location")}</div>
      <div class="description-display">${formData.get("description")}</div>
      <button class="rate-button" title="Add to Favourites">&#9734;</button>
      <div class="stats">
        <div class="established-display stat">
          <h3>Established</h3>
          <div class="value">${moment(formData.get("established")).format(
            "MMMM D, YYYY"
          )}</div>
        </div>
        <div class="area-display stat">
          <h3>Area</h3>
          <div class="value">${formData.get("area")}</div>
        </div>
        <div class="rating-display stat">
          <h3>Rating</h3>
          <div class="value">${formData.get("rating")}</div>
        </div>
      </div>
      `;
  
    // Set the innerHTML
    parkSection.innerHTML = content;
  
    // Append to the main element
    document.querySelector("main").appendChild(parkSection);
  }


    //Get name input
    const parkName = document.querySelector("#name-input").value;
    console.log(parkName);
    //or
    const name = formData.get("name");
    console.log(name);


const main = () => {
    const form = document.querySelector("#park-form");
    form.addEventListener("submit", submitHandler);
};

  window.addEventListener("DOMContentLoaded", main);