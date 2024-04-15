import {anotherRecipeObject} from './model.js'
export class servingsView{
    rightContainer;
    render(){
        this.rightContainer = document.getElementById('right-container')
        this.handleServings()
    }

    handleServings(){
        // this.rightContainer = document.getElementById('right-container')
        this.rightContainer.addEventListener('click',function(e){
            const btnName = e.target.innerText;

            if(btnName == "incr"){
                this.rightContainer = document.getElementById('right-container')
                const completeData = anotherRecipeObject.recipeObject
                let myServings = completeData.servings

                anotherRecipeObject.recipeObject.servings = myServings + 1

                anotherRecipeObject.recipeObject.cookingTime= (anotherRecipeObject.recipeObject.cookingTime / anotherRecipeObject.recipeObject.servings) * 5
                // console.log(cookingTime)

                anotherRecipeObject.recipeObject.ingredients.map(function(i){
                   
                        i.quantity = Math.ceil((i.quantity * anotherRecipeObject.recipeObject.servings) / 5)
                    
                })

                const receivedData = anotherRecipeObject.recipeObject
                this.rightContainer.innerText = ""
                return this.rightContainer.insertAdjacentHTML("afterbegin",`<div class="right-food-container">
                        <img src="${receivedData.imageUrl}"/>
                        <div class="div-text">
                            <h2>Recipe Name: ${receivedData.title}</h2>
                            <h3>Pulisher: ${receivedData.publisher}</h3>
                            <p class="servings">Servings: ${receivedData.servings}</p>
                            <button id="incr">incr</button>
                            <button id="decr">decr</button>
                            <p>Cooking Time: ${receivedData.cookingTime}</p>
                            <div class="ingredients">
                                ${receivedData.ingredients.map(function(e){
                                    return `<div>
                                        <h4>${e.description}</h4>
                                        <span class="quantity">Quantity:</span>
                                        <span>${e.unit} ${e.quantity}</span>
                                    </div>`
                                }).join("")}
                            </div>
                        </div>
                    </div>`
                )
            
            }else if(btnName == 'decr'){
                this.rightContainer = document.getElementById('right-container')
                const completeData = anotherRecipeObject.recipeObject
                let myServings = completeData.servings

                anotherRecipeObject.recipeObject.cookingTime= (anotherRecipeObject.recipeObject.cookingTime * anotherRecipeObject.recipeObject.servings) / 5
                
                anotherRecipeObject.recipeObject.ingredients.map(function(i){
                    i.quantity = Math.ceil((i.quantity * anotherRecipeObject.recipeObject.servings) / 5)
                })

                anotherRecipeObject.recipeObject.servings = myServings - 1
                const receivedData = anotherRecipeObject.recipeObject
                this.rightContainer.innerText = ""
                return this.rightContainer.insertAdjacentHTML("afterbegin",`<div class="right-food-container">
                        <img src="${receivedData.imageUrl}"/>
                        <div class="div-text">
                            <h2>Recipe Name: ${receivedData.title}</h2>
                            <h3>Pulisher: ${receivedData.publisher}</h3>
                            <p class="servings">Servings: ${receivedData.servings}</p>
                            <button id="incr">incr</button>
                            <button id="decr">decr</button>
                            <p>Cooking Time: ${receivedData.cookingTime}</p>
                            <div class="ingredients">
                                ${receivedData.ingredients.map(function(e){
                                    return `<div>
                                        <h4>${e.description}</h4>
                                        <span class="quantity">Quantity:</span>
                                        <span>${e.unit} ${e.quantity}</span>
                                    </div>`
                                }).join("")}
                            </div>
                        </div>
                    </div>`
            )}
        })
    
    }
}