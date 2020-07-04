$(document).ready(function() {
    $('#addon').click(function() {
      myFunction();
    });
    $("#inp").keypress(function(e){
        if (e.keyCode == 13) {
            myFunction();
        }
    });
});

function myFunction(){
    if($("#inp").val() != ""){
        var txt = $('<li class="list-group-item"></li>').text($("#inp").val());
        var check =$('<input class="mr-3" type="checkbox"></input>').click(function(){
           $(this).parent().toggleClass("lint");
        });
        var del =$('<i class="fa fa-trash float-right" aria-hidden="true"></i>').click(function(){
            var tem = $(this).parent();
            tem.remove();
        });
        txt.prepend(check);
        txt.append(del);
        $("#todo").append(txt);
    }
    $("#inp").val("");
}


/*
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
*/







