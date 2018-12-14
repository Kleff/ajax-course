document.getElementById("button").addEventListener("click", loadUsers);

function loadUsers() {
  var xhr = new XMLHttpRequest();
  xhr.open("GET", "https://api.github.com/users", true);
  xhr.onload = function() {
    if (this.status == 200) {
      console.log(this.responseText);
      var users = JSON.parse(this.responseText);
      var output = "";
      for (let user in users) {
        output += `
        <div class="user mt-4 mb-4">
            <img src="${users[user].avatar_url}" height= 100></img>
            <ul>
                <li>Login: ${users[user].login}</li>
                <li>URL: ${users[user].url}</li>
            </ul>
        </div>
        `;
      }
      document.getElementById("users").innerHTML = output;
    }
  };

  xhr.send();
}
