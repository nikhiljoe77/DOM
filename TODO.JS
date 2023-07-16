showTask()
let addtaskinput=document.getElementById("addtaskinput")
let addtaskbtn=document.getElementById("addtaskbtn")
addtaskbtn.addEventListener("click",function()
{
     const addtaskinputval=addtaskinput.value
     if(addtaskinputval.trim()!=0)
     {
    let webtask=localStorage.getItem("localtask")
    if(webtask==null)
    {
        taskObj=[]
    }
    else{
        taskObj=JSON.parse(webtask)
    }
    taskObj.push(addtaskinputval)
    localStorage.setItem("localtask",JSON.stringify(taskObj))
    addtaskinput.value=''
    showTask()
}
   
})
function showTask()
{
    let webtask=localStorage.getItem("localtask")
    if(webtask==null)
    {
        taskObj=[]
    }
    else{
        taskObj=JSON.parse(webtask)
    }

let html=' '
let addedtasklist=document.getElementById("addedtasklist")
taskObj.forEach((item,index)=>
{
    html += `<tr>
    <th scope="row">${index+1}</th> 
    <td>${item}</td>
    <td><button type="button" onclick="edittask(${index})" class="text-primary"><i class="fa fa-edit"></i>Edit</button></td>
    <td><button type="button" onclick="deleteitem(${index})"class="text-danger"><i class="fa fa-trash"></i>Delete</button></td>
    </tr>`
})
addedtasklist.innerHTML=html
}

function edittask(index)
{ //let saveindex = document.getElementById("saveindex")
    let addtaskbtn=document.getElementById("addtaskbtn")
let savetaskbtn=document.getElementById("savetaskbtn")
saveindex.value=index

    let webtask=localStorage.getItem("localtask")
let taskObj=JSON.parse(webtask);
addtaskinput.value=taskObj[index]

addtaskbtn.style.display="none"
savetaskbtn.style.display="block"
}
let savetaskbtn=document.getElementById("savetaskbtn")
savetaskbtn.addEventListener("click",function(){
    let addtaskbtn=document.getElementById("addtaskbtn")
    let webtask =localStorage.getItem("localtask")
    let taskObj = JSON.parse(webtask); 
    let saveindex = document.getElementById("saveindex").value
     taskObj[saveindex] = addtaskinput.value;
     localStorage.setItem("localtask",JSON.stringify(taskObj))
    addtaskbtn.style.display="block"
    savetaskbtn.style.display="none"
    addtaskinput.value=""
    showTask()
})
function deleteitem(index)
{
   
    let webtask =localStorage.getItem("localtask")
    let taskObj = JSON.parse(webtask); 
    taskObj.splice(index,1)
    localStorage.setItem("localtask",JSON.stringify(taskObj))
    showTask()

}
let deletall=document.getElementById("deleteallbtn")
deleteallbtn.addEventListener("click",function()
{
    let savetaskbtn=document.getElementById("savetaskbtn")
    let addtaskbtn=document.getElementById("addtaskbtn")
    addtaskbtn.style.display="block"
    savetaskbtn.style.display="none"
    let webtask =localStorage.getItem("localtask")
let taskObj = JSON.parse(webtask);
let taskObjlength=taskObj.length
taskObj=[]
localStorage.setItem("localtask",JSON.stringify(taskObj))
showTask()

})
let searchtextbox=document.getElementById("searchtextbox")
searchtextbox.addEventListener("input",function()
{
    let trlist=document.querySelectorAll("tr")
    Array.from(trlist).forEach(function(item){
        let searchedtext=item.getElementsByTagName("td")[0].innerText
        let searchtextboxval=searchtextbox.value
        let re=new RegExp(searchtextboxval,'gi')
        if(searchedtext.match(re)){
            item.style.display="block"
        }
        else{
            item.style.display="none"
        }
    })
})