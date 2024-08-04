document.addEventListener("DOMContentLoaded", function() {
    const form = document.getElementById("signup-form");

    form.addEventListener("submit", function(event) {
        event.preventDefault();

        const name = document.getElementById("name").value;
        const email = document.getElementById("email").value;
        const password = document.getElementById("password").value;

        console.log("Name:", name);
        console.log("Email:", email);
        console.log("Password:", password);

        alert("Sign up successful!");
        const successMessage = document.createElement('p');
        successMessage.textContent = "Thank you for joining us! You'll receive a confirmation email shortly.";
        successMessage.classList.add('success-message'); 

        form.insertAdjacentElement('afterend', successMessage);

        setTimeout(() => {
            successMessage.remove();
        }, 5000); 
        form.reset();
    });

    const floatingShapes = [
        { message: "Be kind online!", className: "shape1" },
        { message: "Speak up against cyberbullying!", className: "shape2" },
        { message: "Don't be a bystander, be an upstander!", className: "shape3" },
    ];

    floatingShapes.forEach(shape => {
        const div = document.createElement('div');
        div.className = `floating-shape ${shape.className}`;
        div.textContent = shape.message;
        document.body.appendChild(div);
    });
});

document.getElementById('signup-form').addEventListener('submit', (event) => {
    event.preventDefault();

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    localStorage.setItem('user', JSON.stringify({ name, email, password }));

    window.location.href = 'login.html';
});

