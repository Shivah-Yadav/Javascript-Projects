//Storing or handling the data
import {API_URL} from '../helper/helper.js'
import {getJSON, sendJSON} from '../config/config.js'

// const childBookmark = document.getElementById('childbookmark')

export const anotherRecipeObject = {
    recipeObject:{}
}
export async function storeRecipeData(id){
    const recipeData = await getJSON(`${API_URL}/${id}`)
    anotherRecipeObject.recipeObject = {
        publisher : recipeData.data.recipe.publisher,
        title : recipeData.data.recipe.title,
        imageUrl : recipeData.data.recipe.image_url,
        servings : recipeData.data.recipe.servings,
        cookingTime : recipeData.data.recipe.cooking_time,
        ingredients : recipeData.data.recipe.ingredients
    }
}
export async function getAllData(id){
        const recipeData = await getJSON(`${API_URL}?search=${id}&key=682060bf-37eb-4f69-94c8-a3b5f2550bbe`)
        const recipeArray = recipeData.data.recipes
        getAllRecipeData.allRecipeData = recipeArray
}

export const getAllRecipeData = {
    allRecipeData : [],
    page : 1,
    dataPerPage : 10
}

export function paginateData(page = getAllRecipeData.page){
    getAllRecipeData.page = page
    const start = (page - 1) * getAllRecipeData.dataPerPage
    const stop = page * getAllRecipeData.dataPerPage
    return getAllRecipeData.allRecipeData.slice(start,stop)
}

let bookmarksArray = []

export function collectandStoreBookmark(title){
    bookmarksArray.push(title)
    localStorage.setItem('bookmark',JSON.stringify(bookmarksArray))
    const titleData = JSON.parse(localStorage.getItem('bookmark'))

    return titleData
}

export async function recipe(data){
    // console.log(Object.entries(data))
    const ingredients = Object.entries(data).filter(function(i){
        return i[0].startsWith('ingredient')
    }).map(function(j){
        const data = j[0].split(",")
        console.log(data)
        const  [quantity,unit,description] = data
        return {quantity,unit,description}
    })
    console.log(data)

    const newData = {
        title:data.title,
        image_url : data.imageUrl,
        ingredients : ingredients,
        cookingTime : data.cookingTime,
        servings : data.servings,
        publisher : data.publisher,
        source_url : data.sourceUrl
    }
    // console.log(newData)

    const output = await sendJSON(API_URL,newData)
    console.log(output)
}