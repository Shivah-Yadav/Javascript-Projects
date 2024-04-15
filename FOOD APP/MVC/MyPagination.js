

export class MyPagination
{
    paginationData;
    data;
    render(data){
        this.data = data
        this.paginationData = document.getElementById('pagination')
        // console.log(this.data.allRecipeData)
        this.paginationLogic()
    }

    paginationLogic(){
        const recipeLength = this.data.allRecipeData.length
        const recipePerPage = this.data.dataPerPage
        const numberOfPages = Math.ceil(recipeLength/recipePerPage)
        const currentPage = this.data.page;
        if(currentPage === 1 && numberOfPages > 1){
            this.paginationData.innerHTML = ""
            return this.paginationData.insertAdjacentHTML('afterbegin',`
            <button class="btn--inline next">
                <span>Page ${currentPage + 1}</span>
            </button>
            `
            )
        }
        if(currentPage === numberOfPages){
            this.paginationData.innerHTML = ""
            return this.paginationData.insertAdjacentHTML('afterbegin',`
            <button class="btn--inline previous">
                <span>Page ${currentPage - 1}</span>
            </button>
            `       
            ) 
        }
        if(currentPage < numberOfPages){
            this.paginationData.innerHTML = ""
            return this.paginationData.insertAdjacentHTML('afterbegin',`
            <button class="btn--inline previous">
                <span>Page ${currentPage - 1}</span>
            </button>
            <button class="btn--inline next">
                <span>Page ${currentPage + 1}</span>
            </button>
            `   
            )
        }
        else{
            this.paginationData.innerHTML = ""
            return this.paginationData.insertAdjacentHTML('afterbegin',`
            <button class="btn--inline currentPage">
                <span>Page ${currentPage + 1}</span>
            </button>
            ` 
            )
        }
    }
    getPageNumber(handler){
        this.paginationData = document.getElementById('pagination')
        this.paginationData.addEventListener('click',function(e){
            const pageNumber = Number(e.target.innerText.slice(4))
            handler(pageNumber)

        })
    }
}