const displayNumber = function (){
    for(let cellNumber = 1; cellNumber <=76; cellNumber++){
        let newCellNode = document.createElement("div")
        newCellNode.innerText = cellNumber
        newCellNode.classList.add("cell")

        let cellContainerNode = document.getElementById("cells-container")
        cellContainerNode.appendChild(newCellNode)
    }
}
displayNumber()