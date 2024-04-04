document.getElementById('registrationForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form submission
    // Get form values
    const username = document.getElementById('username').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    // Display registration message
    const messageElement = document.getElementById('message');
    messageElement.innerHTML = `<p>Регистрация успешна!</p>
                                <p>Имя пользователя: ${username}</p>
                                <p>Email: ${email}</p>`;
    // Optional: You can send form data to a server using fetch or XMLHttpRequest here
  });

  


 