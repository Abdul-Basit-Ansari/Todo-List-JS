if (localStorage.getItem('itemsJson') === '[]'){
    let head = document.getElementById('listhead')
    head.innerHTML = ""
}
if (localStorage.getItem('itemsJson') !== '[]'){
    let head = document.getElementById('listhead')
    head.innerHTML = "Your List"
}


function getAndUpdate(){

    tit = document.getElementById('title').value;
    desc = document.getElementById('description').value;
    if (localStorage.getItem('itemsJson')==null){
        itemJsonArray = [];
        itemJsonArray.push([tit, desc]);
        localStorage.setItem('itemsJson', JSON.stringify(itemJsonArray))
    }
    else{
        itemJsonArrayStr = localStorage.getItem('itemsJson')
        itemJsonArray = JSON.parse(itemJsonArrayStr);
        itemJsonArray.push([tit, desc]);
        localStorage.setItem('itemsJson', JSON.stringify(itemJsonArray))
    }
    update();
    
    document.getElementById('title').value = "";
    document.getElementById('description').value = "";
}

function update(){
    if (localStorage.getItem('itemsJson')==null){
        itemJsonArray = []; 
        localStorage.setItem('itemsJson', JSON.stringify(itemJsonArray))
    } 
    else{
        itemJsonArrayStr = localStorage.getItem('itemsJson')
        itemJsonArray = JSON.parse(itemJsonArrayStr); 
    }
    if (localStorage.getItem('itemsJson') === '[]'){
        let head = document.getElementById('listhead')
        head.innerHTML = ""
    }
    if (localStorage.getItem('itemsJson') !== '[]'){
        let head = document.getElementById('listhead')
        head.innerHTML = "Your List"
    }
    
    // Populate the table
    let tableBody = document.getElementById("tableBody");
    let str = "";
    itemJsonArray.forEach((element, index) => {
        str += `
      
        <div class="card my-5 w-100">
  <div class="card-header text-right">

  <span class="badge bg-light px-4 py-2">
  ${index + 1}  
  </span>
  </div>
  <div class="card-body">
    <h5 class="card-title">${element[0]}</h5>
    <p class="card-text">${element[1]}</p>
    <button class="btn btn-sm btn-outline-danger" onclick="deleted(${index})">Delete</button>
  </div>
</div>`; 
    });
    tableBody.innerHTML = str;
}
add = document.getElementById("add");
add.addEventListener("click", getAndUpdate);
update();
function deleted(itemIndex){
    itemJsonArrayStr = localStorage.getItem('itemsJson')
    itemJsonArray = JSON.parse(itemJsonArrayStr);
    // Delete itemIndex element from the array
    itemJsonArray.splice(itemIndex, 1);
    localStorage.setItem('itemsJson', JSON.stringify(itemJsonArray));
    update();

}
function clearStorage(){
    if (confirm("Do you areally want to clear?")){
    localStorage.clear();
    update()
    }
    if (localStorage.getItem('itemsJson') === '[]'){
        let head = document.getElementById('listhead')
        head.innerHTML = ""
    }
    if (localStorage.getItem('itemsJson') !== '[]'){
        let head = document.getElementById('listhead')
        head.innerHTML = "Your List"
    }
    
}




{/* <tr>
<th scope="row">${index + 1}</th>
<td>${element[0]}</td>
<td>${element[1]}</td> 
<td><button class="btn btn-sm btn-primary" onclick="deleted(${index})">Delete</button></td> 
</tr> */}