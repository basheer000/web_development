const inputBox = document.getElementById("input-box");
const listConstainer = document.getElementById("input-box");
function addTask{
    if(inputBox.value === ''){
        alert("you must write something!");
    }
    else{
        let li = document.createElement("li");
        li.innerHTML=inputBox.value;
        listConstainer.appendChild(li);
        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
        li.appendChild(span);
    }
    inputBox.value("empty");
    saveData();
}

listConstainer.addEventListener("click", function(e){
    if(e.target.tagName === "LI"){
        e.target.classList.toggle("checked");
        saveData();

    }
    else if(e.target.tagName === "SPAN"){
        e.target.parentElement.remove();
        saveData();
    }
}false);
function saveData (){
    localStorage.se
    tItem("data",listConstainer.innerHTML);
}

function showTask(){
    listConstainer.innerHTML = localStorage.getItem("data");
}
showTask();