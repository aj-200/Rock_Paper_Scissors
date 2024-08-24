
let choices = [`Rock`, `Paper`, `Scissors`];


const button = document.getElementById("submit");

let opponent_choice = function(){
        return choices[Math.floor(Math.random() * choices.length)];

}

button.addEventListener("click", () => {

})




























function changeImage(newImageSrc, opponent_choice) {
        var imgElement = document.getElementById('chosen');
        
        if(opponent_choice === `Rock`){
                console.log(`Opponent choice:` + opponent_choice);
        imgElement.src = `the-rock.png`;
        }
        else if(opponent_choice === `Scissors`){
                console.log(`Opponent choice:` + opponent_choice);

                imgElement.src = "katana.jpeg";
        } else if(opponent_choice === `Paper`){
                console.log(`Opponent choice:` + opponent_choice);

                imgElement.src = "paper.jpeg";
        }
    }





