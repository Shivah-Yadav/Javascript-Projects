import {anotherRecipeObject} from './model.js'
export class OneRecipeView{

    rightContainer ;
    rightData;

    render(){
        this.rightContainer = document.getElementById('right-container');
        this.clear()
        // console.log(anotherRecipeObject.recipeObject)
        let collectedData = anotherRecipeObject.recipeObject
        this.rightData = this.actualLogic(collectedData)
        // console.log(anotherRecipeObject)
        // this.rightData = this.actualLogic(collectedData)
        this.addDataToContainer()
    }
    clear(){
        this.rightContainer.innerText = ""
    }
    actualLogic(receivedData){
        // console.log(receivedData)
        return `<div class="right-food-container">
            <img src="${receivedData.imageUrl}"/>
            <div class="div-text">
                <button class="bookmark">Mark as Bookmark</button>
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
    }
    addDataToContainer(){
        this.rightContainer.insertAdjacentHTML('afterbegin',this.rightData)
    }

    hashChangeEventHandler(data){
        window.addEventListener('hashchange',data)
    }
    handleView(){
        this.rightContainer = document.getElementById('right-container')
        this.rightContainer.innerText = "";
        this.rightContainer.innerText = "Please Enter a Valid Id..."
    }
}
