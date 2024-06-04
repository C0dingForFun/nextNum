let num = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let button = document.querySelector('button');
let nextNum = document.querySelector('span');
let i = 0;

function nextNumber(){
    if(i < num.length){
        nextNum.innerText = num[i];
        i++;
    }else {
        i = 0
    }
}

button.addEventListener('click', nextNumber)
