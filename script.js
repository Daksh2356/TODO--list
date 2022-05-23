function clicked_1() {
    if (confirm("Do you want to see the entire list")) {
        document.getElementById("content").innerText = localStorage.itemsJson;
        update();
    }
}

function clicked_2() {
    clearStorage();
    update();
}

function clicked_3() {
    str = prompt('Enter your task name');
    str2 = prompt('Enter your task description');
    document.createElement('table');
    table.innerHTML = `
        <tbody>
          <tr>
            <th scope="row">1</th>
            <td>${str}</td>
            <td>${str2}</td>
            <td><button class="btn btn-primary">Delete</button></td>
          </tr>
        </tbody >
      </table>`;
}

function clicked_4() {
    str = prompt('Enter feedback');
    document.getElementById("content").innerText = str;
}

box = document.getElementById("abt");
box.addEventListener('click', function (params) {
    alert(
        "This is a site created using JS, HTMl and CSS . Please provide an honest feedback !! :)"
    );
})

function getAndupdate() {
    console.log("Updating list...");
    tit = document.getElementById('title').value;
    des = document.getElementById('description').value;
    if (localStorage.getItem('itemsJson') == null) {
        itemsJsonArray = [];
        itemsJsonArray.push([tit, des]);
        localStorage.setItem('itemsJson', JSON.stringify(itemsJsonArray));
    } else {
        itemsJsonArrayStr = localStorage.getItem('itemsJson');
        itemsJsonArray = JSON.parse(itemsJsonArrayStr);
        itemsJsonArray.push([tit, des]);
        localStorage.setItem('itemsJson', JSON.stringify(itemsJsonArray));

    }
    update();
}

function update() {
    if (localStorage.getItem('itemsJson') == null) {
        itemsJsonArray = [];
        localStorage.setItem('itemsJson', JSON.stringify(itemsJsonArray));
    } else {
        itemsJsonArrayStr = localStorage.getItem('itemsJson');
        itemsJsonArray = JSON.parse(itemsJsonArrayStr);

    }
    // Populating the table
    let itemtable = document.getElementById("table");
    let str = "";
    itemsJsonArray.forEach((element, index) => {
        str += `
    <tr>
            <th scope="row">${index+1}</th>
            <td>${element[0]}</td>
            <td>${element[1]}</td>
            <td><button class="btn btn-sm btn-primary" onclick="deleted(${index})">Delete</button></td>
          </tr>`;
    });
    itemtable.innerHTML = str;
}
add = document.getElementById("add");
add.addEventListener("click", getAndupdate);
update();

function deleted(itemIndex) {
    console.log("Delete", itemIndex + 1);
    itemsJsonArrayStr = localStorage.getItem('itemsJson');
    itemsJsonArray = JSON.parse(itemsJsonArrayStr);
    // Delete itemIndex element from the array
    itemsJsonArray.splice(itemIndex, 1);
    localStorage.setItem('itemsJson', JSON.stringify(itemsJsonArray));
    update();
}

function clearStorage() {
    if (confirm("Do you really want to clear the entire list")) {
        localStorage.clear();
        console.log('Clearing the storage');
        update();
    }
}
