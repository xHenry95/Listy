const recipes = [
    {
        meal: 'Beef & Sichuan pepper stir-fry',
        ingredients: [
            {ingredient: 'Rapeseed oil', measure: 2, unit: 'tbsp', category: 'sauces & oils'},
            {ingredient: 'Steak', measure: 300, unit: 'g', category: 'meat & poultry'},
            {ingredient: 'Cornflour', measure: 1, unit: 'tbsp', category: 'baking'},
            {ingredient: 'Mixed pepper', measure: 2, unit: 'pepper(s)', category: 'vegitables'},
            {ingredient: 'Baby corn', measure: 200, unit: 'g', category: 'vegitables'},
            {ingredient: 'Red onion', measure: 1.5, unit: 'onion(s)', category: 'vegitables'},
            {ingredient: 'Chilli flakes', measure: 0.5, unit: 'tsp', category: 'spices'},
            {ingredient: 'Sichuan peppercorns', measure: 1, unit: 'tsp', category: 'spices'},
            {ingredient: 'Low-salt dark soy sauce', measure: 2, unit: 'tbsp', category: 'sauces & oils'},
            {ingredient: 'Chilli oil', measure: 1, unit: 'tbsp', category: 'sauces & oils'},
            {ingredient: 'Cooked brown basmati rice', measure: 300, unit: 'g', category: 'pasta & rice'}
        ],
        servings: 4,
        kcal: 328,
        fat: 9,
        saturates: 3,
        carbs: 37,
        sugars: 9,
        fibre: 6,
        protein: 21,
        description: `Serve up this healthy stir-fry in just 20 minutes. Low in fat and calories, it's a brilliant speedy midweek meal for four`,
        source: 'https://www.bbcgoodfood.com/recipes/beef-sichuan-pepper-stir-fry',
        imgPath: 'img/BeefandSichuanPepperStirfry.png',
        favorite: false,
        selected: false,
        selectedNo: 0,
        current: false,
        recipeId: 1
    },
    {
        meal: 'Crispy Chili Turkey Noodles',
        ingredients: [
            {ingredient: 'Sesame oil', measure: 2, unit: 'tbsp', category: 'sauces & oils'},
            {ingredient: 'Turkey mince', measure: 500, unit: 'g', category: 'meat & poultry'},
            {ingredient: 'Fresh ginger', measure: 5, unit: 'cm', category: 'spices'},
            {ingredient: 'Garlic', measure: 1, unit: 'clove', category: 'spices'},
            {ingredient: 'Honey', measure: 3, unit: 'tbsp', category: 'carbohydrates'},
            {ingredient: 'Hot sriracha chili sauce', measure: 1, unit: 'tbsp', category: 'sauces & oils'},
            {ingredient: 'Dried onion noodles', measure: 350, unit: 'g', category: 'pasta & rice'},
            {ingredient: 'Lime', measure: 2, unit: 'limes', category: 'fruits'},
            {ingredient: 'Large carrot', measure: 2, unit: 'carrots', category: 'vegitables'},
            {ingredient: 'Spring onion', measure: 4, unit: 'spring onions', category: 'vegitables'},
            {ingredient: 'Corriander', measure: 1, unit: 'small bunch', category: 'herbs'}
        ],
        servings: 2,
        kcal: 566,
        fat: 8,
        saturates: 1,
        carbs: 83,
        sugars: 19,
        fibre: 2,
        protein: 40,
        description: 'Crisp-fried turkey mince in a chilli, soy and garlic sauce atop udon noodles makes for a savoury 20-minute meal that\'s low in fat but big on flavour',
        source: 'https://www.bbcgoodfood.com/recipes/crispy-chilli-turkey-noodles',
        imgPath: 'img/CrispyChiliTurkeyNoodles.jpg',
        favorite: false,
        selected: false,
        selectedNo: 0,
        current: false,
        recipeId: 2
    },
    {
        meal: 'Healthy Chicken Pasta Bake',
        ingredients: [
            {ingredient: 'Wholemeal penne', measure: 300, unit: 'g', category: 'pasta & rice'},
            {ingredient: 'Olive oil', measure: 2, unit: 'tsp', category: 'sauces & oils'},
            {ingredient: 'Pepper', measure: 2, unit: 'peppers', category: 'vegitables'},
            {ingredient: 'Courgette', measure: 160, unit: 'g', category: 'vegitables'},
            {ingredient: 'Garlic', measure: 3, unit: 'clove(s)', category: 'spices'},
            {ingredient: 'Carton passata', measure: 500, unit: 'g', category: 'sauces & oils'},
            {ingredient: 'Smoked paprika', measure: 1, unit: 'tbsp', category: 'spices'},
            {ingredient: 'Vegitable bouillon powder', measure: 1.5, unit: 'tsp', category: 'spices'},
            {ingredient: 'Chilli powder', measure: 1, unit: 'tsp', category: 'spices'},
            {ingredient: 'Kalamata olives', measure: 25, unit: 'g', category: 'fruits'},
            {ingredient: 'Diced chicken breast', measure: 400, unit: 'g', category: 'meat & poultry'},
            {ingredient: 'Fresh basil', measure: 1, unit: 'handful', category: 'herbs'},
            {ingredient: 'Ricotta', measure: 100, unit: 'g', category: 'dairy'},
            {ingredient: 'Mature cheddar', measure: 20, unit: 'g', category: 'dairy'}
        ],
        servings: 4,
        kcal: 480,
        fat: 13,
        saturates: 5,
        carbs: 51,
        sugars: 11,
        fibre: 11,
        protein: 35,
        description: `Try this healthy chicken pasta bake with peppers, courgette and ricotta for a nutritious midweek dinner. It’s sure to be a hit with everyone`,
        source: 'https://www.bbcgoodfood.com/recipes/healthy-chicken-pasta-bake',
        imgPath: 'img/HealthyChickenPastaBake.png',
        favorite: false,
        selected: false,
        selectedNo: 0,
        current: false,
        recipeId: 3
    },
    {
        meal: 'Low fat Turkey Bolognese',
        ingredients: [
            {ingredient: 'Turkey mince', measure: 400, unit: 'g', category: 'meat & poultry'},
            {ingredient: 'Vegitable oil', measure: 2, unit: 'tbsp', category: 'sauces & oils'},
            {ingredient: 'Brown onion', measure: 1, unit: 'onion', category: 'vegitables'},
            {ingredient: 'Large carrot', measure: 1, unit: 'carrot', category: 'vegitables'},
            {ingredient: 'Celery', measure: 3, unit: 'sticks', category: 'vegitables'},
            {ingredient: 'Sugar', measure: 1, unit: 'pinch', category: 'carbohydrates'},
            {ingredient: 'Tomato puree', measure: 1, unit: 'tbsp', category: 'sauces & oils'},
            {ingredient: 'Chopped tomatos', measure: 2, unit: 'cans (400ml)', category: 'canned vegitables'},
            {ingredient: 'Chicken stock (low-sodium cube)', measure: 400, unit: 'ml', category: 'broths & stocks'},
            {ingredient: 'Wholemeal pasta', measure: 0, unit: 'packet instructions', category: 'pasta & rice'},
            {ingredient: 'Fresh basil', measure: 0, unit: 'garnish', category: 'herbs'}
        ],
        servings: 5,
        kcal: 267,
        fat: 13,
        saturates: 3,
        carbs: 15,
        sugars: 12,
        fibre: 6,
        protein: 23,
        description: 'Swap your usual beef mince for turkey to reduce the fat content of this classic Italian sauce. Serve with wholemeal pasta for a hearty weeknight meal',
        source: 'https://www.bbcgoodfood.com/recipes/low-fat-turkey-bolognese',
        imgPath: 'img/LowFatTurkeyBolognese.png',
        favorite: false,
        selected: false,
        selectedNo: 0,
        current: false,
        recipeId: 4
    },
    {
        meal: 'Luchito Mexican Chicken Stew',
        ingredients: [
            {ingredient: 'Chicken breast', measure: 800, unit: 'g', category: 'meat & poultry'},
            {ingredient: 'Fresh sweetcorn', measure: 200, unit: 'g', category: 'vegitables'},
            {ingredient: 'Tomato puree', measure: 1, unit: 'tbsp', category: 'sauces & oils'},
            {ingredient: 'Chopped tomatos', measure: 400, unit: 'g', category: 'vegitables'},
            {ingredient: 'Gran Luchito chipotle paste', measure: 1, unit: 'tbsp', category: 'spices'},
            {ingredient: 'Red onion', measure: 1, unit: 'onion', category: 'vegitables'},
            {ingredient: 'Vegitable oil', measure: 1, unit: 'tbsp', category: 'sauces & oils'},
            {ingredient: 'Garlic', measure: 2, unit: 'cloves', category: 'spices'},
            {ingredient: 'Sugar', measure: 1, unit: 'tsp', category: 'carbohydrates'},
            {ingredient: 'Dried oregano', measure: 1, unit: 'tsp', category: 'herbs'},
            {ingredient: 'Salt', measure: 0.5, unit: 'tsp', category: 'seasoning'},
            {ingredient: 'Black pepper', measure: 0.5, unit: 'tsp', category: 'seasoning'},
            {ingredient: 'Fresh coriander', measure: 1, unit: 'handful', category: 'herbs'}
        ],
        servings: 4,
        kcal: 104,
        fat: 4.2,
        saturates: 0.6,
        carbs: 10.2,
        sugars: 2,
        fibre: 1.2,
        protein: 2.4,
        description: 'This is one of those Mexican chicken recipes where the meat will fall apart and the big Mexican flavours will blend together to make something really special. It\’ll also be one of the easiest stews you\’ll ever cook!',
        source: 'https://gran.luchito.com/recipes/traditional-mexican/mexican-chicken-stew/',
        imgPath: 'img/MexicanChickenStew.png',
        favorite: false,
        selected: false,
        selectedNo: 0,
        current: false,
        recipeId: 5
    },
    { 
        meal: 'Sheet Pan Roasted Chicken, Sweet Potatoes & Broccoli',
        ingredients: [
            {ingredient: 'Chicken breasts', measure: 4, unit: 'breasts', category: 'meat & poultry'},
            {ingredient: 'Cajun seasoning', measure: 2, unit: 'tbsp', category: 'spices'},
            {ingredient: 'Garlic', measure: 3, unit: 'cloves', category: 'spices'},
            {ingredient: 'Lemon juice', measure: 1, unit: 'tbsp', category: 'sauces & oils'},
            {ingredient: 'Sweet potatoes', measure: 285, unit: 'grams', category: 'vegitables'},
            {ingredient: 'Broccoli', measure: 420, unit: 'grams', category: 'vegitables'},
            {ingredient: 'Olive oil', measure: 2, unit: 'tbsp', category: 'sauces & oils'},
            {ingredient: 'Salt', measure: 0, unit: '(to taste)', category: 'seasoning'},
            {ingredient: 'Pepper', measure: 0, unit: '(to taste)', category: 'vegitables'}
        ],
        servings: 4,
        kcal: 478,
        fat: 14,
        saturates: 2,
        carbs: 35,
        sugars: 8,
        fibre: 8,
        protein: 53,
        description: 'Healthy one-pan chicken, sweet potatoes and broccoli oven-roasted to perfection! This quick one-pan dish is packed full of flavor and is GREAT for meal prepping too!',
        source: 'https://gimmedelicious.com/chicken-broccoli-sweet-potatoes-meal-prep/',
        imgPath: 'img/SheetPanRoastedChickenSweetPotatoesBroccoli.png',
        favorite: false,
        selected: false,
        selectedNo: 0,
        current: false,
        recipeId: 6
    },
    {
        meal: 'Stir-fried Chicken with Broccoli and Brown Rice',
        ingredients: [
            {ingredient: 'Brocolli', measure: 200, unit: 'g', category: 'vegitables'},
            {ingredient: 'Chicken breast', measure: 1, unit: 'breast', category: 'meat & poultry'},
            {ingredient: 'Fresh ginger', measure: 15, unit: 'g', category: 'spices'},
            {ingredient: 'Garlic', measure: 1, unit: 'clove', category: 'spices'},
            {ingredient: 'Red onion', measure: 1, unit: 'onion', category: 'vegitables'},
            {ingredient: 'Red pepper', measure: 1, unit: 'pepper', category: 'vegitables'},
            {ingredient: 'Olive oil', measure: 2, unit: 'tbsp', category: 'sauces & oils'},
            {ingredient: 'Chili powder', measure: 1, unit: 'tsp', category: 'spices'},
            {ingredient: 'Reduced-salt soy sauce', measure: 1, unit: 'tbsp', category: 'sauces & oils'},
            {ingredient: 'Honey', measure: 1, unit: 'tbsp', category: 'carbohydrates'},
            {ingredient: 'Brown rice (cooked)', measure: 250, unit: 'g', category: 'pasta & rice'}
        ],
        servings: 2,
        kcal: 488,
        fat: 9,
        saturates: 2,
        carbs: 56,
        sugars: 15,
        fibre: 2,
        protein: 33,
        description: 'Combine lean chicken with super-healthy broccoli, ginger and garlic for a quick and cheap, weeknight dinner',
        source: 'https://www.bbcgoodfood.com/recipes/stir-fried-chicken-broccoli-brown-rice',
        imgPath: 'img/StirfriedChickenWithBroccoliandBrownRice.png',
        favorite: false,
        selected: false,
        selectedNo: 0,
        current: false,
        recipeId: 7
    },
    {
        meal: 'Chicken Stir-fry',
        ingredients: [
            {ingredient: 'Chicken broth', measure: 60, unit: 'ml', category: 'broths & stocks'},
            {ingredient: 'Tamari soy sauce (or coconut aminos)', measure: 60, unit: 'ml', category: 'sauces & oils'},
            {ingredient: 'Honey', measure: 1, unit: 'tbsp', category: 'carbohydrates'},
            {ingredient: 'Sesame oil', measure: 1, unit: 'tsp', category: 'sauces & oils'},
            {ingredient: 'Rice vinegar (or apple cider vinegar)', measure: 1, unit: 'tsp', category: 'sauces & oils'},
            {ingredient: 'Arrowroot powder', measure: 1, unit: 'tbsp', category: 'baking'},
            {ingredient: 'Avocado oil', measure: 2, unit: 'tbsp', category: 'sauces & oils'},
            {ingredient: 'Chicken breast', measure: 455, unit: 'g', category: 'meat & poultry'},
            {ingredient: 'Red bell pepper', measure: 1, unit: 'pepper', category: 'vegitables'},
            {ingredient: 'Carrot', measure: 1, unit: 'carrot', category: 'vegitables'},
            {ingredient: 'Broccoli', measure: 145, unit: 'g', category: 'vegitables'},
            {ingredient: 'Brown onion', measure: 1, unit: 'onion', category: 'vegitables'},
            {ingredient: 'Fresh ginger', measure: 1, unit: 'tbsp', category: 'spices'},
            {ingredient: 'Garlic', measure: 4, unit: 'cloves', category: 'spices'},
            {ingredient: 'Sesame seeds', measure: 1, unit: 'tbsp', category: 'nuts & seeds'},
            {ingredient: 'Green onion', measure: 1, unit: 'onion', category: 'vegitables'},
            {ingredient: 'Salt', measure: 0, unit: '(to taste)', category: 'seasoning'},
            {ingredient: 'Pepper', measure: 0, unit: '(to taste)', category: 'seasoning'}
        ],
        servings: 4,
        kcal: 295,
        fat: 12,
        saturates: 2,
        carbs: 18,
        sugars: 9,
        fibre: 3,
        protein: 28,
        description: 'Chicken stir-fry is a speedy dinner that\’s jam-packed with flavor! Just grab a large pan and watch how juicy chicken, loads of veggies, and a savory-sweet sauce quickly come together in this colorful, healthy meal.',
        source: 'https://downshiftology.com/recipes/chicken-stir-fry/',
        imgPath: 'img/ChickenStirfry.png',
        favorite: false,
        selected: false,
        selectedNo: 0,
        current: false,
        recipeId: 8
    },
    {
        meal: 'Easy Tortilla Pizza',
        ingredients: [
            {ingredient: 'Soft flour tortilla', measure: 1, unit: 'tortilla', category: 'carbohydrates'},
            {ingredient: 'Olive oil', measure: 1, unit: 'tsp', category: 'sauces & oils'},
            {ingredient: 'Garlic powder', measure: 1, unit: 'pinch', category: 'spices'},
            {ingredient: 'Tomato sauce', measure: 3, unit: 'tbsp', category: 'sauces & oils'},
            {ingredient: 'Chicken breast', measure: 1, unit: 'breast', category: 'meat & poultry'},
            {ingredient: 'Bell pepper', measure: 0.5, unit: 'pepper', category: 'vegitables'},
            {ingredient: 'Green onion', measure: 2, unit: 'onion', category: 'vegitables'},
            {ingredient: 'Shredded mozzarella cheese', measure: 75, unit: 'grams', category: 'dairy'},
            {ingredient: 'Dried oregano', measure: 1, unit: 'pinch', category: 'herbs'},
            {ingredient: 'Salt', measure: 0, unit: '(to taste)', category: 'seasoning'},
            {ingredient: 'Pepper', measure: 0, unit: '(to taste)', category: 'seasoning'}
        ],
        servings: 1,
        kcal: 833,
        fat: 43,
        saturates: 13,
        carbs: 37,
        sugars: 5,
        fibre: 5,
        protein: 71,
        description: 'This tortilla pizza is extremely easy to make. It is light enough to be a snack, serves well as an appetizer, or is so good that it can be devoured alone!',
        source: 'https://www.allrecipes.com/recipe/258013/easy-tortilla-pizza/',
        imgPath: 'img/EasyTortillaPizza.png',
        favorite: false,
        selected: false,
        selectedNo: 0,
        current: false,
        recipeId: 9
    }
    // {
    //     meal: '',
    //     ingredients: [
    //         {ingredient: '', measure: , unit: '', category: ''},
    //         {ingredient: '', measure: , unit: '', category: ''},
    //         {ingredient: '', measure: , unit: '', category: ''},
    //         {ingredient: '', measure: , unit: '', category: ''},
    //         {ingredient: '', measure: , unit: '', category: ''},
    //         {ingredient: '', measure: , unit: '', category: ''},
    //         {ingredient: '', measure: , unit: '', category: ''},
    //         {ingredient: '', measure: , unit: '', category: ''},
    //         {ingredient: '', measure: , unit: '', category: ''},
    //         {ingredient: '', measure: , unit: '', category: ''}
    //     ],
    //     servings: ,
    //     kcal: ,
    //     fat: ,
    //     saturates: ,
    //     carbs: ,
    //     sugars: ,
    //     fibre: ,
    //     protein: ,
    //     description: '',
    //     source: '',
    //     imgPath: '',
    //     favorite: false,
    //     selected: false,
    //     selectedNo: 0,
    //     current: false,
    //     recipeId: 10
    // }
    /* {
        meal: '',
        ingredients: [
            {ingredient: '', measure: , unit: '', category: ''},
            {ingredient: '', measure: , unit: '', category: ''},
            {ingredient: '', measure: , unit: '', category: ''},
            {ingredient: '', measure: , unit: '', category: ''},
            {ingredient: '', measure: , unit: '', category: ''},
            {ingredient: '', measure: , unit: '', category: ''},
            {ingredient: '', measure: , unit: '', category: ''},
            {ingredient: '', measure: , unit: '', category: ''},
            {ingredient: '', measure: , unit: '', category: ''},
            {ingredient: '', measure: , unit: '', category: ''}
        ],
        servings: ,
        kcal: ,
        fat: ,
        saturates: ,
        carbs: ,
        sugars: ,
        fibre: ,
        protein: ,
        description: '',
        source: '',
        imgPath: '',
        favorite: false,
        selected: false,
        selectedNo: 0,
        current: false,
        recipeId: 11
    }*/
    /* {
        meal: '',
        ingredients: [
            {ingredient: '', measure: , unit: '', category: ''},
            {ingredient: '', measure: , unit: '', category: ''},
            {ingredient: '', measure: , unit: '', category: ''},
            {ingredient: '', measure: , unit: '', category: ''},
            {ingredient: '', measure: , unit: '', category: ''},
            {ingredient: '', measure: , unit: '', category: ''},
            {ingredient: '', measure: , unit: '', category: ''},
            {ingredient: '', measure: , unit: '', category: ''},
            {ingredient: '', measure: , unit: '', category: ''},
            {ingredient: '', measure: , unit: '', category: ''}
        ],
        servings: ,
        kcal: ,
        fat: ,
        saturates: ,
        carbs: ,
        sugars: ,
        fibre: ,
        protein: ,
        description: '',
        source: '',
        imgPath: '',
        favorite: false,
        selected: false,
        selectedNo: 0,
        current: false,
        recipeId: 12
    }*/
    /* {
        meal: '',
        ingredients: [
            {ingredient: '', measure: , unit: '', category: ''},
            {ingredient: '', measure: , unit: '', category: ''},
            {ingredient: '', measure: , unit: '', category: ''},
            {ingredient: '', measure: , unit: '', category: ''},
            {ingredient: '', measure: , unit: '', category: ''},
            {ingredient: '', measure: , unit: '', category: ''},
            {ingredient: '', measure: , unit: '', category: ''},
            {ingredient: '', measure: , unit: '', category: ''},
            {ingredient: '', measure: , unit: '', category: ''},
            {ingredient: '', measure: , unit: '', category: ''}
        ],
        servings: ,
        kcal: ,
        fat: ,
        saturates: ,
        carbs: ,
        sugars: ,
        fibre: ,
        protein: ,
        description: '',
        source: '',
        imgPath: '',
        favorite: false,
        selected: false,
        selectedNo: 0,
        current: false,
        recipeId: 
    }*/
]