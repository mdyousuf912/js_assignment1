function add(){
    var ul = document.getElementById("dynamic-list");
    var candidate = document.getElementById("candidate")
    var li = document.createElement("li");
    li.setAttribute("id", "complete");
    li.appendChild(document.createTextNode(candidate.value));
    ul.appendChild(li);
    candidate.value= "";
}

function remove(){
    var ul = document.getElementById("dynamic-list");
    var item = document.getElementById("complete");
    ul.removeChild(item)
}