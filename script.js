// first let's grab the form
localStorage.clear()
const addUserForm = document.forms['add-user'];

let users = [];

addUserForm.addEventListener('submit', (e)=> {
    e.preventDefault();

    // grabbing the name 
    var name = addUserForm.querySelector("input[id='name']").value;

    // grabbing the email
    let email = addUserForm.querySelector("input[id='email']").value;

    // grabbing your track
    let track = addUserForm.querySelector("input[name='track']").value;

    // grabbing your leadership position
    let isTeamLead = addUserForm.querySelector("input[name='teamLead']").value;

    //
    let isSuspended = addUserForm.querySelector("input[name='suspended']").value;

    // 
    let isExpelled = addUserForm.querySelector("input[name='expelled']").value;

    // grab the table body
    const tableBody = document.querySelector("tbody");

    // Now lets add it to the table 
    const tableRow = document.createElement('tr');
    tableRow.innerHTML = `<td>${name}</td>
                            <td>${email}</td>
                            <td>${track}</td>
                            <td>${isTeamLead}</td>
                            <td>${isSuspended}</td>
                            <td>${isExpelled}</td>
                            <td>
                                <button class="edit" onclick="editData(this)">Edit</button>/
                                <button class="delete" onclick="deleteData(this)">Delete</button>
                            </td>`;

    // append it to the  table.
    tableBody.appendChild(tableRow);

    // now lets put our data in an object

    const data = {
        name: name,
        email,
        track,
        isTeamLead,
        isSuspended,
        isExpelled
    };

    users.push(data);

    // now lets add it to the local storage 
    localStorage.setItem('users', JSON.stringify(users));

    

    
});

// to delete a row 
function deleteData(e){
    e.parentElement.parentElement.remove();
}

// to edit a row 
function editData(e){
    // first we will need to grab the the name element and all other data of the person
    addUserForm.querySelector("input[id='name']").value = e.parentElement.parentElement.firstChild.innerText;
    addUserForm.querySelector("input[id='email']").value = e.parentElement.parentElement.children[1].innerText;

    e.parentElement.parentElement.remove();
}