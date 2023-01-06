/** retreivePeopleNum()
 * Retreive the number of people selected by the user from lc-noOfPeople
 */

function retreivePeopleNum() {
    const peopleNumInput = document.getElementById('newPeopeNum');
    let peopleNum = document.getElementById('newPeopeNum').value;

    peopleNumInput.addEventListener('change', function() {
        peopleNum = this.value;
    })
    return parseInt(peopleNum);
}

retreivePeopleNum();

/** showRecipes()
 * Display recipes in recDisp box with eventListeners on
 *  1. Recipe button
 *  2. Compare button
 *  4. Add button (Add recipe to compiled list and also increase number of selections in array by 1)
 *  3. Remove button (if the recipe is present on the compiled list)
*/

function showRecipes() {
    const mealSelectBox = document.getElementById('lc-recipeBox');
    let listToShow = [];

    // Construct meal list to display options
    for (const [i, recipe] of recipes.entries()) {
        const mealOption = recipe.meal;
        const imgUrl = recipe.imgPath;
        const recipeLink = recipe.source;
        const recipeId = recipe.recipeId;

        listToShow.push(`
            <div class="lc-recipeCard" id="lc-card${i}">
                <div class="lc-recipePhoto" id="lc-card${i}img" style="background-image: url(${imgUrl});">
                    <div class="lc-favBg"></div>
                    <i class="fa-regular fa-heart cardFav" tag="Favourite"></i>
                </div>
                <div class="lc-recipeInfo" id="lc-card${i}info">
                    <div class="lc-recipeText" id="lc-card${i}text">
                        <p class="lc-cardRecipeTtl">${mealOption}</p>
                        <div class="lc-recipePopupBtns" id="lc-card${i}btns">
                            <p class="greyBtnHvr"><a href="${recipeLink}" target="_blank">Recipe</a></p><p>|</p><p class="greyBtnHvr compareBtn-js" id="lc-compareBtn${i}" data-recipeid="${recipeId}">Compare</p>
                        </div>
                    </div>
                    <div class="lc-addRemBtns" id="lc-card${i}addRemBtns">
                        <i class="fa-solid fa-minus greyBtnHvr" id="lc-card${i}remove"></i>
                        <i class="fa-solid fa-plus greyBtnHvr" id="lc-card${i}add"></i>
                    </div>
                </div>
            </div>
        `);
        mealSelectBox.innerHTML = listToShow.join('');
    }
}

showRecipes();

/**
 * Add event listeners
 */

let selectedRecipes = [];
let globalShoppingList;

function addEventListeners() {
    for (const [i, recipe] of recipes.entries()) {
        // Add event listeners
        //Add button
        const addBtn = document.getElementById(`lc-card${i}add`);

        addBtn.addEventListener('click', function() {
            let numberOfPeople = retreivePeopleNum();
            recipe.selected = true;
            recipe.selectedNo++;
            
            selectedRecipes = recipes.filter(recipe => recipe.selected === true);
            const shoppingList = selectedRecipes.map(meal => {
                const updatedIngredients = meal.ingredients.map(ingredient => {
                return {
                    ...ingredient,
                    measure: ((ingredient.measure / meal.servings) * numberOfPeople * recipe.selectedNo).toFixed(2)
                }
                });
            
                return {
                ...meal,
                ingredients: updatedIngredients
                }
            });
            
            globalShoppingList = shoppingList;
            console.log(shoppingList);

            showSelected();
        }); 

        //removeBtn
        const removeBtn = document.getElementById(`lc-card${i}remove`);

        removeBtn.addEventListener('click', function() {
            let numberOfPeople = retreivePeopleNum();
            if (recipe.selectedNo > 0) { 
                recipe.selectedNo--;
            }
            if (recipe.selectedNo === 0) {
                recipe.selected = false;
            }
           
            selectedRecipes = recipes.filter(recipe => recipe.selected === true);
            const shoppingList = selectedRecipes.map(meal => {
                const updatedIngredients = meal.ingredients.map(ingredient => {
                    return {
                        ...ingredient,
                        measure: ((ingredient.measure / meal.servings) * numberOfPeople * recipe.selectedNo).toFixed(2)
                    }
                });
            
                return {
                    ...meal,
                    ingredients: updatedIngredients
                }
            });
            globalShoppingList = shoppingList;
            console.log(shoppingList);

            showSelected();
        }); 
    }
}

addEventListeners();

/** compare()
 * Create the compare function
 *  1. Opens a dialogue with the selected recipe and allows the user to select another recipe to compare nutrition information
 */

function openCompareBox() {
    const compareBtns = document.getElementsByClassName('compareBtn-js');
    const overlayBox = document.getElementById('lc-overlay');
    
    for (button of compareBtns) {
        button.addEventListener('click', () => {
            // Fade in popup
            overlayBox.classList.remove('lc-noDisplay')
            fadeOpacityIn(overlayBox);

        })
    }
}
openCompareBox()

let closePopUp = () => {
    const closePopUpBtn = document.getElementById('lc-closePopup');
    const overlayBox = document.getElementById('lc-overlay');

    closePopUpBtn.addEventListener('click', () => {
        fadeOpacityOut(overlayBox);
    })
}

closePopUp();

function fadeOpacityIn(element) {
    let delay = 5; // delay between each iteration of the loop, in milliseconds
    let increment = 0.01; // amount to increase the element's opacity each iteration
  
    for (let i = 0; i <= 1; i += increment) {
      setTimeout(function() {
        element.style.opacity = i;
      }, delay);
      delay += 5;
    }
}

function fadeOpacityOut(element) {
    let delay = 5; // delay between each iteration of the loop, in milliseconds
    let increment = 0.01; // amount to increase the element's opacity each iteration
  
    for (let i = 1; i >= 0; i -= increment) {
      setTimeout(function() {
        element.style.opacity = i;
        if (i <= 0.01) {
          element.classList.add('lc-noDisplay');
        }
      }, delay);
      delay += 5;
    }
}

/** showSelected()
 *  Loop through the compiled list (selected recipes) and display them on the Meals added table
 *  1. Include a count of how many times the recipe has been selected
 *  2. Add event listeners on the (x) button to remove the recipe from the list if pressed
 */

function showSelected() {
    const showSelectionBox = document.getElementById('lc-selected');
    let listToShow = [`
        <table id="lc-selectedTable">
        <h2>Meals added</h2>
        <tr>
            <th id="lc-selectedMealCol"></th>
            <th></th>
            <th></th>
        </tr>`
    ];

    // Construct meal list to display options
    for (const [i, recipe] of globalShoppingList.entries()) {
        const mealOption = recipe.meal;
        const selectedNum = recipe.selectedNo;
        const recipeId = recipe.recipeId;

        listToShow.push(`
                <tr class="lc-selectedTblRow" id="lc-selectedTblRow${i}" data-recipeid="${recipeId}">
                    <td>${mealOption}</td>
                    <td>(<span>${selectedNum}</span>)</td>
                    <td data-recipeId="${recipeId}"><i class="fa-solid fa-xmark selected-fa-xmark greyBtnHvr" id="lc-deleteBtn${i}" data-recipeId="${recipeId}"></i></td>
                </tr>  
        `);
    }
    listToShow.push(`</table>`)
    showSelectionBox.innerHTML = listToShow.join('');  
    deleteRecipeBtns()
}

/**
 * Delete recipe from list
 */

function deleteRecipeBtns() {
    const deleteRecipeBtns = document.getElementsByClassName('selected-fa-xmark');
    for (let i = 0; i < deleteRecipeBtns.length; i++) {
        deleteRecipeBtns[i].addEventListener('click', () => {
            // Retreive delete button
            const deleteBtn = document.getElementById(`lc-selectedTblRow${i}`);
            // Retreive recipe ID
            const recipeDOMId = deleteBtn.dataset.recipeid;
            console.log(recipeDOMId);

            // Find the recipe with the corresponding recipeId
            const foundRecipe = recipes.find(recipe => recipe.recipeId === parseInt(recipeDOMId));

            // Update the selected and selectedNo properties of the found recipe
            foundRecipe.selected = false;
            foundRecipe.selectedNo = 0;

            

            for (const [i, recipe] of recipes.entries()) {
                    let numberOfPeople = retreivePeopleNum();
                    selectedRecipes = recipes.filter(recipe => recipe.selected === true);
                    const shoppingList = selectedRecipes.map(meal => {
                        const updatedIngredients = meal.ingredients.map(ingredient => {
                        return {
                            ...ingredient,
                            measure: ((ingredient.measure / meal.servings) * numberOfPeople * recipe.selectedNo).toFixed(2)
                        }
                        });
                    
                        return {
                        ...meal,
                        ingredients: updatedIngredients
                        }
                    });
                    globalShoppingList = shoppingList;
                    showSelected();
            }
            
        console.log(globalShoppingList);

        })
    }
}

/** clearList()
 * Add function to 'Clear list' button to empty the compiled list if selected
 * 1. Ensure that the 'Meals added' list on the left is cleared too
 */

/** generateList()
 *  1. Loop through the selectedList array to calculate the final output of ingredients needed
 *  2. Display the final calculations in an output dialogue to the user
 */