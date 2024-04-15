// import { getAllRecipeData } from "./model";

export class viewRecipeData{
    leftContainer;
    render(data){
        this.leftContainer = document.getElementById('left-container')
        this.getAllRecipeDataView(data)
    }
    getAllRecipeDataView(recipeArray){
        // const recipeArray = getRecipeData.allRecipeData
        this.leftContainer.innerHTML = ""
        recipeArray.map((i)=>{
            const publisher = i.publisher
            const title = i.title
            const imageUrl = i.image_url
            const myId = i.id
            return this.leftContainer.insertAdjacentHTML("afterbegin",
            `<a href="#${myId}">
                    <div class="left-food-container">
                        <img id="myimage" src="${imageUrl}"/>
                        <h2 id="mypublisher">${publisher}</h2>
                        <h4 id="mytitle">${title}</h4>
                    </div>
                </a>`
            )
        })
    }
}