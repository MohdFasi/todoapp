let title = document.querySelector('#title')
let desc = document.querySelector('#desc')
let container = document.querySelector('.container')
let addbtn = document.querySelector('.addtn')
let titleval;
let descval
let listval = []
let c = 1
onload = function(){
    listval = JSON.parse(localStorage.data)
    displaydata()
}

function addtodo(){
    titleval = title.value
    descval = desc.value
    if(titleval == 0){
        alert("add something")
    }
    else{
        let objval = {'title':titleval,'desc':descval}
        listval.push(objval)
        displaydata();
        console.log(listval)
        localStorage.setItem('data',JSON.stringify(listval))
        resetvals()
        document.querySelector('.input').style.display = "none"

    }
}
function resetvals(){
    title.value =''
    desc.value = ''
}

function displaydata(){
    let items = listval.map((e,i)=>{
        return `<div class="item">
        <input type="checkbox">
        <h1>${e.title}</h1>
        <p>${e.desc}</p>
        <button onclick="edit(${i})">edit</button>
        <button onclick="del(${i})">delete</button>
    </div>`
    })
    container.innerHTML = items.join(" ")
}

function todo(){
    if(c==1){
        document.querySelector('.input').style.display = "flex"
        c--;
    }
    else{
        document.querySelector('.input').style.display = "none"
        c++;
    }
}

function del(i){
    listval.splice(i,1)
    localStorage.setItem('data',JSON.stringify(listval))
    displaydata()
}
function edit(i){
    title.value = listval[i].title
    desc.value = listval[i].desc
    objval = {'title':title.value,'desc':desc.value}
    document.querySelector('.input').style.display = "flex"
    listval.splice(i,1)
    addbtn.setAttribute('onclick','edittodo()')
    addbtn.innerHTML = "edit todo"
}

function edittodo(){
        listval.splice(i,1,objval)
        displaydata();
        console.log(listval)
        localStorage.setItem('data',JSON.stringify(listval))
        resetvals()
        document.querySelector('.input').style.display = "none"
        addbtn.innerHTML = "add todo"
}