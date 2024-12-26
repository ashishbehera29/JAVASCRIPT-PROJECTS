var selectfield =document.getElementById("selectfield");
var selectext =document.getElementById("selectext");
var options=document.getElementsByClassName("options");
var list = document.getElementById("list");
var arrowicon = document.getElementById("arrowicon");

selectfield.onclick = function () {
    list.classList.toggle("hidden")
    arrowicon.classList.toggle("rotate");
}

for(option of options){
    option.onclick = function () {
        selectext.innerHTML=this.textContent;
        list.classList.toggle("hidden");
        arrowicon.classList.toggle("rotate");
    }
}