document.getElementById("add").addEventListener("click", function(){

    var inputText = document.getElementById("inputText").value;
    if(!inputText == ""){
        
        var checkedButton = document.createElement("input");
        checkedButton.type = "checkbox";
        checkedButton.addEventListener("click", function(){

            document.getElementById("checkedtodo").appendChild(list);
            list.style.textDecoration = "line-through";
            list.style.marginLeft = "10px";
            if(checkedButton.checked == false){
                document.getElementById("todolist").appendChild(list);
                list.style.textDecoration = "none";
            }
           
        })


        var deleteButton = document.createElement("button");
        deleteButton.style.backgroundColor = "crimson";
        
        deleteButton.innerHTML = "Delete"

        deleteButton.addEventListener("click", function(){
            document.getElementById("todolist").removeChild(list);
            
        })
        
        deleteButton.addEventListener("click", function(){
            document.getElementById("checkedtodo").removeChild(list);
        })

        var list = document.createElement("li");
        list.innerHTML = inputText;
        document.getElementById("todolist").appendChild(list);
        
        list.appendChild(checkedButton);
        list.appendChild(deleteButton);
       
        
        list.style.textAlign = "left";
        list.style.width = "100%";
        list.style.marginTop = "20px";
        list.style.display = "inline-block";
        list.style.justifyContent = "left";
        
        deleteButton.style.float = "right";
        deleteButton.style.marginRight = "20px";

        

    }

    
    
    document.getElementById("inputText").value = "";
})

document.getElementById("deleteall").addEventListener("click", function(){
    document.getElementById("todolist").innerHTML = "";
})

document.getElementById("deleteallcom").addEventListener("click", function(){
    document.getElementById("checkedtodo").innerHTML = "";
})



