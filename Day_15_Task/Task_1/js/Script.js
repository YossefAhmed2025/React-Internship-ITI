"use strict";


// Select HTML Elements

let searchInput = document.querySelector("#searchInput");

let userSelect = document.querySelector("#userSelect");

let dataRow = document.querySelector("#dataRow");


// Recipes List

const recipeList = [

    "pizza",

    "pasta",

    "burger",

    "chicken",

    "salad",

    "cake",

    "chocolate",

    "beef",

    "fish",

    "rice",

    "soup",

    "steak",

    "sandwich",

    "lasagna",

    "ice cream"

];


// Add Options to Select

function displayOptions() {

    let selectOptions = "";

    for (const option of recipeList) {

        selectOptions += `

        <option value="${option}">
            ${option}
        </option>

        `;

    }


    userSelect.innerHTML += selectOptions;

}


displayOptions();


// Get Recipes From API

async function getRecipes(searchTerm = "pizza") {

    try {

        let response = await fetch(
            `https://forkify-api.jonas.io/api/v2/recipes?search=${searchTerm}`
        );


        let responseData = await response.json();


        displayRecipes(responseData.data.recipes);


    } catch (error) {

        console.error(`An Error: ${error}`);

    }

}


// Display Recipes

function displayRecipes(recipes) {

    let contentContainer = "";


    for (const recipe of recipes) {

        contentContainer += `

        <div class="card">

            <img 
                src="${recipe.image_url}" 
                alt="${recipe.title}"
            >


            <div class="card-body">

                <h2>
                    ${recipe.title}
                </h2>


                <p>
                    ${recipe.publisher}
                </p>

            </div>

        </div>

        `;

    }


    dataRow.innerHTML = contentContainer;

}


// Search Input

searchInput.addEventListener("input", function (e) {

    let searchValue = e.target.value.toLowerCase();


    if (searchValue.length > 2) {

        getRecipes(searchValue);

    }

});


// Select Change

userSelect.addEventListener("change", function (e) {

    let selectedRecipe = e.target.value.toLowerCase();


    getRecipes(selectedRecipe);

});


// Default Recipes

getRecipes();