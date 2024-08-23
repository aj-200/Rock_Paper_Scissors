
let choices = [`Rock`, `Paper`, `Scissors`];



let opponent_choice = function opponent_play(){
        return choices[Math.floor(Math.random() * choices.length)];

}


function changeImage(newImageSrc) {
        var imgElement = document.getElementById('chosen');

        if(opponent_choice === `Rock`){
        imgElement.src = `the-rock.png`;
        }
        else if(opponent_choice === `Scissors`){
                imgElement.src = "katana";
        }
    }
    
    
    changeImage('new-image.jpg');
    


console.log(opponent_choice);