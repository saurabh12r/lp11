function getStoredUsers() {
  return JSON.parse(localStorage.getItem('users')) || [];
}

if (document.getElementById('registrationForm')) {
  document.getElementById('registrationForm').addEventListener('submit', function (e) {
    e.preventDefault();

    const user = {
      name: document.getElementById('name').value.trim(),
      email: document.getElementById('email').value.trim(),
      password: document.getElementById('password').value.trim()
    };

    setTimeout(() => {
      let users = getStoredUsers();
      users.push(user);
      localStorage.setItem('users', JSON.stringify(users));

      alert("Registration successful!");
      window.location.href = "users.html";
    }, 500);
  });
}

if (document.getElementById('userList')) {
  const users = getStoredUsers();
  const userList = document.getElementById('userList');

  if (users.length === 0) {
    userList.innerHTML = `<li class="list-group-item text-center">No registered users found.</li>`;
  } else {
    users.forEach(user => {
      userList.innerHTML += `
        <li class="list-group-item">
          <strong>${user.name}</strong> – ${user.email}
        </li>`;
    });
  }
}