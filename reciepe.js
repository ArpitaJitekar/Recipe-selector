const button=document.getElementById('search-recipe')
const recipeList=document.getElementById('recipe-list')
const recipename=document.getElementById('nameofr')
const a=document.getElementById('a-recipe-list')
//const list=document.getElementById('rl')
const butback=document.getElementById('but')
const butback1=document.getElementById('but-1')
//Method for getting backthe object from local storage
 JSON.parse(localStorage.getItem('recipe')) 

const receipe=
[
    {
        name:'Pasta',
        image:'image/pasta.jpg',
        ingredients:['Macroni','Oil','Tomato sauce','Salt','Garlic','Onion','Mayonnaise'],
        procedure:`1.Boil macroni in water and salt
                   2. Add oil in Frying pan .After that add garlic and  onion
                   3. Add tomato sauce and vegetable(optional)
                   4. Add Mayonnaise
                   5. Pasta is ready`
    },
    {
        name:'Noodles',
        image:'image/Noodles.jpg',
        ingredients:['Noodles','Soya sauce','Salt','Oil','Capsicum','Onion','Cabbage'],
        procedure:`1.Boil noodles in water and salt
                   2.Add oil in frying pan.add onion,cabbage and capsicum .
                   3. Add soya sauce and salt(f needed)
                   4.Add noodles .Bake it for 2 minutes, Your noodles are ready`
    },
    {
        name:'Fried Rice',
        image:'image/Fried Rice.jpg',
        ingredients:['Rice','Soya sauce','Salt','Oil','Capsicum','Onion','Cabbage'],
        procedure:`1.Boil Rice in salt and ghee(if you want)
                   2.Add oil in frying pan.Add onion and fry it for 20 seconds
                   3. Add capsicum,cabbage and stir it nicely
                   4.Add Rice and soya sauce (1 tb/sp ) and stir it for 1 minute`

    },
    {
        name:'Omelet',
        image:'image/Omelet.jpg',
        ingredients:['Egg','Salt','Pepper','Oil'],
        procedure:`1.Mix salt and pepper with egg
                   2.Take oil in pan and fry the egg over it `
    },
    {
        name:'Pizza',
        image:'image/Pizza.jpg',
        ingredients:['Pizza base','Salt','Mozarrella cheese','Oil','Onion','Capsicum','Olive','Tomato sauce','Cheese'],
        procedure:`1.Take pizza base and apply tomato sauce and mozarrella cheese
                   2.Cut onion and capsisum in medium sized pieces(for topping) and placeit over pizza base along with olives
                   3. You can use any another topping you wanr . sprinkle cheese over it and bake it or 2minutes in oven `

    },
    {
        name:'Sandwitch',
        image:'image/Sandwitch.jpg',
        ingredients:['Bread','Salt','Cheese','Butter','Carrot','Onion','Potato'],
        procedure:`1.Apply cheese over bread .Boil the potatoes . 
                   2.Cut all vegetables in round shape
                   3.Arrange them on bread slices
                   4.Add butter on frying pan(You can use sandwitch maker) and put sandwitch over it until it turn mild brown `

    },
    {
        name:'Burger',
        image:'image/Burger.jpg',
        ingredients:['Burger bun','Salt','Cheese','Carrot','Onion','Potato','beans','White sauce','Gram flour'],
        procedure:`1Cut all vwgetables and boil them along with salt.
                   2.Smash boiled vegetables and make round shape out of it .
                   3.In gram flour add some water and coat patty with gram flour mixture.
                   4. Fry patty over pan until it turn golden
                   5. Apply white sauce over bun and put patty over it.
                   6. put onion over it and sprinkle salt and apply white sauce`

    },
    {
        name:'Pav bhaji',
        image:'image/Pav bhaji.jpg',
        ingredients:['Bread','Salt','Garam masala','Peas','Onion','Potato','beans','Butter'],
        procedure:`1Cut all vegetables and boil them along with salt.
                   2.Smash boiled vegetables .
                   3.Take butter in pan and add chopped onions.
                   4.Heat it until it turns golden.
                   5.Add boiled vegetaables and stir it.
                   6.Add garam masala and cook it for 4 minutes .Serve it with bread`

    },
]
//stored in local storage by converting into array intoobject and then into json 
localStorage.setItem('recipe',JSON.stringify(Object.assign({}, receipe)))

const allingdt=['Macroni','Oil','Tomato sauce','Salt','Garlic','Onion','Mayonnaise','Noodles','Soya sauce','Capsicum','Cabbage','Rice','Pizza base','Egg','Pepper','Mozarrella cheese','Olive','Cheese',
    'Bread','Butter','Potato','Burger bun','beans','Carrot','White sauce','Gram flour','Garam masala','Peas'
]
//parent element ul tag toappend list elemnts
const parent=document.getElementById('ingredient-list')
//For all ingredients in array create li element and append it to paret
allingdt.forEach(ingredient=>{
    li=document.createElement('li')
    li.innerHTML=`<input type="checkbox" name="ing"class="check" value="${ingredient}">${ingredient}`
    parent.appendChild(li)
}
)


function searchReceipe(){
    //array of all selected ingredients
    const selectedingredients=Array.from(document.querySelectorAll('#ingredient-list input:checked'),mapfn=(i=>i.value))
    console.log(selectedingredients)
    //create array of receipes which has all ingredients as selected one.(here it is checked whether evry element in ingredients array is matched present in selectedingredients or not)
    const receipeMatch=receipe.filter(r=>r.ingredients.every(i=>selectedingredients.includes(i)))
    nameOfr=receipeMatch.map(r=>{return r.name})
    console.log(receipeMatch);
    recipeList.innerHTML=''
    recipename.innerHTML=''
    //check whether ingredients are suficient to form recipe or not 
    if(receipeMatch.length!==0){
        recipename.innerHTML=`<p>Receipe can be made: ${receipeMatch.map(r=>{return r.name})}<\p>`
        nameOfr.forEach(item=>{
         ele=document.createElement('div')
         ele.classList.add('boxes-rec')
         ele.innerHTML=`<input type="hidden"name="rec" value="${item}"><img class="r-images" src="image/${item}.jpg" alt="${item} height="600px" width="600px" ">`
         recipeList.appendChild(ele)
        
    })
    ele2=document.createElement('button')
    ele2.classList.add('buttonfPrd')
    ele2.innerHTML='Search Procedure'
    a.appendChild(ele2)
    ele2.addEventListener('click',display)
    const rdisplay=document.getElementById('recipe-show')
    
    function display(){ 
        rdisplay.innerHTML=``
    receipeMatch.forEach(recipe => {
        const recipeCard = document.createElement('div')
        recipeCard.innerHTML =' '
        recipeCard.classList.add('recipe-card');
        if(true){
        recipeCard.innerHTML = `<img src="${recipe.image}" alt="${recipe.name}" class="img-rc">
        <h3>${recipe.name}</h3>
        <h3>Ingredients:<\h3>
        <ul>
        ${recipe.ingredients.map(ingredient => `<li>${ingredient}</li>`).join('')}
        </ul>
        <div>${recipe.procedure}</div>
        `
           rdisplay.appendChild(recipeCard)}
           
       })
       
       const d=document.createElement('div')
       d.innerHTML=`<a href='#ing'><button onclick="{a.removeChild(ele2); const butt=document.querySelector('.ser-a');butt.remove(); recipename.innerHTML='';recipeList.innerHTML=''}" class="ser-a">Choose again</button>`
       butback.appendChild(d)
       ele2.removeEventListener('click',display)
    }
    }
    else{
            recipeList.innerHTML=`No receipe is available with current ingredients. 
                                please select some differnt ingredients `
            const d=document.createElement('div')
            d.innerHTML=`<a href='#ing'><button onclick="{ const butt=document.querySelector('.ser-a');butt.remove();recipeList.innerHTML=''}" class="ser-a">Choose again</button>`
            butback1.appendChild(d)
    }
    const checkboxes = document.querySelectorAll('#ingredient-list input[type="checkbox"]');
    checkboxes.forEach(checkbox => checkbox.checked = false);
    //button.removeEventListener('click',searchReceipe)

    }

    button.addEventListener('click',searchReceipe)