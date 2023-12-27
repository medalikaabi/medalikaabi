// let menu = document.querySelector('.menu');
// let closeBtn = document.querySelector('.menu .menu_btn');

// function openMenu() {
//     closeBtn.style.display = "block";
//     menu.style.width='100%'
//     document.body.style.overflow="hidden" 
// }

// function closeMenu() {
//     closeBtn.style.display = "none";
//     menu.style.width='0%'
//     document.body.style.overflow="auto" 
// }

function validateEmail(email) {
    var re = /\S+@\S+\.\S+/;
    return re.test(email);
}

function signup() {
    var test = true;
    var firstName = document.getElementById("firstName").value;
    console.log(firstName);

    if (firstName.length < 3) {
        document.getElementById("firstNameError").innerHTML = "First Name must have at least 3 caracteres";
        document.getElementById("firstNameError").style.color = "red"
        test = false;

    } else {
        document.getElementById("firstNameError").innerHTML = "";
    }

    var lastName = document.getElementById("lastName").value;
    console.log(lastName);

    if (lastName.length < 3) {
        document.getElementById("lastNameError").innerHTML = "Last Name must have at least 3 caracteres";
        document.getElementById("lastNameError").style.color = "red"
        test = false;

    } else {
        document.getElementById("lastNameError").innerHTML = "";
    }

    var email = document.getElementById("email").value;
    console.log(email);
    //    validateEmail fait rappel à la fonction, on ajoute entre()email pour confirmer la fonction,,,, sinon on ajoute un message a Else

    if (validateEmail(email)) {
        document.getElementById("emailError").innerHTML = ""
    } else {
        document.getElementById("emailError").innerHTML = "Email is not valid";
        document.getElementById("emailError").style.color = "red"
        test = false;

    }

    var password = document.getElementById("password").value;
    console.log(password);

    if (password.length < 8) {
        document.getElementById("passwordError").innerHTML = "Password is not valid";
        document.getElementById("passwordError").style.color = "red"
        test = false;

    } else {
        document.getElementById("passwordError").innerHTML = "";
    }

    var tel = document.getElementById("tel").value;
    console.log(tel);

    if (!isNaN(tel) && tel.length == 8) {
        document.getElementById("telError").innerHTML = "";

    } else {
        document.getElementById("telError").innerHTML = "Error phone number";
        document.getElementById("telError").style.color = "red";
        test = false;
    }

    var adresse = document.getElementById("adresse").value;
    console.log(adresse);

    if (validateAddress(adresse)) {
        document.getElementById("adresseError").innerHTML = "";

    } else {
        document.getElementById("adresseError").innerHTML = "Adresse not valid";
        document.getElementById("adresseError").style.color = "red";
        test = false;
    }

    if (test) {
        var iduser = JSON.parse(localStorage.getItem("iduser") || "10");

        var user = {
            id: iduser,
            firstName: firstName,
            lastName: lastName,
            email: email,
            password: password,
            tel: tel,
            adresse:adresse,
            role: "user",

        }

        var users = JSON.parse(localStorage.getItem("users") || "[]");
        users.push(user);
        localStorage.setItem("users", JSON.stringify(users));
        localStorage.setItem("iduser", JSON.stringify(iduser + 1));
    }
}



function signupOwner() {
    var test = true;
    var firstName = document.getElementById("firstName").value;
    console.log(firstName);

    if (firstName.length < 3) {
        document.getElementById("firstNameError").innerHTML = "First Name must have at least 3 caracteres";
        document.getElementById("firstNameError").style.color = "red"
        test = false;

    } else {
        document.getElementById("firstNameError").innerHTML = "";
    }

    var lastName = document.getElementById("lastName").value;
    console.log(lastName);

    if (lastName.length < 3) {
        document.getElementById("lastNameError").innerHTML = "Last Name must have at least 3 caracteres";
        document.getElementById("lastNameError").style.color = "red"
        test = false;

    } else {
        document.getElementById("lastNameError").innerHTML = "";
    }

    var email = document.getElementById("email").value;
    console.log(email);
    //    validateEmail fait rappel à la fonction, on ajoute entre()email pour confirmer la fonction,,,, sinon on ajoute un message a Else

    if (validateEmail(email)) {
        document.getElementById("emailError").innerHTML = ""
    } else {
        document.getElementById("emailError").innerHTML = "Email is not valid";
        document.getElementById("emailError").style.color = "red"
        test = false;

    }

    var password = document.getElementById("password").value;
    console.log(password);

    if (password.length < 8) {
        document.getElementById("passwordError").innerHTML = "Password is not valid";
        document.getElementById("passwordError").style.color = "red"
        test = false;

    } else {
        document.getElementById("passwordError").innerHTML = "";
    }

    var tel = document.getElementById("tel").value;
    console.log(tel);

    if (!isNaN(tel) && tel.length == 8) {
        document.getElementById("telError").innerHTML = "";

    } else {
        document.getElementById("telError").innerHTML = "Error phone number";
        document.getElementById("telError").style.color = "red";
        test = false;
    }
    var adresse = document.getElementById("adresse").value;
    console.log(adresse);

    if (validateAddress(adresse)) {
        document.getElementById("adresseError").innerHTML = "";

    } else {
        document.getElementById("adresseError").innerHTML = "Adresse not valid";
        document.getElementById("adresseError").style.color = "red";
        test = false;
    }

    var fax = document.getElementById("tel").value;
    console.log(fax);

    if (!isNaN(fax) && fax.length == 8) {
        document.getElementById("faxError").innerHTML = "";

    } else {
        document.getElementById("faxError").innerHTML = "Error fax number";
        document.getElementById("faxError").style.color = "red";
        test = false;
    }

    var patente = document.getElementById("patente").value;
    console.log(patente);

    if (patente.length < 8) {
        document.getElementById("patenteError").innerHTML = "Patente is not valid";
        document.getElementById("patenteError").style.color = "red"
        test = false;

    } else {
        document.getElementById("patenteError").innerHTML = "";
    }

    if (test) {
        var idOwner = JSON.parse(localStorage.getItem("idOwner") || "10");

        var Owner = {
            id: idOwner,
            firstName: firstName,
            lastName: lastName,
            email: email,
            password: password,
            tel: tel,
            adresse: adresse,
            fax: fax,
            patente: patente,
            role: "Owner",

        }

        var Owners = JSON.parse(localStorage.getItem("Owners") || "[]");
        Owners.push(Owner);
        localStorage.setItem("Owners", JSON.stringify(Owners));
        localStorage.setItem("idOwner", JSON.stringify(idOwner + 1));
    }
}


function verification(idError, condition, msgError) {
    var test = true;

    if (condition) {
        document.getElementById(idError).innerHTML = msgError;
        document.getElementById(idError).style.color = "red"
        test = false;
    } else {
        document.getElementById(idError).innerHTML = "";
    }
    return test;

}


function displayUser() {
    var usersTab = JSON.parse(localStorage.getItem("users") || "[]");
    var usersTable = `<table class="table table-dark">
    <thead>
      <tr>
        <th scope="col">Id</th>
        <th scope="col">First Name</th>
        <th scope="col">Last Name</th>
        <th scope="col">Email</th>
        <th scope="col">Tel</th>
        <th scope="col">Role</th>
        <th scope="col">Action</th>
      </tr>
    </thead>
    
    <tbody>`;

    for (let i = 0; i < usersTab.length; i++) {
        usersTable = usersTable + `<tr>
        <th scope="row">${usersTab[i].id}</th>
        <td>${usersTab[i].firstName}</td>
        <td>${usersTab[i].lastName}</td>
        <td>${usersTab[i].email}</td>
        <td>${usersTab[i].tel}</td>
        <td>${usersTab[i].role}</td>
        <td>
        <button type="button" class="btn btn-warning" onclick="editUser(${usersTab[i].id})">Edit</button>
        <button type="button" class="btn btn-danger" onclick="deleteUser(${usersTab[i].id})">Delete</button>
        </td>
      </tr>`

    }

    usersTable = usersTable + ` </tbody>
    </table>`;
    document.getElementById("usersTable").innerHTML = usersTable;
}
 
function deleteUser(id) {
    var users = JSON.parse(localStorage.getItem("users") || "[]");
    var pos;
    for (let i = 0; i < users.length; i++) {
        if (users[i].id == id) {
            pos = i;
        }

    }
    users.splice(pos, 1)
    localStorage.setItem("users", JSON.stringify(users));
    location.reload();
}

function deleteHouse(id) {
    var houses = JSON.parse(localStorage.getItem("houses") || "[]");
    var pos;
    for (let i = 0; i < houses.length; i++) {
        if (houses[i].id == id) {
            pos = i;
        }

    }
    houses.splice(pos, 1)
    localStorage.setItem("houses", JSON.stringify(houses));
    location.reload();
}

function login() {

    var tel = document.getElementById("tel").value;
    console.log(tel);

    var password = document.getElementById("password").value;
    console.log(password);

    var users = JSON.parse(localStorage.getItem("users") || "[]");

    var findedUser;

    for (let i = 0; i < users.length; i++) {
        if (users[i].tel == tel && users[i].password == password) {
            findedUser = users[i];
        }
    }

    if (!findedUser) {
        document.getElementById("loginError").innerHTML = "wrong informations";
        document.getElementById("loginError").style.color = "red";
    } else {
        // document.getElementById("loginError").innerHTML = "";
        localStorage.setItem("connectedUser", findedUser.id)
        switch (findedUser.role) {
            case "admin":
                location.replace("dashboard.html");

                break;

            default: location.replace("index2.html");
                break;
        }
    }
}




function verification(idError, condition, msgError) {
    var test = true;

    if (condition) {
        document.getElementById(idError).innerHTML = msgError;
        document.getElementById(idError).style.color = "red"
        test = false;
    } else {
        document.getElementById(idError).innerHTML = "";
    }
    return test;

}


function insertAdmins() {
    var admin1 = {
        id: "1",
        firstName: "admin1",
        lastName: "admin1",
        email: "admin1@gmail.com",
        password: "22875021",
        tel: "22875021",
        role: "admin",
    }

    var admin2 = {
        id: "2",
        firstName: "admin2",
        lastName: "admin2",
        email: "admin2@gmail.com",
        password: "23230681",
        tel: "23230681",
        role: "admin",
    }

    var owner = {
        id: "3",
        firstName: "owner1",
        lastName: "owner1",
        email: "owner1@gmail.com",
        password: "93714091",
        tel: "93714091",
        role: "owner",
    }


    var users = JSON.parse(localStorage.getItem("users") || "[]");
    users.push(admin1, admin2, owner);
    localStorage.setItem("users", JSON.stringify(users));
    localStorage.setItem("adminsAdded", true);

}


function editUser(id) {
    var user = searchById("users", id);
    var editForm = `    <div class="login_form_inner">
    <h3>Edit User</h3>
    <form class="row login_form" action="contact_process.php" method="post" id="contactForm" novalidate="novalidate">
        <div class="col-md-12 form-group">
            <input type="number" class="form-control" id="newTel" name="name" placeholder="tel" value="${user.tel}" onfocus="this.placeholder = ''" onblur="this.placeholder = 'tel'">
        </div>
        <span id="newTelError"><span/>
        <div class="col-md-12 form-group">
            <button type="button" value="submit" class="primary-btn" onclick="confirmEditUserTel(${user.id})">Confirm Edit Tel</button>
        </div>
    </form>
</div>`;

    document.getElementById("editForm").innerHTML = editForm;

}

function searchById(key, id) {
    var tab = JSON.parse(localStorage.getItem(key) || "[]");
    var object;
    for (let i = 0; i < tab.length; i++) {
        if (tab[i].id == id) {
            object = tab[i];
            break; 
        }

    }
    return object;

}

    

console.log(searchById("users", 10));


function addHouse() {
    // var test = true;
    var houseName = document.getElementById("houseName").value;
    var test1 = verification("houseNameError", houseName.length < 3, "House Name must have at least 3 caracteres");

    if (houseName.length < 3) {
        document.getElementById("houseNameError").innerHTML = "House Name must have at least 3 caracteres";
        document.getElementById("houseNameError").style.color = "red"
        test = false;

    } else {
        document.getElementById("houseNameError").innerHTML = "";
    }

    var roomsNumber = document.getElementById("roomsNumber").value;
    var test2 = verification("roomsNumberError", roomsNumber > 10, "Rooms number must be less than 10");

    if (roomsNumber > 10) {
        document.getElementById("roomsNumberError").innerHTML = "Rooms number must be less than 10";
        document.getElementById("roomsNumberError").style.color = "red"
        test = false;
    } else {
        document.getElementById("roomsNumberError").innerHTML = "";
    }

    var city = document.getElementById("city").value;
    var test3 = verification("cityError", city.length < 3, "City name error");

    if (city.length < 3) {
        document.getElementById("cityError").innerHTML = "City name error";
        document.getElementById("cityError").style.color = "red"
        test = false;
    } else {
        document.getElementById("cityError").innerHTML = "";
    }

    var houseAdress = document.getElementById("houseAdress").value;
    var test4 = verification("houseAdressError", houseAdress.length == 0, "Adress required");

    if (houseAdress.length == 0) {
        document.getElementById("houseAdressError").innerHTML = "Adress required";
        document.getElementById("houseAdressError").style.color = "red"
        test = false;
    } else {
        document.getElementById("houseAdressError").innerHTML = "";
    }

    var houseView = document.getElementById("houseView").value;
    var test5 = verification("houseViewError", houseView.length == 0, "View required");

    if (houseView.length == 0) {
        document.getElementById("houseViewError").innerHTML = "View required";
        document.getElementById("houseViewError").style.color = "red"
        test = false;
    } else {
        document.getElementById("houseViewError").innerHTML = "";
    }

    
    console.log(houseName, roomsNumber, houseAdress, city, houseView);

    // Add test: Caculate the number of houses of the connected user



    // Add a condition: only allow the user to add a house if he have only 2 or less

    var connectedUserId = localStorage.getItem("connectedUser");
    if (test1, test2, test3, test4, test5, countOwnerHouses(connectedUserId) < 3) {
        var idHouse = JSON.parse(localStorage.getItem("idHouse") || "1");

        var house = {
            id: idHouse,
            houseName: houseName,
            city: city,
            roomsNumber: roomsNumber,
            houseAdress: houseAdress,
            houseView: houseView, 
            owner: connectedUserId 
        }

        var houses = JSON.parse(localStorage.getItem("houses") || "[]");
        houses.push(house);
        localStorage.setItem("houses", JSON.stringify(houses));
        localStorage.setItem("idHouse", JSON.stringify(idHouse + 1));
    }
}


function dipslayHouse() {
    var houseTab = JSON.parse(localStorage.getItem("houses") || "[]");
    
    var housesTable = `<table class="table table-dark">
    <thead>
      <tr>
        <th scope="col">Id</th>
        <th scope="col">Owner ID</th>
        <th scope="col">House Name</th>
        <th scope="col">Rooms Number</th>
        <th scope="col">Adress</th>
        <th scope="col">View</th>
        <th scope="col">City</th>
        <th scope="col">Action</th>
      </tr>
    </thead>
    
    <tbody>`;

    for (let i = 0; i < houseTab.length; i++) {
        housesTable = housesTable + `<tr>
        <th scope="row">${houseTab[i].id}</th>
        <td>${houseTab[i].owner}</td>
        <td>${houseTab[i].houseName}</td>
        <td>${houseTab[i].roomsNumber}</td>
        <td>${houseTab[i].houseAdress}</td>
        <td>${houseTab[i].houseView}</td>
        <td>${houseTab[i].city}</td>
        <td>
        <button type="button" class="btn btn-warning" onclick="editHouse(${houseTab[i].id})">Edit</button>
        <button type="button" class="btn btn-danger" onclick="deleteHouse(${houseTab[i].id})">Delete</button>
        </td>
      </tr>`

    }

    housesTable = housesTable + ` </tbody>
    </table>`;
    document.getElementById("housesTable").innerHTML = housesTable;
}

function dipslayHouseOwner() {
       var houseTab = JSON.parse(localStorage.getItem("houses") || "[]");
       var connectedUserId = localStorage.getItem("connectedUser");

       houseTab = houseTab.filter((house) => house.owner == connectedUserId);
       var housesTable = `<table class="table table-dark">
     <thead>
      <tr>
        <th scope="col">Id</th>
        <th scope="col">Owner ID</th>
        <th scope="col">House Name</th>
        <th scope="col">Rooms Number</th>
        <th scope="col">Adress</th>
        <th scope="col">View</th>
        <th scope="col">City</th>
        <th scope="col">Action</th>
      </tr>
    </thead>
    <tbody>`;

    for (let i = 0; i < houseTab.length; i++) {
        housesTable = housesTable + `<tr>
        <th scope="row">${houseTab[i].id}</th>
        <td>${houseTab[i].owner}</td>
        <td>${houseTab[i].houseName}</td>
        <td>${houseTab[i].roomsNumber}</td>
        <td>${houseTab[i].houseAdress}</td>
        <td>${houseTab[i].houseView}</td>
        <td>${houseTab[i].city}</td>
        <td>
        <button type="button" class="btn btn-warning" onclick="editHouse(${houseTab[i].id})">Edit</button>
        </td>
      </tr>`

    }

    housesTable = housesTable + ` </tbody>
    </table>`;
    document.getElementById("housesTable").innerHTML = housesTable;
}


// edit nes user tel contact
function confirmEditUserTel(id) {
    var newTel = document.getElementById("newTel").value;
    if (!isNaN(newTel) && newTel.length == 8) {
        document.getElementById("newTelError").innerHTML = "";
        var users = JSON.parse(localStorage.getItem("users") || "[]");
        for (let i = 0; i < users.length; i++) {
            if (users[i].id == id) {
                users[i].tel = newTel;
                break;
            }
        }
        localStorage.setItem("users", JSON.stringify(users));
        location.reload()
    } else {
        document.getElementById("newTelError").innerHTML = "phone number not valid";
        document.getElementById("newTelError").style.color = "red";
    }
}

function editHouse(id) {
    var house = searchById("houses", id);
    var editRoom = `    <div class="login_form_inner">
    <h3>Edit House</h3>
    <form class="row login_form" action="contact_process.php" method="post" id="contactForm" novalidate="novalidate">
        <div class="col-md-12 form-group">
            <input type="text" class="form-control" id="newhouseName" name="name" placeholder="houseName" value="${house.houseName}" onfocus="this.placeholder = ''" onblur="this.placeholder = 'houseName'">
        </div>
        <span id="newhouseNameError"><span/>
        <div class="col-md-12 form-group">
            <input type="text" class="form-control" id="newroomsNumber" name="name" placeholder="roomsNumber" value="${house.roomsNumber}" onfocus="this.placeholder = ''" onblur="this.placeholder = 'roomsNumber'">
        </div>
        <span id="newroomsNumberError"><span/>
        <div class="col-md-12 form-group">
            <button type="button" value="submit" class="primary-btn" onclick="confirmEditHouse(${house.id})">Confirm Edit</button>
        </div>
    </form>
</div>`;

    document.getElementById("editRoom").innerHTML = editRoom;

}

// new house Name edit
function confirmEditHouse(id) {
    var newhouseName = document.getElementById("newhouseName").value;
    if (newhouseName && newhouseName.length > 3) {
        document.getElementById("newhouseNameError").innerHTML = "";
        var houses = JSON.parse(localStorage.getItem("houses") || "[]");
        for (let i = 0; i < houses.length; i++) {
            if (houses[i].id == id) {
                houses[i].houseName = newhouseName;
                break;
            }
        }
        localStorage.setItem("houses", JSON.stringify(houses));
        location.reload()
    } else {
        document.getElementById("newhouseNameError").innerHTML = "House Name must have at least 3 caracteres";
        document.getElementById("newhouseNameError").style.color = "red";
    }
}


// new rooms number
function confirmEditHouse(id) {
    var newroomsNumber = document.getElementById("newroomsNumber").value;
    if (newroomsNumber && newroomsNumber.length < 10) {
        document.getElementById("newroomsNumberError").innerHTML = "";
        var houses = JSON.parse(localStorage.getItem("houses") || "[]");
        for (let i = 0; i < houses.length; i++) {
            if (houses[i].id == id) {
                houses[i].roomsNumber = newroomsNumber;
                break;
            }
        }
        localStorage.setItem("houses", JSON.stringify(houses));
        location.reload()
    } else {
        document.getElementById("newroomsNumberError").innerHTML = "Rooms number must be no more than 10";
        document.getElementById("newroomsNumberError").style.color = "red";
    }
}

// function bookNow() {
//     var test = true;
//     var firstName = document.getElementById("firstName").value;
//     var test1 = verification("firstNameError", firstName.length < 3, "First Name must have at least 3 caracteres");


//     var lastName = document.getElementById("lastName").value;
//     var test2 = verification("lastNameError", lastName.length < 3, "Last Name must have at least 3 caracteres");

//     var email = document.getElementById("email").value;
//     console.log(email);
//     //    validateEmail fait rappel à la fonction, on ajoute entre()email pour confirmer la fonction,,,, sinon on ajoute un message a Else

//     if (validateEmail(email)) {
//         document.getElementById("emailError").innerHTML = ""
//     } else {
//         document.getElementById("emailError").innerHTML = "Email is not valid";
//         document.getElementById("emailError").style.color = "red"
//         test = false;

//     }

//     var arrival = document.getElementById("arrival").value;
//     var test3 = verification("arrivalDateError", arrival.length < 8, "Arrival Date required");

//     var departure = document.getElementById("departure").value;
//     var test4 = verification("departureDateError", departure.length < 8, "Departure date required");

//     var peopleNumber = document.getElementById("peopleNumber").value;
//     var test5 = verification("peopleNumberError", peopleNumber.length == 0, "Number of guests error");

//     var tel = document.getElementById("tel").value;
//     console.log(tel);

//     if (isNaN(tel) && tel.length == 8) {
//         document.getElementById("telError").innerHTML = "";

//     } else {
//         document.getElementById("telError").innerHTML = "Error phone number";
//         document.getElementById("telError").style.color = "red";
//         test = false;

//     console.log(firstName, lastName, email, arrival, departure, peopleNumber, tel);

//     if (test1, test2, test3, test4, test5) {
//         var idBooking = JSON.parse(localStorage.getItem("idBooking") || "1");

//         var booking = {
//             id: idBooking,
//             firstName: firstName,  
//             lastName: lastName,
//             email: email,
//             arrival: arrival,
//             departure: departure,
//             peopleNumber: peopleNumber,
//             tel: tel,
//         }

//         var bookings = JSON.parse(localStorage.getItem("bookings") || "[]");
//         bookings.push(booking);
//         localStorage.setItem("bookings", JSON.stringify(bookings));
//         localStorage.setItem("idBooking", JSON.stringify(idBooking + 1));
//     }
// }

// }

function diplayBookings() {
    var bookTab = JSON.parse(localStorage.getItem("bookings") || "[]");
    var bookingTable = `<table class="table table-dark">
    <thead>
      <tr>
        <th scope="col">Id</th>
        <th scope="col">First Name</th>
        <th scope="col">Last Name</th>
        <th scope="col">Email</th>
        <th scope="col">Arrival</th>
        <th scope="col">Departure</th>
        <th scope="col">Guests Nbr</th>
        <th scope="col">Tel</th>
        <th scope="col">Action</th>
      </tr>
    </thead>
    
    <tbody>`;

    for (let i = 0; i < bookTab.length; i++) {
        bookingTable = bookingTable + `<tr>
        <th scope="row">${bookTab[i].id}</th>
        <td>${bookTab[i].firstName}</td>
        <td>${bookTab[i].lastName}</td>
        <td>${bookTab[i].email}</td>
        <td>${bookTab[i].arrival}</td>
        <td>${bookTab[i].departure}</td>
        <td>${bookTab[i].peopleNumber}</td>
        <td>${bookTab[i].tel}</td>
        <td>
        <button type="button" class="btn btn-warning" onclick="editHouse(${bookTab[i].id})">Edit</button>
        <button type="button" class="btn btn-danger" onclick="deleteHouse(${bookTab[i].id})">Delete</button>
        </td>
      </tr>`

    }

    bookingTable = bookingTable + ` </tbody>
    </table>`;
    document.getElementById("bookingTable").innerHTML = bookingTable;
    
}


function displayHouses() {

    var houses = JSON.parse(localStorage.getItem("houses") || "[]");
    var shop = "";
    for (let i = 0; i < houses.length; i++) {
        shop = shop + `<div class="produits">
        <div class="carte col-lg-3 col-md-6">
        <div class="img"><img src="assets/img3.jpg"></div>
                <h4>House Name:${houses[i].houseName}</h4>
                <h6>View:${houses[i].houseView}</h6>
                <h6>Id: ${houses[i].id}</h6>
                <h6>Rooms Number:${houses[i].roomsNumber}</h6>
                <h6>City: ${houses[i].city}</h6>
                <h6>Address:${houses[i].houseAdress}</h6>     
        </div>
    </div>`;

    }

    document.getElementById("shop").innerHTML = shop;
}

function displayRoom() {
    var houses = JSON.parse(localStorage.getItem("houses") || "[]");
    var rooms = JSON.parse(localStorage.getItem("rooms") || "[]");
    var shop1 = "";
    for (let i = 0; i < rooms.length; i++) {
        shop1 = shop1 + `<div class="produits">
        <div class="carte">
        <div class="img"><img src="assets/img5.jpg"></div>
        <h3>${rooms[i].roomName}</h3>
        <h6>${rooms[i].id}</h6>
        <h6>${rooms[i].roomDesc}</h6>
        <h6>${rooms[i].capacity}</h6>     
        <h6>${rooms[i].roomPrice}</h6>
        <h6>Related house: ${houses[i].houseName}</h6>
        <h6>House Id: ${houses[i].id}</h6>
        </div>
    </div>`;

    }

    document.getElementById("shop1").innerHTML = shop1;
}



function populateHousesSelectList() {
    var houses = JSON.parse(localStorage.getItem("houses") || "[]");
    var housesDropdown = document.getElementById("housesDropdown");

    console.log("housesDropdown", housesDropdown);
    for (let i = 0; i < houses.length; i++) {
        let option = document.createElement("option");
        option.setAttribute('value', houses[i].id);
      
        let optionText = document.createTextNode(houses[i].houseName);
        option.appendChild(optionText);
      
        housesDropdown.appendChild(option);
      }
}

function searchProduct(evt) {
    var code = evt.keyCode; 
    if (code == 13) {
     searchCategory = document.getElementById("search_input").value;
     localStorage.setItem("searchCategory", searchCategory);
     location.replace("search.html");
    }
 }
 
 function displaySearch() {
    var houses = JSON.parse(localStorage.getItem("houses") || "[]");
    var searchCategory =localStorage.getItem("searchCategory");
    var results = [];

    for (let i = 0; i < houses.length; i++) {
        if (houses[i].houseName == searchCategory) {
            results.push(houses[i]);
        }
        
    }

    var shop = "";
    for (let i = 0; i < results.length; i++) {
        shop = shop + `<div class="produits">
        <div class="carte col-lg-3 col-md-6">
        <div class="img"><img src="assets/img3.jpg">
                <h4>${results[i].houseName}</h4>
                <h6>${results[i].roomsNumber}</h6>
                <h6>${results[i].houseView}</h6>
                <h6>${results[i].owner}</h6>
                </div>
        </div>
     </div>
    </div>`;
        
    }
    document.getElementById("shop").innerHTML = shop;
}



function logout() {
    localStorage.removeItem("connectedUser");
    location.replace("index2.html");


}



function generateHeader() {
    var headerBloc = "";
    var connectedUser = JSON.parse(localStorage.getItem("connectedUser"));
    if (connectedUser) {
        var user =  searchById("users", connectedUser)
        if(user.role == "admin") {
            headerBloc = headerBloc +`
            <li><a href="index2.html">Home</a></li>
            <li><a href="All Houses.html">All Houses</a></li>
            <li><a href="#">Welcome ${user.firstName}</a></li>
            <li><a href="addhouse.html">Add house</a></li>
            <li><a href="addRooms.html">Add Rooms</a></li>
            <li><a href="houses.html">Where we Are</a></li>
            <li><a href="booknow.html">Book Now</a></li>
            <li><a href="dashboard.html">Dashboard</a></li>
            <li><a href="DashboardOwner.html">Dashboard Owner</a></li>
            <li><a href="#" onclick="logout()">Logout</a></li>
            <li><a href="cart.html" class="fa-solid fa-cart-shopping"></a></li>
            <li><a href="searchbox.html" class="fa-solid fa-magnifying-glass"></i></a></li>
            `

     } else {
        headerBloc = headerBloc + `
        <li><a href="index2.html">Home</a></li>
        <li><a href="profiles.html">Profile</a></li>
        <li><a href="All Houses.html">All Houses</a></li>
        <li><a href="addhouse.html">Add house</a></li>
        <li><a href="addRooms.html">Add Rooms</a></li>
        <li><a href="houses.html">Where we Are</a></li>
        <li><a href="booknow.html">Book Now</a></li>
        <li><a href="DashboardOwner.html">Dashboard Owner</a></li>
        <li><a href="#" onclick="logout()">Logout</a></li>
        <li><a href="cart.html" class="fa-solid fa-cart-shopping"></a></li>
        <li><a href="searchbox.html" class="fa-solid fa-magnifying-glass"></i></a></li>
        `
     }

     }else{
        headerBloc = headerBloc + `
        <li><a href="index2.html">Home</a></li>
        <li><a href="All Houses.html">All Houses</a></li> 
        <li><a href="houses.html">Where we Are</a></li>
        <li><a href="login.html">Login</a></li>
        <li><a href="signup.html" class="fa-solid fa-user"></a></li>
        <li><a href="cart.html" class="fa-solid fa-cart-shopping"></a></li>
        <li><a href="searchbox.html" class="fa-solid fa-magnifying-glass"></i></a></li>
        `
    }

    document.getElementById("headerBloc").innerHTML = headerBloc;
}

function editProfile(iduser) {

    var newFirstName = document.getElementById("firstName").value;
    var test1 = verification("newFirstNameError", newFirstName.length < 3, "New First Name Invalid");
    var newLastName = document.getElementById("lastName").value;
     var test2 = verification("newLastNameError", newLastName.length < 3, "New Last Name Invalid");
     var newEmail = document.getElementById("email").value;
     var test3 = verification("newEmailError", !validateEmail(newEmail), "Email Invalid");
     var newPassword = document.getElementById("password").value;
     var test4 = verification("newPasswordError", newPassword.length < 8, "Password Invalid");
     var newTel = document.getElementById("tel").value;
     var test5 = verification("newTelError", !isNaN(newTel) && newTel.length < 8, "New tel Invalid");

     if(test1 && test2 && test3 && test4 && test5){

        var users = JSON.parse(localStorage.getItem("users") || "[]");
        for (let i = 0; i < users.length; i++) {
           if(users[i].id == iduser) {
              users[i].firstName = newFirstName;
              users[i].lastName = newLastName;
              users[i].email = newEmail;
              users[i].password = newPassword;
              users[i].tel = newTel;
              break;

           }
            
        }
       localStorage.setItem("users", JSON.stringify(users));
       location.reload();
     }
}



function displayOwners() {
    var ownerTab = JSON.parse(localStorage.getItem("Owners") || "[]");
    var ownersTable = `<table class="table table-dark">
    <thead>
      <tr>
        <th scope="col">Id</th>
        <th scope="col">First Name</th>
        <th scope="col">Last Name</th>
        <th scope="col">Email</th>
        <th scope="col">Adresse</th>
        <th scope="col">Patente</th>
        <th scope="col">Tel</th>
        <th scope="col">Action</th>
      </tr>
    </thead>
    
    <tbody>`;

    for (let i = 0; i < ownerTab.length; i++) {
        ownersTable = ownersTable + `<tr>
        <th scope="row">${ownerTab[i].id}</th>
        <td>${ownerTab[i].firstName}</td>
        <td>${ownerTab[i].lastName}</td>
        <td>${ownerTab[i].email}</td>
        <td>${ownerTab[i].adresse}</td>
        <td>${ownerTab[i].patente}</td>
        <td>${ownerTab[i].tel}</td>
        <td>
        <button type="button" class="btn btn-warning" onclick="editOwner(${ownerTab[i].id})">Edit</button>
        <button type="button" class="btn btn-danger" onclick="deleteOwner(${ownerTab[i].id})">Delete</button>
        </td>
      </tr>`
} 
ownersTable = ownersTable + ` </tbody>
    </table>`;
    document.getElementById("ownersTable").innerHTML = ownersTable;
}


function countOwnerHouses(idOwner) {

    var houses = JSON.parse(localStorage.getItem("houses") || "[]");

    var countHouses = 0;
    houses.forEach(element => {
        if (element.owner == idOwner)   {
            countHouses++;
        }
    });


    return countHouses;

}

// Fonction Add Room

function addRooms() {
    
    var roomName = document.getElementById("roomName").value;
    var test1 = verification("roomNameError", roomName.length < 3, "Room Name must have at least 3 caracteres");

    
    var capacity = document.getElementById("capacity").value;
    var test2 = verification("capacityError", roomName.length < 3, "People number must have at less than 3");

  
    var roomDesc = document.getElementById("roomDesc").value;
    var test3 = verification("roomDescError", roomDesc.length < 3, "Room Description Error");

    
    var roomPrice = document.getElementById("roomPrice").value;
    var test4 = verification("roomPriceError", roomPrice <= 0, "Price Error");

    var houseId = document.getElementById("housesDropdown").value;

    // Add test: Caculate the number of houses of the connected user

    // Add a condition: only allow the user to add a house if he have only 2 or less
    if (test1, test2, test3, test4) {
        var idRoom = JSON.parse(localStorage.getItem("idRoom") || "1");

        var room = {
            id: parseInt(idRoom),
            roomName: roomName,
            capacity: capacity,
            roomDesc: roomDesc,
            roomPrice: roomPrice,
            houseId: parseInt(houseId)
        }

        var rooms = JSON.parse(localStorage.getItem("rooms") || "[]");
        rooms.push(room);
        localStorage.setItem("rooms", JSON.stringify(rooms));
        localStorage.setItem("idRoom", JSON.stringify(idRoom + 1));
    }
}

function displayOwnerRooms() {
    var houseTab = JSON.parse(localStorage.getItem("houses") || "[]");
    var roomTab = JSON.parse(localStorage.getItem("rooms") || "[]");
    var connectedUserId = parseInt(localStorage.getItem("connectedUser"));
    
    var roomsTable = `<table class="table table-dark">
    <thead>
      <tr>
        <th scope="col">Id</th>
        <th scope="col">Owner ID</th>
        <th scope="col">House Name</th>
        <th scope="col">Room Name</th>
        <th scope="col">Capacity</th>
        <th scope="col">Description</th>
        <th scope="col">Price</th>
        <th scope="col">Action</th>
      </tr>
    </thead>
    
    <tbody>`;

    for (let i = 0; i < roomTab.length; i++) {
        owner = houseTab.filter((house) => house.id == roomTab[i].houseId)[0].owner;  

        
        console.log(owner, connectedUserId);
        if(connectedUserId != parseInt(owner)) {
            continue;
        }

        houseName = houseTab.filter((house) => house.id == roomTab[i].houseId).houseName;
        roomsTable = roomsTable + `<tr>
        <th scope="row">${roomTab[i].id}</th>
        <th scope="row">${owner}</th>
        <th scope="row">${houseName}</th>
        <td>${roomTab[i].roomName}</td>
        <td>${roomTab[i].capacity}</td>
        <td>${roomTab[i].roomDesc}</td>
        <td>${roomTab[i].roomPrice}</td>
        <td>
        <button type="button" class="btn btn-warning" onclick="editOwner(${roomTab[i].id})">Edit</button>
        <button type="button" class="btn btn-danger" onclick="deleteOwner(${roomTab[i].id})">Delete</button>
        </td>
      </tr>`
    } 
    roomsTable = roomsTable + ` </tbody>
    </table>`;
    document.getElementById("roomsTable").innerHTML = roomsTable;
}

function displayRooms() {
    var houseTab = JSON.parse(localStorage.getItem("houses") || "[]");
    var roomTab = JSON.parse(localStorage.getItem("rooms") || "[]");
    var roomsTable = `<table class="table table-dark">
    <thead>
      <tr>
        <th scope="col">Id</th>
        <th scope="col">Owner ID</th>
        <th scope="col">House Name</th>
        <th scope="col">Room Name</th>
        <th scope="col">Capacity</th>
        <th scope="col">Description</th>
        <th scope="col">Price</th>
        <th scope="col">Action</th>
      </tr>
    </thead>
    
    <tbody>`;

    for (let i = 0; i < roomTab.length; i++) {
        roomsTable = roomsTable + `<tr>
        <th scope="row">${roomTab[i].id}</th>
        <th scope="row">${houseTab[i].owner}</th>
        <th scope="row">${houseTab[i].houseName}</th>
        <td>${roomTab[i].roomName}</td>
        <td>${roomTab[i].capacity}</td>
        <td>${roomTab[i].roomDesc}</td>
        <td>${roomTab[i].roomPrice}</td>
        <td>
        <button type="button" class="btn btn-warning" onclick="editOwner(${roomTab[i].id})">Edit</button>
        <button type="button" class="btn btn-danger" onclick="deleteOwner(${roomTab[i].id})">Delete</button>
        </td>
      </tr>`
    } 
    roomsTable = roomsTable + ` </tbody>
    </table>`;
    document.getElementById("roomsTable").innerHTML = roomsTable;
}

function validateAddress(adresse) {
    // Remove leading and trailing whitespaces
    const trimmedAddress = adresse.trim();
  
    // Check if the address is not empty
    if (trimmedAddress === "") {
      return false;
    }
  
    // Check if the address contains only letters, numbers, spaces, and common punctuation
    const validCharacters = /^[a-zA-Z0-9\s.,#-]+$/;
    if (!validCharacters.test(trimmedAddress)) {
      return false;
    }
  
    // Check if the address is within a reasonable length
    const maxLength = 100;
    if (trimmedAddress.length > maxLength) {
      return false;
    }
  
    // Additional checks can be added based on specific requirements
  
    // If all checks pass, consider the address as valid
    return true;
  }
  
  // Example usage
  const userAddress = "123 Main St, Cityville";
  if (validateAddress(userAddress)) {
    console.log("Address is valid!");
  } else {
    console.log("Invalid address. Please check and try again.");
  }



  function bookNow() {
    var test = true;
    var firstName = document.getElementById("firstName").value;
    var lastName = document.getElementById("lastName").value;
    var email = document.getElementById("email").value;
    var arrival = document.getElementById("arrival").value;
    var departure = document.getElementById("departure").value;
    var peopleNumber = document.getElementById("peopleNumber").value;
    var tel = document.getElementById("tel").value;

   
    if (firstName.length < 3) {
        document.getElementById("firstNameError").innerHTML = "First Name doit contenir au moins 3 caractères";
        test = false;
    } else {
        document.getElementById("firstNameError").innerHTML = "";
    }

    
    if (lastName.length < 3) {
        document.getElementById("lastNameError").innerHTML = "Last Name doit contenir au moins 3 caractères";
        test = false;
    } else {
        document.getElementById("lastNameError").innerHTML = "";
    }

   
    if (!validateEmail(email)) {
        document.getElementById("emailError").innerHTML = "Email n'est pas valide";
        test = false;
    } else {
        document.getElementById("emailError").innerHTML = "";
    }

    
    if (arrival === "") {
        document.getElementById("arrivalDateError").innerHTML = "Email n'est pas valide";
        test = false;
    } else {
        document.getElementById("arrivalDateError").innerHTML = "";
    }

   
    if (departure === "") {
        document.getElementById("departureDateError").innerHTML = "Departure Date est requise";
        test = false;
    } else {
        document.getElementById("departureDateError").innerHTML = "";
    }

    
    if (isNaN(peopleNumber) || peopleNumber <= 0) {
        document.getElementById("peopleNumberError").innerHTML = "Nombre de personnes invalide";
        test = false;
    } else {
        document.getElementById("peopleNumberError").innerHTML = "";
    }

    
    if (isNaN(tel) || tel.length !== 8) {
        document.getElementById("telError").innerHTML = "Numéro de téléphone invalide";
        test = false;
    } else {
        document.getElementById("telError").innerHTML = "";
    }

    
    var arrivalDate = new Date(arrival);
    var departureDate = new Date(departure);
    var existingBookings = JSON.parse(localStorage.getItem("bookings") || "[]");

    for (var i = 0; i < existingBookings.length; i++) {
        var existingArrival = new Date(existingBookings[i].arrival);
        var existingDeparture = new Date(existingBookings[i].departure);

        if ((arrivalDate >= existingArrival && arrivalDate <= existingDeparture) ||
            (departureDate >= existingArrival && departureDate <= existingDeparture)) {
            document.getElementById("dateError").innerHTML = "Selected dates are not available";
            test = false;
            break;
        }
    }

  
    if (test) {
        var idBooking = JSON.parse(localStorage.getItem("idBooking") || "1");
        var booking = {
            id: idBooking,
            firstName: firstName,
            lastName: lastName,
            email: email,
            arrival: arrival,
            departure: departure,
            peopleNumber: peopleNumber,
            tel: tel
        };

        existingBookings.push(booking);
        localStorage.setItem("bookings", JSON.stringify(existingBookings));
        localStorage.setItem("idBooking", idBooking + 1);

      
        alert("Booking successful!");
       
    }
}

function displayProfile() {
    var connectedUser = JSON.parse(localStorage.getItem("connectedUser"));
    var users = JSON.parse(localStorage.getItem("users") || "[]");
    var profileBloc = "";

    for (let i = 0; i < users.length; i++) {
        if(users[i].id==connectedUser)

        profileBloc = profileBloc+ `<h3>Welcome ${users[i].firstName}</h3>
        <form class="row login_form" action="contact_process.php" method="post" id="contactForm"
            novalidate="novalidate">
            <div class="col-md-12 form-group">
                <input type="text" class="form-control" id="firstName" name="name"
                    placeholder="First Name" onfocus="this.placeholder = ''"
                    onblur="this.placeholder = 'First Name'"  value=" ${users[i].firstName}"    >
                    <span id="newFirstNameError"></span>
            </div>

            <div class="col-md-12 form-group">
                <input type="text" class="form-control" id="lastName" name="name"
                    placeholder="Last Name" onfocus="this.placeholder = ''"
                    onblur="this.placeholder = 'Last Name'" value=" ${users[i].lastName}"   >
                    <span id="newLastNameError"></span>
            </div>
            <div class="col-md-12 form-group">
                <input type="email" class="form-control" id="email" name="name" placeholder="Email"
                    onfocus="this.placeholder = ''" onblur="this.placeholder = 'Email'"  value=" ${users[i].email}"    >
                    <span id="newEmailError"></span>
            </div>

            <div class="col-md-12 form-group">
                <input type="password" class="form-control" id="password" name="name"
                    placeholder="Password" onfocus="this.placeholder = ''"
                    onblur="this.placeholder = 'Password'"   value=" ${users[i].password}"     >
                    <span id="newPasswordError"></span>
            </div>
           
            <div class="col-md-12 form-group">
                <input type="tel" class="form-control" id="tel" name="name" placeholder="Tel"
                    onfocus="this.placeholder = ''" onblur="this.placeholder = 'Tel'" value=" ${users[i].tel}"   >
                    <span id="newTelError"></span>
            </div>

            <div class="col-md-12 form-group">
                <button type="button" value="submit" class="primary-btn" onclick="editProfile(${users[i].id})">Edit</button>
            
            </div>
        </form>`
        
    }

    document.getElementById("profileBloc").innerHTML = profileBloc;
}



    
    