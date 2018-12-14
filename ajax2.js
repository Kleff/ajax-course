document.getElementById("button1").addEventListener("click", loadUser);

function loadUser() {
  var xhr = new XMLHttpRequest();
  xhr.open("GET", "user.json", true);

  xhr.onload = function() {
    if (this.status == 200) {
      var user = JSON.parse(this.response);
      var output = "";
      output += `
      <ul>
        <li> ID: ${user.id}</li>
        <li> Name: ${user.name}</li>
        <li> email: ${user.email}</li>
      </ul>  
      `;
      document.getElementById("user").innerHTML = output;
    }
  };

  xhr.send();
}

document.getElementById("button2").addEventListener("click", loadUsers);

function loadUsers() {
  var xhr = new XMLHttpRequest();
  xhr.open("GET", "users.json", true);

  xhr.onload = function() {
    if (this.status == 200) {
      var users = JSON.parse(this.response);
      var output = "";
      for (let user in users) {
        output += `
            <ul>
                <li>ID: ${users[user].id}</li>
                <li>Name: ${users[user].name}</li>
                <li>Email: ${users[user].email}</li>
            </ul>
        `;
      }

      document.getElementById("users").innerHTML = output;
    }
  };

  xhr.send();
}
