import { recipe } from "./model.js";
export class AddRecipeView{
    right;
    addBtn;
    displayAddRecipeForm(){
        this.right = document.getElementById('right-container')
        this.addBtn = document.getElementById('add-recipe')
        this.addBtn.addEventListener('click',()=>{
            this.right.innerHTML = ""
            const addRecipeForm = `<form class="add-recipe-form" method="POST">
            <h2>Add A Custom Recipe</h2>
                <label>Title:
                <input type="text" placeholder="Enter the title" value="Bevarages">
                </label>
                <br>

                <label>Image URL:
                <input type="url" placeholder="enter image Url" value="https://images.unsplash.com/photo-1712174766230-cb7304feaafe?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw2fHx8ZW58MHx8fHx8">
                </label>
                <br>
                <label>Cooking Time:
                <input type="text" placeholder="Enter the cooking time" value="1hr 30min">
                </label>
                <br>
                <label>Servings:
                <input type="text" placeholder="Enter the servings" value="8">
                </label>
                <br>
                <label>publisher:
                <input type="text" placeholder="Enter the publisher" value="billie Elish">
                </label>
                <br>
                <label>Ingredients1:
                <input type="text" placeholder="Enter the ingredients" value="5 kg dal">
                </label>
                <br>
                <label>Ingredients2:
                <input type="text" placeholder="Enter the ingredients" value="10 kg atta">
                </label>
                <br>
                <label>Ingredients3:
                <input type="text" placeholder="Enter the ingredients" value="3 kg rice">
                </label>
                <br>
                <label>Soutce URL:
                <input type="url" placeholder="Enter the source url" value="https://unsplash.com/">
                </label>
                <input type="submit" value="add">
            </form>`
            this.right.insertAdjacentHTML('afterbegin',addRecipeForm)
        })
    }

    collectRecipeData(){
        this.right = document.getElementById('right-container')
        this.right.addEventListener('click',(e)=>{
            // window.alert('Hello')
            e.preventDefault()
            const title = e.target.form[0].value
            const imageUrl = e.target.form[1].value
            const cookingTime = e.target.form[2].value
            const servings = e.target.form[3].value
            const publisher = e.target.form[4].value
            const ingredients1 = e.target.form[5].value
            const ingredients2 = e.target.form[6].value
            const ingredients3 = e.target.form[7].value
            const sourceUrl = e.target.form[8].value

            const newRecipeData = {
                titile:title,
                imageUrl : imageUrl,
                cookingTime : cookingTime,
                servings : servings,
                publisher : publisher,
                ingredients1 : ingredients1,
                ingredients2 : ingredients2,
                ingredients3 : ingredients3,
                sourceUrl : sourceUrl
            }
            // console.log(newRecipeData)
            recipe(newRecipeData)
        })
    }
}