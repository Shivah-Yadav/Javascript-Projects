//api  - https://forkify-api.herokuapp.com/api/v2/recipes;
// https:forkify-api.herokuapp.com/api/v2/recipes?search=pizza&key=<insert your key>
// Id : 682060bf-37eb-4f69-94c8-a3b5f2550bbe
//-- https:forkify-api.herokuapp.com/api/v2/recipes?search=pizza&key=682060bf-37eb-4f69-94c8-a3b5f2550bbe

const searchBtn = document.getElementById('search')
const searchInput = document.getElementById('searchinput')
const removeInputText = document.getElementById('remove')

import { OneRecipeView } from './MVC/oneRecipeView.js'
import { storeRecipeData } from './MVC/model.js'
import { getAllData } from './MVC/model.js'
import { viewRecipeData } from './MVC/viewRecipeData.js'
import {getAllRecipeData} from './MVC/model.js'
import { paginateData } from './MVC/model.js'
import { MyPagination } from './MVC/MyPagination.js'
import { servingsView } from './MVC/servingsView.js'
import {BookmarkView } from './MVC/BookmarkView.js'
import {AddRecipeView} from './MVC/AddRecipeView.js'

searchBtn.addEventListener('click',function(){
    getRecipeData()
})
removeInputText.addEventListener('click',function(){
    searchInput.value = ""
})
async function getRecipeData(){
    try{
        const searchItem = searchInput.value
        await getAllData(searchItem)
        const arv = new viewRecipeData()
        // arv.render(getAllRecipeData.allRecipeData)
        arv.render(paginateData())
        searchInput.value = ""
        const mpv = new MyPagination()
        mpv.render(getAllRecipeData)
    }


    catch(e){
        // alert(e)
        console.log(e)
    }
}

async function loadOneRecipe(){
    const hashId = window.location.hash.slice(1)
    await storeRecipeData(hashId)
    const rv = new OneRecipeView()
    rv.render()
}
function callHashChangeEventHandler(){
    const r = new OneRecipeView()
    r.hashChangeEventHandler(loadOneRecipe)
}
callHashChangeEventHandler()

function controlFunction(number){
    const arv = new viewRecipeData()
    arv.render(paginateData(number))
    const mpv = new MyPagination()
    mpv.render(getAllRecipeData)
}

function callIt(){
    const view = new MyPagination()
    view.getPageNumber(controlFunction)

}
callIt()

function servings(){
    const sv = new servingsView()
    sv.render()
}
servings()

function bookmark(){
    const bv = new BookmarkView()
    bv.handleBookmarks()
}
bookmark()

function addRecipe(){
    const arv = new AddRecipeView()
    arv.displayAddRecipeForm()
    arv.collectRecipeData()
}
addRecipe()