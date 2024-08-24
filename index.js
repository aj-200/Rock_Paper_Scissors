
let choices = [`Rock`, `Paper`, `Scissors`];


const button = document.getElementById("submit");

let fResult = document.getElementById("result");

let selector = document.getElementById("select");

let opponent_choice = function(){
        return choices[Math.floor(Math.random() * choices.length)];

}



button.addEventListener("click", () => {
 let player_choice = selector[selector.selectedIndex].text;

let pChoice = opponent_choice();
changeImage(pChoice);

if(player_choice === "Rock" && pChoice === "Paper"){
fResult.textContent = "Opponent Won!";
} else if(player_choice === "Paper" && pChoice === "Rock"){
        fResult.textContent = "Player Won!";

} else if(player_choice === "Scissors" && pChoice === "Rock"){
        fResult.textContent = "Opponent Won!";

} else if(player_choice === "Rock" && pChoice === "Scissors"){
        fResult.textContent = "Player Won!";

} else if(player_choice === "Paper" && pChoice === "Scissors"){
        fResult.textContent = "Opponent Won!";

} else if(player_choice === "Scissors" && pChoice === "Paper"){
        fResult.textContent = "Player Won!";

} else {
        fResult.textContent = "IT IS A TIE!";
}



})




























function changeImage(opponent_choice) {
        var imgElement = document.getElementById('chosen');
        
        if(opponent_choice === `Rock`){
                console.log(`Opponent choice:` + opponent_choice);
        imgElement.src = `the-rock.png`;
        }
        else if(opponent_choice === `Scissors`){
                console.log(`Opponent choice:` + opponent_choice);

                imgElement.src = "katana.jpg";
        } else if(opponent_choice === `Paper`){
                console.log(`Opponent choice:` + opponent_choice);

                imgElement.src = "paper.jpeg";
        }
    }





