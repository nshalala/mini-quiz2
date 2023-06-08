const letters = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z', 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
const numbers = [1,2,3,4,5,6,7,8,9,0];
const symbols = ['!','@','#','$','%','^','&','*'];

let allSymbols = letters.concat(numbers,symbols);

function generate(){
    let passw = '';
    let passLength = +document.getElementById("passLength").value;
    console.log(passLength);
    let password = document.getElementById("password")
    for (let i = 0; i < passLength; i++) {
        passw += allSymbols[rnd()];
    }
    password.innerText = passw;
}

function rnd(){
    return Math.floor(Math.random() * (allSymbols.length - 1));
}

