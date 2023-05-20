var username=document.getElementById("username")
var AddUser=document.getElementById("AddUser")
var list=document.getElementById("list")


function AddUserBtn(){
    var name1=username.value
var li=document.createElement('li')
li.textContent=name1



{/* <i class="fa fa-trash-o"></i> */}
// create DLT button

var del=document.createElement('button')
// del.textContent="fa fa-trash-o"
del.className="mybtn fa fa-trash-o text-info fs-5 bg-dark "
li.appendChild(del)
// Function on Delttn button
del.setAttribute('onclick', 'Delete(this)')





// create Edit button

var Edit=document.createElement('button')
// del.textContent="fa fa-trash-o"

Edit.className="mybtn fa fa-edit text-danger bg-dark fs-5"
li.appendChild(Edit)
Edit.setAttribute('onclick','edit(this)')

var pos=list.firstElementChild

if(pos==null){

    list.appendChild(li)
}else{
    list.insertBefore(li,pos)
}

document.getElementById("username").value=" "
}

function Delete(w){
    w.parentNode.remove()
}

function edit(q){
var edittext=prompt('editValue', q.parentNode.firstChild.nodeValue)
q.parentNode.firstChild.nodeValue=edittext
}


