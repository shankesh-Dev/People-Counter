let count_el = document.getElementById("count_el");
let saveEl = document.getElementById("save_el");
let count =0;

function increment(){
    count +=1;
    // console.log(count);
    document.getElementById("count_el").innerText=count;
}

function saveCount(){
    let message = " "+   count + " - "
    document.getElementById("save_el").innerText += message;
    count =0;
    updateCount(count);
}

function updateCount(count){
    document.getElementById("count_el").innerText=count;
}