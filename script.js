Create Two Functions -> addChild and redWedding

const body = document.querySelector("body");
const starks = document.querySelector(".starks")



// The addChild function creates new div & appends it to the starks div

function addChild() {
    const addChildDiv = document.getElement("div");
    document.querySelector(".starks").appendChild(addChildDiv)
    addChildDiv.textContent = "Not a Stark."
}

// The redWedding function removes ALL stark children (loop)

function redWedding() {
    while (starks.firstChild) {
   starks.firstChild.remove()
    }
}


// Attach functions to buttons
const addChildBtn = document.querySelector("#add-child")
addChildBtn.addEventListener("click", addChild)
const redWedBtn = document.querySelector("#red-wedding")
redWeddingBtn.addEventListener("click", redWedding)


















