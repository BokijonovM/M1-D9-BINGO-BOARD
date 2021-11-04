const displayNumber = function (){
    let cellsContainerNode = document.getElementById("cells-container")
    
    for(let cellNumber = 1; cellNumber <=76; cellNumber++){
        let newCellNode = document.createElement("div")
        newCellNode.innerText = cellNumber
        newCellNode.classList.add("cell")

        newCellNode.onclick = selectCell
        // newCellNode.addEventListener("click", getSelectedCell)

        //let cellContainerNode = document.getElementById("cells-container")
        //cellContainerNode.appendChild(newCellNode)
        cellsContainerNode.appendChild(newCellNode)
    }
}



const selectCell = function(eventData){
    // Find the element that has been clicked
    const clickedCellNode = eventData.target

    // Setting its class to be 'selected'
    clickedCellNode.classList.add(".selected")

}

const randomNumber = function(){
    let generateField = document.getElementById("number-generator-btn")
    let randomNumber = Math.floor(Math.random() * 76);
    let pressGenerateBTN = document.getElementById("number-changer").innerText = randomNumber
    generateField.onclick = pressGenerateBTN

}




window.onload = function(){
    displayNumber()

}