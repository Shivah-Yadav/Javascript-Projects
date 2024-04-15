import { anotherRecipeObject } from "./model.js";
import { collectandStoreBookmark } from "./model.js";

export class BookmarkView {
    handleBookmarks(){
        this.rightContainer = document.getElementById('right-container')
        this.rightContainer.addEventListener('click',function(e){
            const btnName = e.target.innerText;
            if(btnName == "Mark as Bookmark"){
                const myTitle = anotherRecipeObject.recipeObject.title
                let titleArray = collectandStoreBookmark(myTitle)
                this.bookmark = document.getElementById('childbookmark')
                this.bookmark.innerText = ""
                titleArray.map((i)=>{
                    this.bookmark.insertAdjacentHTML('afterbegin',`<h4>#${i}</h4>`)
                })
            }
        })
    }
}