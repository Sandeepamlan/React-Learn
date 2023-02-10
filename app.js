function changeColor1(){
    document.getElementById('title').style.color = 'Orange';
}

function changeColor2(){
    document.getElementById('title').style.color = 'Blue';
}

function changeColor3(){
    document.getElementById('title').style.color = 'rgb(52, 239, 10)';
}

let counter = 0;
function add(){
    counter = counter + 1;
    document.getElementById('counter').innerHTML = counter;
}
function minus(){
    counter = counter - 1;
    document.getElementById('counter').innerHTML = counter;
}
function reset(){
    counter = counter = 0;
    document.getElementById('counter').innerHTML = counter;
} 

