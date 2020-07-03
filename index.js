var input = document.getElementById("inp");
var button = document.getElementById("addon");
var list = document.getElementById("todo");
var itemlist=[];
button.addEventListener("click",function(){
    if (input.value != ""){
        itemlist.push(input.value);
        value();
        input.value="";
    }
});
function value(){
    var temp ='<li class="list-group-item">'+itemlist[itemlist.length-1]+'</li>';
    list.insertAdjacentHTML('beforeend', temp);
}
input.addEventListener("keypress",function(event){
    if (event.keyCode === 13) {
        if (input.value != ""){
            itemlist.push(input.value);
            value();
            input.value="";
        }
       }
});







