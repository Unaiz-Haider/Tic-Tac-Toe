let boxes = document.querySelectorAll(".box");
let resetButton =  document.querySelector("#reset");

let playerX = true; // true for player X, false for player O

const winPatterns = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
];

boxes.forEach((box) => {
    box.addEventListener("click" , () => {
        console.log("box is clicked");

        if(playerX){
            box.innerText = "X";
            playerX = false;
        }
        else{
            box.innerText = "O";
            playerX = true;
        }

        box.disabled = true;
        box.style.boxShadow = "none"; // Remove box shadow after click
        checkWinner();
    }); 
});


const resetGame = () => {
    console.log("Resetting the game");
    enableBoxes();
    playerX = true; // Reset to player X
    
    boxes.forEach((box) => {
        box.style.boxShadow = "0 0 1rem rgba(0, 0, 0, 0.5)"; // Reset box shadow
        box.style.backgroundColor = "white"; // Reset background color
        box.disabled = false; // Enable all boxes
    });
};

// resetButton already declared at the top
resetButton.addEventListener("click", resetGame);




const disableButtons = () =>{
    boxes.forEach((box) => {
        box.disabled = true;
        box.style.boxShadow = "none";
    })
};



const enableBoxes = () => {
    boxes.forEach((box) => {
        box.innerText = "";
        box.disabled = false;
        box.style.boxShadow = "0 0 1rem rgba(0, 0, 0, 0.5)";

    })
};


const checkWinner = () => {
    for(let i = 0; i < winPatterns.length; i++){
        let pos1Val = boxes[winPatterns[i][0]].innerText;
        let pos2Val = boxes[winPatterns[i][1]].innerText;
        let pos3Val = boxes[winPatterns[i][2]].innerText;

        if(pos1Val != "" && pos2Val != "" && pos3Val != ""){
            if(pos1Val == pos2Val && pos2Val == pos3Val){
                console.log("We have a winner!");
                alert(`Player ${pos1Val} wins!`);
                disableButtons();

                boxes[winPatterns[i][0]].style.backgroundColor = "lightgreen";
                boxes[winPatterns[i][1]].style.backgroundColor = "lightgreen";
                boxes[winPatterns[i][2]].style.backgroundColor = "lightgreen";
                return; // Exit the function after finding a winner
            }
        }
    }
}