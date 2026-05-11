document.addEventListner('DOMContentLoaded', () => {

    const navLinks = document.querySelectorAll('.nav-lines a');
    navLinks.forEach(link => {
        link.addEventListener('click', (event) => {
            event.preventDefault();
            alert('You clicked on ${event.target.textContent}')
        })
    })
}



// REGISTER
function register(){
    let name = document.getElementById('regName').value;
    let email = document.getElementById('regEmail').value;
    let password = document.getElementById('regPassword').value;

    if(!name || !email || !password){
        alert("Fill all fields");
        return;
    }

    let user = {name, email, password};
    localStorage.setItem(email, JSON.stringify(user));
    alert("Registration Successful!");
    location.reload();
}

// LOGIN
function login(){
    let email = document.getElementById('loginEmail').value;
    let password = document.getElementById('loginPassword').value;

    let data = localStorage.getItem(email);

    if(data == null){
        alert("User not found!");
        return;
    }

    let user = JSON.parse(data);

    if(user.password === password){
        alert("Welcome " + user.name);
        localStorage.setItem("loggedInUser", user.name);
        location.reload();
    } else {
        alert("Wrong password");
    }
}


window.onload = function(){
    let user = localStorage.getItem("loggedInUser");
    if(user){
        document.querySelector('.ml-auto').innerHTML = `
            <span class="navbar-text mr-3">Welcome, ${user}</span>
            <button class="btn btn-danger" onclick="logout()">Logout</button>
        `;
    }
}

function logout(){
    localStorage.removeItem("loggedInUser");
    location.reload();
}