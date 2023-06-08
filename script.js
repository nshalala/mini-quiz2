const letters = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z', 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
const numbers = [1,2,3,4,5,6,7,8,9,0];
const symbols = ['!','@','#','$','%','^','&','*'];

let allSymbols = letters.concat(numbers,symbols);

function generate(){
    let passw = '';
    let lengthInp = document.getElementById("passLength");
    let passLength = +lengthInp.value;
    let password = document.getElementById("password")

    if(isValid(passLength)){
        for (let i = 0; i < passLength; i++) {
            passw += allSymbols[rnd()];
        }
        password.innerText = passw;
    }else{
        alert("You must enter a number more than 4")
    }
    lengthInp.value = '';
}

function rnd(){
    return Math.floor(Math.random() * (allSymbols.length - 1));
}

function isValid(inpV){
    if(inpV < 4){
        return false;
    }
    return true;
}