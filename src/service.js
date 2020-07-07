const  filterSearchResult = (data, searchValue) => {
    let filteredArray = []
    data.forEach(element => {
        let lowerTitle = element.title.toLowerCase().trim()
        let indexValue = lowerTitle.indexOf(searchValue.trim())
        if(indexValue !== -1) {
            filteredArray.push(element)
        } else {
            let tagArray = element.tag
            for(let i=0; i<tagArray.length; i++) {
                let lowerTag = tagArray[i].toLowerCase()
                if(lowerTag.indexOf(searchValue.trim()) !==-1) {
                    filteredArray.push(element)
                    break;
                }
            }
        }
    });
    console.log(filteredArray)
    return filteredArray

}

export {
     filterSearchResult
}