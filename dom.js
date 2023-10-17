var  form =document.getElementById("addform")
var list=document.getElementById("items")
let search=document.getElementById("filter")





function handler(e){
    e.preventDefault()
var item=document.getElementById("item").value
var li=document.createElement("li")
li.className="list-group-item"
var button=document.createElement("button")
button.appendChild(document.createTextNode("X"))
button.className="btn btn-danger btn-sm float-right delete"
li.append(document.createTextNode(item))
li.append(button)
var list=document.getElementById("items")
list.appendChild(li)
document.getElementById("item").value =''
}

function deletehand (y) {
    if((y.target.classList.contains("btn"))){
        if(confirm("such me")){
            list.removeChild(y.target.parentElement)
        }
    }
    else{
        (alert("bakchodi na kr"))

    }

}

function searchhandler(e){
    var text =e.target.value.toLowerCase()
    var items=document.getElementsByTagName("li")
    var newarr=Array.from(items)
    newarr.forEach(function(i){
        //console.log(itm.firstChild.textContent.toLowerCase().indexOf(text) != -1)
        if(i.firstChild.textContent.toLowerCase().indexOf(text) != -1){
            i.style.display="block"
        }
        else{
            i.style.display="none"
        }
            
    })

        
    
    
}

form.addEventListener("submit", handler)
list.addEventListener("click", deletehand)
search.addEventListener("input", searchhandler)
