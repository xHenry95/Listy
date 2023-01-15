// Sort recipes by title
recipes.sort(function(a, b) {
    if (a.meal.toLowerCase() < b.meal.toLowerCase()) return -1;
    if (a.meal.toLowerCase() > b.meal.toLowerCase()) return 1;
    return 0;
});

// SVG Icons
const heart = `<path class="hrtReg" d="M244 84L255.1 96L267.1 84.02C300.6 51.37 347 36.51 392.6 44.1C461.5 55.58 512 115.2 512 185.1V190.9C512 232.4 494.8 272.1 464.4 300.4L283.7 469.1C276.2 476.1 266.3 480 256 480C245.7 480 235.8 476.1 228.3 469.1L47.59 300.4C17.23 272.1 0 232.4 0 190.9V185.1C0 115.2 50.52 55.58 119.4 44.1C164.1 36.51 211.4 51.37 244 84C243.1 84 244 84.01 244 84L244 84zM255.1 163.9L210.1 117.1C188.4 96.28 157.6 86.4 127.3 91.44C81.55 99.07 48 138.7 48 185.1V190.9C48 219.1 59.71 246.1 80.34 265.3L256 429.3L431.7 265.3C452.3 246.1 464 219.1 464 190.9V185.1C464 138.7 430.4 99.07 384.7 91.44C354.4 86.4 323.6 96.28 301.9 117.1L255.1 163.9z"/>`;
const heartSolid = `<path class="hrtSolid" d="M47.6 300.4L228.3 469.1c7.5 7 17.4 10.9 27.7 10.9s20.2-3.9 27.7-10.9L464.4 300.4c30.4-28.3 47.6-68 47.6-109.5v-5.8c0-69.9-50.5-129.5-119.4-141C347 36.5 300.6 51.4 268 84L256 96 244 84c-32.6-32.6-79-47.5-124.6-39.9C50.5 55.6 0 115.2 0 185.1v5.8c0 41.5 17.2 81.2 47.6 109.5z"/>`
const cevronDownPath = `<path d="M233.4 406.6c12.5 12.5 32.8 12.5 45.3 0l192-192c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L256 338.7 86.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l192 192z"/>`;
const chevronUpPath = `<path d="M233.4 105.4c12.5-12.5 32.8-12.5 45.3 0l192 192c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L256 173.3 86.6 342.6c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3l192-192z"/>`;
const minus = `<path d="M432 256c0 17.7-14.3 32-32 32L48 288c-17.7 0-32-14.3-32-32s14.3-32 32-32l352 0c17.7 0 32 14.3 32 32z"/>`;
const plus = `<path d="M256 80c0-17.7-14.3-32-32-32s-32 14.3-32 32V224H48c-17.7 0-32 14.3-32 32s14.3 32 32 32H192V432c0 17.7 14.3 32 32 32s32-14.3 32-32V288H400c17.7 0 32-14.3 32-32s-14.3-32-32-32H256V80z"/>`;
const xMark = `<path d="M310.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L160 210.7 54.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L114.7 256 9.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L160 301.3 265.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L205.3 256 310.6 150.6z"/>`;
const xSolid = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><path d="M376.6 84.5c11.3-13.6 9.5-33.8-4.1-45.1s-33.8-9.5-45.1 4.1L192 206 56.6 43.5C45.3 29.9 25.1 28.1 11.5 39.4S-3.9 70.9 7.4 84.5L150.3 256 7.4 427.5c-11.3 13.6-9.5 33.8 4.1 45.1s33.8 9.5 45.1-4.1L192 306 327.4 468.5c11.3 13.6 31.5 15.4 45.1 4.1s15.4-31.5 4.1-45.1L233.7 256 376.6 84.5z"/></svg>`;

let selectedRecipes = [];
let globalShoppingList;
let totalAdded = 0;
let recipeCompareId;
let compareBoxLeftId = parseInt(recipeCompareId);
let compareBoxRightId;
let leftRecipeChange = false

/** retreivePeopleNum()
 * Retreive the number of people selected by the user from lc-noOfPeople
 */

function retreivePeopleNum() {
    const peopleNumInput = document.getElementById('newPeopeNum');
    let peopleNum = document.getElementById('newPeopeNum').value;

    peopleNumInput.addEventListener('change', function() {
        peopleNum = this.value;

        for (const [i, recipe] of selectedRecipes.entries()) {
            const shoppingList = selectedRecipes.map(meal => {
                const updatedIngredients = meal.ingredients.map(ingredient => {
                    return {
                        ...ingredient,
                        measure: ((ingredient.measure / meal.servings) * parseInt(peopleNum) * recipe.selectedNo).toFixed(2)
                    }
                });
            
                return {
                    ...meal,
                    ingredients: updatedIngredients
                }
            });
            globalShoppingList = shoppingList;
        }
    })
    return parseInt(peopleNum);
}

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
                    
                    <input type="checkbox" class="favCheckbox" data-recipeid="${recipeId}">
                    <svg class="fa-regular fa-heart cardFav" tag="Favourite" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 600 600" data-favOn="false">${heart}</svg>
                    
                </div>
                <div class="lc-recipeInfo" id="lc-card${i}info">
                    <div class="lc-recipeText" id="lc-card${i}text">
                        <p class="lc-cardRecipeTtl">${mealOption}</p>
                        <div class="lc-recipePopupBtns" id="lc-card${i}btns">
                            <p class="greyBtnHvr recipeInfoBtn"><a href="${recipeLink}" target="_blank">Recipe</a></p><p class="recipeInfoBtn">|</p><p class="greyBtnHvr recipeInfoBtn compareBtn-js" id="lc-compareBtn${i}" data-recipeid="${recipeId}">Compare</p>
                        </div>
                    </div>
                    <div class="lc-addRemBtns" id="lc-card${i}addRemBtns">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 800" class="fa-solid fa-minus greyBtnHvr selTotMinus-js" id="lc-card${i}remove">${minus}</svg>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 800" class="fa-solid fa-plus greyBtnHvr selTotAdd-js" id="lc-card${i}add">${plus}</svg>
                    </div>
                </div>
            </div>
        `);
        mealSelectBox.innerHTML = listToShow.join('');
    }
}

/**
 * Add event listeners
 */
function eventListRecipeCards() {
    for (const [i, recipe] of recipes.entries()) {
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
            showSelected();
        }); 

        //removeBtn
        const removeBtn = document.getElementById(`lc-card${i}remove`);

        removeBtn.addEventListener('click', function() {
            let numberOfPeople = retreivePeopleNum();
            if (recipe.selectedNo > 0) { 
                recipe.selectedNo--;
            
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

                showSelected();
            }
        }); 
    }
}

// Listen for selections to update total number of selected recipes
function totalAddedMob() {
    const totalBoxMob = document.getElementById('lc-totalAdded');

    document.querySelectorAll('.selTotAdd-js').forEach(button => {
        button.addEventListener('click', () => { 
            totalAdded += 1;

            totalBoxMob.innerHTML = `: (${totalAdded})`;
        })
    })
}

// Listen for selections to update total number of selected recipes
function totalRemovedMob() {
    const totalBoxMob = document.getElementById('lc-totalAdded');
    document.querySelectorAll('.selTotMinus-js').forEach(button => {
        button.addEventListener('click', () => { 
            totalAdded -= 1;
            if (totalAdded < 1) {
                totalAdded = 0;
            }
            totalBoxMob.innerHTML = `: (${totalAdded})`;
        })
    })
}

// Add event listener to recalculate the totalAdded when a recipe and all it's selections are removed
function deleteFullRecipe() {
    document.querySelectorAll('.fa-xmark').forEach(button => {
        button.addEventListener('click', () => { 
            const totalBoxMob = document.getElementById('lc-totalAdded');
            totalAdded = 0;
            recipes.forEach((recipe) => {
                totalAdded += recipe.selectedNo;
            })
              
            totalBoxMob.innerHTML = `: (${totalAdded})`;
        })
    })
}

// Expand left col mobile 
function leftColExp() {
    const expandBtn = document.getElementById('lc-mobExpandSelected');
    const leftCol = document.getElementById('lc-leftCol');
    const navBox = document.getElementById('lc-nav');
    const recDispBox = document.getElementById('lc-recipeDisp');
    const expMinBox = document.getElementById('lc-mobExpandSelected');

    expandBtn.addEventListener('click', () => {
        leftCol.classList.add('lc-leftColExp');
        navBox.classList.add('lc-leftColExpNav');
        recDispBox.classList.add('lc-leftColExpRecDisp');
        expMinBox.innerHTML = chevronUpPath;
        minimizeLeftCol();
    })
}

function minimizeLeftCol() {
    const minimizeBtn = document.getElementById('lc-mobExpandSelected');
    const leftCol = document.getElementById('lc-leftCol');
    const navBox = document.getElementById('lc-nav');
    const recDispBox = document.getElementById('lc-recipeDisp');
    const expMinSVG = document.getElementById('lc-mobExpandSelected');

    minimizeBtn.addEventListener('click', () => {
        leftCol.classList.remove('lc-leftColExp');
        navBox.classList.remove('lc-leftColExpNav');
        recDispBox.classList.remove('lc-leftColExpRecDisp');
        expMinSVG.innerHTML = cevronDownPath
        leftColExp();
    })
}

/** compare()
 * Create the compare function
 *  1. Opens a dialogue with the selected recipe and allows the user to select another recipe to compare nutrition information
 */
function openCompareBox() {
    const overlayBox = document.getElementById('lc-overlay-comp');
    document.querySelectorAll('.compareBtn-js').forEach(button => {
        button.addEventListener('click', event => {
            // Fade in popup
            overlayBox.classList.remove('lc-noDisplay')
            fadeOpacityIn(overlayBox);

            // Parse recipeId from compare button through for compareBox1 load
            recipeCompareId = button.dataset.recipeid;
            let compareBoxLeftId = parseInt(recipeCompareId);
            let leftBoxRecipe = recipes.find(recipe => recipe.recipeId === parseInt(compareBoxLeftId));
            fillCompareSelectOptions()
            fillCompareInfo(leftBoxRecipe);
        });
    });
}

// Fill compare selection boxes
function fillCompareSelectOptions() {
    // Left
    const compareSelectBoxes = document.getElementsByClassName('compareSelect-js');
    let leftMealCompareOptions = ``
    for (recipe of recipes) {
        if (parseInt(recipeCompareId) === recipe.recipeId) {
            leftMealCompareOptions += `<option selected value="${recipe.recipeId}">${recipe.meal}</option>`
        } else {
            leftMealCompareOptions += `<option value="${recipe.recipeId}">${recipe.meal}</option>`
        }
    }
    compareSelectBoxes[0].innerHTML = leftMealCompareOptions;
    // Right
    let rightMealCompareOptions = `<option selected>Compare with</option>`
    for (recipe of recipes) {
        rightMealCompareOptions += `<option value="${recipe.recipeId}">${recipe.meal}</option>`
    }
    compareSelectBoxes[1].innerHTML = rightMealCompareOptions;
}

// Add event listeners to the Compare selection boxes
function GetRecipeCompareSelectId() {
    const compareSelectBoxes = document.getElementsByClassName('compareSelect-js');
    compareSelectBoxes[0].addEventListener('change', () => {
        compareBoxLeftId = compareSelectBoxes[0].value;
        leftRecipeChange = true;
        fillCompareInfo();
    })
    compareSelectBoxes[1].addEventListener('change', () => {
        compareBoxRightId = compareSelectBoxes[1].value;
        
        const nutDiv2 = document.querySelectorAll('#lc-compareNutritionTbl2, #lc-compareSelect2 select');
        nutDiv2.forEach(element => {
            element.style.color = 'black';
        });

        fillCompareInfo();
    })
}

// Fill compare info box 1 and 2 (left and right)
function fillCompareInfo(leftBoxRecipe) {
    let newLeftBoxRecipe = recipes.find(recipe => recipe.recipeId === parseInt(compareBoxLeftId));
    let rightBoxRecipe = recipes.find(recipe => recipe.recipeId === parseInt(compareBoxRightId));

    // This can all be looped, including the if statements lower down
    const compareImg1Box = document.getElementById('lc-compareImg1');
    const compareTtl1 = document.getElementById('compareTtl1');
    const kcalValTd1 = document.getElementById('kcalValue1');
    const fatValTd1 = document.getElementById('fatValue1');
    const satValTd1 = document.getElementById('satValue1');
    const carbValTd1= document.getElementById('carbValue1');
    const sugValBoxTd1 = document.getElementById('sugValue1');
    const fibValBoxTd1 = document.getElementById('fibValue1');
    const protValBoxTd1 = document.getElementById('protValue1');
    const compareImg2Box = document.getElementById('lc-compareImg2');
    const compareTtl2 = document.getElementById('compareTtl2');
    const kcalValTd2 = document.getElementById('kcalValue2');
    const fatValTd2 = document.getElementById('fatValue2');
    const satValTd2 = document.getElementById('satValue2');
    const carbValTd2 = document.getElementById('carbValue2');
    const sugValBoxTd2 = document.getElementById('sugValue2');
    const fibValBoxTd2 = document.getElementById('fibValue2');
    const protValBoxTd2 = document.getElementById('protValue2');

    if (!leftRecipeChange && leftBoxRecipe !== undefined) {
        compareImg1Box.style.backgroundImage = `url(${leftBoxRecipe.imgPath})`;
        compareTtl1.innerHTML = `${leftBoxRecipe.meal}`;
        kcalValTd1.innerHTML = `${leftBoxRecipe.kcal}kcal`;
        fatValTd1.innerHTML = `${leftBoxRecipe.fat}g`;
        satValTd1.innerHTML = `${leftBoxRecipe.saturates * 100}mg`;
        carbValTd1.innerHTML = `${leftBoxRecipe.carbs}g`;
        sugValBoxTd1.innerHTML = `${leftBoxRecipe.sugars}g`;
        fibValBoxTd1.innerHTML = `${leftBoxRecipe.fibre}g`;
        protValBoxTd1.innerHTML = `${leftBoxRecipe.protein}g`;
    } else if (newLeftBoxRecipe !== undefined) {
        compareImg1Box.style.backgroundImage = `url(${newLeftBoxRecipe.imgPath})`;
        compareTtl1.innerHTML = `${newLeftBoxRecipe.meal}`;
        kcalValTd1.innerHTML = `${newLeftBoxRecipe.kcal}kcal`;
        fatValTd1.innerHTML = `${newLeftBoxRecipe.fat}g`;
        satValTd1.innerHTML = `${newLeftBoxRecipe.saturates * 100}mg`;
        carbValTd1.innerHTML = `${newLeftBoxRecipe.carbs}g`;
        sugValBoxTd1.innerHTML = `${newLeftBoxRecipe.sugars}g`;
        fibValBoxTd1.innerHTML = `${newLeftBoxRecipe.fibre}g`;
        protValBoxTd1.innerHTML = `${newLeftBoxRecipe.protein}g`;
    }
    if (rightBoxRecipe !== undefined) {
        compareImg2Box.style.backgroundImage = `url(${rightBoxRecipe.imgPath})`;
        compareTtl2.innerHTML = `${rightBoxRecipe.meal}`;
        kcalValTd2.innerHTML = `${rightBoxRecipe.kcal}kcal`;
        fatValTd2.innerHTML = `${rightBoxRecipe.fat}g`;
        satValTd2.innerHTML = `${rightBoxRecipe.saturates * 100}mg`;
        carbValTd2.innerHTML = `${rightBoxRecipe.carbs}g`;
        sugValBoxTd2.innerHTML = `${rightBoxRecipe.sugars}g`;
        fibValBoxTd2.innerHTML = `${rightBoxRecipe.fibre}g`;
        protValBoxTd2.innerHTML = `${rightBoxRecipe.protein}g`;
    }
}

// Close compare box
let closePopUp = () => {
    const closePopUpBtn = document.getElementsByClassName('lc-closePopup')[0];
    const overlayBox = document.getElementById('lc-overlay-comp');

    closePopUpBtn.addEventListener('click', () => {
        fadeOpacityOut(overlayBox);

        const nutDiv2 = document.querySelectorAll('#lc-compareNutritionTbl2, #lc-compareSelect2 select');
        nutDiv2.forEach(element => {
            element.style.color = 'var(--lightGrey)';
        });

        const compareImg2Box = document.getElementById('lc-compareImg2');
        const compareTtl2 = document.getElementById('compareTtl2');
        const kcalValTd2 = document.getElementById('kcalValue2');
        const fatValTd2 = document.getElementById('fatValue2');
        const satValTd2 = document.getElementById('satValue2');
        const carbValTd2 = document.getElementById('carbValue2');
        const sugValBoxTd2 = document.getElementById('sugValue2');
        const fibValBoxTd2 = document.getElementById('fibValue2');
        const protValBoxTd2 = document.getElementById('protValue2');

        compareImg2Box.style.backgroundImage = `url('')`;
        compareTtl2.innerHTML = `Compare with...`;
        kcalValTd2.innerHTML = `0kcal`;
        fatValTd2.innerHTML = `0g`;
        satValTd2.innerHTML = `0mg`;
        carbValTd2.innerHTML = `0g`;
        sugValBoxTd2.innerHTML = `0g`;
        fibValBoxTd2.innerHTML = `0g`;
        protValBoxTd2.innerHTML = `0g`;

        const compareSelectBoxes = document.getElementsByClassName('compareSelect-js');
        compareSelectBoxes[1].value = 'Compare with';

        compareBoxRightId = undefined;

    })
}

// Reusable function to fade an element into the DOM:
// first by removing the display: none property
// second creating a loop to add 0.01 to the opacity 100 times.
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

// Same as the function above but reverse, to remove an element from the DOM and finish by setting the display to none
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
    const showSelectionBox = document.getElementById('lc-selectedDynamic');
    let listToShow = [`
        <table id="lc-selectedTable">
        <tr>
            <th id="lc-selectedMealCol"></th>
            <th class="middleChild"></th>
            <th></th>
        </tr>`
    ];

    // Construct meal list then display selections
    for (const [i, recipe] of globalShoppingList.entries()) {
        const mealOption = recipe.meal;
        const selectedNum = recipe.selectedNo;
        const recipeId = recipe.recipeId;

        listToShow.push(`
                <tr class="lc-selectedTblRow" id="lc-selectedTblRow${i}" data-recipeid="${recipeId}">
                    <td>${mealOption}</td>
                    <td>(<span>${selectedNum}</span>)</td>
                    <td data-recipeId="${recipeId}"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 600 600" class="fa-solid fa-xmark selected-fa-xmark greyBtnHvr" id="lc-deleteBtn${i}" data-recipeId="${recipeId}">${xMark}</svg></td>
                </tr>  
        `);
    }
    listToShow.push(`</table>`)
    showSelectionBox.innerHTML = listToShow.join('');  
    deleteRecipeBtns();
    deleteFullRecipe()
}

// Add favourite on click of heart
function addRemFavourite() {
    const recipeBox = document.getElementById('lc-recipeBox');
    
    recipeBox.addEventListener('change', (e) => {
        if ( e.target.className === 'favCheckbox') {
            const recipeDOMId = e.target.dataset.recipeid;
            const foundRecipe = recipes.find(recipe => recipe.recipeId === parseInt(recipeDOMId));
            foundRecipe.favorite = e.target.checked;

            if ( e.target.checked ) {
                e.target.nextElementSibling.innerHTML = heartSolid;

            } else {
                e.target.nextElementSibling.innerHTML = heart;
            }
        }
    })
}

function toggleNonFavourites() {
    const favMealsBtn = document.getElementsByClassName('mainNavBtn')[1];
    const allMealsBtn = document.getElementsByClassName('mainNavBtn')[0];
    const recipeDisplay = document.getElementById('lc-recipeBox');
    recipeList = recipeDisplay.children;

    favMealsBtn.addEventListener('click', () => {
        for ( recipeCard of recipeList ) {
            const isChecked = recipeCard.firstElementChild.firstElementChild.nextElementSibling.checked;
            if ( !isChecked ) {
                recipeCard.style.display = 'none';
            }
        }
        allMealsBtn.classList.remove('mainNavBtnActive');
        favMealsBtn.classList.add('mainNavBtnActive');
    })
    allMealsBtn.addEventListener('click', () => {
        for ( recipeCard of recipeList ) {
            recipeCard.style.display = '';
        }
        allMealsBtn.classList.add('mainNavBtnActive');
        favMealsBtn.classList.remove('mainNavBtnActive');
    })
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

            // Find the recipe with the corresponding recipeId
            const foundRecipe = recipes.find(recipe => recipe.recipeId === parseInt(recipeDOMId));

            // Update the selected and selectedNo properties of the found recipe
            foundRecipe.selected = false;
            foundRecipe.selectedNo = 0;

            // Match deleted recipe and remove it from the users selections
            let FoundRecipeIndex = selectedRecipes.findIndex(x => x.recipeId === parseInt(recipeDOMId));
            selectedRecipes.splice(FoundRecipeIndex, 1);
            globalShoppingList.splice(FoundRecipeIndex, 1);
            console.log(selectedRecipes);
            console.log(globalShoppingList);

            showSelected();
        })
    }
}

/** clearList()
 * Add function to 'Clear list' button to empty the compiled list if selected
 * 1. Ensure that the 'Meals added' list on the left is cleared too
 */
const clearList = () => {
    const clearListBtn = document.getElementById('lc-clearLstBtn'); 
    clearListBtn.addEventListener('click', () => {
        for (recipe of recipes) {
            recipe.selected = false;
            recipe.selectedNo = 0;
        }

        selectedRecipes = recipes.filter(recipe => recipe.selected === true);
        const shoppingList = selectedRecipes;
        globalShoppingList = shoppingList;

        showSelected();

        const totalBoxMob = document.getElementById('lc-totalAdded');
        totalAdded = 0;
        totalBoxMob.innerHTML = `: (${totalAdded})`;
    })
}

/** generateList()
 *  1. Loop through the selectedList array to calculate the final output of ingredients needed
 *  2. Display the final calculations in an output dialogue to the user
 */
function generateList() {
    const tempList = [];
    for ( recipe of globalShoppingList ) {
        for (ingredient of recipe.ingredients) {
            ingredient.measure = parseFloat(ingredient.measure);
            tempList.push(ingredient);
        }
    }
    const length = tempList.length;
    let finalList = [];
    // Iterate through each ingredient in the tempList array
    for (let i = 0; i < length; i ++) {
        // Remove first iteration of each ingredient the script sees and store in key
        const key = tempList.shift();
        // Iterate through the list again to compare the key to all the remaining ingredients
        for (let j = 0; j < tempList.length; j++) {
            // If the key is found again (duplicate ingredient)
            if ( key.ingredient == tempList[j].ingredient ) {
                // Add the duplicate measure onto the key.measure
                key.measure += tempList[j].measure;
                // Remove the duplicate so it isn't counted again as they key in another iteration from the outer loop
                tempList.splice(j, 1);
            }
        }
        // Push the key onto the final list with duplicates eliminated and total measure summed
        if ( key !== undefined ) {
            finalList.push(key);
        }
    }
    return Object.entries(sortList(finalList, 'category'));
}

function sortList(obj, prop) {
    return obj.reduce(function (acc, item) {
      let key = item[prop]
      if (!acc[key]) {
        acc[key] = []
      }
      acc[key].push(item)
      return acc
    }, [])
  }

/** openListBox() */
function openListBox(list) {
    const overlayBox = document.getElementById('lc-overlay-list');
    const makeListBtn = document.getElementById('lc-createLstBtn');
    
    makeListBtn.addEventListener('click', () => {
        // Create final list 
        let finalList = generateList();
        console.log(finalList);
        
        // Fade in popup
        overlayBox.classList.remove('lc-noDisplay')
        fadeOpacityIn(overlayBox);

        // Create list box
        // Outer container + title
        let listBox = document.createElement('div');
        let listTitle = document.createElement('h2');
        listTitle.textContent = 'Your shopping list';
        listBox.appendChild(listTitle);
        // Generate 1 list per meal with a title, add to food items
        let ingredientList = `<ul>`;
        for ( category of finalList ) {
            ingredientList += `<li class="lc-listCategory"><h4>${category[0]}</h4></li>`;
            
            for ( item of category[1] ) {
                const ingredient = item.ingredient;
                let measure = parseFloat(item.measure);
                const unit = item.unit;

                if ( measure % 1 > 0 && 
                     unit !== 'g' && 
                     unit !== 'ml' ) {
                    let whole = measure - (measure % 1);
                    let remainder = decimalToFraction(measure % 1);
                    if ( whole > 0 && remainder.top < 5 ) {
                        measure = `${whole}<sup>${remainder.top}</sup>/<sub>${remainder.bottom}</sub>`;
                    } else if ( remainder.top < 5 ) {
                        measure = `<sup>${remainder.top}</sup>/<sub>${remainder.bottom}</sub>`;
                    }
                } else {
                    measure = parseInt(measure).toFixed(0);
                }
                if ( measure == 0 ) {
                    measure = '';
                }
                if ( unit == 'g' || unit == 'ml') {
                    ingredientList += `<li><p>${measure}${unit} ${ingredient}</p></li>`;
                } else {
                    ingredientList += `<li><p>${measure} ${unit} ${ingredient}</p></li>`;
                }
            }


        }
            listBox += ingredientList;
            listBox += `</ul>`;
            document.getElementById('lc-makeListBox').innerHTML = listBox;

        // Add generated lists to the html list

        const ListBox = document.getElementById('lc-makeListBox');
        //ListBox.appendChild(htmlList);
    })    
}

let closePopUpList = () => {
    const closePopUpBtn = document.getElementsByClassName('lc-closePopup')[1];
    const overlayBox = document.getElementById('lc-overlay-list');
    closePopUpBtn.addEventListener('click', () => {
        fadeOpacityOut(overlayBox);

        const ListBox = document.getElementById('lc-makeListBox');
        ListBox.innerHTML = '';
    })
}

// Code below pulled from LeviathanTheGreat on GitHub
function gcd(a, b) {
	return (b) ? gcd(b, a % b) : a;
}
var decimalToFraction = function (_decimal) {
    if (_decimal == parseInt(_decimal)) {
        return {
            top: parseInt(_decimal),
            bottom: 1,
            display: parseInt(_decimal) + '/' + 1
        };
    }
    else {
        var top = _decimal.toString().includes(".") ? _decimal.toString().replace(/\d+[.]/, '') : 0;
        var bottom = Math.pow(10, top.toString().replace('-','').length);
        if (_decimal >= 1) {
            top = +top + (Math.floor(_decimal) * bottom);
        }
        else if (_decimal <= -1) {
            top = +top + (Math.ceil(_decimal) * bottom);
        }

        var x = Math.abs(gcd(top, bottom));
        return {
            top: (top / x),
            bottom: (bottom / x),
            display: (top / x) + '/' + (bottom / x)
        };
    }
};
// Code above pulled from LeviathanTheGreat on GitHub

retreivePeopleNum();
showRecipes();
eventListRecipeCards();
totalAddedMob();
totalRemovedMob();   
leftColExp();
openCompareBox();
GetRecipeCompareSelectId();
closePopUp();
addRemFavourite();
toggleNonFavourites();
clearList();
openListBox();
closePopUpList();